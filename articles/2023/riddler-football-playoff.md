Title: Riddler's football playoff
Date: 2023-02-21 08:00
Author: Aleksejus Kononovicius
Tags: interactive, statistics, sports, FiveThirtyEight
Slug: riddler-football-playoff
Status: published
Image_url: uploads/2023/riddler-football-playoff.png

This week we will take a look at another [Riddler's Classic
puzzle](/tag/fivethirtyeight/). The problem for [December 9th,
2022](https://fivethirtyeight.com/features/can-you-win-the-riddler-football-playoff/)
invites us to take a look at a particular stochastic [football](/tag/sports/)
tournament.

<!--more-->

## The problem

Four teams participate in knock-out tournament. Two pairs play their
semi-final games, while the winners advance and play the final game to
determine the overall winner.

Each team is described by a random variable \\\( x\_i \\\) (equality
distributed in \\\( [ 0, 1 ] \\\) interval), which stands for its strength.
Semi-finals are seed appropriately - the strongest team (one with highest
\\\( x\_i \\\)) is paired with the weakest one (one with lowest
\\\( x\_i \\\)), while the other two form the second pair.

The outcome of each match is random. The probability that team \\\( i \\\)
will beat team \\\( j \\\) is given by

\begin{equation}
    p(w\_{ij} = i) = \frac{x\_i}{x\_i + x\_j} .
\end{equation}

Question: What is the average quality of the champion?

## Analytical solution

Let us first consider a simpler problem. Lets assume that we have just two
competing teams and, therefore, a single match to play. In this case it is
just but a simple arithmetic exercise, as if team \\\( i \\\) wins, then the
winner is of strength \\\( x\_i \\\), otherwise team \\\( j \\\) wins and
the winner's strength is \\\( x\_j \\\). The average is given by:

\begin{equation}
    \bar{x}\_c(x\_i, x\_j) = x\_i p(w\_{ij} = j) + x\_j p(w\_{ij} = j) =
        \frac{x\_i^2}{x\_i + x\_j} + \frac{x\_j^2}{x\_i + x\_j} .
\end{equation}

The above average is over a match between two particular teams (to denote
this we use bar above the \\\( x \\\)). To get the answer we are looking for
we need to average over all possible team pairs:

\begin{equation}
    \langle x\_c \rangle = \int\_0^1 \int\_0^1 \bar{x}\_c(x\_i, x\_j) d x\_i d x\_j =
        \frac{4 \ln (2) - 1}{3} \approx 0.591\ldots
\end{equation}

### Four team case

Dealing with the four team case follows similar logic, but there is a
complicating that teams are ranked. So, let us assume that
\\\( x\_i > x\_j > x\_k > x\_l \\\). There are four possible champions and
we need to calculate the probabilities of each outcome.

First let us consider the outcome when team \\\( i \\\) is the champion. For
this to happen \\\( i \\\) needs to beat team \\\( l \\\) in the semi-final.
Probability of that happening:

\begin{equation}
    p(w\_{il} = i) = \frac{x\_i}{x\_i + x\_l} .
\end{equation}

Then its opponent in the final will be team \\\( j \\\), with probability:

\begin{equation}
    p(w\_{jk} = j) = \frac{x\_j}{x\_j + x\_k} ,
\end{equation}

or team \\\( k \\\), with probability:

\begin{equation}
    p(w\_{jk} = k) = \frac{x\_k}{x\_j + x\_k} .
\end{equation}

Team \\\( i \\\) will be those opponents with probabilities:

\begin{equation}
    p(w\_{ij} = i) = \frac{x\_i}{x\_i + x\_j} ,
\end{equation}

\begin{equation}
    p(w\_{ik} = i) = \frac{x\_i}{x\_i + x\_k} .
\end{equation}

Now we just need to properly combine those probabilities into the
probability that \\\( i \\\) will be the champions:

\begin{equation}
    P(c=i) = p(w\_{il} = i) \cdot \left[
        p(w\_{jk} = j) \cdot p(w\_{ij} = i) +
        p(w\_{jk} = k) \cdot p(w\_{ik} = i)
    \right] .
\end{equation}

Following similar logic we can easily derive probability for \\\( l \\\) to
become champions:

\begin{equation}
    P(c=l) = p(w\_{il} = l) \cdot \left[
        p(w\_{jk} = j) \cdot p(w\_{lj} = l) +
        p(w\_{jk} = k) \cdot p(w\_{lk} = l)
    \right] ,
\end{equation}

as well as for \\\( j \\\) and \\\( k \\\):

\begin{equation}
    P(c=j) = p(w\_{jk} = j) \cdot \left[
        p(w\_{il} = i) \cdot p(w\_{ij} = j) +
        p(w\_{il} = l) \cdot p(w\_{lj} = j)
    \right] ,
\end{equation}

\begin{equation}
    P(c=k) = p(w\_{jk} = k) \cdot \left[
        p(w\_{il} = i) \cdot p(w\_{ik} = k) +
        p(w\_{il} = l) \cdot p(w\_{lk} = k)
    \right] .
\end{equation}

We can verify that everything is correct simply by adding all for
championship outcome probabilities together. As no other event is possible
the sum should be equal to \\\( 1 \\\).

As before, let us calculate the average for the particular teams:

\begin{equation}
    \bar{x}\_c(x\_i, x\_j, x\_k, x\_l) =
       x\_i P(c=i) + x\_j P(c=j) + x\_k P(c=k) + x\_l P(c=l) .
\end{equation}

And the average over all possible quadruplets of teams:

\begin{equation}
    \langle x\_c \rangle = (4!) \cdot \int\_0^1 \int\_0^{x\_i} \int\_0^{x\_j}
        \int\_0^{x\_k} \bar{x}\_c(x\_i, x\_j, x\_k, x\_l)
            d x\_l d x\_k d x\_j d x\_i .
\end{equation}

Why \\\( 4! \\\) multiplier? This term appears, because we need to make an
assumption about ranking. In general all possible quadruplets are not
necessarily ranked.

Integrating the final integral by hand is problematic, but any specialized
computer algebra system can do it for us. The result involves couple of
natural logarithms and a special [Riemann zeta
function](https://en.wikipedia.org/wiki/Riemann_zeta_function/), which is at
the core of one of the hardest problems faced by modern mathematics
([Riemann hypothesis](https://en.wikipedia.org/wiki/Riemann_hypothesis)).
But we are interested in at least an approximation of the true result. It
is:

\begin{equation}
    \langle x\_c \rangle \approx 0.6735\ldots 
\end{equation}

## Interactive app

Alternatively we could also solve the problem by running numerical
experiment! The app below does exactly that. Though note that it involves
three additional parameters.

\\\( \alpha \\\) and \\\( \beta \\\) are the
parameters of Beta distribution from which we assume that \\\( x \\\) is
sampled in the app. In \\\( \alpha = \beta = 1 \\\) case Beta distribution
corresponds to uniform distribution in \\\( [0, 1] \\\) interval.

\\\( \gamma \\\) parameter changes the probability to win the match. Now it
would be:

\begin{equation}
    p(w\_{ij} = i) = \frac{x\_i^\gamma}{x\_i^\gamma + x\_j^\gamma} .
\end{equation}

Obviously, \\\( \gamma = 1 \\\) case corresponds to the original problem.
Higher \\\( \gamma \\\) values make stronger teams more likely to win, while
lower values improve the chance of the weaker teams. In the special case
\\\( \gamma = 0 \\\) teams' strength does not matter. For negative
\\\( \gamma \\\) team's strength are effectively inverted (weaker teams
become stronger).

Feel free to explore the original problem and its generalization! This app
outputs the current mean strength of the champion (at the top near the
iteration number), the teams (and their pairings) from the last playoff and
the team strength distribution.

[html5-interactive width="520" height="295" mode="iframe"
url="/uploads/models/stats-puzzles/football-playoff/index.html"]

Note that all team names are generic "Team #XX", where XX indicates the
strength of the team: \\\( XX = \left\lceil x\_i \cdot 100 \right\rceil \\\).
The colors indicate team rank: blue team is always the strongest, then
followed by red, green and yellow. In the figure champion's strength
distribution is shown by dark gray curve.
