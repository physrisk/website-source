Title: Sandpile model
Date: 2015-09-29 07:19
Author: Aleksejus Kononovicius
Tags: Dynamical chaos, Interactive models, Cellular automata, 1/f noise, self-organized criticality
Slug: sandpile-model
Status: published

In 1987 Per Bak, Chao
Tang and Kurt Wiesenfeld proposed a simple cellular automaton, sandpile
model, which exhibits critical behavior \[cite
id="Bak1987,Jensen1989PhysRevB,Kertesz1990JPhysA"\]. In this critical
behavior state small perturbations acting upon the system may cause huge
consequences or go completely unnoticed. The impact of these
consequences seems to follow power-law distribution.

In this text we will briefly discuss how the model works and present
interactive applet. We would like to draw your attention to a previous
article in which described [earthquake
model](/zemes-drebejimu-modelis).<!--more-->

How model works
---------------

Here we have a grid of certain size. Each site on the grid, cell,
represents small sandpile. During each time step we randomly place a
grain of sand on the grid, thus increasing steepness of certain random
sanpile. If sandpile reaches critical steepness, it shares some of its
sand with neighboring sandpiles. Those may also reach critical steepness
and further share the sand with its neighbors. The chain reaction goes
on until no critical sandpiles remain. All sandpiles, which were in
critical state at given time, are assumed to belong to a single
landslide.

Interestingly landslide sizes, \\\(  S \\\), have stationary distribution
which is power-law. We invite you to confirm this using the applet
below.

HTML5 applet
------------

[html5-interactive
src="/uploads/models/sandpile-model/index.html"
width="500" height="470" mode="iframe"]
