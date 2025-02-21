Title: Coding Colonel Blotto tournament in Matlab
Date: 2025-02-18 08:00
Author: Aleksejus Kononovicius
Tags: video, statistics, Matlab, github, Colonel Blotto game, FiveThirtyEight
Slug: coding-colonel-blotto-tournament
Status: published
Image_url: uploads/2025/coding-colonel-blotto-tournament.jpg

As I have already written couple of times, I used to teach
[Matlab](/tag/matlab/). My experience was quite varied with many highs and
as many lows. The high points were usually introducing and solving more
complicated or involved problems, and also helping students to understand
them. One time I held a tournament similar to [Riddler
Nation](https://fivethirtyeight.com/features/can-you-rule-riddler-nation/)
tournament hosted by Riddler on
[FiveThirtyEight](https://abcnews.go.com/538), which was based on the
[Colonel Blotto game](/tag/colonel-blotto-game/).

In this post I discuss the problem posed to my students. And I also provide
a live session recording of me implementing [Colonel
Blotto](/tag/colonel-blotto-game/) tournament in [Matlab](/tag/matlab/).
<!--more-->

## The problem

> In a distant, war-torn land, there are 10 castles. There are two warlords:
> you and your archenemy. Each castle has its own strategic value for a
> would-be conqueror. Specifically, the castles are worth 1, 2, 3, ..., 9,
> and 10 victory points. You and your enemy each have 100 soldiers to
> distribute, any way you like, to fight at any of the 10 castles. Whoever
> sends more soldiers to a given castle conquers that castle and wins its
> victory points. If you each send the same number of troops, you split the
> points. You don’t know what distribution of forces your enemy has chosen
> until the battles begin. Whoever wins the most points wins the war.

This is how the problem was formulated in the [original
contest](https://fivethirtyeight.com/features/can-you-rule-riddler-nation/)
on the website [FiveThirtyEight](https://abcnews.go.com/538), which asked if
you can rule the Riddler Nation. The contest asked competitors to provide
fixed battle strategies (as a vector of 10 numbers), to be used against
other competitors. In case of fixed battle strategies, the winner could be
determined in a single "war" (comparison of the strategies).

Tournament I held was meant to be slightly different. I wanted my students
to show their [Matlab](/tag/matlab/) and critical thinking skills, so I
decided to encourage them to create random and adaptable troop allocation
strategies by declaring a winner only after 1001 wars. Sadly, only a few
students actually implemented adaptable strategies, but those who did
managed to perform rather well in the tournament. Some of them even beating
my own strategy :)

If you are interested in the minute details of the problem, then [here you
will find a
file](https://github.com/akononovicius/NMI-coding-session-archive/blob/main/2021-blotto-tournament/task.pdf)
which I gave to my students.

## The video

The video below is an edited recording of the live coding session, during
which I have written [Matlab](/tag/matlab/) program to run the tournament.
If you want to learn [Matlab](/tag/matlab/) or if you want to see how to
approach a rather complicated problem (creating tournament software is even
more complicated than building adaptable strategy), then you might find the
video below interesting (though note that the duration is almost 2.5 hours).

[youtube v="jCt0Kc687jA"]

## The finalized tournament scripts

I have archived all of my more complicated [Matlab](/tag/matlab/) scripts in
a dedicated GitHub repository (see
<https://github.com/akononovicius/NMI-coding-session-archive/>). Scripts
related to this particular topic are stored in `2021-blotto-tournament`
directory ([click here to access it
directly](https://github.com/akononovicius/NMI-coding-session-archive/tree/main/2021-blotto-tournament)).

