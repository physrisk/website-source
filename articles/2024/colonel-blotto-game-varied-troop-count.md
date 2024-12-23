Title: Colonel Blotto game with varied troop count
Date: 2024-12-23 09:00
Author: Aleksejus Kononovicius
Tags: interactive, game theory, conflicts, Colonel Blotto game
Slug: colonel-blotto-game-varied-troop-count
Status: published
Image_url: uploads/2024/colonel-blotto-game-varied-troop-count.png

In an [earlier post]({filename}/articles/2024/colonel-blotto-game.md) we
have seen basic framework behind the Colonel Blotto game. We have assumed
both warlords are equal in their strength, and that the castles are
identical and of equal value. So, there are at least two obvious ways to
generalize the game. In this post let us consider what happens when warlords
differ in their troop count. Does the weaker warlord even have a chance? How
can the stronger warlord make use of their superior strength?
<!--more-->

Originally, I haven't planned on writing this post, but when doing research
for the upcoming post, I have stumbled upon [cite id="Macdonell2015ET"]. The
paper instructs on optimal strategies for the two-battlefield Colonel Blotto
games, which lead to certain conclusions I haven't touched upon in the
previous post. Refer to the paper, if you want to get a more mathematically
rigorous analysis, or if you want to see what lies beyond the standard
asymmetric two-battlefield case I'll write about in this post.

## General setup

In this post, we examine the conflict between two generals, one named Blotto
and the other named Enemy, each commanding a different number of troops.
This enables the stronger warlord to dominate in most conflicts; however, if
the weaker warlord commits their troops carefully, they can occasionally
manage to force a stalemate by capturing one of the two castles.

**Few quick side notes:** Here, it is important to clarify that by
"optimally" I mean strategies which would be Nash equilibrium strategies.
Also, in our analysis we will consider Blotto commanding more troops than
Enemy, \\\( B \geq E \\\).

## The trivial case

So, first let us consider a trivial case when \\\( E \leq B / 2 \\\). In
this case, colonel Blotto could simply assign \\\( B / 2 \\\) troops to each
of the castles. In the worst case scenario Blotto would win one castle, and
face stalemate in the other, while still winning the overall war.

This trivial case leads us to a few important conclusions. The first one is
that you don't need all the troops to win the war. You can keep some troops
as a reserve and still come out on top.

Another important take away is that, if you are the weaker side, you should
increase number of battlefields (castles) you fight over. If there would be
three battlefields, then having an army twice your size would not matter.
Your opponent would need to have thrice as many troops as you have. 

This leads to another important insight: offense is the best defense. How
come? Not all conflicts aim for complete and immediate victory. For example,
guerrilla forces focus on achieving a series of small local victories to
gradually weaken their enemy over time. Terrorist groups frequently aim to
instill fear and provoke outrage locally, leveraging these emotions to deter
certain behaviors or diminish legitimacy of the ruling regime. These groups
are fine with winning just one "castle". To defend all "castles" properly
the stronger "warlord" needs to have a huge advantage. So the stronger
"warlord" would be better off not defending, but attacking their opponent.
Though, obviously, it is not always possible.

## Partitions

If Enemy has a bit more troops, things quickly become more complicated. If
\\\( B / 2 < E \leq 2/3\cdot B \\\), then Blotto no longer has a safe way to
win the war.

Obvious strategy for Blotto, would be to try to send \\\( E \\\) soldiers to
a one castle, and at least \\\( E / 2 \\\) troops to the other. To avoid the
risks of being predictable, Blotto would randomly select a primary target,
e.g., by flipping a coin.

Enemy would prefer to know which castle Blotto has allocated fewer troops
to, as this would allow for an effective mismatch. However, lacking this
information, the best strategy for Enemy is to randomly select a castle to
heavily reinforce with the majority of their troops, while sending only a
token force (if any) to the other.

