Title: Facebook contest data set explanation
Date: 2018-09-18 08:00
Author: Aleksejus Kononovicius
Tags: facebook, data science, marketing, opinion dynamics, Agent-based models
Slug: facebook-contest-data-set-explanation
Status: published
Image_url: uploads/2018/facebook-contest-data-set-explanation.png

During summer hiatus I have promised to look into a data set I have extracted
from [one particular Facebook contest](https://www.facebook.com/HAPPYLietuva/photos/a.1208205755944127.1073741828.1207052856059417/1699711786793519/).
While many Facebook contests are not based on any logical reasoning, this
contest appeals to me as it appears to require at least some thought or
expertise.

Last time I have briefly explored the [data set]({filename}/articles/2018/facebook-contest-data-set-exploration.md).
Now I will try to build models for the event-space observations.

<!--more-->

## The simple random model

For a first model let us simply consider that probability to get a comment
with an answer 5 is fixed, \\\( p \\\).

![Simple random model]({static}/uploads/2018/fb-comm-simple-p.png "The goodness
of simple model with different \\\( p \\\) values."){#fig3}

As one can see in [Fig. 3](#fig3) the best \\\( p \\\) is around \\\( 0.88 \\\).
Here I measure goodness as a sum of log-probabilities of the events that
occurred. As I operate in the event-space, I can ignore the inter-event time.

## The simple herding model

Next lets consider a bit more sophisticated model. Let us assume that the
probability to get a comment with an answer 5 depends on the current number of
comments with an answer 5:

\begin{equation}
p ( X\_5 \rightarrow X\_5+1 ) = \frac{\varepsilon + X\_5}{2 \varepsilon + X\_5 + X\_o}.
\end{equation}

Note that the equation above also includes \\\( X\_o \\\) which represent the
number of other comments. Hence we have to define the probability for an increase
in \\\( X\_o \\\):

\begin{equation}
p ( X\_o \rightarrow X\_o+1 ) = \frac{\varepsilon + X\_o}{2 \varepsilon + X\_5 + X\_o}.
\end{equation}

![Simple herding model]({static}/uploads/2018/facebook-contest-data-set-explanation.png "The goodness
of simple herding model with different \\\( \varepsilon \\\) values."){#fig4}

As we can see in [Fig. 4](#fig4) the model seems to work best with
\\\( \varepsilon =1.03 \\\). So which model works better? The simple random model
at its best produces goodness measure of \\\( -88.95 \\\), while the simple
herding model at its best produces goodness measure of \\\( -93.92 \\\). Though
the difference appears small, the simple random model seems to outperform the
simple herding model.

## The simple local herding model

Lets build another simple herding model, but now let the probabilities to be
proportional to the respective fractions of comments:

\begin{equation}
p ( X\_5 \rightarrow X\_5+1 ) = \frac{\varepsilon + \frac{X\_5}{N}}{2 \varepsilon +
\frac{X\_5 + X\_o}{N}},
\end{equation}

\begin{equation}
p ( X\_o \rightarrow X\_o+1 ) = \frac{\varepsilon + \frac{X\_o}{N}}{2 \varepsilon +
\frac{X\_5 + X\_o}{N}}.
\end{equation}

Because of this form of the transition probabilities I will refer to this model
as the simple local herding model.

![Simple local herding model]({static}/uploads/2018/fb-comm-simple-herd-local.png
"The goodness of simple local herding model with different \\\( \varepsilon \\\) values."){#fig5}

As we can see in [Fig. 5](#fig5) the model seems to work best with
\\\( \varepsilon =0.081 \\\). This model outperforms the simple random model as
it produces a better goodness measure of \\\( -88.3 \\\). Though once again the
difference appears to be small.

One could add further sophistication to the model, such as introducing asymmetry
into the model. Yet such sophistication no longer bring significant improvements.
In case of asymmetry, different \\\( \varepsilon \\\) values for "Guess 5" and
"other", goodness measure increases to \\\( -88.21 \\\).

## Interim conclusion

Though I cannot claim statistical significance, I am inclined to conclude
that herding behavior is strong in this data set as there are few reasons to
prefer 5 over other possible answers besides initial dominance of the comments
with answer 5.

Another important notice is that local herding model works better
than global herding model. This basically mean that people read only a few
comments before copying the prevalent answer. Thus it is not very probable that
mathematically literate comments (the ones pointing out that there are infinitely
many answers) reached the broader audience.

## Next time

Next time I will build Bass model with day-night pattern to reproduce the
temporal saturation pattern discussed [previously]({filename}/articles/2018/facebook-contest-data-set-exploration.md).
