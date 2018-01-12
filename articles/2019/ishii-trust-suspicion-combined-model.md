Title: A. Ishii trust and suspicion model with combined update rule
Date: 2019-12-31 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, opinion dynamics, bounded confidence, trust and suspicion, postdoctoral project
Slug: ishii-trust-suspicion-model-with-combined-update-rule
Status: published
Image_url: uploads/2019/ishii-trust-comb.png

So for our final post on the trust and suspicion model [cite id="Ishii2019GDN"],
and also for our last post this year (happy new year by the way), we add a
trivial extension to this model. Namely we have rebuilt the apps you have
already seen, where you can mix both update rules (model types) and have
them acting at different intensities.<!--more--> While this does not add much
to the model, but it allows to explore even more complex social scenarios.

So just to be safe we want to write down the combined update rule:

\begin{equation}
O\_{i} (t+1) = O\_{i} (t) + \sum\_{j=1}^N D\_{ij} [ \alpha\_{I} O\_{j} (t) +
\alpha\_{II} \Phi(|O\_{i} (t)-O\_{j} (t)|) ( O\_{j} (t) - O\_i(t) ) ] \Delta t .
\end{equation}

In the above \\\( \alpha \\\) values tune intensity of expression of both update
rules (original model types). Tune the parameter values in the apps below.
Explore the possibilities the combined model offers.

## \\\( N=2 \\\) app

[html5-interactive width="520" height="370" mode="iframe"
src="/uploads/models/ishii-trust/index-comb.html"]

## \\\( N=3 \\\) app

[html5-interactive width="520" height="400" mode="iframe"
src="/uploads/models/ishii-trust/index-comb-3.html"]

## \\\( N=100 \\\) app

[html5-interactive width="520" height="570" mode="iframe"
src="/uploads/models/ishii-trust/index-comb-100.html"]

[acknowledge id="postdoc-ak-2017-lit"]
