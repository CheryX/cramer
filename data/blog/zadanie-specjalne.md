---
title: Zadanie specjalne - Rozwiązanie
date: '2022-06-06'
tags: [fizyka]
draft: false
summary: Rozwiązanie do specjalnego zadania z fizyki
thumbnail: 'https://images.unsplash.com/photo-1533582437341-dfdc01630b05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
---

> Jest szansa że jest to niepoprawne

<TOCInline toc={props.toc} toHeading={2} />

## Dane

$g [\frac{m}{s^2}]$ | $\Delta H$ | $\alpha [rad]$ | $l [cm]$ | $f$ | $L [m]$
-- | -- | -- | --  | --  | --  
$9.81$ | $85.13$ | $\frac{\pi}{6}=30[°]$ | $7$ | $0.34$ | $4$ | 

## Część I - Upadek kamienia

Z treści zadania można ułożyć równanie

$$
\begin{cases}
    H=\frac{gt^2}{2} \\
    0.64*H=\frac{g(t-1)^2}{2}
\end{cases}
$$

Po rozwiązaniu takiego układu równań otrzymujemy równanie kwadratowe:

$$
t =\frac{4+\sqrt{(-4)^2-4*0.72*2}}{2*0.72} = 5 [s]
$$

Po podstawieniu wyniku do wcześniejszego wzoru można obliczyć że $H$ jest równe $122.63 [m]$

$$
H = \frac{9.81*5^2}{2}=122.63 [m]
$$

## Część II - Przyśpieszenie windy

Aby obliczyć przyśpieszenie ($b$) windy należy skorzystać ze wzoru:

$$
b = \frac{2*(H-\Delta H)}{t^2} = 3[\frac{m}{s^2}]
$$

## Część III - Przyśpieszenie podstawki i okres drgań wahadła

Obliczenie przyśpieszenia podstawki ($a$) można łatwo obliczyć używając $sin$ oraz $cos$.

$$
a = (b+g)*(sin\alpha - fcos\alpha) = 2.63 [\frac{m}{s^2}]
$$

Następnie należy zkorzystać z twierdzenia cosinusów, i obliczyć *fałszywą grawitacje*, którą oznaczam znakiem $x$.

$$
x = \sqrt{a^2 + (b+g)^2 + 2 *a*(b+g)*sin(\alpha) = 11.72 [\frac{m}{s^2}]}
$$

$$
T = 2π*\sqrt{\frac{l}{x}} = 0.49 [s]
$$

## Część IV - Czy jest to wahadłem matematycznym

Po zrobieniu dobrego rysunku widać, że nie jest to wahadło matematyczne ponieważ jego maksymalny kąt jest większy niż $5[°]$.

## Część V - Pozycja kulki po $\frac{3}{4}$ drogi

Najpierw należy obliczyć czas w którym mamy obliczyć położenie kulki.

$$
t_2 = \sqrt{\frac{0.75*s}{a}}=\sqrt{\frac{0.75*\frac{L}{cos\alpha}}{a}}= 1.15 [s]
$$

Wkońcu należy ustalić położenie wahadła, ignorując opór powietrza kąt kulki będzie przypominać cosinusoide, dlatego należy użyć funkcji:

$$
f(x) = cos(\frac{2π*x}{T})*\alpha
$$

$$
f(t_2) = -19.39[°]
$$

Pod koniec można obliczyć kierunek, wystarczy użyć pochodnej funkcji $f(x)$.

$$
f'x(t_2) < 0
$$

Przez to że jest to mniejsze od $0$, to wahadło będzie aktualnie się poruszało w prawo.