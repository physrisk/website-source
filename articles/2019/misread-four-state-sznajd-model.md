Title: "Misread" four state Sznajd model
Date: 2019-02-05 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, opinion dynamics, Sznajd model, postdoctoral project
Slug: misread-four-state-sznajd-model
Status: published
Image_url: uploads/2019/s4sm.png

Last time we have introduced you to the [Sznajd model]({filename}/articles/2019/sznajd-model.md).
We have also mentioned that this model was rather popular in Sociophysics around
the beginning of the XXI century. This time I wanted to introduce you to one the
modified Sznajd models, but I have misread the article [cite id="Stauffer2002ACS"].
Well, accidents happen in science from time to time...

Nevertheless the "misread" model also looks rather nice, so I have decided to
still present it. Next time I'll introduce you to the original version of this
"misread" model.<!--more-->

## The model

Here we will introduce "intermediate" opinions into the
[Sznajd model]({filename}/articles/2019/sznajd-model.md). These "intermediate"
opinions work in a similar manner as in the [AB model]({filename}/articles/2017/ab-modelis.md).
Namely, in order to transit between the extreme opinions, an agent must first
transition trough intermediate opinions: he must complete the cycle
\\\( 1 \rightarrow 2 \rightarrow 3 \rightarrow 4 \\\) (or in the opposite direction).
Here \\\( 1 \\\) and \\\( 4 \\\) are extremes, while \\\( 2 \\\) and \\\( 3 \\\)
are intermediates. This cycle is implemented by requiring changing "social validation"
rule. Note that "discord" rule is not applied in this model.

"Social validation" rule now works as follows. If two neighboring agents have the
same opinion, they will convince their neighbors to copy their opinion only if
neighbors opinion is within \\\( 1 \\\) of their opinion. E.g., suppose that the
two random neighboring agents have opinion of \\\( 2 \\\). They will convince
their neighbor to switch only if his opinion is \\\( 1 \\\) or \\\( 3 \\\).
If neighbors opinion is \\\( 4 \\\), he will retain his opinion.

The original paper [cite id="Stauffer2002ACS"] suggests to leave half of the cells
empty. Why? I have misread. And from what I read, I was convinced that this was
some kind of strange initialization rule, which could make sense in the context
of the [Sznajd model]({filename}/articles/2019/sznajd-model.md). So, in my
interpretation cells are left empty only during initialization: they are
randomly "grown" into by agents with opinions. After this initialization we have
semi-random clusters of opinion with no empty cells and later the model runs as
usual.

## HTML 5

Feel free to explore the dynamics of the "misread" four state Sznajd model. In
this app you have only "one" parameter - proportion of empty cells (which are
later filled in by random "growth") and agents with different opinions.

I invite you to examine the model dynamics yourself! Originally Stauffer reported
that in his interpretation the "third" opinion usually won [cite id="Stauffer2002ACS"],
but I am not sure if this holds true in my interpretation. Explore!

[html5-interactive width="520" height="470" mode="iframe"
src="/uploads/models/sznajd-model/s4sm.html"]

[acknowledge id="postdoc-ak-2017-lit"]
