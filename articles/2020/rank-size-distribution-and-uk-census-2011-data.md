Title: Rank-size distribution and UK census 2011 data set
Date: 2020-03-24 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, statistics, methods, data science, sociology, voter model, Ising model, opinion dynamics, Zipf's law
Slug: rank-size-distribution-and-uk-census-2011-data-set
Status: published

While we haven't told you the previous post on
[Kawasaki dynamics]({filename}/articles/2020/kawasaki-ising-model.md) is actually
meant as a context towards upcoming series of posts. While it covered
theoretical aspect of the upcoming series, as the model we will talk about is
build on the same premise as Kawasaki interpretation of the Ising model, this
post will cover empirical aspect of the upcoming series.

Namely, here we introduce you to the rank-size distributions and illustrate the
concept using UK census 2011 data. Note that the data is freely available from
[NOMIS website](https://www.nomisweb.co.uk/query/select/getdatasetbytheme.asp?opt=3&theme=&subgrp=)).
Here in this post we will use Tables KS201EW, KS209EW, KS301EW, KS402EW and
QS607EW. Our geographical resolution being postal areas.

<!--more-->

Rank-size distribution is obtained simply by ordering the data from largest
to smallest and plotting it (rank on x-axis and value on y-axis). Precisely
because the data is order by "size", this particular plot is known as rank-size
distribution. This kind of plot allows to explore size scaling phenomena (the
well-known Zipf and Pareto laws would be an example of power-law scaling
phenomena revealed by rank-size distribution plot). While this kind of plot
also has ties to survival analysis.

If sample size is quite large, then rank-size distribution function is well
approximated by an inverse cumulative distribution function (also known as
quantile function). One just has to reverse the order:

\begin{equation}
RSD\left( \vec{\theta}, k \right) = CDF^{-1} \left( \vec{\theta}, 1-k \right) .
\end{equation}

In the above \\\( RSD\left(\dots\right) \\\) is the rank-size distribution
function, \\\( \vec{\theta} \\\) is the distribution parameter vector,
\\\( k \\\) is normalized rank (\\\( k \in [0,1] \\\)) and \\\( CDF^{-1} \\\)
is the inverse cumulative distribution function.

After this quick introduction we invite you to explore scaling behavior of the
UK census 2011 data using the interactive app below.

[html5-interactive url="/uploads/models/uk-census/rsd.html"
width="520" height="460" mode="iframe"]
