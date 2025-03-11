Title: S. Galam's referendum model
Date: 2025-03-11 07:02
Author: Aleksejus Kononovicius
Tags: agent-based models, interactive, opinion dynamics
Slug: galam-referendum-model
Status: published
Image_url: uploads/2025/galam-referendum-model.png

[Eleven years
ago]({filename}/articles/2014/many-particle-interaction-in-the-kinetic-exchange-models.md)
I have written a post about many particle interactions in the kinetic
exchange models. Few days ago I have stumbled upon that post and noticed
that it features a model that has little in common with [kinetic exchange
models](/tag/kinetic-models/). Under these circumstances the only natural
thing is to write a dedicated post highlighting the said model.

So, consider how we make decisions. Not all of us are skilled and informed
enough to make decisions on our own in all possible everyday scenarios. I
may be a physicist, but I do not understand some branches of physics well
enough. I am not speaking about the questions outside my work or hobby
expertise. In such cases, we must rely on our social contacts
(acquaintances, co-workers, family members, etc.) to help us decide.
<!--more-->

## Referendum model

In Galam's referendum model [cite id="Galam2008IntJModPhysC"] people meet in
their discussion groups of varied sizes. For simplicity sake, let us assume
that group sizes and composition are random. In other words, during each
round of discussion (time tick) the people will form new groups of a random
size. Thus, the most important parameter in this model is the group size
distribution (the app allows groups up to \\\( 6 \\\) people to be formed).

To keep the discussion as simple as possible, let us assume that afterwards,
everyone in the group will have same opinion as the initial majority in the
group. Let us also assume that the question is binary, i.e., it may be
answered with "yes" or "no". If an odd number of people form a group, there
will be a clear initial majority. On the other hand, if there is an even
number of people in the group, then there will be a certain probability to
end up no clear initial majority (both "yes" and "no" options receiving the
same "support"). In this case, S. Galam notes that people have a
conservative tendency, and thus, in case of a tie, the members of such
discussion group will choose the more conservative option (lets say that it
is the "no" option). Interestingly enough, this simple and very realistic
assumption may cause society to shift from a positive (\\\(\xi(t)>0\\\))
attitude towards the negative (\\\(\xi(t)<0\\\)) attitude.

We want to draw your attention to the fact that \\\( \xi \\\) here
represents the mean opinion. If you prefer a raw fraction of individuals
choosing the "yes" option, then you may obtain it this way:

\begin{equation}
    x\_{+} = \frac{1 + \xi}{2} . 
\end{equation}

## Interactive app

We invite you to explore the interactive app below. You may adjust initial
condition, \\\(\xi(0)\\\), and the probabilities to have specific group
sizes, \\\(p[N]\\\). Observe what happens when the probability to have
even-sized group grows small, \\\(p[2] + p[4] + p[6] \ll p[3]+p[5]\\\),
i.e., when the tie-breaker mechanism applies rarely.

[html5-interactive width="520" height="345" mode="iframe"
url="/uploads/models/opinion-dynamics/galam-model/index.html"]

