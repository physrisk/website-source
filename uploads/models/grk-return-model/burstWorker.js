// import shared scripts
importScripts("../js-lib/commonFunctions.js");
// import local scripts
importScripts("./returnModel.js");

// couple of global parameters
var model=new returnModel();
var realizationParams;
var busy=false;

// return array of x and lg(y) values
function generateSeries() {
    return model.getRealization(realizationParams);
}
function getBurstStats(series,thresh) {
    var i, isBurst, curDuration, curSize, prevBurstDuration;
    var l=series.length;
    var startsWithBurst=series[0]>thresh;
    var burstDuration=[];
    var burstSize=[];
    var interBurstDuration=[];
    var waitingTime=[];
    // skip first burst or inter-burst period
    i=1;
    try {
        if(startsWithBurst) {
            while(series[i]>=thresh) {
                i+=1;
            }
        } else {
            while(series[i]<thresh) {
                i+=1;
            }
        }
    } catch(err) {
        return false;
    }
    isBurst=!startsWithBurst;
    // start analysis
    curDuration=0;
    curSize=0;
    prevBurstDuration=-1;
    for(;i<l;i+=1) {
        if(isBurst) {// is burst?
            if(series[i]>=thresh) {// still continues?
                curDuration+=1;
                curSize+=(series[i]-thresh);
            } else {// ends?
                prevBurstDuration=curDuration;
                burstDuration.push(curDuration*realizationParams.dt);
                burstSize.push([commonFunctions.LogBase10(curDuration*realizationParams.dt),
                                commonFunctions.LogBase10(curSize*realizationParams.dt)]);
                curDuration=1;
                curSize=0;
                isBurst=false;
            }
        } else {// is inter-burst?
            if(series[i]<thresh) {// still continues?
                curDuration+=1;
            } else {// ends?
                if(prevBurstDuration>0) {// waiting time
                    waitingTime.push((curDuration+prevBurstDuration)*realizationParams.dt);
                }
                interBurstDuration.push(curDuration*realizationParams.dt);
                curDuration=1;
                curSize=(series[i]-thresh);
                isBurst=true;
            }
        }
    }
    return {
        burstDuration: burstDuration,
        burstSize: burstSize,
        waitingTime: waitingTime,
        interBurstDuration: interBurstDuration,
    };
}

// listen, execute and reply
self.addEventListener("message", function(e) {
    var stats, series;
    var data=e.data;
    var rez={msg:data.msg};
    if(busy) {
        rez.errorCode=503;
        rez.errorMsg="Busy executing some code.";
        self.postMessage(rez);
    }
    busy=true;
    switch(data.msg) {
        case "setParams":
            model.setParams(data.sdeParams,data.noiseParams);
            realizationParams=data.realizationParams;
            break;
        case "getRealization":
            try {
                series=generateSeries();
                stats=getBurstStats(series,realizationParams.h);
                series=null;
                rez.burstDuration=stats.burstDuration.slice(0);
                rez.burstSize=stats.burstSize.slice(0);
                rez.waitingTime=stats.waitingTime.slice(0);
                rez.interBurstDuration=stats.interBurstDuration.slice(0);
            } catch(error) {
                rez.errorCode=500;
                rez.errorMsg=error;
            }
            break;
        default:
            rez.errorCode=404;
            rez.errorMsg="Unknown message "+data.msg;
            break;
    }
    busy=false;
    self.postMessage(rez);
},false);
