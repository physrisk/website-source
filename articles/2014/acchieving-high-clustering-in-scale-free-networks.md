Title: Acchieving high clustering in scale-free networks
Date: 2014-05-26 07:59
Author: Aleksejus Kononovicius
Tags: Interactive models, Network models, Barabasi-Albert model, Erdos-Renyi model, scale free network, small world
Slug: acchieving-high-clustering-in-scale-free-networks
Status: published

Average
shortest path (sometimes network diameter), degree distribution and
clustering are the three main network characteristics. Path lengths tend
to be small in random network models (average shortest path and network
diameter grows as \\\(  \ln N \\\) or slower). Power-law degree
distribution can be obtained from the
[Barabasi-Albert]({filename}/articles/2013/barabasi-albert-model.md)
and some other models. But clustering appears to be trickier to
reproduce together with the previous two. In this text we will discuss
what clustering actually is and how to obtain it in random network
model.<!--more-->

Context of the three main random network models
-----------------------------------------------

Bellow you should see a contents of the slide featured in the
presentation by A. L. Barabasi (full slides may be found here:
<http://barabasilab.neu.edu/courses/phys5116/>). On this slide the three
main network formation models
([Erdos-Renyi]({filename}/articles/2013/erdos-renyi-model.md),
[Watts-Strogatz]({filename}/articles/2013/watts-strogatz-model.md)
and
[Barabasi-Albert]({filename}/articles/2013/barabasi-albert-model.md))
as well as regular network structure are being compared against the main
statistical properties discussed in the previous paragraph.

![networks-slide]({static}/uploads/2014/constant-clustering-networks-slide.jpg)

As it was already told the shortest paths are OK in all three random
network models. Indeed as Watts-Strogatz model has shown - smallest
amount of randomness helps to significantly decrease path lengths in
networks. Degree distribution, also as it was already mentioned, seems
to be OK only in case of
[Barabasi-Albert]({filename}/articles/2013/barabasi-albert-model.md)
model (assuming that we are interested in complex networks exhibiting
power-laws). While clustering is good only when regular network
structures are more (purely regular network) or less
([Watts-Strogatz]({filename}/articles/2013/watts-strogatz-model.md))
featured. We will use this insight later, and now let us continue with a
discussion about clustering itself.

We would like to draw your attention to that on the slide degree \\\( k \\\) is used to denote node degree, while further in text we use \\\( d \\\). \\\(  k \\\) is a more convenient option if the text also consider
path lengths (borrowing \\\(  d \\\) due to the first letter of the terms
**d**istance and **d**iameter), but as we do not consider these
properties in this text we will use \\\(  d \\\) (due to the first letter
of term **d**egree).

Clustering - a measure of network density
-----------------------------------------

Imagine that you have a node \\\(  i \\\), which has to distinct
neighbors \\\(  m \\\) and \\\(  j \\\). Local clustering coefficient
tells us the probability that \\\(  m \\\) and \\\(  j \\\) are neighbors
themselves. Namely if \\\(  C\_i =1 \\\), we would expect that all pairs
of distinct \\\(  m \\\) and \\\(  j \\\) are connected among themselves.
If on the other hand \\\(  C\_i =0 \\\), then there should be no edges
between any pair of \\\(  m \\\) and \\\(  j \\\). Mathematically this can
be expressed as:

\begin{equation}
 C\_i = \frac{2 L\_i}{d\_i (d\_i - 1)} , 
\end{equation}

where \\\(  L\_i \\\) is a number of edges between the neighbors of
\\\(  i \\\). Evidently \\\(  \frac{1}{2} d\_i (d\_i -1) \\\) is a total
number of pairs between the all neighbors of \\\(  i \\\).

Then considering clustering of the global structure it is important to
tell two distinct measures apart - global clustering coefficient,
\\\(  C \\\), and average clustering coefficient, \\\(  \langle C\rangle \\\). The difference lies in a fact that global clustering
coefficient is "weighted" by degree, while in the second case averaging
is weighted by individual nodes. In some case it is very possible that
these two measures will provide very contradicting results.

Further in text we will consider average clustering coefficient, but we
will use a simpler notation - \\\(  C \\\).

Why regular structures possess high clustering?
-----------------------------------------------

![Regular network - nodes are connected as a ring, where each node has 4
edges directed to its nearest neighbors. Red color is used for the
considered node and its edges. Blue circles are its neighbors and green
lines are the edges between
them.]({static}/uploads/2014/constant-clustering-circle.png "Regular
network - nodes are connected as a ring, where each node has 4 edges
directed to its nearest neighbors. Red color is used for the considered node
and its edges.  Blue circles are its neighbors and green lines are the edges
between them."){#attachment_2684} 

The red node in the figure above has clustering coefficient of \\\( 0.5 \\\). As there is 3 edges (green lines) between its neighbors (blue
circles) out of six possible pairings (\\\(  d\_i = 4 \enspace\Rightarrow \enspace \frac{4 \cdot 3}{2} = 6 \\\)). The number appears
to be not that large, but let us consider a completely random network
([Erdos-Renyi
model]({filename}/articles/2013/erdos-renyi-model.md))
with the same average degree and number of nodes. It is known that
clustering coefficient of the [Erdos-Renyi
model]({filename}/articles/2013/erdos-renyi-model.md)
is equal to the edge formation probability:

\begin{equation}
 C\_{ER} =p . 
\end{equation}

This probability is easily obtained from the total number of nodes and
average network degree:

\begin{equation}
 \langle d \rangle = p N \quad \Rightarrow \quad p =\frac{\langle d \rangle}{N} . 
\end{equation}

In our regular network structure all nodes are the same, thus \\\( \langle d \rangle = 4  \\\). When number of nodes goes to infinity,
\\\(  N \rightarrow \infty \\\), the clustering coefficient of the
random network with the same average degree will go to zero, \\\( C\_{ER} \rightarrow 0 \\\). While clustering coefficient, \\\(  C\_{reg} \\\), of our regular structure will remain equal to \\\(  0.5 \\\). Regular
structures are resistant to the increase in the number of nodes as at
individual node level nothing changes. But can one use this insight to
create scale-free model with high clustering?

A model proposed by K. Klemm and V. M. Eguiluz
----------------------------------------------

In order to have high clustering we should have a lot of fully
inter-connected triangles (or triads). So let us proceed as is suggested
in \[cite id="Klemm2002PhysRevE"\]:

-   Start with a full graph consisting of \\\(  m \\\) nodes. Let us call
    these nodes "active".
-   Now add a single new node and connect it to all "active" nodes.
-   Add the new node to the group of "active" nodes.
-   Remove one node from the group of "active" nodes. Let the
    probability of deactivation be inversely proportional to node
    degree: \\\(  p\_d(d\_i) \propto \frac{1}{m+d\_i} \\\).
-   Repeat second-forth steps until you reach desired network size.

![Scale-free network with constant
clustering.]({static}/uploads/2014/constant-clustering.jpg " Scale-free
network with constant clustering."){#attachment_2662} 

As you can see in the figure above the generated network is
[scale-free](/tag/scale-free-network/) (the
degree distribution is power-law). Yet unlike in
[Barabasi-Albert]({filename}/articles/2013/barabasi-albert-model.md)
model the clustering coefficient remains almost constant with increasing
number of nodes \\\(  N \\\). Try the interactive HTML5 applet below.

[html5-interactive width="520" height="310" mode="iframe"
src="/uploads/models/network-models/klemm-const-cluster/index.html"]

Note that in this applet we have disabled automatic zoom on the graph
(manually this can be done using mouse wheel). This was done in order to
conserve computational power of your computer. Due to the same reasons
the figure in applet are updated only after 10 steps.
