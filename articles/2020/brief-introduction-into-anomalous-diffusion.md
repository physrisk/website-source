Title: Brief introduction into anomalous diffusion
Date: 2020-12-08 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistical physics, Stochastic models, anomalous diffusion, Levy processes
Slug: brief-introduction-into-anomalous-diffusion
Status: published
Image_url: uploads/2020/brief-introduction-into-anomalous-diffusion.png

A well-known example of "normal" diffusion is the Brownian walk. Brownian walk,
and "normal" diffusion by consequence, is one of the basic concepts in
[statistical physics](/tag/statistical-physics/) and
[stochastic modeling](/tag/stochastic-models/). Needless to say, it is one of
the most important concepts in our work. But in the empirical we can find
examples of different kind of diffusion, which notably faster (known as
super-diffusion) or notably slower (known as sub-diffusion) than the "normal"
diffusion.

In this post we will compare normal and anomalous diffusion from the
point-of-view of mean square displacement (abbr. MSD).<!--more-->

## Brownian walk - diffusion as we know it

One of the simplest models converging to Brownian walk is known as drunkard's
walk. Drunk particle moves randomly left (with probability \\\( p \\\)) or
right (otherwise). We observe its trajectory, \\\( x(t) \\\). Distribution of
\\\( x(t) \\\) is always a shifted binomial distribution, which as the number
of steps (trials) grows larger converges to normal distribution.

Due to central limit theorem, many different microscopic models will have the
same outcome as the drunkard's walk. All these models will converge to a
Brownian walk.

In context of this post we are more interested not in \\\( x(t) \\\), but in
MSD, which we define as follows:

\begin{equation}
    MSD(\Delta t) = \frac{1}{N (T-\Delta t)} \sum\_{i=1}^N
        \int\_{\Delta t}^T \left( x\_i(s) - x\_i(s-\Delta t) \right)^2
            \mathrm{d} s .
\end{equation}

MSD is a mean of a squared displacement,
\\\( \left( x(t) - x(t - \Delta t) \right)^2 \\\), calculated both over
ensemble (the sum in the expression above) and individual trajectory
(the integral in the expression above). In practice (and in the app below) the
trajectory is often discrete, so the integral is being replace with another
sum.

MSD for "normal" diffusion is known to have the following asymptotic behavior:

\begin{equation}
    MSD(\Delta t) \sim \Delta t .
\end{equation}

To verify this explore the app below. Ten trajectories are calculated and shown
in the left figure, while from this ensemble we also calculate MSD, which is
shown on the right figure (note that the scale of this figure is log-log). Note
that we have fixed \\\( p = 0.5 \\\), so that even short drunkard's walk would
be reasonably similar to Brownian walk.

[html5-interactive mode="iframe"
src="/uploads/models/diffusion/index.html" width="520" height="240"]

## Levy's walk - super-diffusion

Levy's walk is one of the typical examples of anomalous diffusion
[cite id="Zaburdaev2015RMP"]. Another excellent representative candidate could
be fractional Brownian motion, but Levy's walk is much more simple to
understand and implement.

In Levy's walk particle moves with constant velocity, but randomly changes
direction (orientation of the velocity vector). Changes in direction occur
after a certain waiting time, \\\( \tau \\\). It is expected to be power-law
distributed at least for long \\\( \tau \\\). In the app below we assume
that \\\( \tau \\\) is distributed according to a modified Pareto
distribution:

\begin{equation}
    p(\tau) \sim (100 \tau+1)^{-1-\gamma} .
\end{equation}

In other words, when generating new \\\( \tau \\\) we generate random sample
from a standard Pareto distribution, \\\( r \\\). Then we subtract \\\( 1 \\\)
from \\\( r \\\) and divide the result by \\\( 100 \\\). In statistical sense:

\begin{equation}
    \tau = \frac{r-1}{100} .
\end{equation}

Division here is purely arbitrary (adjusts the time scale of our model), but
subtraction allows us to change the support of the waiting time distribution.
Original Pareto distribution has support in \\\( [1, \infty ) \\\), while after
the modification the support is \\\( [0, \infty ) \\\).

For very small values of \\\( \gamma \\\) we will observe ballistic regime -
particles will fly in selected direction for a very long time. This is because
average \\\( \tau \\\) is not finite for small \\\( \gamma \\\). Ballistic
regime is characterized by:

\begin{equation}
    MSD(\Delta t) \sim \Delta t^2 .
\end{equation}

In theory [cite id="Zaburdaev2015RMP"] whenever mean \\\( \tau \\\) is finite,
but variance is not, we should observe super-diffusive regime. This regime is
characterized by

\begin{equation}
    MSD(\Delta t) \sim \Delta t^\alpha , \quad 1 < \alpha < 2 .
\end{equation}

To be more precise[cite id="Zaburdaev2015RMP"] suggests that:

\begin{equation}
    \alpha \approx 3 - \gamma .
\end{equation}

When both of the moments are finite, Levy walk should be similar to Brownian
walk and exhibit same MSD dependence as Brownian walk (linear growth).

Explore these intuitions using the app below.

[html5-interactive mode="iframe"
src="/uploads/models/diffusion/levy.html" width="520" height="270"]

