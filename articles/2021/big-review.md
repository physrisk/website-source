Title: Big review of works by our group
Date: 2021-09-07 08:00
Author: Aleksejus Kononovicius
Tags: agent-based models, opinion dynamics, financial markets, stochastic models, statistical physics, Kirman model, voter model, 1/f noise, burst statistics, anomalous diffusion, Levy processes, topic: ARFIMA, Brownian motion, fractional calculus, fractals, methods, order book, R. Kazakevicius, A. Kononovicius, B. Kaulakys, V. Gontis, publication, open access
Slug: big-review
Image_url: uploads/2021/big-review.png
Status: published

This summer we (all active members of the group) have contributed to a
pretty big paper [cite id="Kazakevicius2021Entropy"]. In the said paper we
have reviewed all of our varied approaches to the modeling of the long-range
memory (which we understand as [1/f noise](/tag/1f-noise/)). The core
difference of our approach, from the approaches taken by other groups, is
that we use Markovian models without embedding actual memory into our
models.

![Title page]({static}/uploads/2021/big-review.png)

The paper also includes a new result - application of [burst
statistics](/tag/burst-statistics/) (note that the paper uses another term -
burst and inter-burst duration analysis) to understanding the nature of
long-range memory of the fractional Levy stable motion. Fractional Levy
stable motion is an interesting generalization of the Brownian motion in two
regards. First of all the driving noise is not normally distributed, but is
instead distributed according to the [stable
distribution](https://en.wikipedia.org/wiki/Stable_distribution), which
makes large jumps quite likely. Also, the time series is integrated using
fractional integral and thus possesses true long-range memory (one embedded
into the model). We have shown that [burst
statistics](/tag/burst-statistics/) is a good tool for this particular task
(at least it has some advantages over other alternatives).

In [the upcoming posts](/tag/topic-arfima/) we will talk about ARFIMA
process, which was instrumental in our analysis as it helped us to generate
fractional Levy stable motion.

**Disclaimer:** While I was one of the authors of the paper, my impact on
Section 4 was rather limited. I have written implementation of ARFIMA
in [Python](https://github.com/akononovicius/arfima) and Mathematica. I have
also validated that figures can be reproduced following the instructions
given in Section 4. But this is fine as here we will focus on ARFIMA itself.
