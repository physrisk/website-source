Title: SIR model
Date: 2020-03-17 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, epidemiology
Slug: sir-model
Status: published
Image_url: uploads/2020/sir-model.png

As I am writing this, it is the first day of quarantine in Lithuania. So far the
restrictions are relatively mild: people are advised to stay home, many public
sector workers (including those employed in research institutions, such as
myself) by default work from home, while those employed in private
sector are advised to work from home. There are some who think that even these
mild measures are too much and have doubts that there was a need for at this
time quarantine (just 9 cases at the time of the decision; all of them coming
back from abroad). There also many optimistic people who believe that timely
quarantine can decrease the number of infected (and thus the number of deaths)
by almost 40%! While this is not necessarily a lie, the number itself is more
than likely to be invented (edit: quick online search reveals that this number
is given in
[this article](https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca),
which is an excellent article in many regards).
One needs to make certain assumptions about the spread of disease and the
efficiency of quarantine to get any reasonable estimate.

So this time we will talk about a classical model in
[epidemiology](/tag/epidemiology) known as Susceptible-Infected-Recovered model
or SIR model for short.<!--more-->

## The model

This model assumes that there are \\\( N \\\) people inside the system who are
able to interact with everybody else inside the system. During the interaction
those who were not infected yet (the susceptibles), \\\( S \\\) may catch the
disease from the currently infected people, \\\( I \\\). As the time goes on the
infected will recover and develop immunity.

The disease is caught at the rate:

\begin{equation}
\lambda\_{si} = \beta \cdot \frac{S \cdot I}{N} .
\end{equation}

Note that this rate is identical to the imitation rate present in variety of
[voter models](/tag/voter-model/) (some of which we have discussed in our
ongoing series on [opinion dynamics](/tag/opinion-dynamics/)): the more people
are infected the higher the rate at which new people get infected (unless the
number of susceptibles becomes small).

The recovery is assumed to happen at a constant rate (similarly to radioactive
decay in physics):

\begin{equation}
\lambda\_{ir} = \gamma \cdot I .
\end{equation}

For a reasonably large \\\( N \\\) we can approximate this model by a set of
ordinary differential equations:

\begin{equation}
\frac{\mathrm{d} S}{\mathrm{d}t} = - \beta \cdot \frac{S \cdot I}{N} ,  
\end{equation}

\begin{equation}
\frac{\mathrm{d} I}{\mathrm{d}t} = \beta \cdot \frac{S \cdot I}{N} - \gamma \cdot I .
\end{equation}

Note that as \\\( N \\\) is fixed, we can get the number of recovered people by:

\begin{equation}
R = N - S - I .
\end{equation}

## Will there be an epidemic outbreak?

To have an outbreak we need to have positive
\\\( \frac{\mathrm{d}I}{\mathrm{d}t} \\\). Assuming that \\\( I > 0 \\\) and
\\\( \gamma > 0 \\\) we can rearrange:

\begin{equation}
\frac{\mathrm{d} I}{\mathrm{d}t} = \gamma \cdot I \left[ R\_0 \cdot \frac{S}{N} - 1 \right] .
\end{equation}

In the above \\\( R\_0 \\\) is the basic reproduction number. If the brackets in
the expression above are positive at \\\( t=0 \\\), or alternatively if

\begin{equation}
R\_0 > \frac{N}{S(0)} \approx 1 ,
\end{equation}

then the epidemic will happen.

## The effect of quarantine

Quarantine effectively multiplies \\\( R\_0 \\\) by some number, which will be
less than one as social contacts are being limited instead of being encouraged,
thus \\\( R\_0 \\\) will decrease. The actual impact of quarantine depends on
that number.

Another important factor - time when the quarantine will be applied. Spoiler:
the sooner the better, but the quarantine can have potential side effects. Both
economic and medical as death rates due to other conditions might increase (due
to lack of proper treatment or simply because of failure to diagnose them in
time).

## Interactive app

Feel free to explore basic SIR model using the interactive application bellow.
This app implements discrete (agent-based) SIR model. It assumes that there are
\\\( 1000 \\\) agents in the system of which \\\( 1 \\\) is infected at the
start of the simulation.

Note that the app will draw two curves: one (red) of the current simulation,
and the other (gray) of the previous simulation. You can use this opportunity to
explore the effect of quarantine (isolation) or to compare the effects when
quarantine is applied early and late.

[html5-interactive mode="iframe"
src="/uploads/models/epidemic-models/sir-model/index.html" width="520" height="500"]

