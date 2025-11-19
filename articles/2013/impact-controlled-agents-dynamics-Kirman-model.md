Title: Impact of the controlled agents on the dynamics of the Kirman model
Date: 2013-09-09 07:03
Authors: Aleksejus Kononovicius, Ignas Kazakevičius
Tags: agent-based models, A. Kononovicius, I. Kazakevicius, voter model, Kirman model, control
Slug: impact-controlled-agents-dynamics-Kirman-model
Status: published

Collective behavior of the
individuals in the complex socio-economic systems is influenced by their
herding, group, behavior tendencies and their individual preferences.
The herding tendencies imply the possibility to control the collective
behavior. In this text we discuss this possibility through the context
of [Kirman's agent-based herding
model]({filename}/articles/2010/kirman-ants.md).

The possibility to control the collective behavior can be clearly seen
by taking the social systems as a primary example. In this case we
usually have a large uninformed population. Members of this population
may not have the necessary skills (or information) to make certain
decision, namely they cannot make independent decision on their own. So
the uninformed individuals have to rely on the individuals with
necessary skills (or information) for advice. They are usually a very
small part of the society, yet they are able to shape the behavior on
the collective level. Actually this is confirmed by the experiments
\[cite id="Dyer2009RSTB"\]. Thus we see that the possibility to control
the collective behavior is not very unrealistic idea, and therefore it
is very interesting topic to be studied.
<!--more-->

Introduction of the controlled agents
-------------------------------------

Previously we already wrote about [Kirman's agent-based herding
model]({filename}/articles/2010/kirman-ants.md).
Now let us extend the original model by introducing \\\(  M \\\)
controlled agents, who occupy the selected state. Note that now we have
a system composed of \\\(  N+M \\\) agents. The only difference between
the controlled agents and "normal" agents is that the controlled agents
are only influenced by the external factors, while normal agents are
influenced by internal interactions. Also note that the controlled
agents are not taken into account then estimating the state of the
system, namely \\\(  X \\\) or \\\(  x \\\). Which means that the
controlled agents are only used to control the "normal" agents.

Mathematically these ideas can be expressed by postulating the one step
transition probabilities of the following form:

\begin{eqnarray} P(X \rightarrow X-1) &=& X \[ \sigma\_2 +h(N-X) \] \Delta t, \\ P(X \rightarrow X+1) &=& (N-X) \[\sigma\_1 +h(M+X) \] \Delta t . \end{eqnarray}

Note that the only difference between the one step transition
probabilities in the original model and modified model is the \\\(  (N- X ) M h \Delta t \\\) term, which is, evidently, responsible for the
influence of the controlled agents.

Let us rewrite the one-step probability (which differs from the original
model):

\begin{equation}
 P(X \rightarrow X+1) = (N-X) \[(\sigma\_1 + h M)+h X\] \Delta t = (N-X) \[\tilde{\sigma}\_1 + h X\] \Delta t. 
\end{equation}

As you can see the controlled agents have a very limited effect - they
just serve as a perturbation of the \\\(  \sigma\_1 \\\). This is
relatively similar to the case analyzed in \[cite id="Carro2013"\], but
in \[cite id="Carro2013"\] the herding behavior parameter is perturbed.
Our perturbation, in contrast to the one presented in \[cite
id="Carro2013"\], is more transparent in the microscopic sense.

By using the previous intuition we can easily rewrite the stochastic
model, by using the [previous
results]({filename}/articles/2010/stochastic-ant-colony-model.md):

\begin{eqnarray} \mathrm{d} x &=& \[\tilde{\sigma}\_1 (1-x)- \sigma\_2 x\] \mathrm{d} t + \sqrt{2 h x (1-x)} \mathrm{d} W =\nonumber \\ &=& \[( \sigma\_1 + h M ) (1-x) - \sigma\_2 x\]\mathrm{d} t + \sqrt{2 h x (1-x)} \mathrm{d} W. \end{eqnarray}

The influence of the controlled agents can be more transparently seen by
obtaining the stationary PDF and mean for \\\(  x \\\):

\begin{equation}
 p(x) =\frac{\Gamma(\varepsilon\_1+\varepsilon\_2+M)}{\Gamma(\varepsilon\_1+M)\Gamma(\varepsilon\_2)} (1-x)^{\varepsilon\_2-1}x^{\varepsilon\_1+M-1} , \quad \langle x \rangle =\frac{\varepsilon\_1+M}{\varepsilon\_1+\varepsilon\_2+M} ,\label{xpdf}
\end{equation}

where \\\(  \varepsilon\_i = \sigma\_i / h \\\).

So, as we can see from \eqref{xpdf}, the controlled agents can
shift the average system state towards the desired end. Note that we can
have a fixed number of the controlled agents, \\\(  M \\\), which can act
on systems on any size.

Scaling of the collective behavior control
------------------------------------------

Kirman's agent-based herding model can be interpreted in two distinct
ways \[cite id="Alfarano2005CompEco, Alfarano2008Dyncon"\]. In one case
the agents may interact with all other agents (this case was considered
above), while in the other case agents may interact only with their
neighbors (recall the [comparison with Bass
model]({filename}/articles/2011/unidirectional-kirman-model.md)).
Note that if Kirman's model can be interpreted in two ways, then our
model can be interpreted in four:

-   "Normal" agents may interact with all "normal" agents (nonextensive
    interaction), controlled agents also interact nonextensively, (this
    case was considered in the previous section)
