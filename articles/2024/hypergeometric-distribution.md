Title: Hypergeometric distribution
Date: 2024-10-01 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, statistics
Slug: hypergeometric-distribution
Status: draft
Image_url: uploads/2024/hypergeometric-distribution.png

Have you ever heard about the hypergeometric distribution? I haven't up to
at least a few weeks ago. It is related to the binomial distribution in a
sense that both of these distributions describe the probability to have
certain number of successes after a given number of experiments. The
difference between them being that binomial distribution assumes experiments
to be independent (drawing the balls from the box *with* replacement), while
hypergeometric distribution assumes dependence (the balls are drawn
*without* replacement).

Let us construct a simple model for the hypergeometric distribution, and run
simulations!
<!--more-->

## Drawing the balls without replacement

Let us assume that the box contains \\\( N \\\) balls, and \\\( n \\\) of
them are "red" (these we consider to represent "success"). After drawing
\\\( K \\\) balls from that box, without putting them back, how many of the
drawn balls we would expect to be "red"?  If we repeated the experiment
multiple times, what variability in our results we would expect?

These questions, can be easily answered by figuring out the probability mass
function first. Let us first consider all possible ways to split \\\( N \\\)
balls into groups of size \\\( K \\\) and \\\( N-K \\\):

\begin{equation}
    N\_{\text{all}} = \frac{N!}{K! (N-K)!} .
\end{equation}

This gives as a total number of all possible draws. Now we need to determine
how many draws will have exactly \\\( k \\\) "reds" drawn from the box.

\begin{equation}
    N\_k = \frac{n!}{k! (n-k)!} \cdot \frac{(N-n)!}{(K-k)! (N-n-K+k)!}.
\end{equation}

The first term in the multiplication counts all possible ways to allocate
exactly \\\( k \\\) "reds" to the drawn ball group. The second term deals
with allocation of the other balls. It counts all possible ways to allocate
exactly \\\( K-k \\\) "others" to the drawn ball group.

As every allocation (or arrangement of the balls) is equally probable, we
have that:

\begin{equation}
    p(k) = \frac{N\_k}{N\_{\text{all}}} .
\end{equation}

Note that, if \\\( K = N \\\), then only one allocation (arrangement) is
possible. The one with \\\( k = n \\\). This is precisely because we are
drawing without replacement.

Now figuring out the mean and the variance is simply an algebraic exercise:

\begin{equation}
    \mathbb{E}\left(k\right) = \sum_{k=0}^K k p(k) = K \cdot \frac{n}{N} ,
\end{equation}

\begin{equation}
    \mathbb{E}\left(k^2\right) = \sum_{k=0}^K k^2 p(k) = K \cdot \frac{n}{N} \cdot \frac{N-n+(n-1)K}{N-1} ,
\end{equation}

\begin{equation}
    \text{Var}\left(k\right) = \mathbb{E}\left(k^2\right) - \mathbb{E}\left(k\right)^2
        = K \cdot \frac{n}{N} \cdot \left(1 - \frac{n}{N} \right) \cdot
            \frac{N-K}{N-1} .
\end{equation}

The mean has exactly the same form as the mean of binomial distribution. The
variance also has a similar form, but there is an additional term (the last
term) which represents drawing without replacement. Note that, due to this
term as \\\( K \\\) approaches \\\( N \\\) variance goes to zero. This an
intuitive result, because if we draw all the balls from the box, then we
have no uncertainty about the outcome \\\( k \\\).

## Interactive app

Interactive app below plots empirical histogram from \\\( 10^3 \\\) samples
done by numerically simulating draws of \\\( K \\\) balls (current \\\( K
\\\) is given in the plot title) from the box. You can adjust the contents
of the simulated box by changing app parameters. \\\( K \\\) itself is being
gradually increased by the app automatically. As \\\( K \\\) is increases,
the empirical histogram plot is being gradually updated.

[html5-interactive width="520" height="290" mode="iframe"
url="/uploads/models/stats-basic/hypergeometric-distribution/index.html"]

The red curve in the plot shows the empirical histogram of a draw *without*
replacement (follows the hypergeometric distribution), while the blue curve
show the empirical histogram of a draw *with* replacement (follows the
binomial distribution). Note that for small \\\( K \\\) both curves look
similarly, but as \\\( K \\\) approaches \\\( N \\\) variance of the
*without* replacement draw outcome notably decreases.
