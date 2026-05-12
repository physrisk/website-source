Title: The defining property of stable distributions
Date: 2026-05-12 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, power-law distributions, stable distributions, students, topic: stable distributions
Slug: the-defining-property-of-stable-distributions
Status: published
Image_url: uploads/2026/the-defining-property-of-stable-distributions.png

Our group, along with a few [students](/tag/students/), has been reading
[statistics](/tag/statistics/) handbook and refreshing our understanding of
the basic statistics. I was given to cover a chapter about the [central
limit theorem](/tag/central-limit-theorem/), which reminded me that I had
already given a similar presentation while being PhD student myself. While
diving into the topic, I have noticed a couple things, which are usually
glanced over in a typical statistics handbook. In the final post of [this
series](/tag/topic-stable-distributions/), let me put an emphasis on the
defining property of any [stable distribution](/tag/stable-distribution/).
<!--more-->

Namely, if two random variates, \\\( X \\\) and \\\( Y \\\), are sampled
from any specific [stable distribution](/tag/stable-distributions/), then
their linear combination, e.g.,

\begin{equation}
    \Sigma = a X + b Y + c,
\end{equation}

is also distributed according to the same specific [stable
distribution](/tag/stable-distributions/). One just needs to adjust the location
and the scale parameter values the distribution.

The app below lets you test this property using the [Cauchy
distribution]({filename}/articles/2026/cauchy-distribution.md). The app
already has generated some random values for you, but the theoretical (gray)
curve doesn't seem to fit the simulated PDF (red curve) very well. Try
adjusting parameters of \\\( \Sigma \\\) distribution (they "gray"
parameters) and observe what happens.

[html5-interactive width="520" height="360" mode="iframe"
url="/uploads/models/stats/concepts/summation/self-similarity.html"]

For deeper exploration, adjust the parameter values for the sampling
distributions of \\\( X \\\) and \\\( Y \\\), as well as the summation
coefficient values (the "red" parameters). After doing so, press the
"Generate" button and try to align the simulated and the theoretical PDFs
again.

Observe that the relationship between simulation parameters (the "red"
parameters) and theoretical curve parameters (the "gray" parameters) is
rather easily predictable. Namely, the location of the linear combination is
given by,

\begin{equation}
    x\_0^{(\Sigma)} = a x\_0^{(X)} + b x\_0^{(Y)} + c .
\end{equation}

Here, the superscripts indicate which distribution the parameter relates to.
Similarly, for the scale of the linear combination we have,

\begin{equation}
    \gamma^{(\Sigma)} = a \gamma^{(X)} + b \gamma^{(Y)} .
\end{equation}
