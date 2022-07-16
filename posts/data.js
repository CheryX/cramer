
// Jeśli chcesz podpisać się pod postem, możesz się tutaj dopisać.
let cheryx = {
    name: 'Maciej Musielik',
    avatar: 'https://avatars.githubusercontent.com/u/58445363?s=40&v=4',
    github: 'cheryx'
}
let electruuu = {
    name: 'Electruuu',
    avatar: 'https://avatars.githubusercontent.com/u/60323922?s=64&v=4',
    github: 'electruuu'
}

//To możesz ignorować
const subjects = [
    {name: "Matematyka", icon: "fa-square-root-variable"},
    {name: "Polski", icon: "fa-book-open"},
    {name: "Angielski", icon: "fa-language"},
    {name: "Informatyka", icon: "fa-code"},
    {name: "Fizyka", icon: "fa-globe"},
    {name: "Biologia", icon: "fa-dna"},
    {name: "Chemia", icon: "fa-flask-vial"},
    {name: "Niemiecki", icon: "fa-language"},
]

// Tutaj dodaj posty
export default {
    "trygonometria": {
        title: 'Trygonometria',
        slug: 'trygonometria.mdx',
        date: '2022-07-16',
        tags: ['matematyka', 'fizyka', 'trygonometria'],
        summary: 'Podstawowe informacje o funkcjach sin, cos oraz tg na przykładzie kąta ostrego. Twierdzenie sinusów oraz cosinusów (Twierdzenie pitagorasa+)',
        authors: [cheryx]
    },
    "wzory": {
        title: 'Przekształcanie wzorów',
        slug: 'wzory.mdx',
        date: '2022-07-09',
        tags: ['matematyka', 'fizyka', 'wzory', 'algebra'],
        summary: 'Naucz się jak szybko przekształcać wzory, od wzoru na prędkość do wyprowadzania równania kwadratowego.',
        authors: [cheryx]
    },
    "cpp": {
        title: 'Wstęp do C++',
        slug: 'cpp.mdx',
        date: '2022-05-20',
        tags: ['informatyka', 'c++', 'cpp'],
        summary: 'Podstawowe informacje o C++',
        thumbnail: 'https://images.unsplash.com/photo-1635775017492-1eb935a082a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        authors: [cheryx, electruuu],
        featured: true
    },
    "rodzaj-rzeczownika": {
        title: 'Rodzaj rzeczownika',
        slug: 'rodzaj-rzeczownika.mdx',
        date: '2022-05-16',
        tags: ['niemiecki', 'gramatyka'],
        authors: [cheryx],
        summary: 'Pomoc do znalezienia rodzaju rzeczownika',
        thumbnail: 'https://images.unsplash.com/photo-1598965057003-1e9092d37b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    "geometria-a": {
        title: 'Geometria',
        slug: 'geometria-a.mdx',
        date: '2022-06-02',
        tags: ['matematyka', 'geometria'],
        authors: [cheryx],
        summary: 'Definicja prostej, półprostej, odcinka, punktu oraz kąta',
        thumbnail: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    },
    "systematyka-zwiazkow": {
        title: 'Systematyka związków nieorganicznych',
        date: '2022-05-16',
        tags: ['chemia', 'zwiazki', 'tlenki', 'kwasy', 'sole'],
        authors: [cheryx],
        slug: 'systematyka-zwiazkow.mdx',
        summary: 'Tlenki, Wodorki, Wodorotlenki, Kwasy oraz Sole w jednym miejscu',
        thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    },
    "uklady-rownan": {
        title: 'Układy Równań',
        authors: [cheryx],
        summary: 'Rozwiązywanie układów równań',
        date: '2022-05-17',
        slug: "uklady-rownan.mdx",
        tags: ['matematyka', 'funkcje', 'uklady'],
        thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    },
    "wybrane-funkcje": {
        title: 'Wybrane funkcje',
        date: '2022-05-17',
        tags: ['matematyka', 'funkcje'],
        slug: 'wybrane-funkcje.mdx',
        summary: 'Funkcja kwadratowa, logarytmiczna oraz proporcjonalność odwrotna',
        authors: [cheryx],
        thumbnail: 'https://images.unsplash.com/photo-1635070040809-d434392ae756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    },
    "wyrazenia-algebraiczne": {
        title: 'Wyrażenia Algebraiczne',
        date: '2022-05-20',
        slug: "wyrazenia-algebraiczne.mdx",
        tags: ['matematyka', 'algebra'],
        summary: 'Potęgi, logarytmy oraz wzory skróconego mnożenia',
        authors: [cheryx],
        thumbnail: 'https://images.unsplash.com/photo-1653074281018-c08f358059ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    },
    "zbiory": {
        title: 'Zbiory Liczbowe',
        slug: 'zbiory.mdx',
        date: '2022-05-20',
        tags: ['matematyka', 'zbiory'],
        summary: 'Definicja zbioru, suma, różnica zbioru, część wspólna',
        authors: [cheryx],
        thumbnail: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
    }

}
export { subjects } 