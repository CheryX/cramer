---
title: Wybrane funckje
author: cheryx
date: 2022-05-17 20:20:00 +0200
categories: [Matematyka]
tags: [matematyka, 1-klasa, funkcje]
render_with_liquid: false
math: true
---


# Równanie kwadratowe

Równanie kwadratowe to jest równanie algebraiczne z jedną nie wiadomą, którą można zapisać w formie:

$$f(x) = ax^2 + bx + c$$

Gdzie $a\neq0$[^wzor]. Kształt na układzie współrzędnych jest parabolą.

## Czym jest parabola

Parabola to jest kształt na układzie współrzędnych, który otrzymujemy m.in przy użyciu funkcji kwadratowej. Wygląda on następująco

![2](https://user-images.githubusercontent.com/58445363/169342146-51622a6d-0d06-4f90-95d7-d3c944391a3e.png)

Parabola składa się z:

* wierzchołka - oznaczany punktem $W(p, q)$
* ramion - ich kierunek zależy od współczynnika $a$. Jeśli jest dodatni to ramiona są skierowane do góry w przeciwnym wypadku do dołu.

## Postać kanoniczna

Postać kanoniczna to jest to inna postać równania kwadratowego, która jest opisana wzorem:

$$f(x) = a(x-p)^2 + q$$

Gdzie $[p, q]$ to punkty wierzchołka paraboli, lub oficjalnie translacja od punktu $(0,0)$.


## Przekształcanie postaci kanonicznej do ogólnej

Jest to bardzo prosty proces, który wymaga tylko użycia wzorów skróconego mnożenia:

$$f(x) = a(x-p)^2 + q$$

$$f(x) = a * (x^2 - 2pq + p^2) + q$$

$$f(x) = ax^2 - 2apq + ap^2 + q$$

Przykład z liczbami:

$$f(x) = 5(x-3)^2 + 8$$

$$f(x) = 5 * (x^2 - 6x + 9) + 8$$

$$f(x) = 5x^2 - 30x + 53$$

A z powrotem:

$$f(x) = 5(x^2 - 6x) + 53$$

$$f(x) = 5(x^2 - 6x + 9 - 9) + 53$$

$$f(x) = 5(x-3)^2 + 8$$

# Proporcjonalność odwrotna

Proporcjonalność odwrotna to jest stałą zależność pomiędzy dwoma niewiadomymi.

$$x*y=const~a$$

$$y=\frac{a}{x}$$

Gdzie $x$ i $y$ to niewiadome, a $const~a$ to jest stała liczba. Przykładem proporcjonalności odwrotnej są:

| x | 1 | 2 | 3 | 4 | 6 | 9
| - | - | - | - | - | - | -
| y | 36 | 18 | 12 | 9 | 6 | 4
| a | 36 | 36 | 36 | 36 | 36 | 36

## Wykres proporcjonalności odwrotnej

Wykresem proporcjonalności odwrotnej jest hiperbola

<iframe src="https://www.desmos.com/calculator/n0sx1ztels?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

Cechami hiperboli są

* brak miejsc zerowych
* dwie gałęzie

# W pigułce

* *Jaki jest wzór ogólny na równanie kwadratowe?* $ax^2 + bx + c$
* *Jaki jest wzór kanoniczny równanie kwadratowe?* $a(x-p)^2 + q$
* *Jaki kształt ma równanie kwadratowe?* parabola
* *Co decyduje o kierunku ramion paraboli?* współczynnik $a$, jeśli jest dodatni to ramiona idą do góry.
* *Z czego jest zbudowana parabola?* wierzchołek oraz 2 ramiona
* *Jak przekształcić równanie kanoniczne do równania ogólnego?* wymnożyć równanie używając wzorów skróconego mnożenia
* *Jak ustalić punkt wierzchołka paraboli w równaniu kanonicznym?* $W(p, q)$
* *Jaki jest wzór na proporcjonalność odwrotną?* $xy=a$
* *Jaki kształt ma wykres proporcjonalności odwrotnej? hiperbola
* *Jaka jest dziedzina hiperboli* $x\in R-{0}$

> To są wszystkie materiały, które obecnie są wymagane.
{: .prompt-info}

[^wzor]: [Równanie kwadratowe](https://en.wikipedia.org/wiki/Quadratic_equation)
