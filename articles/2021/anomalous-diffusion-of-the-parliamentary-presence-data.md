Title: Anomalous diffusion of the parliamentary presence data
Date: 2021-01-19 08:00
Author: Aleksejus Kononovicius
Tags: anomalous diffusion, opinion dynamics, politics, postdoctoral project
Slug: anomalous-diffusion-of-the-parliamentary-presence-data
Status: published
Image_url: uploads/2021/anomalous-diffusion-of-the-parliamentary-presence-data.png

While my [postdoctoral project](/tag/postdoctoral-project/) has already finished
(actually it did finish almost a year ago), I still have things related to it
I want to discuss here on Physics of Risk. This time let me take an empirical
perspective, let me consider parliamentary presence data. Why this data could be
interesting to us? Because, it was shown that parliamentary presence in the
Brazilian parliament does exhibit [anomalous diffusion](/tag/anomalous-diffusion/)
[cite id="Vieira2019PRE"]. And it seems that Lithuanian Seimas does too
[cite id="Kononovicius2020JStat"].
<!--more-->

## Data

We have accessed the open data available
[from Lithuanian Seimas website](https://www.lrs.lt/sip/portal.show?p_r=35391&p_k=1)
on 2019-06-08. Based on the voting registration data we have reconstructed
presence data for the 2008-2012 and 2012-2016 legislatures. We have assumed
that if the representative has registered to voter on at least one issue in
that days agenda, then the representative was present that day.

There was a minor issue with some representatives leaving Seimas (dying, being
elected to another post and etc.) and thus their record being incomplete. While
in such cases their replacement should be elected as soon as possible, not
always the replacement managed to be elected before the next session. So, while
we detected replacements and joined the presence record of the predecessor
and successor, there still was some data missing. In such cases (around 10%) we
have replaced such invalid records with copies of valid ones. This replacement
procedure shouldn't have profound effect on the results.

We have made the cleaned up data set available on GitHub (find it
[here](https://github.com/akononovicius/lithuanian-parliamentary-presence-data)).

## Observing anomalous diffusion

Let us encode presence of representative \\\( i \\\) in \\\( t \\\)-th daily
session as:

\begin{equation}
\eta^{(i)}\_t = 1 .
\end{equation}

Likewise let us encode absence as:

\begin{equation}
\eta^{(i)}\_t = 0 .
\end{equation}

Now let us study the cumulative presence data during selected legislature: 

\begin{equation}
x^{(i)}\_{t+1} = x^{(i)}\_{t} + \eta^{(i)}\_{t+1} .
\end{equation}

As in previous posts on [anomalous diffusion](/tag/anomalous-diffusion/) we will
consider [mean]({filename}/articles/2020/brief-introduction-into-anomalous-diffusion.md) and
[standard deviation]({filename}/articles/2020/standard-deviation-of-anomalous-diffusion.md) of
\\\( x^{(i)}\_t \\\) series. Note that in this case our ensemble will consist
of \\\( 141 \\\) trajectories, each corresponding to a representative in
Lithuanian Seimas.

![(figure from my paper) Empirical presence time series of selected
representatives ((a) and (d)), also mean ((b) and (e)) and standard deviation
((c) and (f)) series for the considered legislatures. While mean grows
linearly, standard deviation exhibits sub-linear growth with power law exponent
equal to 0.85.]({static}/uploads/2021/anomalous-diffusion-of-the-parliamentary-presence-data.png
"(figure from my paper) Empirical presence time series of selected
representatives ((a) and (d)), also mean ((b) and (e)) and standard deviation
((c) and (f)) series for the considered legislatures. While mean grows
linearly, standard deviation exhibits sub-linear growth with power law exponent
equal to 0.85.")

Note that similar analysis was conducted using Brazilian parliamentary
presence data in [cite id="Vieira2019PRE"]. In the paper by Vieira and others
anomalous diffusion, actually ballistic regime, was found. With the Lithuanian
data we can confirm the presence of anomalous diffusion, yet we fail to confirm
the presence of ballistic regime (the growth of standard deviation is sub-linear
in our Lithuanian Seimas data set). This might be due to the difference in
parliaments as well as in the different way we treat the missing data. Some
insights to the systematic difference will be given in next post in which we
will consider a [voter model](/tag/voter-model/) as model for the parliamentary
presence.

[acknowledge id="postdoc-ak-2017-lit"]
