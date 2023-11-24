Title: Cellular network
Date: 2013-09-23 07:12
Author: Aleksejus Kononovicius
Tags: Interactive models, Network models, Erdos-Renyi model, small world
Slug: cellular-network
Status: published

The
term "cellular network" might confuse some readers as it also bears a
meaning of the mobile phone network. Yet this time we will not talk
about the mobile phone networks, though it is quite possible to say a
lot about them from a point of view of the network theory and the most
recent research. This time we will consider a new, at least on Physics
of Risk website, network topology and at the same time [network
formation
model](/tag/network-formation-models).<!--more-->

Interestingly enough this network topology is very intuitive, yet formal
definition it was given only recently. One of the first works to
formally define cellular networks was published 8 years ago (see \[cite
id="Frantz2005CASOS"\]). One should probably start to familiarize
himself with cellular networks from that paper, but we will share some
brief and less formal information on the same topic.

Cellular network - what is it?
------------------------------

Cellular network is a network, topology of which has well pronounced
groups of nodes (in a similar manner as we have seen core and periphery
in the [core-periphery
networks](/core-periphery-network-models "Core-periphery network models")),
which are connected with distinct topology. The distinctness of the
topology might be minor - larger density of the edges between the nodes
might be enough. Look at [Fig. 1](#attachment_2510) below. The separate
group of nodes are so well pronounced that it appears that they were
grown separately and only then joined to form the network.

![Fig.
1: Example of a cellular network. In this figure we see 9 marked (using
distinct colors) "cells" of
nodes.](/uploads/2013/07/cellular-network.png "Example
of a cellular network. In this figure we see 9 marked
(using distinct colors) 'cells' of nodes."){#attachment_2510} 

Why are the cellular networks intuitive? Imagine that people live on the
island (example taken from \[cite id="Jackson2005JEEA"\]). Moving by
land is not very hard, so it is natural to expect that most islanders
will know each other. While moving by water is a harder task, so the
communication with inhabitants of other islands will be extremely rare.
So, what topology does the social network have? Cellular network!
Actually you need no exotic assumptions about the islands, because most
of the people form most of their relationships in the place they spend
most time in - educational institutions (schools, universities, ...),
workplaces or leisure places.

How to make a cellular network?
-------------------------------

The answer was already given - you just need to grow distinct parts of
the network separately and afterwards connect them. It is important for
the connection mechanism to differ at least somewhat. For example, we
could grow network parts by using [Erdos-Renyi
model](/erdos-renyi-model "Erdos-Renyi model")
and later connect them using [Barabasi-Albert
model](/barabasi-albert-model "Barabasi-Albert model").
But let us more broadly discuss a simpler case.

So let us start with \\\(  N \\\) nodes. Let's place each node, upon
creation, in a random point of the finite 1-dimensional space. Now let
us split the space into \\\(  N\_c \\\) even parts. These parts are
actually our "growth" cells. Inside these cells let us use [Erdos-Renyi
model](/erdos-renyi-model "Erdos-Renyi model")
to connected the nodes with probability \\\(  p\_{ic} \\\). After
iterating over all cells, let us now create connections between them
using the same [Erdos-Renyi
model](/erdos-renyi-model "Erdos-Renyi model"),
but now the nodes in different cells will be connected with probability
\\\(  p\_{bc} \\\) (which should be significantly smaller than \\\( p\_{ic} \\\)). After completing this step we would obtain a cellular
network model.

[html5-interactive
url="/uploads/models/network-models/cellular-network.html"
mode="iframe" height="540" width="455"]
