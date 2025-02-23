Title: Replacement model of dating apps
Date: 2023-01-10 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, topic: dating apps, statistical physics
Slug: replacement-model-dating-apps
Status: published
Image_url: uploads/2023/replacement-model-dating-apps.png

In this post I [continue my
exploration](/tag/topic-dating-apps/) of the [cite id="Olmeda2022Dating"].
This time let us consider what happens if the users who were matched are
replaced by a random sample from the population. Will only the least and
most attractive ones remain unmatched?
<!--more-->

## Replacement model

The replacement model is a logical extension of the [dropout
model]({filename}/articles/2022/dropout-model-dating-apps.md). In this
variation of the [original
model]({filename}/articles/2022/statistical-physics-dating-apps.md) the
agents who were matched are replaced by other new agents. The new agents are
sampled from the same distribution from which initial population of agents
was sampled.

As we have seen in the [earlier
post]({filename}/articles/2022/dynamic-model-dating-apps.md) the most
attractive agents weren't the most matched agents. In fact, average agents
were matched the most. So, based on this observation we would expect that
least and most attractive agents would search for the match longer than the
average users. Yet numerical simulation would indicate that this expectation
is at least partially wrong.

![results of replacement
model]({static}/uploads/2023/replacement-model-dating-apps.png "(lower figure)
Comparison sample population (red curve), matched user population (blue
curve) and the active user population (grey curve) match.")

As we can see in the figure above three groups have similar distributions,
although the active user attractiveness distribution seems to fluctuate a
lot. One of the reasons is that there are just a relatively few active users
(those using the dating app). Though I would speculate that there is another
reason for the observed fluctuations - left-over extreme users.

## Interactive app

This app is essentially identical to the one from the [previous
posts]({filename}/articles/2022/dropout-model-dating-apps.md). The only
addition is the replacement mechanism. Feel free to explore!

[html5-interactive width="520" height="470" mode="iframe"
url="/uploads/models/stats/models/dating-apps/replace.html"]
