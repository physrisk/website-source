Title: "Solving" Monopoly using Linear Algebra and Matlab
Date: 2021-06-08 08:00
Author: Aleksejus Kononovicius
Tags: video, statistics, board games, Markov chains, Matlab, github
Slug: solving-monopoly-using-linear-algebra-and-matlab
Status: published

When teaching Numerical Methods and Matlab I like to challenge myself and
take upon doing some new practical project to show my students how to apply
their newly acquired skills to do something fun. [Last
time]({filename}/articles/2019/football-data-analysis-and-modeling-showcase.md) I have built a simple
statistical football model and "played" a few fictional seasons to see how
likely was the outcome of the studied season. This year I have decided to
look into "solving" Monopoly using Linear Algebra.
<!--more-->

## Mathematical idea of "solving" Monopoly

This is not a big challenge in a sense of programming, as the hardest part
is to construct proper transition matrix, \\\( \mathbf{T} \\\), and then
simply update state vector, \\\( \vec{s}\_t \\\):

\begin{equation}
    \vec{s}\_{t+1} = \mathbf{T} \times \vec{s}\_t .
\end{equation}

This allows us to observe how the probabilities change from turn to turn.
Yet we mostly care about the long-term occupation of the squares (at least
in case of the Monopoly), so what we need is to solve eigenproblem:

\begin{equation}
    \mathbf{T} \times \vec{v} = \lambda \vec{v} .
\end{equation}

This is really easily done in Matlab by using <code>eig</code> function (it
is similarly easy to do in other high-level languages). And to find the
stationary distribution (long-term occupation probability of the squares) we
need to find the eigenvector corresponding to the unit eigenvalue.

## Lecture videos

To more properly explain the tools and programming function we will use to
solve monopoly, first I have started by solving to simple roll and move
games.

The first considered game was a simple linear game - players need to
reach the last square by rolling standard six sided dice. Obviously
stationary distribution of this game is trivial - 100% occupation of the end
square. So the question instead is "when the game will end?". You could ask
a similar question about the other classical game Snakes and Ladders. The
challenge with this game is not to allow any "particles" escape from it (to
make sure that no player pawn is able to leave the game board).

The second considered game was a simple "looped" game - players simply move
on a circular track ad infinitum. This game now has a proper stationary
distribution, because there is no terminating condition for the game. Still
the stationary distribution is very simple - all squares are equally likely
to be occupied given enough moves. The challenge with this game is implement
looping.

Both of the games and their solutions are discussed in more details in the
video below.

[youtube v="6145wsWtScM"]

After solving the two simple games, I hope that we are ready to "solve"
Monopoly (to find the stationary distribution of the occupation of
properties in Monopoly). Now, Monopoly includes much more complicated rules
than the "looped" game. Some of the complications include:

* Two standard six-sided dice are rolled.
* The track is longer than in the looped game.
* There is "Go to Jail" square, which transports all particles to the
  special "In Jail" square.
* There "Chance" and "Community chest" cards, which can transport all
  particles to various locations across the board. We have assumed that both
  decks of cards are reshuffled after each draw. Namely, we ignored their
  non-Markovian nature.
* There is "Speeding" rule (if you roll doubles three times in a row you go
  to Jail). This rule is not implemented in the video, but is available in
  the code repository.
* Leaving Jail is not that simple. In video we have assumed that the player
  is able (and willing) to leave the Jail immediately, but in a more
  complicated version (which is available in the code repository) we haven't
  assumed this.
* Game ends as players go bankrupt. We have ignore this and assumed that
  game goes on ad infinitum.

For a longer discussion together with "live" coding see the video below.

[youtube v="vvDQJ0QLN08"]

## Matlab's scripts

My code is available on GitHub, it includes the code coded during the live
lecture as well as a bit more complicated take on Monopoly, which I have
done off camera. URL:
<https://github.com/akononovicius/NMI-coding-session-archive/tree/main/2021-solving-games>.

