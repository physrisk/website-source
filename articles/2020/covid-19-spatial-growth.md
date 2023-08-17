Title: COVID-19 spatial growth
Date: 2020-09-01 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, epidemiology, statistics, Reed-Hughes mechanism, Zipf's law
Slug: covid-19-spatial-growth
Status: published
Image_url: uploads/2020/covid-19-spatial-growth.png

I have spent significant part of this summer reading papers on the modeling of
COVID-19. It helped a lot that majority of them were quite terrible, those
have saved me some time. Though there were also a few more interesting ones.
In [cite id="Burghardt2020"] it was shown that the distribution of deaths and
cases over US counties follows a power-law distribution. This finding is quite
similar to [Zipf's law](/tag/zipfs-law), but
specifically for the [epidemic spread](/tag/epidemiology/).

In this post we will replicate the empirical finding and in the next post we
will consider a theoretical model to explain such observation.
<!--more-->

To verify the results presented in [cite id="Burghardt2020"] we have used
publicly available data available at
<https://github.com/CSSEGISandData/COVID-19>. To be exact, we are using CSSE
time series files for
[confirmed cases](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv)
and
[deaths](https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_US.csv)
in the US. We have downloaded the data on August 5th, 2020.

In the interactive app below you can select specific date, \\\( t \\\). The app
will plot the probability density function of confirmed cases, \\\( I \\\),
(blue curve) and deaths, \\\( D \\\), (red curve). Note that samples, or random
variates, here are case and death counts of each county at specific \\\( t \\\).

[html5-interactive mode="iframe"
src="/uploads/models/reed-hughes/covid.html" width="520" height="240"]

Note that such approach is somewhat similar to the
[compartmental voter model](/tag/compartmental-voter-model/) I have written a
lot before the summer holidays.
