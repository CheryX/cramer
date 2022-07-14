<div style="text-align: center;">
    <img src="https://user-images.githubusercontent.com/58445363/176503322-79130a6e-d093-44c3-9f3c-6129c833b69e.png" height="80" />
</div>

--- 

Projekt Cramer to jest projekt który ma na celu pomóc uczniom szkół w Polsce w zrozumieniu materiału, poprzez materiały pisane m.in. przez innych uczniów oraz rozwiązywanie zadań. Czyli jak przeżyć w szkole.

## Jak dodać post?

### Dla osób zaznajomionych z Githubem:
1. Dodaj siebie oraz post w pliku `/posts/data.js`
2. Dodaj nowy plik w folderze `/posts` o formacie `.mdx`
3. Stwórz nowego pull requesta

### Dla osób zaczynających z Githubem:
1. Na [stronie projektu](https://github.com/cheryx/cramer) zforkuj projekt

![image](https://user-images.githubusercontent.com/58445363/179087414-a9ee362c-c583-4d99-86ec-fda8e907c779.png)

![image](https://user-images.githubusercontent.com/58445363/179087838-59464015-e61c-447f-89d7-20df1579332e.png)

2. Wejdź w plik `data.js` który jest w folderze `posts`.

![image](https://user-images.githubusercontent.com/58445363/179087933-e3830e45-5160-4914-bfb2-c00ee3aa459e.png)

![image](https://user-images.githubusercontent.com/58445363/179087953-59b6f56c-6bad-461f-b387-f5f30814962f.png)

![image](https://user-images.githubusercontent.com/58445363/179088021-4c8977b8-a6d2-4684-9087-cb21a8803e6b.png)

3. Dodaj na początku pliku kawałek kodu który powinien wyglądać następująco:

```js
let twojaNazwa = {
    name: 'Twoje imie lub pseudonim',
    avatar: 'Link do avataru',
    github: 'Nazwa profliu na Githubie'
}
```

4. Po linijce `export default {` dodaj kawałek kodu:

![image](https://user-images.githubusercontent.com/58445363/179088178-3dbf7610-b1da-4de5-a9c0-49327946b595.png)

```js
    "nazwa pliku bez rozszezenia": {
        title: "Tytuł",
        slug: "Nazwa pliku z rozszerzeniem .mdx",
        date: "Data w formacie YYYY-MM-DD",
        tags: ["tag1", "tag2", "tag3", "tag4"],
        summary: "Krótki opis co jest w tej notatce",
        authors: [twojaNazwa]
    },
```

> W linijce `authors: [twojaNazwa]`, nazwa to jest to co napisałeś w `let twojaNazwa = {`

> W linijce `tags: ["tag1", "tag2", "tag3", "tag4"],` możesz dać tyle tagów ile chcesz.

> **Warning**
> Pamiętaj o tym aby zachować cudzysłowia `"`

5. Zapisz plik i wróć do folderu `posts`

![image](https://user-images.githubusercontent.com/58445363/179089059-d3dd16dd-a3c8-423e-848a-428f6a8d884a.png)

6. Wróć do folderu `posts` i dodaj nowy plik tak jak go nazwałeś wcześniej

![image](https://user-images.githubusercontent.com/58445363/179089245-d440020f-c3e8-4b0e-a217-5fcb4556d198.png)

7. Używając [Markdowna](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) napisz notatkę.

> **Note**
> Jeśli nie masz doświadczenia z Markdownem, nie przejmuj się, to jest bardzo naturalny sposób tworzenia formatowenego tekstu.

8. Zapisz plik i stwórz pull requesta w [tym miejscu](https://github.com/CheryX/cramer/pulls)

![image](https://user-images.githubusercontent.com/58445363/179089657-16c493b6-021e-492e-82d1-2198c368b7b9.png)

W miejscu `19-search-fix-more` powinien być twój branch.

9. Zatwierdź pull requesta i czekaj na przyjęcie.

## Własne Componenty do postów

Posty mogą mieć własne componenty aby uprzyjemnić czas czytania postu np. przez zadania zamknięte, otwarte, interaktywne grafy i wiele więcej.

Nazwa | Zapis | Opis
-|-|-
Pytanie typu Boolean | `<TrueFalse>` | Pytanie prawda fałsz
Pytanie ABCD... | `<MultipleOptions>` | Pytanie z wieloma odpowiedzami
Pytanie otwarte | `<WriteQuestion>` | Pytanie otwarte z przykładową poprawną odpowiedzią (Wkrótce)
Accordion | `<Accordion>` | Ukryte pole tekstowe
Graph | `<Graph>` | Graf pokazujący funkcje oraz punkty
BlackBg Zdjęcie | `<BBI>` | Automatyczne dodanie zdjęciu czarnego tła
Soon™

## FAQ

*Q: Mam jakieś pytanie, gdzie moge je zadać?*

A: Stwórz nowe pytanie na https://github.com/CheryX/cramer/discussions


*Q: Potrzebuje notatki, a jej nie ma, jak mogę zaproponować notatkę?*

A: Stwórz nowy issue na https://github.com/CheryX/cramer/issues

## Przydatne linki:
* [Serwer discord](https://discord.gg/gHBzHTr6JD)
* Dokumentacja (Wkrótce)