If Enemy is even stronger, then the logic becomes much more complicated, as
it involves progressively more and more layers of "what my opponent thinks I
think ...". For these cases a simple graphical algorithm can be used to find
the higher order partitions.

## Graphical algorithm

To use the graphical algorithm first we need to plot resource constraints of
both warlords. The only constraint in our specific scenario is the total
amount of troops: no warlord may assign more troops to the castles than they
actually have available. If values on x-axis represent troop count assigned
to the first castle, and values on y-axis represent troop count assigned to
the second castle, then the resource constraint curves for both warlords
will be a straight diagonal lines. These lines plot all possible pairs of
solutions to:

\begin{equation}
x+y=T.
\end{equation}

In the above \\\( T \\\) is the total troop count in the warlord's army. The
equality is strict if we assume that warlords use all their troops and put
nothing in reserve. If there is a point for warlord to keep some troops in
reserve, then we could replace \\\( = \\\) sign with \\\( \leq \\\) sign.

Now when we have plotted resource constraint lines, we can make use of the
graphical algorithm. The graphical algorithm is essentially a three-step
process:

1. Vertical line is drawn from \\\( (E, 0) \\\). Each time it intersects any
   diagonal line representing resource constraints of a warlord, we rotate
   it 90 degrees alternating between counterclockwise and clockwise
   rotations (so that we see snaking curve, which looks like reflections
   between two mirror surfaces). Every other rotation, we not only reflect
   but also extend the "ray" towards the axes. We repeat the procedure until
   the reflected "ray" finally leaves the graph.
2. Now we start from \\\( (0, E) \\\) by drawing a horizontal line. As
   before we follow the same "reflection" logic.
3. At this point we will have \\\( n \\\) triangles below Enemy's (weaker
   warlord) resource constraint line and \\\( 2 n - 1 \\\) triangles below
   Blotto's resource constraint line. Enemy will play inside those \\\( n
   \\\) triangles, while Blotto will pick those triangles (exactly \\\( n
   \\\) of them), which do not overlap with Enemy's triangles on any axis.

It sounds somewhat daunting and complicated, but it is not if you get the
gist of it. For more details on the algorithm  see the section 4.3 in [cite
id="Macdonell2015ET"]. Here, we invite you to experiment with the
interactive graph app below. 

## Interactive graph app

The app below illustrates Nash equilibrium strategies by relying on the
logic of the graphical algorithm. The default troop counts in the app are
tuned to the \\\( B / 2 < E \leq 2/3\cdot B \\\) case we have discussed in
detail earlier in this post. Though you may want to change the troop count
to see the other possible strategic partitions. You could even make Enemy
stronger than our titular Blotto!

[html5-interactive width="520" height="435" mode="iframe"
url="/uploads/models/game-theory/blotto-game/graph-varied-count.html"]

As in the article [cite id="Macdonell2015ET"], we have shaded the triangles
representing the warlords' Nash equilibrium strategies. Although we haven't
specifically distinguished between them, a careful reader will notice that
the triangles below the resource allocation curve correspond to each
warlord's optimal play strategy.

## Interactive game app

Besides exploring the strategy graph above, you could also try playing
against computer who uses Nash equilibrium strategies. This app is mostly
similar to the app from the [earlier
post]({filename}/articles/2024/colonel-blotto-game.md), but with an
important difference - there are just two castles now!

[html5-interactive width="520" height="220" mode="iframe"
url="/uploads/models/game-theory/blotto-game/index-varied-count.html"]

Also, playing a lot of games against the computer will be somewhat hard, as
you are expected to randomize, so we have added "relinquish control"
checkbox. If you tick it, then the computer will play against itself.

Though note, that if you set a proper fixed allocation (which would be a
part of mixed Nash equilibrium strategy), your record will still be similar
to the automated computer's record. This is because the opponent you are
playing against is dumb in a sense. All they know is mixed equilibrium
strategy, and they won't react to you playing the same thing over and over
again. But, this (adaptability) is another topic for another time.
