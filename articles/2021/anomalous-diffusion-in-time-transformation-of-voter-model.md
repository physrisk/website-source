Title: Anomalous diffusion in time transformation of voter model
Date: 2021-03-16 08:00
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive models, anomalous diffusion, voter model, Kirman model, R. Kazakevicius
Slug: anomalous-diffusion-in-time-transformation-of-voter-model
Status: published
Image_url: uploads/2021/anomalous-diffusion-in-time-transformation-of-voter-model.png

[Last time]({filename}/articles/2021/anomalous-diffusion-in-time-transformation-of-voter-model.md)
we have discussed the first non-linear transformation of the noisy voter model
considered by me and R. Kazakevicius [cite id="Kazakevicius2021AnoVM"]. This
time let us talk about the second non-linear transformation: transformation
of the time scale.<!--more-->

## Model

Once again we consider the standard noisy voter model (which is equivalent to
[Kirman's ant colony model]({filename}/articles/2010/kirman-ants.md) we have
considered previously on Physics of Risk), but this time we will build upon
so-called \\\( \tau \\\)-scenario, which introduces additional feedback of
the macroscopic state on the rate of micro-dynamics. This scenario was also
introduced when we modeled long-range memory in the 
[financial market scenario]({filename}/articles/2011/agent-based-herding-model-financial-markets.md)
(also see [cite id="Kononovicius2012PhysA"]):

\begin{equation}
    \tau(x) = x^{1-2 \eta}.
\end{equation}

Yet unlike previously we will not consider dynamics of \\\( y \\\), but we
will stick with dynamics of \\\( x \\\). With this \\\( \tau \\\)-scenario
in place stochastic differential equation for \\\( x \\\) in the limit of
small \\\( x \\\) behaves as a transformation of the Bessel process. Thus
we can once again use the results obtained for the Bessel process to find
the expressions for the temporal evolution of the moments of \\\( x \\\).
The most important thing these expressions contain is the power-law dependence
of the moments on time:

\begin{equation}
    \langle x^k \rangle \sim t^{\frac{k}{2 (1 - \eta)}} .
\end{equation}

Thus the mean will scale as power-law with exponent \\\( \frac{1}{2 (1 - \eta)} \\\),
while the variance will scale with exponent \\\( \frac{1}{1 - \eta} \\\). Note
that these theoretical results work well only for very small \\\( x \\\).

## Interactive app

This app is identical to the one from the
[previous post]({filename}/articles/2021/anomalous-diffusion-in-time-transformation-of-voter-model.md). The only difference is here is the source of non-linearity
and the related non-linearity parameter (\\\( \eta \\\) here). Normal diffusion
is observed for \\\( \eta = 0 \\\), smaller \\\( \eta \\\) will result in
sub-diffusion, while larger - in super diffusion.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/voter/anomalous/tau.html"]

