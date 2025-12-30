Title: StatQuest: Bootstraping
Date: 2022-03-08 08:00
Author: Aleksejus Kononovicius
Tags: video, statistics, methods, Matlab, students
Slug: statquest-bootstraping
Status: published

During the "Numerical Methods I" course together with students at [Faculty
of Physics](https://www.ff.vu.lt) we talk about experimental data fitting.
[Matlab's](/tag/matlab/)
[polyfit](https://www.mathworks.com/help/matlab/ref/polyfit.html) function
will cover most common use cases, but in Physics we are often interested not
only in the point estimates of measurements. We also care about associated
errors and the documentation of
[polyfit](https://www.mathworks.com/help/matlab/ref/polyfit.html) function
fails to deliver on that. Unless you are well versed and statistics and know
that you need to calculate covariance matrix and take square root of values
on its diagonal.

I was caught of guard by the students who were interested in actually
estimating the measurement error using
[polyfit](https://www.mathworks.com/help/matlab/ref/polyfit.html). As at the
time I wasn't prepared, I have told them about Bootstrap method, which I
like a lot. I like this method, because it has natural interpretation (it
gives us a confidence interval) and is applicable even in highly complex
situations, for which no analytical error estimation formulas exist.

More about this method in the following video by [StatQuest with Josh
Starmer](https://www.youtube.com/@statquest).

[youtube v="Xz0x-8-cgaQ"]
