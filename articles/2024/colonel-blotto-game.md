Title: Colonel Blotto game
Date: 2024-12-10 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, game theory, conflicts, Colonel Blotto game
Slug: colonel-blotto-game
Status: draft
Image_url: uploads/2024/colonel-blotto-game.png

In an [earlier
post]({filename}/articles/2024/financial-times-US-presidential-campaign-game.md)
we have invited you to coordinate presidential campaign within a simple web
game. We have also mentioned that the framework of the aforementioned web
game is related to [game theory](/tag/game-theory/) and [Colonel Blotto
game](/tag/colonel-blotto-game/). Let us talk about this classic game in
this post.
<!--more-->

## The game

Colonel Blotto game involves two warlords who compete to become the next
ruler of a country. At the end of the game warlord controlling more castles
will be announced to be the next ruler.

Interactive app below allows you to become a warlord commanding 25 troops.
Your rival (controlled by a computer) also has an army of 25 troops. Both of
you attempt to control as many of the 5 castles built in the country as you
can. Controlling 3 castles would be sufficient to ensure your victory, but
in some cases 2 will also be just fine.

At the start of the game each warlord secretly allocates their troops to
each of the castles. After all troops are allocated, their allocations are
compared against each other. Warlord who assigns more troops to a castle
gains dominion over it. If both warlords assign same number of troops, the
castle remains neutral.

After checking the status of all castles, simply count how many castle each
warlord controls. Whoever controls more is the next ruler.

So the question is, how will you allocate your troops?

## Interactive app

This app allows you to define your own (fixed) strategy and check how well
it fares against a random strategy used by the computer. You may play just a
single round, or play lots of consecutive rounds until you pause or reset.
Random strategy used by computer is reasonably good, but it is possible to
find a way to beat it. Can you do that?

[html5-interactive width="520" height="220" mode="iframe"
url="/uploads/models/game-theory/blotto-game/index.html"]

The app below shows you the outcome of the last war. Your castles are
colored blue, castles controlled by computer are red, while neutral castles
are pale gray. Brief summary of the last round (war) is given along with
your overall record in won-drawn-lost format. What you want is for your
"won" be greater than your "lost" (my own best strategy gives about 42
percent win rate, against 32 percent win rate by the computer).

To help you in formulating your strategy, last troop assignment used by the
computer (CPU) is shown. You might want to compare the numbers in the
columns to see why (how) you have won or lost certain castles.
