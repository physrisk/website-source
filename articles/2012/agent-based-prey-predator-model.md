Title: Agent-based prey-predator model
Date: 2012-10-15 07:37
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, Lotka-Volterra, biology
Slug: agent-based-prey-predator-model
Status: published

The simplest ecological system can be
constructed from the two interacting species, e.g., prey and predator.
This kind of system is very interesting in the terms of Physics of Risk
primarily because it is nonlinear \[cite id="Goel1971RevModPhys"\], and
due to being real life example of competition (conflict). Also there are
few known simple models for the prey-predator interaction. Among them
there are both macroscopic, Lotka-Volterra equations, and microscopic,
agent-based, models. In this text we continue the [previous
discussion]({filename}/articles/2012/lotka-volterra-equations.md) by
considering the agent-based model.<!--more-->

Interestingly due to the various applications of the Lotka-Volterra
equations \[cite id="Ausloos2009Chess, Goodwin1967Cambridge,
Olivera2011DynSocEcoSys, Solomon2000Hermes, Vitanov2012ACS"\], this
agent-based model provides insights not only to the ecosystem, but also
into the other socio-economic systems.

Formulation of the agent-based model
------------------------------------

The main principles of the agent-based model are pretty elementary and
straightforward. Also they are self-evidently identically to the actual
behavior in ecosystem. Though the mechanics are slightly
over-simplified.

First we start with the two types of agents - prey (white square in the
applet below) and predator (black square). The agents move one the
square lattice, which is under the periodic boundary condition. This
means that the agent exiting trough the bottom wall of the lattice
reenters lattice at the top. Exiting through the top causes reentrance
through the bottom. Same goes for the left-right wall exits and
reentrances.

Now at each time step let us pick random cell on the lattice. If the
cell is empty then nothing happens, while if it is occupied then another
cell, in the neighborhood, is random selected. Now taking into account
the two randomly picked cells, one has to apply the following rules:

-   If one cell is occupied by predator and another by prey, then the
    prey is eaten. After doing so the predator gives a birth to another
    predator with a certain probability. The new predator is placed in
    the former prey's cell.
-   If both cells are occupied by the same type of agent, then nothing
    happens.
-   If we have a prey cell and empty cell, then prey gives a birth to
    another prey with a certain probability.
-   If we have a predator cell and empty cell, then predator dies with a
    certain probability.
-   If after the application of the rules above still nothing has
    changed and movement of the agent is possible, then the agent moves
    from one cell to another unoccupied cell.

Below you should an interactive HTML5 applet, which can be used to
study the dynamics of the agent-based model formulated in this text.
Note that unlike in the previous case of deterministic model, this model
possesses certain stochastic features. Namely you can observe certain
fluctuations, which could "kill" the ecosystem or extend its "life".
This happens both due to the nature of random movements of our agents
and due to the probabilistic formulation of the model.

HTML5 applet
------------

To initialize modeling press button "Continue". If modeling was
paused, then the program will resume instead. Modeling can be stopped
by pressing "Stop" button. To reset the modeling press "New" button.

[html5-interactive
url="/uploads/models/lotka-volterra-abm/index.html"
width="510" height="310" mode="iframe"]
