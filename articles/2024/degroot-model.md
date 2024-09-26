Title: DeGroot model
Date: 2024-10-29 08:00
Author: Aleksejus Kononovicius
Tags: interactive models, opinion dynamics, agent-based models, DeGroot model
Slug: degroot-model
Status: draft
Image_url: uploads/2024/degroot-model.png

While looking through the recent [opinion dynamics](/tag/opinion-dynamics/)
literature I have started noticing papers exploring various extensions of
the DeGroot model [cite id="DeGroot1974"]. Prior to those papers I haven't
even heard or paid much attention to it. So I felt a bit curious.

At a first glance DeGroot model appears to be similar to the [trust and
suspicion](/tag/trust-and-suspicion/) models we have discussed few years
ago. Also, in the broadest strokes it likely inspired [bounded
confidence](/tag/bounded-confidence/) models.

But let us see what it is actually about!
<!--more-->

## The model

An agent in this model represents a person holding opinion towards some
political question. The opinion is encoded by a real number between \\\( 0
\\\) and \\\( 1 \\\). Opinion held by each agent changes due to interactions
between the agents.

The time in this model is discrete. And during each time step an agent
interacts with all agents they trust. The trust in another agent is encoded
by values between \\\( 0 \\\) and \\\( 1 \\\). These values are further
normalized, so that their sum is exactly \\\( 1 \\\). This normalization is
meant to conserve the opinion (to keep them in the predetermined range of
possible values without employing arbitrary restrictions).

After each time step opinion of agent \\\( i \\\) changes according to:

\begin{equation}
    o\_i(t+1) = \sum\_j T\_{i,j} o\_j(t) .
\end{equation}

In the above \\\( o\_i(t) \\\) stands for the \\\( i \\\)-th agent's opinion
at time \\\( t \\\). \\\( T\_{i,j} \\\) is a value encoding how much agent
\\\( i \\\) trusts agent \\\( j \\\).

## Model properties

Here we examine just the case with \\\( 3 \\\) agents. This is the smallest
non-trivial system which still exhibits interesting behaviors (such as
divergence).

Observe that the update rule is effectively weighted averaging procedure.
So, naturally one would expect that the opinions would converge towards a
single value (at least as long as the trust network is strongly connected).
Usually this is would be true. For example, with trust matrix

\begin{equation}
    \mathbf{T} = \begin{pmatrix}
            0 & 0.5 & 0.5 \\
            1 & 0 & 0 \\
            0 & 1 & 0
        \end{pmatrix} 
\end{equation}

the system does converge to a fixed shared opinion (consensus) state. Here
\\\( T_{ij} \\\) stands for how much trust \\\( i \\\)-th agent puts into
\\\( j \\\)-th agent. So in this example the zero-th agent splits their
trust equally between the first and second agent.

The system will no longer converge to a consensus state if we instead
consider trust matrix

\begin{equation}
    \mathbf{T} = \begin{pmatrix}
            0 & 0.5 & 0.5 \\
            1 & 0 & 0 \\
            1 & 0 & 0
        \end{pmatrix} .
\end{equation}

This trust matrix differs from the first one in one minor detail. The second
agent instead of trusting the first agent, puts all of their trust into the
zero-th agent. Both of these examples were discussed in [cite
id="Jackson2008PUP"].

To check whether given trust matrix \\\( \mathbf{T} \\\) will lead to
a consensus state, one needs to observe the behavior of \\\(
\lim_{n\rightarrow\infty} \mathbf{T}^n \\\). If this limit converges, then
the system will also converge to a consensus state.

As raising a matrix to power involves its eigenvalues, for me a convenient
shortcut appears to be looking at the eigenvalues of the trust matrix. If a
single largest (in absolute value) eigenvalue is equal to \\\( 1 \\\), then
the system will converge towards consensus state. Otherwise, the system will
be non-convergent.

## Interactive app

Use the interactive app below to explore the provided examples. Observe that
in the second case divergence can be avoided by adding interactions within
agents themselves (i.e., self-trust). Feel free to experiment.

[html5-interactive width="520" height="420" mode="iframe"
url="/uploads/models/opinion-dynamics/degroot-model/index.html"]

In the app above three nodes represent three agents. Hue of each node
represents its opinion. Arrows are directed from the agent sharing their
opinion to the agent trusting it. The darker the arrow the stronger the
influence. Some times nodes will have a border - this border indicates
self-influence.
