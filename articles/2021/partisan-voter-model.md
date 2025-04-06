Title: Partisan voter model
Date: 2021-05-11 08:00
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, voter model, postdoctoral project, opinion dynamics
Slug: partisan-voter-model
Status: published
Image_url: uploads/2021/partisan-voter-model.png

While doing literature review for my postdoctoral project I have taken a
look at [cite id="Masuda2010PRE"]. I have even implemented related
interactive apps, but I have forgotten about them and not written a post about
the model on Physics of Risk.

In this post I'll introduce you to the, idea of which is quite simple -
voters are partisans in a sense that they will more readily accept opinions,
if they are already predisposed. And I'll share an interactive app, which
implements the model on a fully connected network.
<!--more-->

## Model

Let us assume that voters have two opinions: internal and external. Internal
opinion is defined at the start of simulation, while external opinion changes
according to the usual rules of the [voter
model]({filename}/articles/2016/voter-model.md). Only the transition
rates are heterogeneous based on whether the considered opinion matches the
internal opinion.

Algorithm behind the model can be describe as follows:

1. Pick two random agents. Let the first agent have external opinion
\\\( e\_1 \\\) and internal opinion \\\( i\_1 \\\), while we care only about
the external opinion \\\( e\_2 \\\) of the second agent.
1. If \\\( e\_1 = e\_2 \\\), nothing happens in the current iteration.
1. Otherwise the first agent will consider changing his opinion. If
\\\( i\_1 = e\_2 \\\), then this change will occur with rate
\\\( 1 + \varepsilon \\\). If \\\( i\_1 \neq e\_2 \\\), then the change will
occur with rate \\\( 1 - \varepsilon \\\).

Couple of things of note. Some of the agents may have different internal and
external opinions, \\\( e\_k \neq i\_k \\\), which means that they are
discordant. Discordant agents will strive to match their internal and external
opinions by favoring peers with opinions matching their internal opinion.
The degree of the "favoring" is controlled by rate \\\( \varepsilon \\\). If
\\\( \varepsilon = 1 \\\), then agents are perfect zealots - they will not
consider opinions not matching their internal opinion at all (zero
transition rate).

In the mean-field limit one can easily derive a set of ODEs, which
approximate dynamics of the agent-based model:

\begin{equation}
    \partial\_t b\_d = - 2 \varepsilon b\_c b\_d + \left( 1 - \varepsilon
        \right) b\_c r\_c - \left( 1 + \varepsilon \right) b\_d r\_d ,
\end{equation}

\begin{equation}
    \partial\_t b\_c = 2 \varepsilon b\_c b\_d - \left( 1 - \varepsilon
        \right) b\_c r\_c + \left( 1 + \varepsilon \right) b\_d r\_d .
\end{equation}

In the above \\\( b\_c \\) and \\\( b\_d \\\) stand for blue "concordant"
and "discordant". Likewise \\\( r\_c \\\) and \\\( r\_d \\\) stand for red
"concordant" and "discordant". To complete the set ODEs one needs to obtain
ODEs for reds. These have identical form to the ODEs above with
interchanged \\\( r \leftrightarrow b \\\).

It is easier to study the dynamics of the model by considering global
external magnetization:

\begin{equation}
    M = \left( r\_c + b\_d \right) - \left( r\_d + b\_c \right) .
\end{equation}

This observable is useful and make sense in the context of opinion dynamics,
because it indicates average public opinion. Total fraction of discordant
agents is also a useful metric:

\begin{equation}
    D = r\_d + b\_d .
\end{equation}

In general these two observables do not provide complete information about
the system, but we know that internal opinions remain fixed from the
simulation start. Hence:

\begin{equation}
    r\_c + r\_d = p\_{int} = \mathrm{const} ,
\end{equation}

Another initial state parameter \\\( p\_{ext} \\\) sets the
probability that any agent will be red "externally" at \\\( t = 0 \\\).
Unlike the probability to be red "internally" it will not correspond to any
useful constant.

Analysis of the model dynamics on the M-D plane shows that there three
stationary points - opposite consensus states (\\\( M = \pm 1 \\\) and
\\\( D = 0.5 \\\)) and self-centered polarization state (\\\( M = 0 \\\) and
\\\( D = 0 \\\)). Self-centered polarization corresponding to stable
stationary point, while consensus states are saddle points. Yet this analysis
applies only in the thermodynamic limit \\\( N \rightarrow \infty \\\). For
a finite system only the consensus states are stable.

Hence [cite id="Masuda2010PRE"] had considered the consensus times of this
model for various \\\( N \\\). The researchers have found that this model
reaches consensus slower than the classical [voter
model]({filename}/articles/2016/voter-model.md).

## Interactive app

Below you should see an app, which implements Masuda's partisan voter model
on fully connected network (every agent is able to interact with every other
agent). In the upcoming post we will share an implementation of this model
on a two-dimensional grid.

Notice that for non-trivial values of \\\( \varepsilon \\\) the
model appears to not be able to settle down close to the self-centered
polarization state. Will you be patient enough to wait for the model to
settle down into some consensus state?

[html5-interactive width="520" height="480" mode="iframe"
url="/uploads/models/voter/partisan-full/index.html"]

Note that this app colors agents (cells) according to their external
opinion, while in the equations above they are referred to by their internal
opinions.

[acknowledge id="postdoc-ak-2017-lit"]

