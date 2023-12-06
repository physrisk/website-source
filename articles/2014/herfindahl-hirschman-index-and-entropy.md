Title: Herfindahl-Hirschman index and entropy
Date: 2014-09-22 08:25
Author: Aleksejus Kononovicius
Tags: Economics, competition, statistical physics
Slug: herfindahl-hirschman-index-and-entropy
Status: published

Herfindahl-Hirschman index (or HHI) describing
how close the market is to monopolistic market. This tool is used by
organizations responsible for the supervision of fair competition (e.g.,
when considering corporate mergers). This index is obtained using known
market shares, \\\(  s\_i \in (0,1\] \\\), of competitors in the
market<!--more-->:  

\begin{equation}
 H = \sum\_{i=1}^N s\_i^2 . 
\end{equation}

If \\\(  H \\\) is:

-   smaller than \\\(  0.01 \\\), then the competition in market is
    nearly perfect.
-   smaller than \\\(  0.15 \\\), then the competition is not as perfect
    as it could be, but no competitor dominates the market.
-   smaller than \\\(  0.25 \\\), then dominant competitor is present.
-   larger than \\\(  0.25 \\\), then dominant competitor might
    manipulate the market.

Note that \\\(  H \in \[1/N, 1\] \\\), which may be not very convenient
in certain cases, thus sometimes normalization is introduced. Normalized
HHI is defined as:  

\begin{equation}
 H^{\*} = \frac{\sum\limits\_{i=1}^N \left\[ s\_i^2\right\] - \frac{1}{N}}{1-\frac{1}{N}} . 
\end{equation}
  
The general form of normalized HHI suggests that now it describes how
far the market is from being equally divided. Note that \\\( H^{\*} \\\) and \\\(  H \\\) may be very different for small \\\(  N \\\).
E.g., if \\\(  N=2 \\\), \\\(  s\_1 = s\_2 = 0.5 \\\), then \\\( H^{\*}=0 \\\) and \\\(  H=0.5 \\\). The difference lies in an intuition
that competitive markets should not only be equally divided, but also
have many competitors.

In order to use this tool correctly one should also consider methodology
behind \\\(  s\_i \\\). Most importantly the market should be properly
defined. Namely the competition may persist on global scale (for
multiple similar or related products (e.g., all financial services)),
but on local scale (subset of the previous product set (e.g., loans and
deposits)) competition may not be present. Market should be also
properly defined in the geographical sense - five competitors might have
equal shares on a country level (globally competitive), but be
monopolists in different regions of the country (locally not
competitive).

Interestingly in physics there is a similar quantity - entropy. Even its
mathematical form is very similar:  

\begin{equation}
 S = - k\_B \sum\_{i=1}^N p\_i \ln p\_i . 
\end{equation}
  
Though note that larger entropy means larger competition (more states
with equal probabilities).

Both indicators might be used to solve or understand the same problems.
The choice should depend on the available data and should be guided by
statistical tests (e.g., for binary cases one might use
[ROC](https://en.wikipedia.org/wiki/Receiver_operating_characteristic)).
As far as I am aware both indicators produce similar results, yet slight
variations are present.
