Title: Exploring parking strategies with nonhomogeneous inflow
Date: 2022-05-10 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, traffic
Slug: exploring-parking-strategies-nonhomogeneous
Status: published
Image_url: uploads/2022/parking-random-meek.png

[Last time]({filename}/articles/2022/exploring-parking-strategies.md) we
have looked at how four different parking strategies work when inflow of
drivers is homogeneous. We have done similarly to what was done in [cite
id="Krapivsky2019JStat, Krapivsky2020JStat"], though our angle was a bit
different.

This time we have modified the approach further. Namely, now we allow you to
randomize the inflow of drivers and explore how do the performance of these
strategies change in nonhomogeneous society.
<!--more-->

## Different costs

We will explore the effects of different costs by allowing all four
strategies to be equally common. Then, if walking is preferred to driving,
obviously, meek strategy (dark gray cruve) is the best. In fact it performs
even better when parking lot becomes filled.

![Performance of strategies when walking is cheaper than
driving.]({static}/uploads/2022/parking-random-W0.5.png "Performance of strategies
when walking is cheaper than driving.")

When walking becomes more costly (likely because it takes more time), then
1/2 rule (red curve) and optimist (green curve) strategies become better
than the meek strategy. Yet optimist strategy doesn't become best as soon as
\\\( W > D \\\). If \\\( W \\\) is only slightly bigger than \\\( D \\\),
then 1/2 rule seems to perform slightly better.

![Performance of strategies when walking is slightly more costly than
driving.]({static}/uploads/2022/parking-random-W2.png "Performance of strategies
when walking is slightly more costly than driving.")

Though for \\\( W \gg D \\\) optimist strategy yields lowest cost. This is
natural as in this case walking is penalized a lot more than a little bit
extra driving.

![Performance of strategies when walking is noticeably more costly than
driving.]({static}/uploads/2022/parking-random-W4.png "Performance of strategies
when walking is noticeably more costly than driving.")

## Different popular strategies

Let us now explore scenario in which one strategy is used by \\\( 70\% \\\)
drivers. For this particular case we will keep costs fixed at \\\( W=4 \\\)
and \\\( D=1 \\\).

![If meek drivers dominate then optimist strategy works extremely
well.]({static}/uploads/2022/parking-random-meek.png "If meek drivers dominate then
optimist strategy works extremely well.")

![If prudent drivers dominate then optimist strategy works reasonably well,
1/2 rule drivers also do rather
well.]({static}/uploads/2022/parking-random-prudent.png "If prudent drivers dominate
then optimist strategy works reasonably well, 1/2 rule drivers also do
rather well.")

![If optimist drivers dominate then all strategies perform similarly
well.]({static}/uploads/2022/parking-random-optimist.png "If optimist drivers
dominate then all strategies perform similarly well.")

![If 1/2 rule followers dominate then all strategies perform similarly well,
though optimists seem to do somewhat
better.]({static}/uploads/2022/parking-random-half.png "If 1/2 rule followers
dominate then all strategies perform similarly well, though optimists seem
to do somewhat better.")

Strangely, in neither case prudent driving strategy seems to work as good as
the others. If the parking lot is rather empty, then often it performs less
well than even the meek strategy.

## Interactive app

This app is very much alike the one from [the last
post]({filename}/articles/2022/exploring-parking-strategies.md). Besides the
already addressed difference in that now you can have drivers following
different strategies, another difference is that now we plot average cost
without normalization. This is because the average cost for each strategy is
calculated over the last \\\( 50 \\\) drivers using that strategy.

There are other variables and scenarios we haven't considered. For example
what is the effect of \\\( \lambda \\\)? Feel free to explore it on your
own, and drop us a comment if you feel like it.

[html5-interactive width="520" height="500" mode="iframe"
url="/uploads/models/parking/random.html"]
