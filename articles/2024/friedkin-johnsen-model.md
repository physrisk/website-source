Title: Friedkin-Johnsen model
Date: 2024-11-26 08:00
Author: Aleksejus Kononovicius
Tags: interactive, opinion dynamics, agent-based models, DeGroot model
Slug: friedkin-johnsen-model
Status: published
Image_url: uploads/2024/friedkin-johnsen-model.png

Another model I have seen recently featured a lot in the literature is the
Friedkin-Johnsen model. This model is a generalization of the [DeGroot
model]({filename}/articles/2024/degroot-model.md) we have discussed earlier,
but it adds a novel twist which allowed it to become a ground-breaking model
on its own [cite id="Noorazar2020"]. Namely, it has added stubbornness into
the DeGroot model [cite id="Friedkin1990"].
<!--more-->

## The model

So the agents still have real-valued opinions and there exits a trust
network between them. The opinions are still averaged over the trusted
agents, but the agents also remember their initial opinion and are pulled
towards it. The update formula is then given by:

\begin{equation}
    o\_i(t+1) = (1 - s\_i) \sum\_j T\_{i,j} o\_j(t) + s\_i o\_i(0).
\end{equation}

In the above all of the parameters are identical to the [DeGroot
model]({filename}/articles/2024/degroot-model.md), with one new parameter -
\\\( s\_i \\\) stands for the stubbornness of the agent (willingness to
retain initial opinion).

## Interactive app

As should be expected, stubborn crowds become less wise. Wisdom of the crowd
effect (shrinkage of the opinion distribution) is still present, but now the
width of the final opinion distribution depends on the value of \\\( s\_i
\\\), which in this app we have kept the same for all agents. It is assumed
to be equal to just \\\( s \\\).

[html5-interactive width="520" height="270" mode="iframe"
url="/uploads/models/opinion-dynamics/friedkin-johnsen-model/index.html"]
