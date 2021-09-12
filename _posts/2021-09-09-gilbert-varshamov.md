---
layout:      post
title:       "On the Gilbert–Varshamov Bound"
tags:        [general]
comments:    true
---

Various excercises in the book require an application of the Gilbert--Varshamov bound.
In this post, we prove a lemma which will be useful for these excercises and which may be of independent interest.
The below lemma is a simplified version of Lemma 4(a) by [Raskutti, Wainright, and Yu (2012)](https://jmlr.org/papers/volume13/raskutti12a/raskutti12a.pdf).


**Lemma.**
Let $d \in \N$ and let $s \in \N$ be even.
Let $M$ be the $s/2$-packing number of $G = \\\{ u \in [N]^d : \norm{u}\_0 = s\\\}$ for some $N \in \N$ with respect to the Hamming distance $\rho\ss{H}$.
Then
\begin{equation}
    \log M \ge \frac{s}{64} \log \frac{N d}{s}
\end{equation}
if $N \ge 2$ and $s \le N d / 25$.
In particular, if $N = 3$, then
\begin{equation}
    \log M \ge \frac{s}{64} \log \frac{e d}{s}
\end{equation}
if $s \le d / 8$.

**Proof.**
The cardinality of a $s/2$-Hamming ball centred around some $u \in G$ is at most $\binom{d}{s/2} N^{s/2}$: fix $d - s/2$ out of $d$ coordinates and arbitrarily vary the other $s/2$ coordinates.
Therefore, if $M \binom{d}{s/2} N^{s/2} < |G| = \binom{d}{s} (N - 1)^s$, then we can find a $v \in G$ which is at Hamming distance $s/2$ from all elements in the packing; and we can keep doing this until $M \binom{d}{s/2} N^{s/2} \ge \binom{d}{s} (N - 1)^s$:
\begin{equation}
    M \ge \frac{\binom{d}{s}}{\binom{d}{s/2}} \frac{(N - 1)^{d}}{N^{s/2}} \overset{\text{(i)}}{\ge}
    \parens{\frac{d}{2es}}^{s/2} N^{s/2} \parens{\frac{N-1}N}^s
\end{equation}
where in (i) we use the bounds $(n/k)^k \le \binom{n}{k} \le (ne/k)^k$.
Therefore,
\begin{equation}
    \log M
    \ge \frac{s}{2} \log \frac{Nd}{s} \frac{((N- 1)/ N)^2}{2e}
    \overset{\text{(i)}}{\ge} \frac{s}{2} \log  \frac{Nd}{s}\frac{1}{8e}
    \overset{\text{(ii)}}{\ge} \frac{s}{64} \log \frac{Nd}{s}
\end{equation}
where (i) follows if $N \ge 2$ and (ii) follows if $Nd/s \ge 25$.
{% include qed.html %}

As an example, consider the set
\begin{equation}
    \mathbb{T}^d(s) = \\\{ \theta \in \R^d : \norm{\theta}\_0 = s, \, \norm{\theta}\_2 \le 1\\\}.
\end{equation}
Consider the collection of vectors $\set{-1/\sqrt{s},0,1/\sqrt{s}}$.
The above lemma then gives that there are $M$ vectors in this collection with exactly $s$ non-zero elements and which all differ at at least $s/2$ positions.
In other words, for every two distinct vectors $u$ and $v$ in this collection, 
\begin{equation}
    \norm{u - v}\_2 \ge \sqrt{\frac{s}{2}}\frac{1}{\sqrt{s}} \ge \frac12.
\end{equation}
Therefore,
\begin{equation}
    \log M(\tfrac12, \mathbb{T}^d(s), \norm{\vardot}\_2) \ge \frac{s}{64} \log \frac{e d}{s}
\end{equation}
if $s \le d / 8$.
See also [Exercise 5.8(a)]({% post_url 2021-02-19-exercise-5.8 %}#a).