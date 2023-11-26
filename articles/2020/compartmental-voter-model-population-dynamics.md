Title: Total population dynamics in the compartmental voter model
Date: 2020-06-02 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, voter model, opinion dynamics, postdoctoral project, compartmental voter model, Zipf's law
Slug: total-population-dynamics-in-the-compartmental-voter-model
Status: published
Image_url: uploads/2020/cvm-pops.png

Today we continue our [series of posts](/tag/compartmental-voter-model) on
compartmental voter model. Recently I had another idea how to examine the
impact of the finite capacity on the
[compartmental voter model]({filename}/articles/2020/compartmental-voter-model.md)
dynamics. And this approach also involves populations dynamics in the model.

For a different approach see the
[earlier post]({filename}/articles/2020/compartmental-voter-model-finite-capacity.md)
on the finite capacity in the compartmental voter model.
<!--more-->

The app we make available with this post is quite similar to the one from the
[earlier post]({filename}/articles/2020/compartmental-voter-model.md), but
this one is different as we report distinct quantities: total number of agents
in the compartment (blue dots) and scaled number of agents of the first type
(red dots). We report spatial rank-size distributions for both of them.

If capacity would have no impact on the model dynamics, then both observables
would have similar rank-size distributions and the curves would noticeably
overlap.

![We can see that the capacity does not have influence on the dynamics if it is infinite.]({static}/uploads/2020/cvm-pops.png "We can see that capacity does not have influence on the dynamics if it is infinite.")

![We can see that the capacity does have influence if it is finite.]({static}/uploads/2020/cvm-pops-2.png "We can see that capacity does have influence if it is finite.")

## Interactive app

As always, feel free to explore on your own!

[html5-interactive
url="/uploads/models/compartmental-voter-model/index-pops.html"
width="520" height="300" mode="iframe"]

[acknowledge id="postdoc-ak-2017"]
