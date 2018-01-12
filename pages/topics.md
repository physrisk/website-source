Title: Topics
Date: 2017-10-13
Slug: topics
Order: 3

While we continue to write on many diverse topics related to complex phenomena
and socio-economic systems, some of the topics are related to some of the core
concepts in this research direction. We would like to use this page to briefly
introduce some of them. A full list of topics can be found [here](/tags.html).

## [Agent-based modeling](/tag/agent-based-models/)

Some of the systems we study are so complex that they cannot be easily studied
using traditional reductionist approach. The systems are special, because
interactions between the constituent parts of these systems play crucial role
in the observed dynamics. These systems can not be understood as a simple sum
of their parts.

Human body is one of the examples of such systems. You can hardly understood
what it means to be human by studying our hearts and brains. These studies
will also provide only minor hints to how human body works. In order to
understand the inner workings one needs to see how each organ interacts with
other organs. Though it is worth to note that human body is at the same time
perfect and slightly inapt example of a complex system. It is so, because that
each internal organ has it’s own differing function and thus somewhat
different structure.

Individuals, e.g., within financial markets in this sense are different. At
least from the bird’s eye view they appear to be identical as they all perform
similar function while participating in global exchange of money and goods.
It is thought that essential properties of time series from financial markets
could be explained by studying complex interactions of somewhat similar and
somewhat different individuals within financial markets. Evidently these ideas
can be applied while studying other socio-economic systems.

It is possible to explore the socio-economic interactions through the lense of
agent-based models. In these models we replace the individuals from the real
life socio-economic systems with abstract entities called agents (hence the
term for this framework). These agents act based on predefined rules and
sometimes a more complex behavioral patterns emerge.

Physicists study agent-based models to understand the ways complexity emerge.
While social scientists are tempted to test their behavioral theories in this
artificial playground.

## [Cellular automata](/tag/cellular-automata/)

One could see Cellular automata as precursors of agent-based models. Here we also
have generalized objects, cells, which behave according to very simple rules. Usually
these cells are arranged in a 1D or 2D grids and react to the states of their neighbors.
Despite these limitations Cellular automatons exhibit rich and complex behavior.

Rich enough for Stephen Wolfram to write a book "A New Kind of Science" and to propose
an idea that nature is simplistic and apparent complexity is just impression of the
observer. Within the book Wolfram rediscovers so-called simple programs, which were
previously known as cellular automata. Those programs, as the nature itself, as proposed
by Wolfram, are by definition very simple, but their evolution might be very complex
and in some cases apparently random. In this sense cellular automata appear to be very
similar to stochastic processes.

But there is one significant difference – cellular automata are most usually deterministic!
Those simple programs could have no random noise within them (usually only input), but they would
still be able to evolve chaotically. In this sense cellular automata seem to behave very
similarly to dynamical systems exhibiting dynamical chaos. Though let us remind you that
cellular automata are by definition simple programs in contrast to complex mathematics behind
the dynamical description of systems.

Cellular automatons are fascinating topic, because they are excellent examples how
simple rules can lead to dynamics reminiscent of solutions of very sophisticated dynamical
equations.

## [Network models](/tag/network-models/)

Human society is not a grid of people. Nor it is a hierarchical ladder.
But how does its structure look like? In the middle of XIX century
Auguste Comte proposed to analyze society in micro level, where each
individual would be represented some object, e.g. agent, and its relation
to the other objects. After nearly half of century ideas of Comte found
their place in the first works about social network theory, mostly by
G. Simmel and J. Moreno. In his works J. Moreno widely used sociograms.
These useful charts are
now known as networks. Why are they useful? Well as J. Moreno wrote:
> with these charts, we
> have the opportunity to grip the myriad of networks of human relations and
> at the same time, view any part or portion which we desire to relate to or
> distinguish.

Theory here once again looks very promising, but the problem is that we will
never know precisely how actual social networks look like. There are varying
reasons for it – it is impossible to survey every human being, while polling
only random ones will give no useful information about network structure at
all, finally social networks are constantly changing at every moment. Though
we can gather some limited data, which could give insights towards how social
networks are forming and by using models we could create social networks with
similar properties to real social networks. Currently network modeling is
very active research field with wide applications in varying scientific
fields – from epidemiology (prevention and control of diseases), sociology
(selection of individuals for polls) and marketing theory (how to efficiently
promote new products?).

