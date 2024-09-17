Title: Stauffer's four state Sznajd model
Date: 2019-02-19 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, agent-based models, opinion dynamics, Sznajd model, postdoctoral project
Slug: stauffers-four-state-sznajd-model
Status: published
Image_url: uploads/2019/s4sm2.png

[Last time]({filename}/articles/2019/misread-four-state-sznajd-model.md) I have
admitted that I have misread one well-known generalization of the
[Sznajd model]({filename}/articles/2019/sznajd-united-we-stand-divided-we-fall-model.md). This time I would like
to present you the original interpretation proposed by Stauffer in
[cite id="Stauffer2002ACS"]. Though I would like to note that I was still
unable to reproduce Stauffer's original result.<!--more-->

## The model

As we have already written [last time]({filename}/articles/2019/misread-four-state-sznajd-model.md)
this generalization of the [Sznajd model]({filename}/articles/2019/sznajd-united-we-stand-divided-we-fall-model.md)
introduces two intermediate opinions into the model. Namely, in order to switch
opinion between the extremes agent must first go through the intermediate opinions. 
In this sense this model is similar to the [AB model]({filename}/articles/2017/ab-model.md).
Yet these two models produce different results: in AB model extreme opinions
"win", while here one of the intermediate opinions should prevail [cite id="Stauffer2002ACS"].

What I have misread/misinterpreted [last time]({filename}/articles/2019/misread-four-state-sznajd-model.md)
was that in fact empty cells are usefull as this generalization also introduces
movement of the agents. This adds additional "diffusion" step into the original
algorithm of the [Sznajd model]({filename}/articles/2019/sznajd-united-we-stand-divided-we-fall-model.md).

So we have implemented the following algorithm. First select a random agent and
move it to a random neighboring empty cell (if it is possible). Next select a
new random agent and a random neighboring cell. If that cell contains an
agent of the same opinion, then these two agents, as usual, convince their
neighbors (if opinions are not too different).

This numerical algorithm is likely different from the one used in [cite id="Stauffer2002ACS"].
Many technical details, which could have noteable impact, remain unclear. Thus
it is likely why we fail to replicate the reported result ("third" place wining).

## HTML 5

Feel free to explore the dynamics of Stauffer's four state Sznajd model. In this
app you have only "one" parameter - proportion of empty cells and agents with
different opinions. Try maybe you will capture the moment when the third wins?

[html5-interactive width="520" height="470" mode="iframe"
src="/uploads/models/sznajd-model/s4sm2.html"]

[acknowledge id="postdoc-ak-2017-lit"]
