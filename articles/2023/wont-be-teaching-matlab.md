Title: Won't be teaching Matlab!
Date: 2023-02-07 08:00
Author: Aleksejus Kononovicius
Tags: general, Matlab, Python
Slug: wont-be-teaching-matlab
Status: published
Image_url: uploads/2023/matlab.jpg

So, I won't be teaching [Matlab](/tag/matlab/) anymore. Yay! Why? While I
enjoy programming and learning new things (one of the reasons I agreed to
teach [Matlab](/tag/matlab/) in the first place) my experience using
[Matlab](/tag/matlab/) was quite terrible. Can you enjoy teaching technology
that you don't like? Rant follows :)
<!--more-->

I could have remade the course using [Python](/tag/python/), but I decided
against it. It would make little sense because I have just recently
"perfected" (made so that it would require only minor yearly maintenance
changes) the course in [Matlab](/tag/matlab/). And replacing it would take
too much effort for what it is worth to me.

![No Matlab!]({static}/uploads/2023/matlab.jpg)

Why I don't like [Matlab](/tag/matlab/)? In short, it feels archaic (I have
learned programming using Turbo Pascal, and [Matlab](/tag/matlab/) feels a
lot like it), it encourages poor programming practices, and it was quite
terrible for my use case. As is well documented on Physics of Risk, most of
the time I am conducting stochastic simulations (which work just fine most
of the time), doing data analysis (`readtable` makes things better, but
things just don't work as smooth as with `pandas`) and making figures (total
deal breaker).

From my point-of-view biggest deal breaker is making figures. My first issue
is that what you see in figure window may (and will) differ from what you
get when you save a file. For example, color palette will be different, or
the frame around the plot will be replaced by x-y axes. On the other hand,
what you get when you save a file will depend on how the things look in the
figure window. For example, aspect ratio and resolution for some reason do
carry over. Typically, when I am making figures, I want them to be of
specific size (down to a pixel or a millimeter), but [Matlab](/tag/matlab/)
will know better - it will adjust the size to its liking. Why?
[Python's](/tag/python/) `matplotlib` will do exactly what I am asking of
it, even if the end result looks terrible. It is a sign that I need to
adjust things (font size usually), but how to convince
[Matlab](/tag/matlab/) to do what I want? My colleague, who uses
[Matlab](/tag/matlab/) on daily basis simply advised me to use PDF editors
to adjust the figure to my liking... Why should I do this manual labor? I
have already spent time writing a program to do the figure. In the end, I
have developed few hacks to circumvent this particular problem, but they
break from one [Matlab's](/tag/matlab/) version to another, and do not work
at all if I want to make figures of strange dimensions (for example,
extremely long figures).

My other issue with [Matlab](/tag/matlab/) was its lack of "stability".
During the first year I have made my slides and wanted to reuse them (with
minor changes) in the next year. But the students often complained that the
examples from slides didn't work for them. I have update my
[Matlab](/tag/matlab/), and checked. Indeed, the students were right... So,
this means that I need to check every example from the slides every year
against the new version? Or should I read the changelog for every new
release? I guess, but why piece of software aimed at corporate applications
is that unstable? [Python](/tag/python/) and its libraries in my experience
have remained much more stable. I am still able to use my 5-6 year old
python scripts without making big changes. Similarly, my really old
Mathematica scripts still work well (usually newer versions of Mathematica
are able to apply necessary changes without much manual interference).

As an instructor I have found [Matlab](/tag/matlab/) to set poor example for
students. I have tried to instill good practices (consistency, good code
style, DRY and KISS principles, modular program design, writing clean code,
using functional programming style), but it is hard to do when
[Matlab](/tag/matlab/) itself often goes against those practices. It is not
consistent with its function/class/variable naming: sometimes it is
`nocase`, sometimes it is `camelCase`, at other times nonsensical
abbreviations are used. Function behavior is often inconsistent (as it
depends on number of inputs and/or outputs and even on their types!). There
are many similar functions, which should do the same thing, but differ in
minuscule details (without an easy way to discern between them). A lot of
basic syntactic keywords, which were mandatory in the older version of
Matlab, are optional in the newer version of Matlab.

As an instructor I do not think that [Matlab](/tag/matlab/) is a good first
language. It is not a general purpose language (you can't make fun things as
you learn). It shines when you try to avoid `for` loops and use
vectorization instead, but to get a good and transferable programming skills
one needs to understand loops. To appreciate vectorization one needs to
understand `for` loops, too.

![Matlab for vs vectorization]({static}/uploads/2023/matlab-vectorization.png)

I also didn't like that arrays start at 1. Come on... I have made lots of
mistakes during live coding sessions simply because of this.
[Python](/tag/python/), JavaScript and C (languages I use almost every day)
all start their arrays at 0. So yeah, after a semester with
[Matlab](/tag/matlab/) I had to relearn this. Additional confusion arising
because [Matlab](/tag/matlab/) uses `()` to index arrays instead of the
usual `[]`.

Also, I am not a GUI person. [Matlab](/tag/matlab/) is built for people who
like clicking things and using mouse. It has Apps, which is arguably its
strongest feature. When looking for good [Matlab](/tag/matlab/) handbook I
have found one, which was mostly composed of screenshots. Showing what to
click to get results. Yeah... I guess this approach is good if you just want
things done quickly. But without proper understanding, you can get wrong
results and not notice it. When you write the code manually, you will need
to consult the documentation and understand what your code actually does. As
a simple example of this, some students have I asked me how to calculate fit
errors. I have asked them what they mean by "error". I got the answer that
Origin outputs an "error" whatever it means... That is the GUI effect for
you.

![Matlab GUI fit app]({static}/uploads/2023/matlab-fit-app.png)

Finally, [Matlab](/tag/matlab/) costs a lot (my faculty pays for it, but
still the money could find a better use?) and is closed source. By being
pricey and closed source (GNU Octave is not compatible with newest
[Matlab](/tag/matlab/) versions) it is not accessible to some researchers
world wide. Some of them use different proprietary software, others do not
have the funds to buy a license. [Python](/tag/python/) on the other hand
can be used by anyone with a reasonably new computer.

So, was my teaching experience all that bad? No. I have met quite a few
students who made this experience worthwhile. I have enjoyed satisfying
students' curiosity, encouraging independent exploration, giving advanced
advice as well as answering basic questions.
