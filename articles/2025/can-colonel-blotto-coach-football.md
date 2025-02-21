Title: Can Colonel Blotto coach a football team?
Date: 2025-02-11 08:00
Author: Aleksejus Kononovicius
Tags: interactive, game theory, sports, board games, Colonel Blotto game
Slug: can-colonel-blotto-coach-football
Status: published
Image_url: uploads/2025/can-colonel-blotto-coach-football.png

Let us now apply the things we have learned from analyzing various
iterations of [Colonel Blotto game](/tag/colonel-blotto-game/)! At least
from my perspective, football match resolution engine used in the [Eleven:
Football Manager Board
Game](https://boardgamegeek.com/boardgame/329716/eleven-football-manager-board-game)
is a variation of this game. Can we improve our performance by leveraging
this knowledge?
<!--more-->

## The match resolution rules

Below I try to summarize match resolution rules. You might want to just read
the [original
rules](https://boardgamegeek.com/filepage/244391/eleven-english-rulebook)
instead.

### The pitch

Match proceeds on a football pitch, which is effectively 3-by-5 grid. Each
of the human players have their own grid (called match board), on which they
arrange their 10 outfield players. Note that they must use typical football
formations (such as 4-4-2, 4-3-3, 3-5-2, or similar). Also, goalkeepers are
treated separately.

The match board is organized into 5 zones (left wing, right wing, central
attack, central midfield and central defense) each composed of 3 cells
(similar to term "section" from the rule book). So, you may have at most 3
outfield players in each zone.

### The players

Players come in three kinds: offensive players (their cards have football
ball icon on them), defensive players (their cards have shield icon on
them), goalkeepers (their cards have glove icons on them). Goalkeepers may
have multiple glove icons, which tells us how many times goalkeeper can be
used. While the outfield players may be used once (unless they have some
special ability, which are absent from the app here).

Every player also has strength, which is referenced when comparing players.

### The match

The match is evaluated by going through all the zones. [Board
game](/tag/board-games/) rules enforce specific order (left wing, right
wing, central attack, central midfield and central defense zones as seen
from the perspective of the home team), but in our case the order doesn't
matter a lot.

When evaluating a zone human player needs to pair up their offensive
outfield players with the opponents defensive outfield players (i.e., balls
against shields), and their defensive outfield players with the opponents
offensive outfield players (i.e., shields against balls). Correct pairing
mush result in as few goals as possible.

How then the goals are scored? Goal will be scored by an offensive outfield
player, unless they were paired up with a defensive outfield player who is
of the same strength or stronger. In other words, "ball" with strength 2
will score a goal when paired with "shield" 1, but will be blocked if paired
with "shield" 2 or greater. "Ball" player will always score if they are not
paired up.

How can goalkeeper prevent goal? If offensive outfield player is not blocked
by a defensive outfield player, and the strength of offensive outfield
player is less-than-or-equal-to the goalkeepers strength, then goalkeeper
may block them if goalkeeper hasn't blocked more shots than they have
gloves. In other words, unblocked "ball" 2 player may be blocked by a
goalkeeper with at least 1 unused glove and a strength of at least 2.
Effectively goalkeeper is a free-roaming (may be used to prevent shots from
any zone) multi-use (may block as many shots as they have gloves) defensive
player.

### Sample match

Let us take a look at a match against Steelchester FC (AI team which plays
against you in the app). Here I have assumed that the game is already
advanced to a stage where I have 5 trained players and I am able to assign
them to the match (which is feasible by the mid-game). My trained players
are goalkeeper and 4 outfield players with strength greater than 1.

![Sample match in which I have managed to draw against Steelchester
FC!]({static}/uploads/2025/can-colonel-blotto-coach-football-11.png "Sample
match in which I have managed to draw against Steelchester FC!")

The app assumes that "you", which was I in this particular case, play home
team. Your players are head up and in red jerseys. Your opponent's players
are head down and in blue jerseys. The icon on the jersey indicates player
type, while the number shows their strength. Goalkeepers will have "ZxY"
written on their jerseys where Z is the number of gloves they still have
(number of times they still can be used) and Y is their strength. My
goalkeeper was "2x2", but was used once during the game, so was reduced to
"1x2" by the end of the match. SFC goalkeeper at the start of the match was
"1x2", but was also used once, so was reduced to "0x2" or just "2".

Let us look at the left wing. Red "ball" 4 player's jersey has golden
border, because that player has scored during the match. They have scored
because there was no blue "shield" player with 4+ strength, nor the
goalkeeper was strong enough to stop him. Blue "ball" 2 did not score,
because he was blocked by red "shield" 3.

Let us look at the central attack. Red "ball" 3 was blocked by blue "shield"
3, while red "ball" 1 was blocked by the goalkeeper. Blue "ball" 3 was not
paired with any red "shield" and was too strong for my goalkeeper. So blue
"ball" 3 scored an equalizer.

I will not discuss what happens in the other zones, but when resolving
match they would still be processed. Actually, I have skipped right wing
zone and immediately jumped to the central attack zone in this write up.

Hopefully, this explains how the match resolution engine works. If it is not
yet clear, then you could try and take a look at the [original
rules](https://boardgamegeek.com/filepage/244391/eleven-english-rulebook)
instead. Those rules also provide a sample match resolution.

## How does this relate to the Colonel Blotto game?

One could see zones as separate instances of the [Colonel Blotto
game](/tag/colonel-blotto-game/). The number of castles in each game would
be different and determined by the number of offensive outfield players in
those zones. But those "castles" are asymmetric in a sense that they can
score points only for one player, but not the other. The other player can
only prevent their opponent from scoring.

For example in the sample match above, the left wing zone is a game with two
castles. One castle may score for the red player, and the other may score
for the blue player. Red player have protected their red castle and has
scored a point. Red player also took the blue castle and prevented their
opponent from scoring a point. Yes, this discussion is convoluted, because
the itself logic inverts. Defensive outfield players, in the context of the
[Colonel Blotto game](/tag/colonel-blotto-game/), correspond to troops
trying to take over opponents castles. While offensive players become the
castles, which need to be protected from the opponents troops.

What is the best way to protect castle? Besides assigning lots of troops to
it. To play hide-and-seek! Which seems to coincide with the intended way to
play Eleven. The only question that remains is, how to efficiently hide the
offensive players? Well, <span style="color:var(--bg-light);">the best place
to hide a tree is in a forest</span>.

## Interactive app

Here you can find an interactive app which implements heavily restricted (in
comparison to the full [board
game](https://boardgamegeek.com/boardgame/329716/eleven-football-manager-board-game))
Eleven's match resolution engine. To interact with an app click on the pitch
(inside the solid lines). If you click on an outfield zone (these are
separated by solid lines), you'll be able to place your players there. You
may also remove your own outfield players by clicking on their jerseys.
After placing 10 outfield players, you will be able click "Start Match" to
play against Steelchester FC. The match will be resolve immediately. If you
want to try again just click one of the "Reset Match" button.

To help you win against Steelchester FC, let me share with you generous
scouting information:

> They are an average team, will probably avoid relegation, and won't get
> promoted. They focus on pressing and counterattacks, but their Forwards
> rarely start individual actions.

Good luck! Can you win without relying on stronger players? Spoiler: you can
win with a team made up of just 1 strength players.

[html5-interactive width="520" height="800" mode="iframe"
url="/uploads/models/game-theory/blotto-game/football/index.html"]

