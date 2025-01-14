Title: Colonel Blotto game with varied castles
Date: 2025-01-14 08:00
Author: Aleksejus Kononovicius
Tags: interactive, game theory, conflicts, Colonel Blotto game
Slug: colonel-blotto-game-varied-castles
Status: published
Image_url: uploads/2025/colonel-blotto-game-varied-castles.png

In an [earlier post]({filename}/articles/2024/colonel-blotto-game.md) we
have seen basic framework behind the Colonel Blotto game. We have assumed
that castles are identical and of equal value. In this post let us consider
one of the simplest ways to generalize Colonel Blotto game is to assume that
castles are heterogeneous. Can you still find a winning strategy?
<!--more-->

## Interactive app

This app is mostly similar to the app from the [earlier
post]({filename}/articles/2024/colonel-blotto-game.md), but with an
important difference is that now castles are not equal - each castle is
worth as much prestige points as the number of flags raised above its
battlements. So, if you look carefully the left most castle is worth 3
points, the next two are worth 2 points each, and the last two castles are
worth 1 point each. As there are 9 points to collect in total, collecting 5
points is sufficient to win the game. But can you do that?

[html5-interactive width="520" height="220" mode="iframe"
url="/uploads/models/game-theory/blotto-game/index-varied-castles.html"]

Random strategy used by the computer was slightly updated to provide better
competition. Can you find a fixed strategy to beat computer? My best fixed
strategy gives roughly 50% win rate (against 44% win rate by
the computer).
