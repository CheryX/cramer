# Jak napisać własną notatkę

Do napisania własnej notatki jest wymagana znajomość [Markdowna](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). (Jest to bardzo proste)

Na początku stwórz własny plik o końcówce `.mdx`, jest to rozszerzona wersja Markdowna która dodatkowo umożliwa dodawanie własnych *Componentów*, o których będzie później.

> Jeśli twój program wspiera tylko pliki `.md`, to wystarczy po napisaniu zmienić ręcznie rozszerzenie na `.mdx`

Warto pobrać jakiś edytor plików Markdowm, a następnie zacząć pisanie.

> Jeśli totalnie nie chce ci się uczyć 5 znaków na pamięć to można nawet użyć Microsoft Word.

## Kilka zasad

1. W nagłówkach staraj się nie używać znaków `(`, `)`
2. Używaj poprawnie języka polskiego.

## Ustawienia notatki

Na początku pliku powinna się znaleść krótka informacja o czym jest notatka, powinna ona wyglądać o tak:

```md
---
title: Tytuł notatki
summary: Opis notatki
date: '2022-06-22'
authors: ['cheryx']
tags: ['matematyka', 'funkcje']
---
```

* title - Tytuł notatki
* summary - Opis notatki
* date - Data notatki zapisana w formacie `YYYY-MM-DD`
* authors - Lista autorów (posługuj się autorami z pliku `/lib/authors.js`)
    > Jeśli masz problemy z dodaniem siebie w pliku `authors.js` to możesz poprosić kogoś o pomoc.
* tags - Lista tagów

Kolejność jest dowolna

## Własne Componenty

W notatkach można używać włanych Componentów, mają one postać podobną do tagów `HTML`

### AccordionGroup oraz Accordion

```md
<AccordionGroup>
    <Accordion title="Kliknij mnie!">
        **:D**
    </Accordion>
    <Accordion title="Tu też możesz">
        cześć
    </Accordion>
</AccordionGroup>
```

### Graph

```md
<Graph fun="Math.sin(x)" />
```

```md
<Graph fun="x**2" />
```

Jeśli masz jakieś pytania możesz do mnie napisać np. na discordzie (CheryX#9074)

# Jak dodać własną notatkę

Jeśli masz już gotowy plik `.mdx`, to na [stronie projektu](https://github.com/CheryX/notes) wejdź w folder `/posts`, i dodaj nowy plik używająć guziku *Add File*.
Zostanie on dodany na twoim *branchu*, później stwórz *Pull Requesta* w [tym miejscu](https://github.com/CheryX/notes/pulls), gdzie dodasz swojego nowoutworzonego brancha z głównym (`master`)
