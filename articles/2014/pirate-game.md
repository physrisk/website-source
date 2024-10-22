Title: Pirate game
Date: 2014-12-01 08:22
Author: Aleksejus Kononovicius
Tags: interactive, game theory
Slug: pirate-game
Status: published

Let
us imagine five self-interested, rational and bloodthirsty pirates. They
have recently found a treasure of 100 gold coins. Now the captain, being
the most well-respected, has to propose how to split the treasure among
themselves. After he makes his proposal all pirates vote to accept it.
If majority of pirates vote yes, then the treasure is split as proposed.
But if not, then the captain is executed and new captain is appointed.
This new captain will make a new proposal. Having in mind that
succession order is known to all pirates devise a strategy for the
initial captain. He should retain as much treasure as possible, but stay
alive.

Note that if votes are tied, the tie is broken according to captains
vote. So we can hint you to
start solving the problem backwards. Let us assume that only two pirates
are left. In such case captain (P4) could keep all the treasure to
himself as votes would equally split (1 on 1). So try to imagine how the
previous captain (P3) could have used this information in order to
retain his life? What about P2? Original captain? You can try your
solution using applet below.

[html5-interactive
src="/uploads/models/game-theory/pirate-game/index.html"
width="450" height="170" mode="iframe"]
