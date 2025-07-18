Title: Numerical methods for the stochastic differential equations
Date: 2012-05-28 07:37
Author: Aleksejus Kononovicius
Tags: interactive, stochastic models, methods, Java
Slug: numerical-methods-for-the-stochastic-differential-equations
Status: published
Image_url: uploads/2012/numerical-methods-for-the-stochastic-differential-equations.png

Reviewers of one of our most recent papers have asked some very interesting
questions. One of them was about the numerical methods we use to solve the
stochastic differential equations.  The question was to be expected as,
while we provide the final difference equations, we do not discuss how they
were obtained. Thus here we will briefly review the most basic
principles of the numerical solution of the stochastic differential
equations.
<!--more-->

Let us recall that in general case stochastic differential equation (in Ito
sense) has the following form:

\begin{equation}
 \mathrm{d} x = f(x) \mathrm{d} t + g(x) \mathrm{d} W.
\end{equation}

In the above \\\( f(x) \\\) is the drift function, which represents the
strength of deterministic force. \\\( g(x) \\\) is the diffusion function,
which represents the strength of random force. \\\( W \\\) is the Wiener
process (one dimensional standard Brownian motion). It is also common
(especially in physics) to rewrite the same equation as:

\begin{equation}
 \dot{x} = f(x) + g(x) \zeta(t) .
\end{equation}

Where in the above \\\( \zeta(t) \\\) is the white noise (a derivative of
Brownian motion). Here we make dependence on time explicitly, as the random
force would fluctuate in time. Here it is important to emphasize that we
understand stochastic differential equation in Ito sense, while in physics
it is much more common to use Stratonovich interpretation (we will
eventually address this issue in some later post).

Notably, these equations can be further generalized by introducing time
dependence into the drift, \\\( f(x) \\\), and (or) diffusion, \\\( g(x)
\\\), functions. But most commonly used stochastic models do not have this
complication, as this would make the models non-stationary.

## Euler method for the differential equations

Before tackling stochastic differential equation let us recall how one
can numerically solve first order ordinary differential equations. The
most intuitive and simple method is known as Euler method or first order
numerical discretization method. Sometimes it is also used for solving
stochastic differential equations, simply by assuming the diffusion term is
small (random force is weak) in comparison to the drift term (deterministic
force). If so, we can write:

\begin{equation}
 \Delta x \approx f(x) \Delta t \quad \Rightarrow \quad x\_{i+1} =x\_i + f(x\_i) \Delta t .
\end{equation}

To understand what have we done here recall the definition of
derivative:

\begin{equation}
 \frac{\mathrm{d} x(t)}{\mathrm{d} t} = \lim\_{\Delta t\rightarrow 0} \frac{x(t) - x(t-\Delta t)}{\Delta t} \approx\frac{\Delta x}{\Delta t} .
\end{equation}

It should be evident that if the drift function is constant, namely if the
correct answer is linear function of time, then Euler method is precise.
While if the drift function does vary with \\\( x \\\), if the correct
answer is something more complicated than linear function, then the
differences between the numerical solution and correct answer will be
noticeable. The deviation will depend on the size of the time step - if it
is small, the deviations will also tend to be smaller.

![image]({static}/uploads/2012/num-methods-euler.png "Illustration of the Euler method applied towards
non-linear differential equation. Note that the numerical solution (red
dots) doesn't fully coincide with the correct answer (blue
curve)."){#attachment_2323}

