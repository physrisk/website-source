class IshiiTrustModel {
    constructor(alpha=[1,0],nAgents=100,epsilon=0.25,trust=null) {
        this.rng=new Random();
        this.time=0;
        this.dt=1/nAgents;
        this.alpha=alpha;
        this.nAgents=nAgents;
        this.epsilon=epsilon;
        this.opinionBounds=[-1e3,1e3];
        this.initializeOpinions();
        this.initializeTrust(trust);
    }
    step() {
        let i;
        for(i=0;i<this.nAgents;i+=1) {
            this.singleStep();
        }
    }
    singleStep() {
        let agent1Id, diff, totalDiff, i;
        // pick random agent
        agent1Id=Math.floor(this.rng.uniform(0,this.nAgents));
        // average similar agents based on trust/suspicion
        totalDiff=0;
        for(i=0;i<this.nAgents;i+=1) {
            if(i!=agent1Id) {
                diff=this.opinions[i]-this.opinions[agent1Id];
                totalDiff+=this.alpha[0]*this.trust[agent1Id][i]*this.opinions[i];
                totalDiff+=this.alpha[1]*this.trust[agent1Id][i]*this.indifference(diff)*diff;
            }
        }
        totalDiff*=this.dt;
        // update opinion
        this.opinions[agent1Id]+=totalDiff;
        // limit opinions
        this.opinions[agent1Id]=Math.max(this.opinions[agent1Id],this.opinionBounds[0]);
        this.opinions[agent1Id]=Math.min(this.opinions[agent1Id],this.opinionBounds[1]);
        // update time
        this.time+=this.dt;
    }
    initializeOpinions() {
        let i=0;
        this.opinions=new Array(this.nAgents);
        for(i=0;i<this.nAgents;i+=1) {
            this.opinions[i]=this.rng.uniform(-1,1);
        }
    }
    initializeTrust(trust=null) {
        let i,j,t;
        if(trust!==null) {
            this.trust=trust.slice(0);
            return ;
        }
        this.trust=[];
        for(i=0;i<this.nAgents;i+=1) {
            t=[];
            for(j=0;j<this.nAgents;j+=1) {
                if(i==j) {
                    t.push(0);
                } else if(i<j) {
                    t.push(this.rng.normal(0,1));
                } else {// i>j
                    t.push(this.trust[j][i]);
                }
            }
            this.trust.push(t);
        }
    }
    indifference(delta) {
        let beta=30;
        return 1.0/(1.0+Math.exp(beta*(Math.abs(delta)-this.epsilon)));
    }
}
