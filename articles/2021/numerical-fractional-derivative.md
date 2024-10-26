Title: Numerical fractional derivative
Date: 2021-11-30 08:00
Author: Aleksejus Kononovicius
Tags: interactive, fractals, topic: ARFIMA, 1/f noise, methods, Python
Slug: numerical-fractional-derivative
Image_url: uploads/2021/numerical-fractional-derivative.png
Status: published

[Last time]({filename}/articles/2021/fractional-derivatives.md) we have
looked into fractional derivatives and even managed to derive fractional
derivative for \\\( f(x) = x \\\). For more complicated functions this is
much more problematic. Here, in this post, we will show you a quick
[numerical method](/tag/methods/) to calculate fractional derivative of any
arbitrary series.
<!--more-->

## Fractional derivative of \\\( f(x) = \sin(x) \\\)

Derivation of sine's fractional derivative is quite a bit involved. Although
it is not impossible to derive and the answer is well-known:

\begin{equation}
    D^n \sin(x) = \sin\left(x + \frac{n}{2} \pi \right) . 
\end{equation}

This derivative once again interpolates nicely between the function, its
derivative and anti-derivative. Though note that anti-derivative in this
particular case comes into play together with integration constant
(\\\( C = 1 \\\)).

[html5-interactive width="520" height="350" mode="iframe"
url="/uploads/models/frac-diff/sine.html"]

Note that this app doesn't use analytical formula we have provided, but
instead relies on numerical method discussed in the following section.

## Numerical method

What we haven't mentioned [last
time]({filename}/articles/2021/fractional-derivatives.md) is that we have
used numerical method to calculate the fractional derivative (we do this for
sine, too). This is the reason for the small, yet noticeable, differences.
We use method discussed in [cite id="Jensen2014JTSA"], which using Python
can be implemented as follows (see [this
repository](https://github.com/akononovicius/arfima)).

```python
def frac_diff(x: list[float], d: float) -> list[float]:
    """Fast fractional difference algorithm (by Jensen & Nielsen (2014)).
    Args:
        x: list[float]
            Array of values to be differentiated.
        d: float
            Order of the differentiation. Recommend to use -0.5 < d < 0.5, but
            should work for almost any reasonable d.
    Returns:
        Fractionally differentiated series.
    """

    def next_pow2(n):
        # we assume that the input will always be n > 1,
        # so this brief calculation should be fine
        return (n - 1).bit_length()

    n_points = len(x)
    fft_len = 2 ** next_pow2(2 * n_points - 1)

    # calculate coeffs for fractional differentiation
    prod_ids = np.arange(1, n_points)
    frac_diff_coefs = np.append([1], np.cumprod((prod_ids - d - 1) / prod_ids))

    # convolution throught frequency domain
    dx = ifft(fft(x, fft_len) * fft(frac_diff_coefs, fft_len))

    return np.real(dx[0:n_points])
```

Key moment of the algorithm is performing convolution between the series in
question, \\\( \vec{x} \\\), and certain set of coefficients \\\( \vec{f} \\\),
which are responsible for the numerical differentiation. These coefficients
are obtained like this:

\begin{equation}
    f_k = \prod_{i=1}^k \frac{i - d - 1}{i} , \quad \text{and} \quad f_0 = 1.
\end{equation}

Then we just need to perform convolution:

\begin{equation}
    \vec{X} = \left( \vec{x} * \vec{f} \right). 
\end{equation}

Note that normalization is not included in the Python code above, as the
code assumes that \\\( \vec{x} \\\) is sampled in unit intervals. In other
cases, one needs to include dependence on interval width \\\( \Delta \\\).

\begin{equation}
    \vec{X} = \frac{1}{\Delta^d} \left( \vec{x} * \vec{f} \right). 
\end{equation}

For JavaScript implementation check JavaScript files of the both app for
fractional derivative of \\\( f(x) = x \\\)
[here](https://github.com/physrisk/website-source/blob/main/uploads/models/frac-diff/index.js) or \\\( f(x) = \sin(x) \\\)
[here](https://github.com/physrisk/website-source/blob/main/uploads/models/frac-diff/sine.js) (in both implementations you'll
find `frac_deriv` function).
