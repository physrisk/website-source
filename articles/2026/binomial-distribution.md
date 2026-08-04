Title: Binomial distribution
Date: 2026-09-22 08:00
Authors: Rytis Kazakevičius, Aleksejus Kononovicius
Tags: interactive, statistics
Slug: binomial-distribution
Status: draft
Image_url: uploads/2026/binomial-distribution.png

Suppose that a box contains \\\( N \\\) balls, of which \\\(
\textcolor{red}{M} \\\) are red ("success") and \\\( \textcolor{red}{N-M}
\\\) are of another color ("failure"). We now draw balls *with replacement*
(notably, if we draw *without replacement*, we would end up with
[hypergeometric
distribution]({filename}/articles/2024/hypergeometric-distribution.md)), so
that after each draw the selected ball is returned to the box before the
next draw. Consequently, each draw is independent, and the probability of
success remains constant,

\begin{equation}
p=\frac{M}{N}.
\end{equation}

Let \\\( Y \\\) denote the number of red balls drawn ("successes") in the
\\\( n \\\) draws ("experiments"). We wish to determine the probability that
exactly \\\( \textcolor{red}{k} \\\) of the \\\( n \\\) (all) draws are
successes.

<!--more-->

Let us first consider one particular sequence of outcomes. For example,
from \\\( n=5 \\\) draws the \\\( \textcolor{red}{k=3} \\\) are successes, one possible
sequence is shown below.

![sample draw]({static}/uploads/2026/binomial-distribution-sample-draw.png)

In the above \\\( S \\\) denotes a success (drawing a red ball) and \\\( F \\\) denotes a
failure (drawing a blue ball). Since the draws are independent, the
probability of obtaining this particular sequence is the product of the
probabilities of the individual draws, 

\begin{equation}
P(SFSSF)=\textcolor{blue}{\textcolor{red}{P(S)}P(F)}\textcolor{red}{P(S)}\textcolor{red}{P(S)}\textcolor{blue}{P(F)}
    =\textcolor{red}{p}\textcolor{blue}{(1-p)}\textcolor{red}{p}\textcolor{red}{p}\textcolor{blue}{(1-p)}.
\end{equation}

Rearranging the factors gives

\begin{equation}
\textcolor{red}{p^{3}}\textcolor{blue}{(1-p)^{2}}.
\end{equation}

More generally, any sequence containing exactly \\\( \textcolor{red}{k} \\\)
successes and \\\( \textcolor{blue}{n-k} \\\) (\\\( 5-3=2 \\\)) failures has
probability

\begin{equation}
\textcolor{red}{p^{k}}\textcolor{blue}{(1-p)}{}^{n-\textcolor{red}{k}},
\end{equation}

because each success contributes a factor of \\\( \textcolor{red}{p} \\\), each
failure contributes a factor of \\\( \textcolor{blue}{(1-p)} \\\), and **the order
of multiplication is irrelevant**.

Next, we determine how many distinct sequences contain exactly \\\( k \\\)
successes. This is equivalent to choosing which \\\( k \\\) of the \\\( n \\\) draw
positions are occupied by successes. The number of such choices is the
binomial coefficient \\\( \binom{n}{k} \\\). It can be derived as follows.
If the order in which the \\\( k \\\) success positions are chosen mattered, there
would be

\begin{equation}
n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}
\end{equation}

possibilities. However, every set of \\\( k \\\) positions is counted \\\( k! \\\) times,
corresponding to the different orderings in which the same positions can be
selected. Dividing by \\\( k! \\\) gives

\begin{equation}
\binom{n}{k}=\frac{n!}{k!(n-k)!}.
\end{equation}

The notation above \\\( \binom{n}{k} \\\) is called the *binomial coefficient* ("\\\( n \\\)
choose \\\( k \\\)"). It counts the number of ways to choose \\\( k \\\) positions for the
successes among the \\\( n \\\) trials.

For example, let \\\( n = 5 \\\) and \\\( k = 3 \\\). Now, imagine five
empty positions (see below).

![spots for draws]({static}/uploads/2026/binomial-distribution-spots.png)

Then you have to choose which three positions contain successes. Below,
\\\( \textcolor{red}{S} \\\) denotes a success and \\\( \textcolor{blue}{F} \\\) denotes a
failure. Some possible arrangements are

![multiple sample draws]({static}/uploads/2026/binomial-distribution-sample-multi-draws.png)

How many such arrangements are there? The answer is

\begin{equation}
\binom{5}{3}=\frac{5!}{2!3!}=\frac{120}{2\cdot 6}=10.
\end{equation}

Since every sequence containing exactly \\\( k \\\) successes has the same
probability, the probability of obtaining exactly \\\( k \\\) successes is
obtained by multiplying the number of such sequences by the probability of
each sequence,

\begin{equation}
P(Y=k)=\binom{n}{k}p^{k}(1-p)^{n-k}.
\end{equation}

This is exactly the probability mass function of the binomial distribution.

## Interactive app

Let me ([Aleksejus](/author/aleksejus-kononovicius/)) invade my colleague's
post for a bit. I have made an [interactive](/tag/interactive/) app to
accompany it!

The app below can be used to simulate the ball drawing experiment described
in the text above. You, the reader, can set number of red balls \\\(
\textcolor{red}{M} \\\) (representing "successes") and blue balls \\\(
\textcolor{blue}{N-M} \\\) (representing "failures") within the box. The app
then repeatedly draws \\\( n \\\) balls from the box (*with replacement*)
and records the number of red balls ("successes") within each sample.
Certain small number of recent experiments are shown to you, while the
results of all experiments are summarized in the histogram. The red bars
represent the empirical frequencies obtained from the simulation, while the
gray bars show corresponding theoretical probabilities as predicted by the
probability mass function of the binomial distribution.

[html5-interactive width="520" height="410" mode="iframe"
url="/uploads/models/stats/distributions/binomial/index.html"]
