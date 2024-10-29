Title: Repulsion in controversial debate
Date: 2020-02-25 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, voter model, opinion dynamics, postdoctoral project
Slug: repulsion-in-controversial-debate
Status: published
Image_url: uploads/2020/repulsion-in-controversial-debate.png

Controversial debates are often marked by an emergence of polarized state. In
this post we will consider yet another variation of the
[voter model](/tag/voter-model/) proposed by a group of German researchers
[cite id="Krause2019"], which shows that significant repulsion leads to
the polarized fifty-fifty state.
<!--more-->

## The model

Unlike in the
[original voter model]({filename}/articles/2016/voter-model.md) in this
model the agents have three opinions: "yes" (+1), "undecided" (0) and
"no" (-1). One of the two interacting agents is the speaker, while the other
is the listener. The speaker must have a strong opinion to express it (the
agent can't be "undecided"). As the listener hears the argument four different
changes may happen:

* **If the listener is undecided**, \\\( S\_l = 0 \\\) is true. Then the
listener might become convinced (1) with probability \\\( p\_{con} \\\) or
repelled (2) with probability \\\( p\_{con} \cdot p\_{repel} \\\). Note that
these events are mutually exclusive, so we have to have
\\\( p\_{con} ( 1+p\_{repel} ) \leq 1 \\\).
* **If the listener initially agrees with the speaker**, \\\( S\_l = S\_s \\\)
is true. Then the listener can start doubting (3) with probability
\\\( p\_{con} \cdot p\_{repel} \cdot p\_{doubt} \\\).
* **If the listener initially disagrees with the speaker**,
\\\( S\_l = -S\_s \\\) is true. Then the listener can start doubting (4)
with probability \\\( p\_{con} \cdot p\_{doubt} \\\).

The following changes are made to the listeners opinions after interaction, if
the described events occur:

\begin{equation}
S\_l = 0 \quad \Rightarrow \quad S\_l = S\_s ,
\end{equation}

\begin{equation}
S\_l = 0 \quad \Rightarrow \quad S\_l = -S\_s ,
\end{equation}

\begin{equation}
S\_l = S\_s \quad \Rightarrow \quad S\_l = 0 ,
\end{equation}

\begin{equation}
S\_l = -S\_s \quad \Rightarrow \quad S\_l = 0 .
\end{equation}

Otherwise the listener's opinion does not change.

In this model we assume that one time tick corresponds to \\\( N \\\)
conversations. \\\( N \\\) times we randomly choose the speaker and the
listener, while checking if the describe changes happen. Note that \\\( N \\\)
is also the number of agents in simulation and thus on average one agent should
have a change both to speak and to listen.

Note that only \\\( p\_{doubt} \\\) and \\\( p\_{repel} \\\) parameters have
influence on the final state. \\\( p\_{con} \\\) just adjusts the timescale of
the dynamics.

## Interactive app

Use the interactive app below to explore the model dynamics. You can change
all of the aforementioned parameters of this model except for the number of
agents. For simplicity sake we have simply fixed number of agents at
\\\( N = 100 \\\).
The interactive plots fractions of agents who hold positive
(blue), negative (red) and neutral (gray) opinions.

[html5-interactive mode="iframe" width="520" height="270"
src="/uploads/models/opinion-dynamics/repulsion-controversial-debate-model/index.html"]

[acknowledge id="postdoc-ak-2017-lit"]
