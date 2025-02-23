Title: Redistribution in Talent vs Luck model
Date: 2019-10-08 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, wealth, talent vs luck
Slug: redistribution-in-talent-vs-luck-model
Status: published
Image_url: uploads/2019/tvl-model-r.png

Here we continue our discussion on the Talent vs Luck model proposed by
[cite id="Pluchino2018ACS"]. This time we introduce capital redistribution
strategies in to the model, unlike the original authors we do not allow policy
makers to create capital - instead they must take from somebody and only then
they can redistribute.
<!--more-->

## Redistribution strategies

**No redistribution** strategy refers to the model as implemented in
[the original post]({filename}/articles/2019/talent-vs-luck-model.md).

**Flat tax, uniform redistribution.** The capital for redistribution is taken
from every agent by applying flat tax rate \\\( R \\\) on their capital. Then
the collected funds are split equally among all agents.

This strategy diminishes the effect of luck on capital, but does not eliminate
it completely. Luckier agents still get more money than less lucky ones. Total
wealth increases.

**Flat tax, give to 10% best.** Once again the capital for redistribution is
taken from every agent by applying flat tax rate \\\( R \\\) on their capital.
Yet in this case the funds are split between top 10% agents. While this is very
unrealistic scenario in society, this is (arguably) what is effectively done in
scientific community via grant system (and the reason why most scientists are
not happy with such system) [cite id="Pluchino2018ACS,Sinatra2016Science"].

This strategy puts huge emphasis on initial luck. As the time goes on, the
agents who were lucky in the beginning split from the rest and now two clusters
are observed. Total wealth decreases.

![talent vs luck model with redistribution to best]({static}/uploads/2019/tvl-model-r.png
"Results of a random simulation with 'flat tax, give to 10% best' redistribution
strategy.")

**Progressive tax, uniform redistribution.** Tax rate \\\( R \\\) is applied to
the richest individual only, other agents are taxed at lower rates (which
decrease linearly). The collected funds are split equally among all agents.

This strategy also diminishes the effect of luck on capital, but does not
eliminate it. Total wealth increases.

### Some notes

No strategy has noticeably increased the impact of talent on capital. This is
actually likely to be impossible, because we can't observe and reward talent
directly.

While it is very tempting, but one should refrain from directly comparing flat
and progressive taxes. While the effect they have seems to be similar, the
meaning of \\\( R \\\) is different in the two cases.

All strategies are applied each \\\( F\_r \\\) years.

## HTML 5 app

Feel free to explore a new app, which is essentially identical to the one from
[the original post]({filename}/articles/2019/talent-vs-luck-model.md). It just
shows three different plots.

[html5-interactive width="520" height="510" mode="iframe"
src="/uploads/models/stats/models/talent-luck/redist.html"]
