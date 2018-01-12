Title: Compartmental voter model and UK census data
Date: 2020-06-16 08:00
Author: Aleksejus Kononovicius
Tags: Interactive models, Agent-based models, voter model, opinion dynamics, postdoctoral project, compartmental voter model, Zipf's law
Slug: compartmental-voter-model-and-uk-census-data
Status: published
Image_url: uploads/2020/cvm-london.png

We are concluding the [ongoing series of posts](/tag/compartmental-voter-model)
on the compartmental voter model. As in [cite id="Kononovicius2019Comp"] we
will conclude with comparing the model against
[UK census data]({filename}/articles/2020/rank-size-distribution-and-uk-census-2011-data.md).
Though note that the interactive app does not allow for the comparison - it
just allows to generate semi-realistic spatial rank-size distributions.
<!--more-->

## Comparison figures from the article

All of the following figures report spatial rank-size distributions for the
empirical data (black curves). While the simulation data is represented by the
red shaded area, which shows 95% confidence interval. While the agreement is
not excellent, the differences are quite easy to explain - not all
socio-demographic categories (social identities) are as important when making
choice on where to live.

![Ethnic group distribution in London: \(a\) White, \(b\) Asian, \(c\) Black and \(d\) other.](/uploads/2020/cvm-london.png "Ethnic group distribution in London: \(a\) White, \(b\) Asian, \(c\) Black and \(d\) other.")

![Religious group distribution in Leicester: \(a\) Christians, \(b\) no religion and \(c\) other.](/uploads/2020/cvm-leicester.png "Religious group distribution in Leicester: \(a\) Christians, \(b\) no religion and \(c\) other.")

![Working class distribution in Sheffield: \(a\) top, \(b\) middle, \(c\) bottom and \(d\) unemployed.](/uploads/2020/cvm-sheffield.png "Working class distribution in Sheffield: \(a\) top, \(b\) middle, \(c\) bottom and \(d\) unemployed.")

## Interactive app

The app we make available with this post is quite similar to the one from the
[earlier post]({filename}/articles/2020/compartmental-voter-model.md). Yet this
one has larger preset \\\( T \\\) value, which accompanied buy UI elements,
which allow to make agent types statistically distinguishable. Note that this
app is somewhat resource hungry and thus might be quite slow.

[html5-interactive
url="/uploads/models/compartmental-voter-model/index.html"
width="520" height="330" mode="iframe"]

[acknowledge id="postdoc-ak-2017"]
