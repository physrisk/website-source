Title: Strategic candidates and median voter theorem
Date: 2022-03-01 08:00
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, opinion dynamics, competition, median voter theorem
Slug: strategic-candidates-and-median-voter-theorem
Status: published
Image_url: uploads/2022/strategic-candidates-polarized.png

Usually in sociophysics we care about the social aspects of [opinion
dynamics](/tag/opinion-dynamics) and ignoring grains of rationality present
in decision making. Though there are models, which do the opposite. Here in
this post we will take a look at a model [cite id="Jones2021"] which
considers rational voters and strategic candidates.
<!--more-->

## Model

In this model, unlike in the many iterations of the [voter
model](/tag/voter-model), voters are abstracted away - they are represented
by a population density function (black curve in the figures and the app).
The function is given by a sum of two bell shapes (PDFs of the normal
distribution):

\begin{equation}
n(x) = c \left[ \mathcal{N}\left(x, \frac{1 + \alpha}{2}, \sigma^2 \right) +
    \mathcal{N}\left(x, \frac{1 - \alpha}{2}, \sigma^2 \right) \right] ,
    \quad \text{if } x \in \left[ 0, 1 \right] .
\end{equation}

In the above we have used \\\( \mathcal{N}\left(x, \mu, \sigma^2 \right) \\\)
to indicate PDF of the normal distribution, while \\\( c \\\) is a
normalization constant.

These generalized voters have four options: support blue candidate, support
red candidate, support third party (extremists) or abstain. Utility of each
choice is given by:

\begin{equation}
    U\_B(x) = \frac{1}{|b-x|^P} , \quad U\_R(x) = \frac{1}{|r-x|^P} ,
\end{equation}

\begin{equation}
    U\_3(x) = \frac{1}{(1-x)^R} + \frac{1}{x^R} , 
\end{equation}

\begin{equation}
    U\_A(x) = Q \left[ 1 - \left| |b-x| - |r-x| \right| \right].
\end{equation}

In the above \\\( b \\\) and \\\( r \\\) are the coordinates of blue and red
candidate respectively. \\\( P \\\) stands for pragmatism (appeal to vote
for mainstream candidate who is more likely to win). \\\( R \\\) stands for
rebelliousness. \\\( Q \\\) could be interpreted as relative cost of voting,
as higher values deter voters from voting if mainstream candidates (red and
blue) are too alike.

Though the decision itself is not deterministic. Instead it is stochastic,
but the grain of rationality is retained due to the probabilities being
proportional to the respective utilities. E.g., probability to vote for a
blue candidate is given by:

\begin{equation}
    p\_B(x) = \frac{U\_B(x)}{U\_B(x) + U\_R(x) + U\_3(x) + U\_A(x)} .
\end{equation}

Note that red and blue curves (in the figures and the app) show the actual
number of the red and blue candidates supporters. E.g., number of red
candidate supporters is given by:

\begin{equation}
    n\_R(x) = p\_R(x) n(x) .
\end{equation}

In other words candidates strategize about the expected vote share. Trivial
stochasticity originating from Bernoulli trials is ignored at the vote
count, too.

So the article [cite id="Jones2021"] introducing this setup has looked at
optimal positions for the candidates and shown that in some cases voter
share maximizing (rational) candidates will become more radical than
majority of their support base. For example try entering the following
parameters into the interactive app below: \\\( \alpha = 0.6 \\\),
\\\( \sigma = 0.1 \\\), \\\( P = 5 \\\), \\\( Q = 0 \\\) and \\\( R = 5
\\\).

![In this case candidates become more polarized than the society electing
them.]({static}/uploads/2022/strategic-candidates-polarized.png "In this case
candidates (vertical lines) become more polarized than the society electing
them.")

Though for other parameter sets candidates will move closer towards the
median voter. Such convergence is predicted by the [Hotelling
law]({filename}/articles/2014/hotelling-law.md) and the [median voter
theorem](/tag/median-voter-theorem). For example try: \\\( \alpha = 0.4 \\\),
\\\( \sigma = 0.3 \\\), \\\( P = 2 \\\), \\\( Q = 30 \\\) and \\\( R = 1 \\\).

![In this case candidates converge towards the median
opinion.]({static}/uploads/2022/strategic-candidates-median.png "In this case
candidates (vertical lines) converge towards the median opinion.")

In the intermediate phase candidates will be polarized, but less than the
underlying society. This phase can be seen with the default parameters of
the interactive app.

![The optimal positioning of the candidates with the default parameter values. Candidates are polarized, but less than the society.]({static}/uploads/2022/strategic-candidates-less-polarized.png "The optimal positioning of the candidates (vertical lines) with the default parameter values. Candidates are polarized, but less than the society.")

The authors of [cite id="Jones2021"] also took a look at empirical
distributions of voters and it seems that in the US scenario optimal
strategic candidates should be less polarized than the US society itself.
This seems to be a good news, but, sadly, we do not live in a rational world.

## Interactive app

Note that interactive app requires you to play the game too. While the blue
candidate is governed by a simple AI script, it is your responsibility to
help the red candidate pick best "stance" on pressing political issues
(\\\( x\_1 \\\) value). While victory is not possible (as the setup is
intentionally symmetric), but you achieve a draw. Feel free to experiment and
find optimal position.

[html5-interactive width="520" height="290" mode="iframe"
url="/uploads/models/median-voter/index.html"]
