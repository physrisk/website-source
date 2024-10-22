Title: Multi-success heterogeneous detrapping process
Date: 2024-05-07 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, spectral density, 1/f noise, random telegraph noise
Slug: multi-success-heterogeneous-detrapping-process
Status: published
Image_url: uploads/2024/multi-success-heterogeneous-detrapping-process.png

When presenting [heterogeneous detrapping
process]({filename}/articles/2024/heterogeneous-detrapping-process.md) at
the [DPG conference]({filename}/articles/2024/our-group-attends-dpg-2024.md)
I got a question (or a suggestion to check) what would happen if instead of
heterogeneous traps we would require multiple successes for the charge
carrier to escape? In the [previous
post]({filename}/articles/2024/multi-success-detrapping-process.md) we have
seen that this change makes relatively little difference when the detrapping times are
exponential. But what if they are power-law? What if we require \\\(
N\_{success} \\\) successes within the [heterogeneous detrapping
process]({filename}/articles/2024/heterogeneous-detrapping-process.md)?
<!--more-->

## Sum of power-law distributed random values

When summing power-law distributed random values, the resulting distribution
maintains a power-law tail, with the index of this tail remaining
approximately consistent with the original values being summed. Intuitively,
this occurs because in the aggregation of multiple values, the largest value
often dominates significantly over the others, thereby influencing the
overall sum disproportionately. So, overall, nothing should change?

![Sample simulation results with different required number of
successes]({static}/uploads/2024/multi-success-heterogeneous-detrapping-process.png
"Sample simulation results with different required number of successes.")

When running the simulation, we see one somewhat important difference: for
larger \\\( N\_{success} \\\) the higher frequency cutoff (critical
frequency at which the [spectral density](/tag/spectral-density/)
transitions into Brownian motion regime) moves to the left. In other words,
the range of frequencies for which [1/f noise](/tag/1f-noise/) is observed
shrinks. Also, the small detrapping times become exceedingly rare - a sharp
cutoff is introduced into the detrapping time distribution.

## Interactive app

Now we invite you to play around with \\\( N\_{success} \\\) parameter
value and check what happens.

[html5-interactive width="520" height="530" mode="iframe"
url="/uploads/models/random-telegraph-noise/heterogeneous-detrapping-process.html"]

