Title: Watts-Strogatz model
Date: 2013-08-12 07:03
Author: Aleksejus Kononovicius
Tags: Interactive models, Network models, coursera, small world
Slug: watts-strogatz-model
Status: published

Recently I have discovered an online
education system [Coursera](https://www.coursera.org/). While browsing
through the available courses I noticed one named "Social and Economic
Networks: Models and Analysis". Sadly it was already six weeks into the
eight week program, so I was not able to formally complete it. Yet the
knowledge I have obtained by viewing videos of this course enabled me to
prepare couple of posts for this website.

Previously, I have already written about [the Erdos-Renyi network
formation
model](/erdos-renyi-model "Erdos-Renyi model on Physics of Risk").
While this time I'll write about the Watts-Strogatz network formation
model ("small world" networks). The Barabasi-Albert model ("scale-free"
networks) will be left for the next post.<!--more-->

Watts-Strogatz model and the properties of the small world networks
-------------------------------------------------------------------

Let us recall that Erdos-Renyi networks were generated completely at
random. In this sense the Watts-Strogatz model is almost exact opposite.
During the first step we select a known network topology with \\\( N \\\) nodes. Note that in the applet below we choose the ring topology,
while other topologies are also possible (e.g., the node can be
connected not to the two nearest nodes, but to four). Next we iterate
trough all nodes in the topology and with probability \\\(  p \\\) create
an additional random edge, which does not exists at this time and isn't
a loopback.

Note that in the initial deterministic, ring, topology has a large
network diameter. This means that the largest distance between any two
nodes is relatively large, actually it is proportional to \\\(  N/2 \\\).
While the newly created edges significantly decrease network diameter.
Such network has an average path length proportional to \\\(  \lnN \\\). These newly created edges is a perfectly simple example of how the
shortcuts can be created in an actual social networks.

Thus this model is a simplest illustration possible for the "six degrees
of separation" theory. This theory states that any two people on Earth
are separated by 6 handshakes (i.e. common friends or friends of friends
and etc.). Consequently two completely random people, who have almost
nothing in common, can easily find each other despite of the huge size
of the social networks due to the connections of their friends.

Interactive HTML5 applet
------------------------

Bellow you can find a HTML 5 applet, which illustrates how the small
world networks can be generated. In the applet you can select a number
of nodes in the network, \\\(  N \\\), and a probability to create a
random edge, \\\(  p \\\). Using mouse wheel you can zoom in and out of
the picture. The initial structure is generated automatically each time
you press "Restart" button. The random edges can be automatically added
via the "Rewire" button (one attempt per second) and also manually via
"Add edge" button.

[html5-interactive mode="iframe" height="550" width="480"
url="/uploads/models/small-world-network/index.html"]