In [Fig. 1](#attachment_2323) the differences between the numerical and
correct answer are easily noticeable. In order to improve numerical
results one can decrease the time step (which was selected to be overly
large on purpose) or use another, more precise, numerical method. One of the
possible choices, in order to retain speed of the numerical evaluation,
would be [midpoint
method](https://en.wikipedia.org/wiki/Midpoint_method "Read about the midpoint method on Wikipedia"),
which is an improved version of the first order Euler method considered
in this text. In order to further improve the precision one should
become interested in higher order methods, e.g., [Runge-Kutta 4-th order
method]({filename}/articles/2022/runge-kutta-4-order-method.md).
Another interesting idea might be implementation of variable time steps
(see [below](#var-step)).

## Euler-Maruyama method for the stochastic differential equations

Let us now apply the ideas above towards stochastic differential equations
(in Ito sense)! First let us substitute the differentiation with the changes
of variables during some time window. By doing so we obtain the following
difference equation:

\begin{equation}
 x\_{i+1} = x\_i + f(x\_i) \Delta t + g(x\_i) \Delta W .
\end{equation}

The difference equation has a very familiar shape and the only unanswered
question is about \\\( \Delta W \\\). As \\\( W \\\) is the Wiener process,
then \\\( \Delta W \\\) should be a random sample from a normal distribution
with zero mean, and variance proportional to \\\( \Delta t \\\). We can
denote it by \\\( \sqrt{\Delta t} \zeta\_i \\\) with \\\( \zeta\_i \\\)
being standardized (zero mean, unit variance) random variate coming from
normal distribution (i.e., \\\( \zeta\_i \sim \mathcal{N}(0,1) \\\)). The
difference equation then becomes:

\begin{equation}
 x\_{i+1} = x\_i + f(x\_i) \Delta t + g(x\_i) \sqrt{\Delta t}\zeta\_i .
\end{equation}

Here, we have purely intuitively arrived at numerical method which is known
as Euler-Maruyama method. For more details on this method and its
alternatives see [cite id="Kloeden1992Springer"].

## Solving non-linear stochastic differential equations using variable time step {#var-step}

Note that Euler-Maruyama method works fine if the stochastic
differential equation is at most linear or the diffusion area of the
variable is somehow restricted. In case of the non-linear equations one
can decrease the time step used to numerically solve the equation.
Though note that this will significantly increase the required computational
resources. Such choice would not be very optimal as the small time step
is actually needed only if the movement, either drift or diffusion, of
the random variable is large. It would be very intuitive and rational to
use variable time steps! This way it would be possible to decrease
computational load if it is not necessary.

Let us now consider the following non-linear stochastic differential
equation:

\begin{equation}
 \mathrm{d} x = \left(\eta - \frac{\lambda}{2} \right)x^{2 \eta -1} \mathrm{d} t + x^\eta \mathrm{d} W . \label{nlin-sde}
\end{equation}

We choose this equation as it represents very general class of
stochastic differential equations [cite id="Ruseckas2010PhysRevE,
Ruseckas2011PhysRevE"] and it lies in the base of the stochastic models
derived and studied by our group [cite id="Gontis2010Intech,
Kononovicius2012PhysA"]. Furthermore in some distinct cases this
equation becomes very similar to some very well known stochastic
processes (we will discuss this in the following texts).

Following the previous ideas we can rewrite our non-linear stochastic
differential equation as the following difference equation:

\begin{equation}
 x\_{i+1} = x\_i + \left(\eta - \frac{\lambda}{2} \right)x\_i^{2 \eta -1} \Delta t + x\_i^\eta \sqrt{\Delta t} \zeta\_i .
\end{equation}

Note the powers of random variable in the drift and diffusion terms.
Also take note of the powers of time step. By comparing them we can that
if the time step would be a function of random variable we could
linearize the difference equation. Though now we will have to deal with
two difference equations (one for the random variable, another for the
time):

\begin{equation}
 x\_{i+1} = x\_i + \kappa^2 \left(\eta - \frac{\lambda}{2}\right) x\_i + \kappa x\_i \zeta\_i ,
\end{equation}

\begin{equation}
 t\_{i+1} = t\_i + \kappa^2 x\_i^{2- 2 \eta} .
\end{equation}

Note that now the equations includes \\\(  \kappa \\\), which stands for
the numerical precision. Ideally it should be as small as possible, but
in most of the cases 0.1 or 0.01 are ok.

This difference equation can be already solved numerically. Yet some
problems might occur - e.g., for \\\(  \eta&gt;1 \\\) and small values of
random variable the time step might become very large. This problem
might be solved by switching back to the constant time step (of course
only if its smaller than the variable one). Another frequent problem is
related to the overly large or small values, which potentially can cause
freezes, overflows or underflows, but this is another more technical
topic.

The idea of the variable time steps can be easily and somewhat
efficiently applied towards solution of the ordinary differential
equations - see [Fig. 2](#attachment_2324).

![image]({static}/uploads/2012/numerical-methods-for-the-stochastic-differential-equations.png "Introducing variable time steps into the original Euler
method. Note that under similar conditions the agreement between
analytical and numerical solution is
improved."){#attachment_2324}

Source code as an example
-------------------------

Take time to familiarize yourself with the example Java program.

```java
    public double step(double dt) {
        double t=0;
        while(t<dt) {
            double innerDt=variableTimeStep(lastX);
            if(Double.isNaN(innerDt) || Double.isInfinite(innerDt)) {
                innerDt=dt+dt-t-t;
            }
            double whileDt=Math.min(dt-t,innerDt);
            lastX=solveSDE(lastX,whileDt);
            t+=whileDt;
        }
        return lastX;
    }
    private double drift(double x) {
        return (eta-lambda/2.0)*Math.pow(x,2.0*eta-1.0);
    }
    private double diffusion(double x) {
        return Math.pow(x,eta);
    }
    private double solveSDE(double x, double dt) {
        return x+drift(x)*dt+diffusion(x)*Math.sqrt(dt)
            *gen.nextGaussian();
    }
    private double variableTimeStep(double x) {
        return Math.pow(kappa,2.0)*Math.pow(x,2.0-2.0*eta);
    }
```

Interactive HTML5 app
---------------------

**(comment added in 2025)** While reorganizing
[interactive](/tag/interactive/) apps I have found that one legacy-styled
app that had no home. I think its home should be here, as it shows numerical
solution of \eqref{nlin-sde}. Though it uses not the [Java](/tag/java/) code
above, but it is instead implemented in the JavaScript language.

[html5-interactive
url="/uploads/models/stats/models/nonlinear-sde/index.html"
width="470" height="470" mode="iframe"]
