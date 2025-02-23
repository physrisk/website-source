Title: Birds on a field
Date: 2022-09-27 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, biology
Slug: birds-on-field
Status: published
Image_url: uploads/2022/birds-two-dim.png

How many birds could potentially fit on a wire? Well it depends on how
"jumpy" they are. In [cite id="Krapivsky2022Birds"] it was shown that
density of birds is approximately \\\( \frac{1}{2 r + 1} \\\) in the steady
state regime (here \\\( r \\\) is the tolerance distance of the birds). In
this post we provide an interactive applet for the two dimensional case
(field).
<!--more-->

## Interactive app

This interactive app visualizes a finite discrete field (there are 50x40
spots for the birds to land on). Empty spots are shown in grass green (to
imitate the field) or red (if the spot was recently vacated), while spots
taken are shown in dark gray (most "crow-like" color).

As in the [previous app]({filename}/articles/2022/birds-on-wire.md) we also
plot the time evolution of the fraction (density) of birds on the field.

In this particular app we have assumed circular neighborhood around the
arriving bird. Namely bird \\\( j \\\) flies away if

\begin{equation}
    \sqrt{(x\_j - x)^2 + (y\_j - y)^2} \leq r .
\end{equation}

In the above \\\( \left( x, y \right) \\\) are the coordinates of recently
landed bird.

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/stats/models/birds-on-wire/two-dim.html"]
