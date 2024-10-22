Title: Noisy voter model for the parliamentary presence
Date: 2021-02-02 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, anomalous diffusion, opinion dynamics, voter model, politics, postdoctoral project
Slug: noisy-voter-model-for-the-parliamentary-presence
Status: published
Image_url: uploads/2021/noisy-voter-model-for-the-parliamentary-presence.png

In a [previous post]({filename}/articles/2021/anomalous-diffusion-of-the-parliamentary-presence-data.md) we have defined the parliamentary presence and shown that the data from 
Brazilian and Lithuanian parliaments exhibits anomalous diffusion. Actually
we have analyzed Lithuanian data [cite id="Kononovicius2020JStat"], while
Brazilian data was considered by Vieira and others [cite id="Vieira2019PRE"].
This time let me constructed a [voter model](/tag/voter-model/) to replicate
the observations.<!--more-->

## The model

Let us assume that binary states in the voter model represent willingness to
attend. Let state \\\( 1 \\\) indicate willingness to attend, while state
\\\( 0 \\\) indicate willingness to skip. Let the agents rethink their
willingness after each daily session. Let the transitions between the states
be described by a typical [voter model](/tag/voter-model/) transition
probabilities:

\begin{equation}
p^{(i)}\_{1 \rightarrow 0} = h \left[ \varepsilon\_0 + \frac{X\_0}{N} \right] ,
\end{equation}

\begin{equation}
p^{(i)}\_{0 \rightarrow 1} = h \left[ \varepsilon\_1 + \frac{X\_1}{N} \right] =
    h \left[ \varepsilon\_1 + \left( 1 - \frac{X\_0}{N} \right) \right] .
\end{equation}

In the above \\\( h \\\) sets the timescale on which the changes of states
occur, while \\\( \varepsilon\_i \\\) control independence of changes.

Via numerical analysis of the model with
\\\( \varepsilon\_0 = \varepsilon\_1 = \varepsilon \\\), we have found that it
exhibits scaling behavior in the standard deviation series, \\\( \sigma\_t \\\).
The scaling law being given by:

\begin{equation}
\sigma\_t = \frac{\theta\_0 t}{\sqrt{\theta\_1 + S t}} .
\end{equation}

In the above \\\( \theta\_i \\\) are independent of the model parameters, while
\\\( S = h ( 1 + 2 \varepsilon ) \\\). As this law was discovered numerically
we can provide only estimates of \\\( \theta\_i \\\):
\\\( \theta\_0 \approx 0.66 \\\) and \\\( \theta\_1 \approx 1.4 \\\).

Scaling law implies that there should be just two regimes - ballistic regime
for small \\\( S \\\) and normal diffusion for larger \\\( S \\\). Larger
\\\( S \\\) may imply one of two things: changes are happening faster and
changes are more independent.

Scaling law is consistent with the empirical observations made in
[cite id="Vieira2019PRE"], but is not fully consistent with what we have
observed for Lithuanian parliament. We could claim that Lithuanian parliament
is in the cross-over region and due to lack of the data our observation of the
cross-over is imperfect, but there is another possible explanation, which we
will consider in the next post.

## The interactive app

Feel free to explore the model in the interactive app below. The upper plot
shows how the attendance of the individual agents, \\\( N = 100 \\\), evolves
within the window of 250 days, \\\( N\_s = 250 \\\). Agent index varies on the
y-axis, while time is on the x-axis. The lower left plot shows the cumulative
presence series of three agents. The lower right plot shows the scaling law
and standard deviation series for the data within the window of 250 days. Try
varying model parameters to see how the law and the dynamics of the model
change.

[html5-interactive mode="iframe" height="500" width="520"
src="/uploads/models/voter/parliamentary-presence/index.html"]

[acknowledge id="postdoc-ak-2017-lit"]
