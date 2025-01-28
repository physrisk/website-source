Title: Fast and slow troops in Colonel Blotto game
Date: 2025-01-28 08:00
Author: Aleksejus Kononovicius
Tags: interactive, game theory, conflicts, Colonel Blotto game
Slug: fast-slow-colonel-blotto
Status: published
Image_url: uploads/2025/fast-slow-colonel-blotto.png

Let us continue exploring [Colonel Blotto game](/tag/colonel-blotto-game/)!
In an [earlier post]({filename}/articles/2024/colonel-blotto-game.md), we
became familiar with the basic premise of the model. Then, we have
[explored]({filename}/articles/2025/colonel-blotto-game-varied-castles.md)
what happens when the castles (battlefields) have different importance.
This time, let us consider a scenario with two types of troops: one that is
slow and inexpensive, and another that is fast but more costly. What happens
if we introduce this heterogeneity? Will you be able to beat AI strategy
this time?
<!--more-->

## The game

Let us once again assume that all five castles hold equal value, and
therefore, to win the war, each warlord must capture three castles. As
before, warlord captures the castle if they have more troops at the castle
than their opponent. This
time, however, the warlords have access to two distinct types of troops.

The first type is slow troops. They cost only one resource but must be
deployed early (in round 1). The second type is fast troops. They cost twice
as much but can be deployed later (in round 2). Each warlord will have a
total of 30 resources to spend on troops during their campaign.

In round 1, neither warlord knows the other's deployment before deploying
their slow troops. However, at the start of round 2, the assignments of all
slow troops deployed during round 1 are revealed. Therefore, the fast troops
may react to the movements (deployment) of the slow troops.

Slow troops offer combat power, while fast troops offer tactical
flexibility. 30 troops in round 1, or 15 troops in round 2, or something in
between. Which army composition proves to be better?

## Interactive app

This app lets you explore the modified [Colonel Blotto
game](/tag/colonel-blotto-game/) with fast and slow troops. You will compete
against computer opponent who plays a semi-randomized strategy (similar to
the one used in [the original
app]({filename}/articles/2024/colonel-blotto-game.md)). Unlike the previous
apps, this one does not support automated repeated plays. This is primarily
because the second round of the modified game requires important strategic
decisions that cannot be easily automated for human player.

[html5-interactive width="520" height="215" mode="iframe"
url="/uploads/models/game-theory/blotto-game/index-fast-slow.html"]

You can adjust your troop placements using the "-" and "+" buttons, which
you can find below each castle. Once satisfied with the troop assignment,
confirm it by pressing the ">" button. After reviewing the results of your
current campaign (which is shown after round 2), you can start a new one by
pressing the "<" button.
