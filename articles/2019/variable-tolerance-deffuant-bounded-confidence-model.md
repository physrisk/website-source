Title: Variable tolerance in Deffuant's bounded confidence model
Date: 2019-06-11 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, bounded confidence, postdoctoral project
Slug: variable-tolerance-deffuant-bounded-confidence-model
Status: published
Image_url: uploads/2019/variable-tolerance-deffuant-bounded-confidence-model.png

Let us briefly come back to the [Deffuant's model]({filename}/articles/2019/deffuant-bounded-confidence-model.md)
and look at one of its common generalizations. Namely let us allow tolerance to
vary. Varying tolerance to different opinions would be a rather natural
assumption as it is usually hard to persuade a radical, while it is somewhat
easier to persuade a moderate.
<!--more-->

So let us say that our tolerance function has the following form:

\begin{equation}
\mathrm{tolerance}(x) = \epsilon\_{min} + \epsilon \frac{x^\alpha (1-x)^\beta}{x\_s^\alpha (1-x\_s)^\beta} .
\end{equation}

In the above \\\( x\_s = \frac{\alpha}{\alpha+\beta} \\\) is the point at which
tolerance function has largest value. Note that if both powers are zeros,
\\\( \alpha = \beta = 0 \\\), this tolerance function is flat and the model
becomes equivalent to the original [Deffuant's model]({filename}/articles/2019/deffuant-bounded-confidence-model.md).
You can examine how the tolerance function looks like using app below.

[html5-interactive width="520" height="240" mode="iframe"
src="/uploads/models/opinion-dynamics/deffuant-bc-model/vari-beta.html"]

Now that the two randomly selected will have differing tolerances we have to
redefine our interaction rules from [previously]({filename}/articles/2019/deffuant-bounded-confidence-model.md).
Namely, let us say that agents will always interact, but each of them separately
will be affected by the interaction only if the absolute difference between the
opinions is less than their tolerance. In other words agent \\\( i \\\) is
affected by interaction with agent \\\( j \\\), if:

\begin{equation}
| x\_i - x\_j | < \mathrm{tolerance}(x\_i) .
\end{equation}

This means that after the interaction both agent, a single agent or no agents
might update their opinions.

Feel free to explore how the tolerance function parameters change the dynamics
of the [Deffuant's model]({filename}/articles/2019/deffuant-bounded-confidence-model.md). One
thing to note is that when \\\( \alpha \neq \beta \\\), then most "tolerant"
agents are not the moderates (\\\( x \approx 0.5 \\\)), but ones having their
leanings (\\\( x < 0.5 \\\) or \\\( x > 0.5 \\\)). The side the most "tolerant"
agents will spawn less clusters than the opposite side (one with the less
"tolerant" agents).

[html5-interactive width="520" height="505" mode="iframe"
src="/uploads/models/opinion-dynamics/deffuant-bc-model/vari-eps.html"]

[acknowledge id="postdoc-ak-2017-lit"]
