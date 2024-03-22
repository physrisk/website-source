Title: Heterogeneous detrapping process
Date: 2024-04-09 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, spectral density, 1/f noise, random telegraph noise
Slug: heterogeneous-detrapping-process
Status: draft
Image_url: uploads/2024/heterogeneous-detrapping-process.png

Earlier, we explore how [power-law distributed detrapping
times]({filename}/articles/2024/power-law-gap-times-rtn.md) lead to [1/f
noise](/tag/1f-noise). Moreover, we have also established that power-law
distribution can be obtained from the superposition of exponential
distributions (see [this
post]({filename}/articles/2024/power-law-distribution-from-superposition-of-exponential-distributions.md)).
Now, what implications does the synthesis of these findings hold?
Constructing detrapping processes based on these insights yields interesting
consequences worth exploring.
<!--more-->

## Hooge's parameter

As discussed in [cite id="Kononovicius2024upoiss"], such construction of the
detrapping process enables the derivation of a readily interpretable
expression for the Hooge's parameter:

\begin{equation}
    \alpha\_H = \frac{\langle \tau\_{\text{min}} \rangle}{\langle \theta
    \rangle}.
\end{equation}

The provided expression suggests that Hooge's parameter depends on both the
expected detrapping time from the shallowest trapping center, \\\( \langle
\tau\_\text{min} \rangle \\\) and the material's purity, represented by the
average free-flight time, \\\( \langle \theta \rangle \\\). Hooge's
parameter is important in characterizing the noise behavior in semiconductor
devices, serving as a key metric in evaluating their reliability and
performance.

## Spurious low-frequency cutoff

Moreover, such formulation predicts the presence of a low-frequency cutoff
in finite experiments. This cutoff can be mitigated by averaging data over
multiple experiments or observing a large number of charge carriers. The
phenomenon arises from the fact that the low-frequency cutoff is related to
the smallest actually observed detrapping rate during the experiment. Even
if the model parameter \\\(
\gamma\_\text{min} \\\) is set to zero, in practical scenarios, the effective \\\(
\gamma\_\text{min} \\\) will never reach zero. Furthermore, the cutoff frequency will
always be higher than the lowest observable frequency.

Our calculation predict that the cutoff frequency [cite
id="Kononovicius2024upoiss"]:

\begin{equation}
    f\_c \approx \gamma_\text{min}^{(\text{eff})} \approx \frac{R +
    \gamma_\text{max} \langle\theta\rangle}{R T} .
\end{equation}

In the above \\\( R \\) stands for the number of single charge carrier
experiments. It can be also replaced by \\\( N \\\) the number of charge
carriers within a single experiment. Given that \\\( N \gg \gamma_\text{max}
\langle\theta\rangle \\\), no low-frequency cutoff will be noticeable, as
then \\\( f\_c < 2/T \\\). Although, \\\( f\_c > 1/T \\\) will be true for
any duration \\\( T \\\).

![Sample simulation results showcasing spurious low-frequency
cutoff]({static}/uploads/2024/heterogeneous-detrapping-process.png "Sample
simulation results showcasing spurious low-frequency cutoff. The arrow
indicates that the low-frequency cutoff is related to the smallest
detrapping rate actually observed during the experiment.")

## Interactive app

The interactive app below allows you to explore heterogeneous detrapping
process. It plot for distinct plots: (top left) distribution of detrapping
rates \\\( \gamma \\\), (top right) temporal dependence of smallest \\\(
\gamma \\\) observed during the current run, (bottom left) distributions of
detrapping and trapping times, and (bottom right) power spectral density of
the signal. Observe that low-frequency cutoff is related to the smallest
\\\( \gamma \\\) observed (i.e., compare rightmost plots).

[html5-interactive width="520" height="530" mode="iframe"
url="/uploads/models/random-telegraph-noise/heterogeneous-detrapping-process.html"]

Observe that, while the theoretical curve predicts (black curve in top right
figure) a continuous gradual decrease of the smallest \\\( \gamma \\\)
observed, but the experimental smallest \\\( \gamma \\\) observed decreases
in steps. This is because theoretical curve predicts expected value of
smallest \\\( \gamma \\\) observed.
