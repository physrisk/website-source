Title: Talent vs Luck model
Date: 2019-09-10 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, wealth, talent vs luck
Slug: talent-vs-luck-model
Status: published
Image_url: uploads/2019/tvl-model.png

During summer we have promised to talk about impact of talent and luck on the
individual success. This is the first post in the series, which will introduce
you to a rather abstract model, which links all these three concepts.
Admittedly, the model is really general and thus detached from actual economic
or social realities. Therefore this model is not suitable for any policy making,
but is perfect for a general discussion on the topic.

Talent vs Luck model was introduced by a group of Italian researchers in
[cite id="Pluchino2018ACS"].
<!--more-->

## The model

In Talent vs Luck model we observe interactions between \\\( N \\\) agents and
\\\( N\_e \\\) events.

Agents are placed in random locations in a discrete world, which has rectangular
shape. Agents have talent \\\( T\_i \\\), which is assumed to describe their
ability to take advantage of a good opportunity. We assume that \\\( T\_i \\\)
is a random variable following Beta distribution with parameters \\\( \alpha\_t \\\)
and \\\( \beta\_t \\\). At the start of the simulation agents are endowed with
capital, which, for the sake of simplicity, we assume to be equal to
\\\( 1 \\\).

Events are also placed in the discrete world. Any event can be lucky with
probability \\\( p\_l \\\) and is unlucky otherwise. Unlike agents, the events
can move: as in the original paper, we assume that events move randomly two
squares each \\\( 6 \\\) months. As in the original paper, we move all events at
once. To keep the events within square world we enforce periodic boundary
conditions.

If after the movement phase an agent finds himself in location with unlucky
event, then his capital is halved. While if an agent finds himself in location
with lucky event, then with probability \\\( T\_i \\\) his capital is doubled.

Multiple events and multiple agents can share the same location. Then all of the
events happen to all of the agents within that location.

Below you can see that in this model relative luck of an agent (lucky
events minus unlucky events) is better predictor of his success than his talent.
While talent does have impact, it is relatively hard to see.

![talent vs luck model]({static}/uploads/2019/tvl-model.png "Results of a random simulation,
which uses the default parameters.")

## A bit of criticism

While this model is very well received by scientific community and media, and
me having pretty good initial impression, I now have quite a few issues with it.

I dislike that time and space are discrete in this model. Real life is not
quantized (at least on these scales). It is also quite unclear that does the
space actually represent in this model. Why not abstract it away?

It is pretty strange that events move and not the agents. Allowing agents to
move would allow more generalizations without effectively changing anything. The
results should stay the same.

The model is too abstract, even for my taste. While authors seem to formulate it
as model for wealth inequality, they provide an example related to scientific
success.

Notably, some of the parameters were swept under the rug at least to some
extent. Size of the space was not addressed at all. Capital multiplication
factor for unknown reasons were set to 2. As well as event movement speed was
set to value 2 without detailed discussion.

Still I do feel that this quite a decent model, worthy to stand alongside
[kinetic exchange models](/tag/kinetic-models/), which also have addressed issue
of wealth dynamics. Also its results are rather robust in regards to changing
the underlying assumptions.

## HTML 5 app

Feel free to explore the model using this app. If you want to access original
simulation done by the researchers, you can find their original NetLogo code
[here](https://www.comses.net/codebases/199a298b-fe95-473e-ad39-0fd69b5ff61c/releases/1.0.0/).

This app shows you four plots. In the top left, you can see spatial state of the
model - the agents are shown as small black squares, the events are shown as
larger green (lucky) or red (unlucky) squares. Top right figure shows you a
sample trajectory of randomly selected agent. In the bottom row we show you
two scatter plots talent vs capital and relative luck vs capital. Note that the
left figure usually looks like uniform blob (talent does not have much impact
on the capital), while right figure show a clear upwards trend (luck
significantly impacts the capital).

[html5-interactive width="520" height="480" mode="iframe"
src="/uploads/models/stats-puzzles/talent-luck/index.html"]
