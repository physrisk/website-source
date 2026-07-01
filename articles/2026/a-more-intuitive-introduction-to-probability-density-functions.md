Title: A more intuitive introduction to probability density functions
Date: 2026-09-08 08:00
Authors: Rytis Kazakevičius, Aleksejus Kononovicius
Tags: interactive, statistics, students, Heaviside theta function, Dirac delta function
Slug: a-more-intuitive-introduction-to-probability-density-functions
Status: draft
Image_url: uploads/2026/a-more-intuitive-introduction-to-probability-density-functions.png

In quite a few statistical physics books, probability density functions
(abbr. PDF) are introduced instantaneously by using the [Dirac delta
function](https://en.wikipedia.org/wiki/Dirac_delta_function). In my view,
this approach is not very intuitive. While reading Heinz's book on
mathematical modeling [cite id="Heinz2011"], I came across a more intuitive
explanation, and I would like to share it here on Physics of Risk.
<!--more-->

Probability density functions can also be defined using [theta
function](https://en.wikipedia.org/wiki/Heaviside_step_function) \\\(
\theta\left(z\right) \\\), also known as a step function or Heaviside theta
function. The [theta
function](https://en.wikipedia.org/wiki/Heaviside_step_function) \\\(
\theta\left(z\right) \\\) of a variable \\\( z \\\) can be defined as
follows

\begin{equation}
\theta\left(z\right)=\begin{cases}
0 & \text{if }z < 0,\\\\
1 & \text{otherwise.}
\end{cases}
\end{equation}

We can replace \\\( z \\\) by \\\( x=x-X\_{i} \\\). Here, \\\( x \\\)
represents any parameter \\\( X\_{i} \\\) is \\\( i \\\)-th measured value of
a random variable \\\( X \\\). Then we obtain

\begin{equation}
\theta\left(x-X\_{i}\right)=\begin{cases}
0 & \text{if }X\_{i} > x,\\\\
1 & \text{otherwise.}
\end{cases}
\end{equation}

It is relevant to see here the difference between \\\( X \\\) and \\\( x
\\\). \\\( X \\\) is a random variable that is measurable, whereas the
so-called sample space variable \\\( -\infty\leq x\leq\infty \\\) is used to
analyze the probability of \\\( X \\\) values. The probability for finding a
value \\\( X\_{i}\leq x \\\) is \\\( 1 \\\) if \\\( X\_{i}\leq x \\\), and
zero otherwise. This probability is reflected by the [theta
function](https://en.wikipedia.org/wiki/Heaviside_step_function) \\\(
\theta\left(x-X\_{i}\right) \\\).

## Introducing cumulative distribution function

Lets say we are interested in the probability \\\( P\left(X\leq x\right)
\\\) to find any \\\( X\leq x \\\) (e.g., the probability \\\( P\left(X\leq
180\right) \\\) of having a person in a certain group of people with an
intelligence quotient not higher than 180). Then we have to take the
expectation value of \\\( \theta\left(x-X\_{i}\right) \\\),

\begin{equation}
P\left(X\leq x\right)=\langle\theta\left(x-X\right)\rangle=\frac{1}{N}\sum^{N}\_{i=1}\theta\left(x-X\_{i}\right).\label{eq:theta-mean}
\end{equation}

In the equation above we have counted all the measurements that have been
smaller or equal to variable \\\( x \\\) (count as \\\( 1 \\\)), and larger
ones set to zero (count as \\\( 0 \\\)). This done by \\\(
\theta\left(x-X\_{i}\right) \\\). Then summed these functions and normalized
the sum over number of measurement \\\( N \\\). \\\( P\left(X\leq x\right)
\\\) is called cumulative distribution function (abbr. CDF).

Similar to Eq. \eqref{eq:theta-mean} the cumulative distribution function
\\\( P\left(x\leq X\leq x+\Delta x\right) \\\) the probability of finding
\\\( X \\\) between \\\( x \\\) and \\\( x+\Delta x \\\) is given by:

$$\begin{align}
P\left(x\leq X\leq x+\Delta x\right) & = \left\langle \theta\left(x+\Delta x-X\_{i}\right)\right\rangle -\left\langle \theta\left(x-X\_{i}\right)\right\rangle = \nonumber \\\\
 & = P\left(X\leq x+\Delta x\right)-P\left(X\leq x\right)
\end{align}$$

Here, \\\( \Delta x \\\) is any positive interval that may be small or not.

## Introducing probability density function

The probability density function is defined as the derivative of the
cumulative distribution function (letting \\\( F\left(x\right) \\\) denote \\\( P\left(X\leq x\right) \\\)),

\begin{equation}
p\left(x\right)=\frac{d}{dx}F\left(x\right),
\end{equation}

Using the representation

\begin{equation}
F\left(x\right)=\langle\theta\left(x-X\right)\rangle,
\end{equation}

we obtain

\begin{equation}
p\left(x\right)=\left\langle \frac{d}{d x}\theta\left(x-X\right)\right\rangle
\end{equation}

Since the derivative of the [Heaviside step
function](https://en.wikipedia.org/wiki/Heaviside_step_function) is the
[Dirac delta function](https://en.wikipedia.org/wiki/Dirac_delta_function),

\begin{equation}
\delta\left(x-X\right)=\frac{d}{dx}\theta\left(x-X\right),
\end{equation}

the PDF can be written as

\begin{equation}
p\left(x\right)=\left\langle\delta\left(x-X\right)\right\rangle
\end{equation}

Thus, the probability density function is the expectation value of the
[Dirac delta function](https://en.wikipedia.org/wiki/Dirac_delta_function).

## The meaning of probability density functions

The quantity \\\( p\left(x\right)dx \\\) represents the probability that the
random variable \\\( X \\\) lies within the infinitesimal interval \\\(
\left[x,x+dx\right] \\\):

\begin{equation}
P\left(x\leq X\leq x+dx\right)=F\left(x+dx\right)-F\left(x\right)\approx p\left(x\right)dx.
\end{equation}

The approximation becomes exact in the limit \\\( dx\rightarrow 0 \\\).

To illustrate these definitions, we focus on a Gaussian random variable,
which is especially common in applications due to the [central limit
theorem]({filename}/articles/2026/central-limit-theorem.md). Its
probability density is

\begin{equation}
p\_{\sigma}\left(x\right)=\frac{1}{\sigma\sqrt{2\pi}}\mathrm{e}^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}}.
\end{equation}

Here \\\( \mu \\\) denotes the mean and \\\( \sigma^{2} \\\) the variance. Integrating
the PDF yields the cumulative distribution function

\begin{equation}
F\_{\sigma}\left(x\right)=\int^{x}\_{-\infty}p\_{\sigma}\left(z\right)dz=\frac{1}{2}\left(1+\mathrm{erf}\left(\frac{x-\mu}{\sigma\sqrt{2}}\right)\right).\label{eq: cont-Gauss-CDF}
\end{equation}

Here \\\( \mathrm{erf}\left(z\right) \\\) is the [error
function](https://en.wikipedia.org/wiki/Error_function).

As the variance \\\( \sigma^{2} \\\) decreases, the Gaussian PDF becomes
increasingly concentrated around its mean and approaches the [Dirac
delta function](https://en.wikipedia.org/wiki/Dirac_delta_function),

\begin{equation}
\lim\_{\sigma\rightarrow 0}p\_{\sigma}\left(x\right)=\delta\left(x-\mu\right),
\end{equation}

in the sense of distributions. Consequently, the corresponding Gaussian CDF
approaches the [Heaviside step
function](https://en.wikipedia.org/wiki/Heaviside_step_function),

\begin{equation}
\lim\_{\sigma\rightarrow 0}F\_{\sigma}\left(x\right)=\theta\left(x-\mu\right),
\end{equation}

since the [error function](https://en.wikipedia.org/wiki/Error_function)
satisfies

\begin{equation}
\lim\_{z\rightarrow\pm\infty}\mathrm{erf}\left(z\right)=\pm 1.
\end{equation}

Therefore, the [Dirac delta
function](https://en.wikipedia.org/wiki/Dirac_delta_function) and the
[Heaviside step
function](https://en.wikipedia.org/wiki/Heaviside_step_function) naturally
arise as the zero-variance limits of the Gaussian PDF and its corresponding
CDF.

## Interactive app

Let me ([Aleksejus](/author/aleksejus-kononovicius/)) invade my colleague's
post for a bit. Originally, [Rytis](/author/rytis-kazakevicius/) had
included a few static figures to illustrate his point. As the app needed to
reproduce these figures was relatively easy for me to recreate, I decided to
include it in this post. Feel free to explore it!

Start your exploration by observing that changing \\\( \mu \\\) changes the
location of the peak (for [delta
function](https://en.wikipedia.org/wiki/Dirac_delta_function) and the PDF)
or the step (for the [theta
function](https://en.wikipedia.org/wiki/Heaviside_step_function) and the
CDF). While as \\\( \sigma^{2} \\\) grows smaller the PDF of the Gaussian
distribution becomes narrower, and the transitional part of the CDF becomes
"sharper".

[html5-interactive width="520" height="250" mode="iframe"
url="/uploads/models/stats/concepts/zero-variance-limit/index.html"]
