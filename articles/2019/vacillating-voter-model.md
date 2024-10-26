Title: Vacillating voter model
Date: 2019-03-19 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, voter model, postdoctoral project
Slug: vacillating-voter-model
Status: published
Image_url: uploads/2019/vvoter-model.png

Vacillating voter model is a generalization of the
[voter model]({filename}/articles/2016/voter-model.md), which shows that
contrarian behavior can emerge from imitative interactions
[cite id="Lambiotte2007JStatMech"]. This result is kind of interesting and
counter-intuitive as usually, in other models of [opinion dynamics](/tag/opinion-dynamics/),
contrarian behavior is being explicitly built in.
<!--more-->

## The model

The model is strongly reminiscent of the [voter model]({filename}/articles/2016/voter-model.md),
yet with a small caveat. If a randomly selected voter has the same opinion as
its (first) randomly picked neighbor, he picks another (second) neighbor and
adopts its opinion.

This simple change has a profound effect. In case of the original
[voter model]({filename}/articles/2016/voter-model.md) on a square lattice
the flip probability is \\\( \frac{k}{4} \\\) (where \\\( k \\\) is a number of
disagreeing neighbors). In this model on a square lattice flip probability is
larger: \\\( 0 \\\) (for \\\( k=0 \\\)), \\\( \frac{1}{2} \\\) (for \\\( k=1 \\\)),
\\\( \frac{5}{6} \\\) (for \\\( k=2 \\\)) and \\\( 1 \\\) (for \\\( k \geq 3 \\\)).
These vacillating agents more easily succumb to the peer pressure, even if only
one neighbor disagrees.

## HTML 5 app

This app does not have any parameters besides the probability used during model
initialization. Yet feel free to explore consensus times of this simple model.

[html5-interactive width="520" height="445" mode="iframe"
src="/uploads/models/voter/vvoter.html"]

[acknowledge id="postdoc-ak-2017-lit"]
