Title: Verhulst model with periodic capacity
Date: 2026-11-03 08:00
Author: Aleksejus Kononovicius
Tags: interactive, biology, Verhulst model
Slug: verhulst-model-with-periodic-capacity
Status: draft
Image_url: uploads/2026/verhulst-model-with-periodic-capacity.png

[Last time]({filename}/articles/2026/verhulst-model.md), we have discussed
Verhulst's population dynamics model. Let us see what happens, if we make
capacity non-constant. What if population capacity fluctuates periodically
(for example, with seasons)?
<!--more-->

While it is possible to solve the governing ordinary differential equation,

\begin{equation}
\frac{d P}{d t} = \alpha P \left( 1 - \frac{P}{K(t)} \right),
\end{equation}

analytically even with a general time-dependent capacity. Let us explore
this scenario numerically. Furthermore, in this post, let us limit ourselves
to the case with

\begin{equation}
K(t) = K\_{min} + \frac{K\_{max} - K\_{min}}{2} \cdot
    \left[1+\cos\left(2 \pi \frac{t}{K\_T}\right)\right] .
\end{equation}

## Interactive app

Interactive app below is mostly identical to the one from the [previous
post]({filename}/articles/2026/verhulst-model.md), but it has additional
controls for parameters introduced in this post. Furthermore the plot now
shows an additional black curve, which corresponds to \\\( K(t) \\\).

[html5-interactive width="520" height="240" mode="iframe"
url="/uploads/models/ordinary-differential-equations/verhulst-model/periodic.html"]

Observe that the period \\\( K\_T \\\) needs to be really long, or \\\(
\alpha \\\) needs to be really big, for the \\\( P(t) \\\) curves to become
indistinguishable from \\\( K(t) \\\). For "reasonable" \\\( \alpha \\\) and
intermediate \\\( K\_T \\\), \\\( P(t) \\\) will trace periodic nature of
\\\( K(t) \\\), but will do so imperfectly: with a lag and a smaller
amplitude.