-   "Normal" agents - only with their neighbors (extensive interaction),
    controlled agents - nonextensively,
-   "Normal" agents - nonextensively, controlled agents - extensively,
-   "Normal" agents - extensively, controlled agents - extensively.

Further we will use shorter notation to describe the interactions. We
will use only two words - first one will correspond to the interaction
between the "normal" agents themselves, while the second will describe
how the controlled agents interact with the "normal" agents.

## Extensive-extensive and nonextensive-extensive interactions

In the previous section we have considered the nonextensive-nonextensive
case of the modified Kirman's model. We have seen that it is possible to
control the mean behavior of the system. But what happens if the
interactions occur only between neighbors? We know that the
corresponding one-step probabilities would be given by:

\begin{eqnarray} P(X \rightarrow X-1) &=& X \left\[\sigma\_2+ \frac{h}{N} (N-X) \right\] \Delta t , \\ P(X \rightarrow X+1)&=& (N-X) \left\[ \sigma\_1 + \frac{h}{N} (M+X) \right\] \Delta t.\end{eqnarray}

It is easy to see that in the limit of large \\\(  N \\\) the herding
terms disappear. Together with them disappears the term related to the
controlled agents. Thus it should be evident that we cannot control the
collective behavior in this case.

Note that if \\\(  N \\\) is finite, then the herding interaction with
the controlled agents might be kept constant by increasing \\\(  M \\\).
The problem is that \\\(  M \\\) should grow linearly together with
\\\(  N \\\), which is not a very nice or practical feature. Thus we can
retain the control, but in realistic terms it would very limited.

It should be evident that the interaction between the "normal" agents
themselves doesn't matter that much in this case. So in the
nonextensive-extensive case we result would be qualitatively similar.

## Extensive-nonextensive interaction

A more realistic assumption would be that the "normal" agents interact
only with their neighbors, while the controlled agents with all "normal"
agents. In this case the "normal" agents may be seen as ordinary people
who interact only with small number of people they know (friends,
colleagues and etc.). It would be also very convenient if controlled
agents were celebrities - people who are seen by whole or at least a
majority of population. Due to being celebrities they (mostly
indirectly) influence the behavior of majority. Thus the controlled
agents, if seen as celebrities, may interact with "normal" agents
nonextensively.

In such case the one-step transition probabilities are given by:

\begin{eqnarray} P(X \rightarrow X-1) &=& X \left\[\sigma\_2+ \frac{h}{N} (N-X) \right\] \Delta t , \\ P(X \rightarrow X+1)&=& (N-X) \left\[ \sigma\_1 + h M \frac{h}{N} X \right\] \Delta t.\end{eqnarray}

Now once again in the limit of large \\\(  N \\\) the terms related to
the herding behavior disappear. Yet unlike before - the terms related to
the controlled agents remain! It is worthwhile to note that the
macroscopic model in this case is given by ordinary differential
equation:

\begin{equation}
 \mathrm{d} x = \left\[ (\sigma\_1 + h M) (1-x) - \sigma\_2 x\right\] \mathrm{d} t , 
\end{equation}

solution of which exponentially fast converges to the desired value:

\begin{equation}
 x(t) =\frac{\varepsilon\_1+M}{\varepsilon\_1+\varepsilon\_2+M} + \left(x\_0 - \frac{\varepsilon\_1+M}{\varepsilon\_1+\varepsilon\_2+M}\right) \exp(- h \[\varepsilon\_1+\varepsilon\_2+M\]) . 
\end{equation}

Thus in this case we have ideal control over the collective behavior!

Conclusions
-----------

It is realistic ambition to control large societies! And the herding
behavior is responsible for it. It enables people to copy social norms,
useful information or knowledge from the other people, but copying is
indiscriminate process. Allowing us to control the collective behavior.
The only significant limitation of the control mechanism discussed is
the fact that the controlled agents must interact in the nonextensive
manner (namely the should be seen or heard be all other agents). If the
interaction is extensive (between the controlled and "normal" agents),
then the control is very limited.

Interactive applet
------------------

Below you should find an interactive Kirman's agent-based model applet,
which incorporates the controlled agents. We would like to draw your
attention to the fact that in this applet we allow both negative and
positive values of \\\(  M \\\). The negative values just indicate that
controlled agent choose the opposite state to the one represented by
\\\(  x \\\). The meaning behind and usage of the other parameters of the
applet is standard.

On the left panel you can observe the time domain signal - red dots are
the numerical results generated by the model, while blue curve
corresponds to the theoretical expectations (the expected mean). On the
right side of the applet you can see a plot of the probability density
function of \\\(  x \\\). Note that the right plot is cleared every time
you press any of control buttons. Using the "Update" and "Stop"/"Resume"
buttons you can continue evaluating old time series using the new
parameters. "Restart" button always restarts modeling from scratch.

[html5-interactive
url="/uploads/models/kirman/control/index.html"
width="490" height="345" mode="iframe"]

Acknowledgement
---------------

This text was prepared during the 2013 summer internship "Control of
complex stochastic processes" (supervisor A. Kononovicius) financed by
RCL. I. Kazakevicius acknowledges support by project "Promotion of
Student Scientific Activities" (VP1-3.1-ŠMM-01-V-02-003) from the
Research Council of Lithuania. This project is funded by the Republic of
Lithuania and European Social Fund under the 2007-2013 Human Resources
Development Operational Programme’s priority 3.
