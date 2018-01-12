Title: Stationary distribution of the noisy voter model with supportive interactions
Date: 2021-04-27 08:00
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, voter model, postdoctoral project, Latane social impact theory, opinion dynamics
Slug: stationary-distribution-of-the-noisy-voter-model-with-supportive-interactions
Status: published
Image_url: uploads/2021/stats-imitation-support.png

In the last few posts we have discussed voter model with supportive
interactions. In most cases the support is strong and drives even
non-extensive model, which is described by a broad stationary distribution
in the absence of support, to a stationary point. Yet there are cases when
such driving is not overly strong and some stochastic behavior is retained.
In this post we present an app, which also allows you to examine stationary
PDF of the [model, where support suppresses
recruitment]({filename}/articles/2021/supportive-interactions-voter-model-preventing-recruitment.md).
<!--more-->

If \\\( q < \min(\sigma\_0, \sigma\_1) \\\), then the model has stationary
Beta distribution:

\begin{equation}
    x\sim\mathcal{B}e\left(\frac{\sigma\_{1}-qN^{1-\beta}}{h+qN^{-\beta}},\frac{\sigma\_{0}-qN^{1-\beta}}{h+qN^{-\beta}}\right).
\end{equation}

If \\\( q > \min(\sigma\_0, \sigma\_1) \\\), it is not clear whether the model
has stationary distribution. Quite likely, for the smaller \\\( q \\\), the
model exhibits weak ergodicity breaking. Detailed understanding of this
phase of the model is still forthcoming.

Interactive app below is almost equivalent to the one used in the
[previous post]({filename}/articles/2021/supportive-interactions-voter-model-preventing-recruitment.md).
The only difference is that PDF plot in the log-linear scales is also shown.
Simulated PDF is shown as grey dots, while Beta PDF is shown if we know that
stationary distribution exists.

[html5-interactive width="520" height="510" mode="iframe"
url="/uploads/models/voter/support/stats-imitation-support.html"]

[acknowledge id="postdoc-ak-2017-lit"]

