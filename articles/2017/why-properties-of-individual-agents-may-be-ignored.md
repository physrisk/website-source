Title: Why the properties of individual agents may be ignored?
Date: 2017-04-18 07:55
Author: Aleksejus Kononovicius
Tags: Agent-based models, Interactive models, Bass model, voter model, Kirman model, marketing
Slug: why-properties-of-individual-agents-may-be-ignored
Status: published

Human behavior is perplexingly
complex. Why their collective behavior is so well described by rather
general mathematical models using very few parameters? Why do they not
need deeper insight into the human psychology or decision making? One of
the simple answers - if the statistical signature is not present in the
data, which is usually aggregated at least to some degree, we can do
nothing about it. Namely, usually we do not observe individuals making
decisions and as such we are will not be able to differentiate between
different mechanisms of human decision making. There are two major
mechanisms of human decision making - homophily (selecting your peers)
and peer pressure (adopting your peers behavior). Mathematically there
usually will be no difference between them, both mechanisms can be be
described using the same [Kirman's
model](/tag/kirman-model/).

In this text we will consider [Bass diffusion
model](/tag/bass-model/) with heterogeneous
agents (each of them having his own independent parameters). We will
show that the heterogeneous model produces similar macroscopic dynamics
as homogeneous model. To simplify matter even further we will use
[unidirectional Kirman's
model]({filename}/articles/2011/unidirectional-kirman-model.md).<!--more-->

Let me remind you that [Bass diffusion
model](/tag/bass-model/) describes diffusion
of new durable products (or new technologies) in the market. Namely,
agents in this model make a choice to adopt the product (technology) or
not to. After becoming adopter the agent can no longer go back. The
original model is driven by two parameters - idiosyncratic behavior
parameter \\\(  \sigma \\\) (how much agents are influenced by ad
campaigns) and herding behavior parameter \\\(  h \\\) (how much agents
are influenced by their peers). Here we will assume that each agent has
his own intrinsic \\\(  \sigma\_i \\\) and \\\(  h\_i \\\) values. In the
app below these values are sampled from uniform distribution (the lower
and upper bound of the value distribution are model parameters).

In this case agent identified by index \\\(  i \\\) will adopt the
product (technology) with probability:

\begin{equation}
 p\_i = \left( \sigma\_i + h\_i \frac{X}{N} \right) \Delta t, 
\end{equation}

here \\\(  X \\\) is a current number of adopters, while \\\(  N \\\) -
total number of agents, \\\(  \Delta t \\\) - short intrinsic model time
step. If agent has already adopted, then his transition probability is
zero, \\\(  p\_i = 0 \\\). The one step transition probability for a
system as whole:

\begin{equation}
 p(X \rightarrow X+1) = \frac{1}{N} \sum\_i p\_i =\frac{1}{N} \sum\_i (1-S\_i) \left( \sigma\_i + h\_i \frac{X}{N}\right) \Delta t = (N-X) \left({\bar \sigma} + {\bar h}\frac{X}{N} \right) \Delta t, 
\end{equation}

here we have introduced variable \\\(  S\_i \\\), which describes the
current state of agent identified by index \\\(  i \\\) (\\\(  S\_i=1 \\\)
if agent has adopted, while \\\(  S\_i=0 \\\) if he is not). This
expression should hold well if there are not qualitative differences
and/or significant correlations between the intrinsic parameter values
held by agents. It is rather hard to define what kind of differences
would constitute a "qualitative difference", e.g., if significant number
of agents have \\\(  \sigma\_i=0 \\\) ir \\\(  h\_i =0 \\\), then they
will distort the dynamics in a different way - they will decrease the
effective number of agents acting in the system, \\\(  N \\\).

According to the discussion above the heterogeneous should be well
approximated by the [Bass diffusion
equation]({filename}/articles/2011/unidirectional-kirman-model.md) with
parameter values equal to the averages of agents' intrinsic values.

In the app below we have implemented the heterogeneous model as well as
original Bass diffusion equation. As the heterogeneous model is being
evaluated (red circles are drawn to show its evolution), the original
Bass diffusion equation is also being solved (blue line show its
prediction). Note that dynamics of heterogeneous model and the
prediction matches rather well. Before trying the app out note that
\\\(  \Delta t \\\) here only sets the plotting time step and not the
intrinsic model time step, which is actually set automatically.

[html5-interactive
url="/uploads/models/bass-hetero-js/index.html"
width="470" height="500" mode="iframe"]

We invite our readers to think critically about this topic. Not all
models remain unaffected by the introduction of heterogeneity in agents'
parameters. In some models, e.g., [kinetic models of wealth
distribution]({filename}/articles/2013/modeling-wealth-distribution-using-kinetic-exchange-models.md),
parameter heterogeneity plays a crucial role in producing the main
result.
