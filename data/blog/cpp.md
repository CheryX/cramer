---
title: C++ Wstęp
date: '2022-05-20'
tags: [informatyka, c++]
draft: false
summary: Podstawowe informacje o C++
thumbnail: 'https://images.unsplash.com/photo-1635775017492-1eb935a082a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
---

**C++** jest popularnym językiem programowaia który został stworzony w 1979 jako *C z klasami*, teraz ten język jest używany w programowaniu ważnych części kodu, systemów operacyjnych oraz wiele więcej.[^cpp] Język ten jest tak popularny że trafił na liste dozwolonych języków na maturze rozszerzonej z informatyki.[^cke] Ten język nie jest stworzony dla osób zaczynającym z programowaniem, a nawet można stwierdzić że jest to po prostu *strzelanie w stopę*[^garbage]. Jeśli planujesz napisać dobrze maturę z informatyki, to polecam skorzystać z przyjemniejszych oraz łatwiejszych języków programowania.[^stackoverflow]

> *C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off.*
> ~Bjarne Stroustrup

# Instalowanie wymaganych progamów

Instalowanie wymaganych programów może wydawać się skomplikowane, ale większość wymaganych programów została już wcześniej zainstalowana.

## Co należy przygotować

Aby przygotować workspace do pracy z C++ należy zrobić przygotować:
- [x] Edytor tekstu (np. [Visual Studio Code](https://code.visualstudio.com/Download), [OnlineGDB](https://www.onlinegdb.com/), [Code::Blocks](http://www.codeblocks.org/), [Vim](https://www.vim.org/download.php))
- [x] Kompilator (zwykle wbudowany w system lub edytor tekstu)

> Kompilatory online mają ograniczoną funkcjonalność.


> Często występują problemy co do [Visual Studio Code](https://code.visualstudio.com/Download) na systemach Windows.


----------

```py
var num1, num2, sum
num1 = prompt('Enter first number')
num2 = prompt('Enter second number')
sum = parseInt(num1) + parseInt(num2) // "+" means "add"
alert('Sum = ' + sum) // "+" means combine into a string
```

## Tworzenie pliku

Na początek należy stworzyć nowy katalog projektu, w którym będzie znajdował się plik z kodem. Można go stworzyć używając Eksploratora plików lub komendy `mkdir`:

```bash
mkdir my_project
cd my_project
```

> To są komendy na systemach Linux/macOS, za wszelkie starty na systemach Windows nie odpowiadam.
 

W nowym katalogu należy stworzyć nowy plik o rozszrzeniu `.cpp`, na przykład `main.cpp`.

```bash
touch main.cpp
```

Następnie przy użyciu wcześniej zainstalowanego edytora tekstu można do utworzonego pliku napisać przykładowy kod dostępny poniżej.

```c++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}
```

Następnie należy skompilować program, a na koniec go uruchomić (niektóre IDE mają przycisk aby skompilować, następnie odrazu uruchomić program).
    
```bash
g++ main.cpp -o main
./main
```

Jeśli wszystko się powiedzie to powinno uruchomić się nowe okno z napisem `Hello World!`.

```console
Hello World!
```

## Analiza programu "Hello World"

Z jakiegoś powodu w nauce programowania zawsze się zaczyna od programu `"Hello World"`. W takim razie zróbmy analize najprostrzego programu, który napisaliśmy powyżej.

```c++
#include <iostream>
```

Dołączamy plik `iostream` do naszego programu, która dodaje do naszego programu biblioteke umożliwającą wyświetlanie tekstu na ekranie.

```c++
using namespace std;
```

Ta linijka ułatwia nam życie ponieważ nie musimy pisać `std::cout` czy `std::cin` czy `std::endl` czy `std::string`.
 
```c++ 
int main() {
    cout << "Hello World!" << endl;
    return 0;
}
```

Jest to obowiązkowa funkcja o nazwie `main()`, która jest wywoływana gdy program jest uruchamiany. Zwykle jest ona typu `int` *(liczba całkowita)* która mówi co ma zwracać funkcja.

```c++
cout << "Hello World!" << endl;
```

Ta linijka wyświetla tekst `"Hello World!"` na ekranie, znak końca linii `endl` oznacza koniec linii.

```c++
return 0;
```

Ta linijka zwraca wartość `0`, w funkcji `main()` zwracanie wartości `0` oznacza że program się zakończył pomyślnie.

## cout & cin

Biblioteka `iostream` zawiera funkcje `cout` i `cin` które pozwalają na wyświetlanie i wprowadzanie tekstu.

```c++
cout << "Hello World!" << endl;
cin >> x;
```

> Uwaga, kierunki strzałek po `cout` oraz `cin` są w innych kierunkach.


### Wprowadzanie danych z klawiatury

Za pomocą funkcji `cin` możemy wprowadzać dane z klawiatury, takim sposobem trzeba stworzyć *zmienną*, o której będzie potem.

```c++
int x;
cin >> x;
cout << x;
```

# Zadania (Bardzo Łatwe)

1. Wypisz na ekran `"Hello World!"`
2. Zrób program który wpisuje dane z klawiatury i wypisuje je na ekran
3. Program który pyta o imię i wypisuje na ekran `"Witaj, [imię]!"`

# Zmienne

## Jak przechowywać dane w programie, aby użyć ich później?

W większości języków istnieją zmienne, które służą do przechowywania danych. Do zmiennych należy też dodać typ zmiennej, (np. liczba, znak).

```c++
int a = 5;
cout << a;
```

Nazwa|Opis
---|---
int | Liczba całkowita
float | Liczba zmiennoprzecinkowa
double | Liczba zmiennoprzecinkowa (z większą dokładnością)
char | Znak
bool | Logiczna wartość (prawda/fałsz)
string | Tekst
void | Brak wartości (Używane w funkcjach)
unsigned int | Liczba naturalna (ma 2 razy większy zakres niż int)
unsigned char | Znak (ma 2 razy większy zakres niż char)

### A jeśli chce przekazać dane do programu?

Aby przekazać dane do programu należy użyć `cin` *(console input)*, a następnie 2 strzałki w prawo.

```c++
// Definiujemy zmienną a która nie ma wartości
int a;

cout << "Wpisz wartosc a: ";

// Wpisujemy do konsoli wartość a (używając klawiatury)
cin >> a;

cout << a << endl;
```

```console
Wpisz wartosc a: 5
5
```

## Zmienianie wartości zmiennych

Aby zmienić wartość zmiennej należy użyć operatora `=` *(assignment operator)*.
> Znak `=` jest używany do definiowania, a `==` do porównywania.



```c++
int a = 5;
a = 10;
```

Wtedy można użyć też operacji matematycznych `+`, `-`, `*`, `/`, `%`.

```c++
int b = 5;
b = b + 10;
```

> Zapis jak `b = b + 10` można skrócić do `b += 10`


# Zadania (Łatwe)

1. Zrób program który wypisze dzielnik dla podanej liczby.
2. Zrób program który sprawdza czy osoba jest pełnoletnia.

# Pętle

Zamiast pisać 20 razy tą samą linijke z 1 małą zmianą, można użyć pętli. W języku C++ obowiązują nas 3 pętle.

## for

Pętla `for` to jest najbardziej rozbudowana pętla, jeśli ją zrozumiesz, to z `while` i `do while` nie będziesz miał problemu.

```c++
for (int i = 0; i < 10; i++) {
    cout << i << endl;
}
```

> `i++` oznacza zwiększenie wartości zmiennej o 1.


Początek instrukcji rozpoczynamy `for`, później w nawiasie okrągłym zapisujemy 3 argumenty oddzielone średnikami.
1. Definicja iteratora, czyli zmiennej która informuje program która to jest iteracja (pętla).
2. Warunek, czy pętla ma się jeszcze wykonać, w tym przypadku oznacza to: *dopóki **i** jest mniejsze od 10*.
3. Zmiana wartości iteratora, która oznacza co ma się dziać po zakończeniu pętli.

```c++
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}
```

```console
0 1 2 3 4
```


> Po 3 argumencie (`i++`) w pętli for nie umieszczamy średnika


## while

Pętla `while` jest bardzo podobna do pętli `for`, ale ma inną budowe.

```c++
int i = 0;
while (i < 5) {
    cout << i << " ";
    i++;
}
```

Wcześniej trzeba zdefiniować iterator, a potem powielać go w pętli.
## do while

Pętla `do while` jest bardzo podobna do pętli `while`, ale najpierw wykonuje kod, a później sprawdza czy ma go dalej wykonać.

```c++
int i = 0;
do {
    cout << i << " ";
    i++;
} while (i < 5);
```
```console
0 1 2 3 4
```

> Pętla do while wykonuje się conajmiej raz.


# Zadania (Średnie)

1. Zrób program który wypisze liczby od 0 do 10.
2. Zrób program który wypisze liczby od 10 do 0.
3. Zrób program który wypisze parzyste liczby od 0 do 100.

# Funkcje

Jeśli chcesz wykonać jakiś kawałek kodu wiele razy, możesz to zrobić za pomocą funkcji. Na szczęście już pisaliśmy wcześniej funkcje `main()`, więc nie jest to coś nowego.

```c++
void sayHello() {
    cout << "Hello!" << endl;
}

int main() {
    sayHello();
    return 0;
}
```

Funkcja może przyjmować argumenty, które będą przekazywane do funkcji.

```c++
void sayHello(string name) {
    cout << "Witaj " << name << endl;
}

int main() {
    sayHello("Piotrek");
    return 0;
}
```
```console
Witaj Piotrek
```

# Zadania (Trudne)

1. Funkcja wypisująca uśmiechy o dowolnej szerokości oraz wysokości 
2. Funkcja sprawdzająca czy liczba jest pierwsza
3. Funkcja pokazująca tabliczke mnożenia
4. Gra w kamień papier nożyce
5. Funkcja licząca masę planety. Zkorzystaj ze wzoru $M_S = \frac{4π^2 * (1)^3}{G * T^2}$


[^cpp]: [Wikipedia - C++](https://en.wikipedia.org/wiki/C%2B%2B)
[^cke]: [Wybór języków na mature](https://cke.gov.pl/images/_KOMUNIKATY/20190806%20Komunikat%20o%20egzaminie%20z%20informatyki.pdf)
[^stackoverflow]: [Dane o popularności języków programowania](https://insights.stackoverflow.com/survey/2021#most-popular-technologies-language-prof)
[^garbage]: [C++ nie posiada *Garbage Collector*](https://stackoverflow.com/a/5089349/14554215)