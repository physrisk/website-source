Title: Elementary model reproducing q-Gaussian distribution
Date: 2014-10-06 08:13
Author: Aleksejus Kononovicius
Tags: interactive, statistical physics
Slug: elementary-model-reproducing-q-gaussian-distribution
Status: published
Image_url: uploads/2014/elementary-model-reproducing-q-gaussian-distribution.png

q-Gaussian distribution is rather
interesting generalization of the well-known Gaussian distribution. This
generalization arises from the generalized, non-extensive, statistical
mechanics, which was proposed by C. Tsallis two decades ago. Despite the
fact twenty years have passed there is no simple physical model
reproducing the q-Gaussian distribution. But our colleague Julius
Ruseckas recently proposed one \[cite id="Ruseckas2015PhysLettA"\]. In
this text we will briefly discuss his "correlated spin" model and will
present two related interactive applets.<!--more-->

In order to understand the main point behind the proposed model it is
best to start from contrasting **uncorrelated spin model**. In this case
each spin in our one dimensional lattice choose his orientation at
random (upwards or downwards, \\\(  s\_i = \pm 1/2 \\\)) independently
of nearby spins. When we have really long spin lattice, \\\(  N\rightarrow \infty \\\), central limit theorem starts to be applicable
and the distribution of magnetization, \\\(  M = \sum\_i s\_i \\\),
starts to approach Gaussian:

\begin{equation}
 P\_{nc}(M) = \frac{1}{2^N} \frac{N!}{(M+N/2)!(N/2-M)!} \sim\exp\left(-\frac{2 M^2}{N}\right) . \label{gauss}
\end{equation}

![Illustration of the correlated spin model taken from the
article.]({static}/uploads/2014/elementary-model-reproducing-q-gaussian-distribution.png
"Illustration of the correlated spin model taken from the
article."){#attachment_2720} 

Now let us assume that our spins are **strongly correlated**. This means
that there is only a few cases when spins change orientation. Let us
assume that there is \\\(  d \\\) such cases, with \\\(  d \ll N \\\). In
such case we have \\\(  d+1 \\\) single spin orientation domains.
Consequently in this case we can rewrite the global magnetization as:

\begin{equation}
 M = s\_1 \sum\_{i=1}^{d+1} (-1)^{i-1} n\_i , 
\end{equation}

where \\\(  s\_1 \\\) is orientation of the first spin, \\\(  n\_i \\\) is
the size \\\(  i \\\)-th domain. Now the distribution of \\\(  M \\\) is
no longer Gaussian (unless \\\(  d \gg 1 \\\)), it is well approximated
by power-law \[cite id="Ruseckas2015PhysLettA"\]:

\begin{equation}
 P\_{c}(M) \propto \left(1-\frac{4M^2}{N^2}\right)^{\mathrm{int}\left\[\frac{d-1}{2}\right\]} ,\label{laips}
\end{equation}

here \\\(  \mathrm{int}\[x\] \\\) extracts integer part of a real number
(fractional part is dropped). It should be evident that \\\( P\_{c}(M) \\\) can be rewritten using q-Gaussian with \\\(  q = 1 -\mathrm{int}\left\[\frac{d-1}{2}\right\]^{-1} \\\). We invite you to
check this using our interactive applets.

Applets
-------

First applet is dedicated to generation of single instances of random
lattices and their magnetization, \\\(  M \\\). Red color in this applet
denotes spins directed upwards, while blue - spins directed downwards.
To simplify this applet we have fixed number of spins in the lattice,
\\\(  N \\\), but you can still manipulate \\\(  d \\\).

[html5-interactive
src="/uploads/models/physics-models/correlated-spins/make-one.html"
width="410" height="75" mode="iframe"]

The second applet, on the other hand, is dedicated to mass generation of
random magnetization. Use this applet to check how well modelic PDF
agrees with theoretical ones, \eqref{gauss} and \eqref{laips}.
Note that when \\\(  d \\\) is small, then power-law
approximation, \eqref{laips}, works well, but when \\\(  d \\\)
grows the exponential approximation starts to fit better, \eqref{gauss}.

[html5-interactive
src="/uploads/models/physics-models/correlated-spins/index.html"
width="410" height="375" mode="iframe"]