## [Stochastic models](/tag/stochastic-models/)

All earlier topics cover the modelling of the microscopic details of human
behavior. Macroscopic dynamics in these models emerge from microscopic rules,
but in some applications simple description of macroscopic dynamics is more
usefull than a sophisticated microscopic models.

Usually macroscopic dynamics of complex systems could potentially be described
using Stochastic Calculus. Yet most of the complex systems are well described
by non-linear equations. Thus those systems (and their models) exhibit dynamical
chaos – minor error in initial conditions causes system evolution to deviate
from initial predictions. Typical example of such unpredictability is found in
weather forecast – due to Butterfly effect even modern supercomputers can give
credible week-long predictions of weather. But there is set of non-linear systems
within which even minor impact from outside, or let it be error in initial conditions,
can cause major and momentary change in observed behavior. Typical example of this kind
of system might be financial markets.

It is convenient, in case of sensitive systems, to assume those impacts to be random.
In such case it is said that system has stochastic nature. Thus models of such system
are called stochastic models. Those models are usually implemented using Stochastic
Calculus, namely stochastic differential (usually Langevin) equations.

## [Dynamical chaos](/tag/dynamical-chaos/)

As we have mentioned non-linear stochastic models are in a certain sense similar to
sophysticated dynamical systems, which exhibit dynamical chaos. But what dynamical
chaos actually is?

Physicists love mathematics. Especially and most usually differential calculus.
Mathematical description of any system using differential calculus is usually
referenced as dynamical description. Thus in this case equations themselves are
called dynamical equations. Purely theoretically it appears that if we know precise
form dynamical equations we know everything about the system, we can make precise
predictions of its evolution.

The problem is that this impression is only theoretical. In practice one must take
measurements of reality. As we all know it measurements are just approximation – every
measurement has some error related to it, no matter how small or apparently insignificant
it appears. Measurement bias in the linear systems may play no role at all – system
evolves as predicted with small or no corrections at all. But most of the interesting
systems are not linear! In fact most of them are strongly non-linear. Non-linearities
in dynamical equations may cause accumulating differences between solutions with
apparently insignificant variation in initial conditions. Thus over the time in non-linear
system prediction of evolution and observed evolution may start to disagree by far more
than just by primary measurement bias. This behavior is known as dynamical chaos.

Most widely known example of dynamical chaos is the Butterfly effect – butterfly
flapping its wings may cause hurricane on next week, but thousand kilometers away.
In this section of Physics of Risk blog we aim to show that even smallest bias of
initial conditions, of reality itself, might be the reason for unexpected results and
chaos.

## [Fractals](/tag/fractals/)

Last bit of complexity seems to be unrelated to all over bits we have discussed
previously. Yet this first impression is wrong - usually models of complex systems
and complex systems themselves exhibit fractal-like properties.

> Clouds are not spheres, mountains are not cones, coastlines are not circles,
> and bark is not smooth, nor does lightning travel in a straight line
> ...

were the words using which B. Mandelbrot attempted to lure his readers into the
fractal geometry of nature. This of course is an obvious truth, but the message
behind it is truly fascinating. So what is fractal and what significance does
it have?

Word fractal originated from latin word fractus (en. “composed of pieces”). Thus
fractal ought to be composed of smaller parts. And thus the most fascinating
property of fractals lies within it, as each smaller part fully or partially
resembles every other smaller and larger parts. Mathematicians call it
self-similarity and it’s inherent property of any fractal.

Self-similarity of fractals seems to be appealing to both – scientists and
people far from science. Former group are interested in fractals due to purely
scientific reasons – fractals give philosophical insight into the underlying
rules of nature. Some of philosophical ideas resemble ideology behind the
cellular automata, while some relate to the ideas of non-linearity within
dynamical chaos. Mesmerizing beauty of fractals also attracts ordinary people,
some of who see fractals as a form of art.

Fractals will mesmerize you with the beauty, both visual and philosophical.

