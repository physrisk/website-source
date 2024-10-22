Title: Anomalous diffusion in non-linear transformation of voter model
Date: 2021-03-02 08:00
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, anomalous diffusion, voter model, Kirman model, R. Kazakevicius
Slug: anomalous-diffusion-in-nonlinear-transformation-of-voter-model
Status: published
Image_url: uploads/2021/anomalous-diffusion-in-nonlinear-transformation-of-voter-model.png

Lets continue the topic of [anomalous diffusion](/tag/anomalous-diffusion/) by
considering my recent manuscript together with R. Kazakevicius
[cite id="Kazakevicius2021AnoVM"]. In the said manuscript we have considered two
different non-linear transformations of the noisy
[voter model](/tag/voter-model/). Here we present you with non-linear
transformation of the observable.<!--more-->

## Model

Here we consider the standard noisy voter model (which is equivalent to
[Kirman's ant colony model]({filename}/articles/2010/kirman-ants.md) we have
considered previously on Physics of Risk) and generalize observable transformation
we have used earlier in the
[financial market scenario]({filename}/articles/2011/agent-based-herding-model-financial-markets.md)
(also see [cite id="Kononovicius2012PhysA"]):

\begin{equation}
    y = \left( \frac{x}{1-x} \right)^{\frac{1}{\alpha}} .
\end{equation}

By relying on similarity with the Bessel process we were able to derive
expressions for the temporal evolution of the moments of \\\( y \\\). The most
important thing these expressions contain is the power-law dependence of the
moments on time:

\begin{equation}
    \langle y^k \rangle \sim t^{\frac{k}{\alpha}} .
\end{equation}

Thus the mean will scale as power-law with exponent \\\( \frac{1}{\alpha} \\\),
while the variance will scale with exponent \\\( \frac{2}{\alpha} \\\). Note
that these theoretical results work well only for very small and very large
\\\( y \\\) (if \\\( x \\\) is either close to \\\( 0 \\\) or to \\\( 1 \\\)).

## Downscaling the model

For some of the parameter sets we need to use extremely many agents. Otherwise
we do not observe anomalous diffusion (due to discretization effects).
Unfortunately, the time complexity of the model is a square of number of agents,
so increasing number of agents quickly becomes unfeasible. Therefore we have
implemented automatic downscaling of the model.

Namely, as soon as number of agents in the counted state, \\\( X \\\), reaches
critical amount, both the total number of agents, \\\( N \\\), and \\\( X \\\)
are divided by 10. This procedure is performed as long as \\\( N > 100 \\\).
This number is not special, we just find it to be sufficient for the simulation
to be presented on the web (our simulations in [cite id="Kazakevicius2021AnoVM"]
stop as soon as \\\( N \leq 10^3 \\\)).

We can use such downscaling, because our \\\( \varepsilon \\\) parameters will
always be larger than \\\( 2 \\\) (otherwise variance is not defined) and the
model in the steady state will spend most of the time far from the edges. Also
we care more about small initial times and not the times when the model has
switched to steady state behavior (this happens close to \\\( t = 1 \\\)).

## Interactive app

In the interactive app below you can see two plots: left one is for the
temporal evolution of mean, right one is for the temporal evolution of
variance (not standard deviation we have used in the previous posts on
[anomalous diffusion](/tag/anomalous-diffusion/)). In those figures you'll see
two main curves - red dots show the simulation results (calculated over
\\\( 100 \\\) sample series), while dark gray lines show the theoretical
power-law dependence (these are meant just to guide your eye). If
\\\( \alpha \neq 2 \\\), then variance plot also shows a third curve, light gray
line, which compares the simulation results against what is expect from the
normal diffusion.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/voter/anomalous/index.html"]

Observe that for \\\( \alpha < 2 \\\), super-diffusion is observed, while for
\\\( \alpha > 2 \\\) sub-diffusion is present. Observe that for \\\( x(0) \\\)
close to \\\( 1 \\\), the localization phenomenon might be observed (initially
variance growing, but then becoming smaller until reaching the steady state
value). It might not be always observable due to simulation constraints we have
imposed for web presentation.

