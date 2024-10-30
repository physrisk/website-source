Title: Belousov-Zhabotinsky reaction
Date: 2013-05-13 07:06
Author: Aleksejus Kononovicius
Tags: interactive, cellular automata, chemistry, video
Slug: belousov-zhabotinsky-reaction
Status: published

Belousov-Zhabotinsky
reaction \[cite id="Zhabotinsky2007"\] is a chemical reaction, or more
precisely a reaction family, known for exhibiting temporal and spatial
oscillations.

[youtube.com v="IBa4kgXI4Cg"]

This reaction is one of the classical examples of the natural non-linear
oscillations. Another prominent example is the previously analyzed
prey-predator interactions in the ecosystem. Interestingly enough
despite being of a very different nature both of these example can be
modeled using [Lotka-Volterra
equations]({filename}/articles/2012/lotka-volterra-equations.md).

In this text we will also consider certai cellular automaton, which
replicates the spatial oscillations seen in some of the
Belousov-Zhabotinsky reactions.
<!--more-->

Belousov-Zhabotinsky reaction and Lotka-Volterra equations
----------------------------------------------------------

In the most simplest and general case Belousov-Zhabotinsky reaction can
be described by the following chain of chemical reactions:

\begin{equation}
 A\_1 + X\_1 \rightarrow 2 X\_1 + A\_2, 
\end{equation}

\begin{equation}
 X\_1 + X\_2 \rightarrow 2 X\_2 + A\_3, 
\end{equation}

\begin{equation}
 X\_2 \rightarrow A\_4 , 
\end{equation}

here \\\(  X\_i \\\) are the main chemical ingredients, while \\\( A\_i \\\) are secondary chemical ingredients (which are needed for
reactions to occur, or which are the product of these reactions).

From the above should be evident that \\\(  X\_1 \\\) concentration
increases proportionally to \\\(  k\_1 C\_{a1} C\_{x1} \\\) (the first
reaction in the chain) and decreases proportionally to \\\(  k\_2C\_{x1} C\_{x2} \\\) (the second reaction in the chain). Mathematically
this can be written as ordinary differential equation:

\begin{equation}
 \mathrm{d} C\_{x1} = \left\[ k\_1 C\_{a1} C\_{x1} - k\_2C\_{x1} C\_{x2} \right\] \mathrm{d} t. 
\end{equation}

Here we use \\\(  C\_i \\\) for concentrations, where \\\(  i \\\) is the
index of ingredient (ex., "x1" stands for \\\(  X\_1 \\\)). The rates of
reaction is denoted as \\\(  k\_i \\\), where \\\(  i \\\) is a number of
reaction in the chain.

The second reaction increases \\\(  X\_2 \\\) concentration
proportionally to \\\(  k\_2 C\_{x1} C\_{x2} \\\). The concentration of
\\\(  X\_2 \\\) decreases due to the third reaction and proportionally to
\\\(  k\_3 C\_{x2} \\\). Mathematically this can be expressed as:

\begin{equation}
 \mathrm{d} C\_{x2} = \left\[ k\_2 C\_{x1} C\_{x2} - k\_3C\_{x2} \right\] \mathrm{d} t. 
\end{equation}

Now compare these two ordinary differential equation and [Lotka-Volterra
equations]({filename}/articles/2012/lotka-volterra-equations.md)!
The \\\(  C\_{a1} \\\) can be assumed to be a constant model parameter
for the sake of comparison.

Cellular automaton
------------------

The cellular automaton model for the Belousov-Zhabotinsky reaction was
proposed by A. K. Dewdney in \[cite id="Dewdney1988SciAm"\]. The rules
were set as follows:

-   If the cell is in state 1, then it changes its state to the \\\(     \[a / k\_1\]+\[ b / k\_2 \]+1 \\\) state, where \\\(  a \\\) is a number
    of cells in the intermediate states (namely larger than 1 and
    smaller than 255), while \\\(  b \\\) is a number of cells in the 255
    state. \\\(  k\_1 \\\) and \\\(  k\_2 \\\) are the model parameters,
    which should be in the range from 1 to 8. The square brackets
    extracts integer from a real number (t.y. \\\(  \[2.5\]=2 \\\)).
-   If the cell is in state 255, then it changes its state to 1.
-   The cells in the intermediate states (namely larger than 1 and
    smaller than 255), switch to \\\(  \[ S / (a+b+1) \]+g \\\), where
    \\\(  a \\\) and \\\(  b \\\) are the same as before, while \\\(     S \\\) are the sum of the states of the nearest 8 neighbors. \\\(     g \\\) is a parameter set by user, it should be integer number larger
    than 1, but smaller than 255.

These rules should be applied synchronously to all cells in the grid.

Browser applet
--------------

Note that not all parameter sets provide "good" results (the ones
reminiscent to the those seen in YouTube video). Also note that the grid
is torus.

[html5-interactive
url="/uploads/models/cellular-automata/bz-reaction/index.html"
mode="iframe" height="575" width="495"]
