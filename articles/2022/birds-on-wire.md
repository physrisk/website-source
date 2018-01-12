Title: Birds on a wire
Date: 2022-09-13 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, biology
Slug: birds-on-wire
Status: published
Image_url: uploads/2022/birds-on-wire.png

How many birds could potentially fit on a wire? Well it depends on how
"jumpy" they are. In [cite id="Krapivsky2022Birds"] a group of researchers
looked at this problem from multi-dimensional perspective. In this post we
will examine simplest - one-dimensional case.
<!--more-->

## Pushy birds model

Let us assume that during each time tick a single birds arrives and lands
somewhere along the wire. For simplicity let the wire be discrete (in a
sense that there are fixed spots for birds to land on), but continuous case
could also be considered [cite id="Krapivsky2022Birds"]. If the arriving
bird lands too close to previously resting birds, those birds fly away.
Further derivation assumes that "too close" means exactly next to them
(\\\( r=1 \\\)).

This model can be examined analytically by looking from the void (gap)
density perspective. Let us first consider how a gap of a given length
\\\( k \\\) could be destroyed? Well, a bird could land inside the gap and
thus create two smaller gaps. Also, a bird could land on the "outside" of
the gap and spook any of the two "boundary" bird, thus making the gap
larger. Then how a gap of a given length \\\( k \\\) could be created? It
could be created from a shorter gap (of length \\\( k - 1 \\\)) if the new
birds lands too close to any of the two "boundary" birds. It could be also
created by splitting any longer gap of length \\\( j \geq k + 1 \\\). These
observations (in order) give us the following rate equation:

\begin{equation}
    \dot{V}\_k = - k V\_k - 2 V\_k + 2 V\_{k-1} + 2 \sum\_{j \geq k +1} V\_j .
\end{equation}

This rate equation can be further simplified:

\begin{equation}
    \dot{V}\_k = - (k+4) V\_k + 2 \sum\_{j \geq k -1} V\_j .
\end{equation}

By summing the rate equations for \\\( k > 1 \\\) (in other words over all
gaps) we can obtain rate equation for the occupation density:

\begin{equation}
    \dot{\rho} = 1 - 3 \rho .
\end{equation}

This can be obtained by using the following observations: gaps of
\\\( 0 \\\) length can't exist, one-to-one correspondence between each gap
and exactly one bird (this holds for infinite spots case), the sum over
each gap plus the bird at the end is equal to the length of the wire.
Mathematically:

\begin{equation}
    V\_0 = 0, \quad \sum\_{k \geq 0} V\_k = \rho, \quad \sum\_{k \geq 0} (k+1) V\_k = 1.
\end{equation}

It should be evident that for \\\( r=1 \\\) steady state is occupation
density is \\\( \rho\_s = \frac{1}{3} \\\). Based on the form of the
ordinary differential equation, the convergence towards steady state should
be exponential fast. Derivation for \\\( r > 1 \\\) is quite more involved
(derivation is available in the appendix of [cite id="Krapivsky2022Birds"]),
but for numerical experimentation one can easily see that \\\( \rho\_s
\approx \frac{1}{2 r + 1} \\\). Which is quite smaller than the efficient
packing \\\( \rho\_e = \frac{1}{r + 1} \\\).

We also refer our readers to [cite id="Krapivsky2022Birds"] to see how the
distribution of gap lengths is derived. For \\\( r=1 \\\) it is known over
all range of values, while for \\\( r > 1 \\\) it is known for
\\\( k \leq 2 r \\\). Though note that in the article the distribution
itself is not obtained, instead the article operates on gap (void) densities
\\\( V\_k \\\). To extract the probability of \\\( k \\\) length gap, simply
multiply the density by \\\( \rho\_s \\\).

## Interactive app

This interactive app visualizes a finite discrete wire (there are 510 spots
for the birds to land on). Empty spots are shown in light gray or red (if
the spot was recently vacated), while spots taken are shown in dark gray
(most "crow-like" color). Background is painted in sky blue.

Along with visual representation of the current occupation of the wire two
plots are shown. The first plot shows how the fraction of the spots on a
wire which are occupied (dark gray). The second plot shows distribution of
gaps between the occupied spots. Simulated distribution is shown as dark
gray dots, analytical distribution is shown as blue curve (despite the fact
that the distribution itself is discrete).

[html5-interactive width="520" height="470" mode="iframe"
url="/uploads/models/birds-on-wire/index.html"]
