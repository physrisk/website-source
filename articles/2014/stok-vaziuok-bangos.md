Title: Stop-and-go waves
Date: 2014-04-28 07:54
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, traffic, video
Slug: stop-and-go-waves
Status: published

Probably everyone has at least once have
been stuck in the traffic jam. But most probably not everyone had
thought about the possible relationship between the complexity science
and traffic. For quite a long time it was thought that traffic jams can
be caused by noticeable events on the road - car crashes, road works and
etc. But in the recent decades number of cars in the streets grew
rapidly and it was noticed that sometimes traffic jams form without any
obvious reasons. In this text we present a simple traffic model by Nagel
and Schreckenberg [cite id="Nagel1992JDP"], which predicts traffic jams occurring due to small
errors made by drivers themselves.<!--more-->

Formulation of the Nagel - Schreckenberg model
----------------------------------------------

Let us assume that certain numbers of agents move on closed path. To
simplify let us assume that this path is rectangle. Let us divide the
path into a number of equally-sized cells (in our applet 124). Each of
these cells may be occupied by a single agent.

Initially occupation of the cells may be generated randomly. Namely the
cell can be occupied with a probability \\\(  p\_o \\\) (thus average
number of agents in our applet is \\\(  124 p\_o \\\)). Initially all
agents may have a certain speed, which may be either random or fixed (we
set it to be 0 cell per second (c/s)).

During the next time step the following algorithmic steps are executed:

-   **Acceleration.** All agents increase their speed by a single step
    (in our applet a speed step is 5 c/s). No agent may have speed
    larger than \\\(  v\_{max} \\\).
-   **Slowing due to other agents.** If agent sees that moving at
    current speed would cause bumping into other agent, it should
    decrease the speed to the largest safe one.
-   **Random error.** With probability \\\(  p\_e \\\) each agent, whose
    speed is positive, may make a driving error. This error causes agent
    to slow down by one step (-5 c/s).
-   **Movement.** All agents move at their own speed.

These steps are repeated for every time step beyond the initial setup
step.

This simple model predicts that traffic jams may happen without any
obvious reason - only due to driver errors being amplified by other
drivers. This amplification cause stop-and-go waves - namely, cars slow
down due to other drivers slowing down and then can move again once the
path becomes clear, after some time they encounter another slow down and
so on. Note that "cars" (agents) move clockwise, while traffic jam moves
in the opposite direction. In our applet below we have picked a minimal
values for the model parameters with which traffic jams should form.

Applet
------

[html5-interactive src="/uploads/models/stop-and-go/index.html"
width="520" height="340" mode="iframe"]

We invite our readers to test different parameter values. Note that with
\\\(  p\_o &gt; \frac{5}{v\_{max}} \\\) traffic is intense and traffic
jams may form even if the probability of error is relatively small.
While with larger \\\(  p\_e \\\) traffic jams may form with less intense
traffic (smaller \\\(  p\_o \\\)). Don't forget to test different values
of \\\(  v\_{max} \\\).

Experiment
----------

Experiment similar to the model above was performed in Japan. Scientists
of University of Nagoya asked a number of drivers to drive in circular
motion. Note that for a brief initial moments drivers move in orderly
(jam-less) manner, but afterwards traffic jam begins to form without any
apparent reason. As in the model traffic jams moves in opposite
direction to the traffic.

[youtube v="Suugn-p5C1M"]
