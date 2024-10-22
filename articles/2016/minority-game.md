Title: Minority game
Date: 2016-04-12 07:23
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, competition, game theory
Slug: minority-game
Status: published
Image_url: uploads/2016/minority-game.png

Homo
economicus (lat. economic man) is a very convenient concept, which is
used to simplify many economical problems. Yet this concept may not
always work. One of the simplest examples were the idea of homo
economicus fails is so-called Minority game.

Imagine that each workday evening you may either go home or visit a bar.
At home you will always be able to spend some quality time, but at the
bar you might be able to have more fun. Yet the bar has only a limited
space for visitors. For the sake of simplicity let us assume that it may
conveniently fit in just about half of your coworkers. Each of your
coworkers faces the same dilemma as you - go home or visit the bar? Thus
you have to make the same choice as minority of you
coworkers.<!--more-->

Typical homo economicus could solve this problem by gathering
information about the plans of his coworkers. In this case he would know
the choice of majority and thus would be able to choose option preferred
by the minority. So far everything is fine for homo economicus. Yet
imagine what would happen if all agents (you and your coworkers) would
be homo economicus? After polling each other they all would make the
same, and thus wrong, decision. Each time they would end up in the
losing majority.

The agents could approach the problem in a different manner. As the
polling would not provide efficient decision making, one could try to
predict the future based on the recent history. Note that similar
behavior is undertaken by chartists or technical traders in the
financial markets. In this game, based on recent history agents make
their choice based on their best performing strategy. In Figures below
you can see the typical decision making during each "evening."

![Fig 1: Agent wants to make a choice: go home or visit the
bar.]({static}/uploads/2016/minority-game-1.png "Agent wants to make a
choice: go home or visit the bar."){#attachment_2914} 

![Fig 2: Agent checks his set of strategies and chooses the best
one.]({static}/uploads/2016/minority-game-2.png "Agent checks his set of
strategies and chooses the best one."){#attachment_2915} 

![Fig 3: Agent looks up recent history (three evenings in this figure) and
checks it against his strategy (here represented as
vector).]({static}/uploads/2016/minority-game.png "Agent looks up recent
history (three evenings in this figure) and checks it against his strategy
(here represented as vector)."){#attachment_2916} 

![Fig 4: Agent makes a choice.]({static}/uploads/2016/minority-game-4.png
"Agent makes a choice."){#attachment_2917} 

![Fig 5: Agents evaluates his choice. Strategies, which would predict
correctly gain points, while ones that predicted incorrectly - lose
points.]({static}/uploads/2016/minority-game-5.png "Agents evaluates his
choice. Strategies, which would predict correctly gain points, while ones
that predicted incorrectly - lose points."){#attachment_2918} 

Now you should be able to understand how agents think. Thus we invite
you to beat them! As their number is finite (100), their memory (as well
as yours) are limited to 5 evenings and number of their strategies is
rather low (2), you should be able to beat them. If your choices will be
correct (you will not choose the same action as majority), then you will
be awarded points, while otherwise you will lose points. In applet
window you will score and also your current position as well as number
of points scored by the current number one.

[html5-interactive
src="/uploads/models/game-theory/minority-game/index.html"
height="430" width="500" mode="iframe"]

Feel free to share you score with us!
