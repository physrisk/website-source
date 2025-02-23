Title: Mark's differentiation model
Date: 2019-04-30 08:00
Author: Aleksejus Kononovicius
Tags: interactive, agent-based models, opinion dynamics, postdoctoral project
Slug: mark-differentiation-model
Status: published
Image_url: uploads/2019/mark-differentiation-model.png

Let us try to discuss a bit different model by social scientist this time. In
[cite id="Mark1998"] a social scientist built a simple model to illustrate
that differences between the social groups could be emergent property inherent
to how we communicate.
<!--more-->

## The model

Once again while implementing this model I take a liberty to interpret it the
way I like it. Namely in [cite id="Mark1998"] it is clearly stated that the
model should be have sequential agent activation and discrete turns. I do not
think such approach is realistic, hence I use random activation in continuous
time (implemented using Gillespie algorithm). Due to this change I have also to
rearrange the order of the steps executed when activating agents.

Agents themselves differ from each other in information they know. Each of them
might recall different set of facts, which may or may not be shared with other
agents.

At rate \\\( \lambda \\\) we randomly select an agent. Based on the fact it
knows we select another agent. The probability for the second agent to be
selected is proportional to the number of "facts" these agents share. Note that
the first and the second agent can be the same agent.

For example, let us say that agent A knows 3 facts, while agent B knows 5 facts.
They know 2 same facts. Agent A does not share any facts with other agents. If
agent A is selected as the first agent, then the probability that B will be
selected as the second agent is \\\( 0.4 \\\), while A will interact with
himself with probability \\\( 0.6 \\\). Namely the following formula holds (here
\\\( F\_{ij} \\\) is the number of facts that agents \\\( i \\\) and
\\\( j \\\) share):

\begin{equation}
P\_{ij}=\frac{F\_{ij}}{\sum\_k F\_{ik}} .
\end{equation}

In our example case we have \\\( F\_{AB} = 2 \\\) and \\\( F\_{AA} = 3 \\\).
Hence:

\begin{equation}
P\_{AB} = \frac{F\_{AB}}{F\_{AB} + F\_{AA}} = \frac{2}{2+3} = 0.4 ,
\end{equation}

\begin{equation}
P\_{AA} = \frac{F\_{AA}}{F\_{AB} + F\_{AA}} = \frac{3}{2+3} = 0.6 .
\end{equation}

Next the selected agents forget the facts they have not discussed lately. Here,
we have decided to use "forgetting" time as our measurement unit of time. Hence
it is hard-builtin to be equal 1. Namely, agents forget facts they haven't
discussed during the last 1 time tick.

Then the selected agents interact either by discussing (expressing) a fact any
one of them knows or by creating a new fact (which will be known only by
themselves unless they tell it anybody else). The probabilities to discuss any
of the know facts or the new fact are assumed to be equal. Returning to our
example both A and B know 6 unique facts (2 of them are known by both) and the
possible new fact counts as 7th fact, hence the probabilities are equal to
\\\( 1/7 \\\).

Afterwards the selection probabilities are updated and the algorithm runs from
the start.

## HTML 5 app

This model has a rather strong differentiation built into it. Or at least it
works quite strongly when considered in continuous time. It is quite probable
for any agent to forget all of his facts and become unable to interact with any
other agent. Hence little by little all agents will separate from the main
group and become independent.

Here in this app you have just a single parameter \\\( \lambda \\\), which sets
how often the agents interact in comparison to how fast they forget facts. The
plot on the left shows the "interaction matrix": if the cell is dark, then it
means that those agents can interact. Note that the agents are always able to
interact with themselves, hence the diagonal is always dark. The right figure
on the other hand shows the number of groups (blue line) and the size of the
largest group (yellow line).

Feel free to explore the models dynamics using an app below. Though my intuition
tells me that even if \\\( \lambda \\\) is higher, the separation will just
become a bit slower, but will not stop until all of the agents are independent.
The differentiation mechanics here are very strong.

[html5-interactive width="520" height="320" mode="iframe"
src="/uploads/models/opinion-dynamics/mark-differentiation-model/index.html"]

[acknowledge id="postdoc-ak-2017-lit"]
