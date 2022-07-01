
// Jeśli chcesz podpisać się pod postem, możesz się tutaj dopisać.
let cheryx = {
    name: 'CheryX',
    avatar: 'https://avatars.githubusercontent.com/u/58445363?s=40&v=4',
    github: 'cheryx'
}
let electruuu = {
    name: 'Electruuu',
    avatar: 'https://avatars.githubusercontent.com/u/60323922?s=64&v=4',
    github: 'electruuu'
}

// Tutaj dodaj posty
export default {
    "cpp": {
        title: 'Wstęp do C++',
        slug: 'cpp.mdx',
        date: '2022-05-20',
        tags: ['informatyka', 'c++'],
        summary: 'Podstawowe informacje o C++',
        thumbnail: 'https://images.unsplash.com/photo-1635775017492-1eb935a082a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        authors: [cheryx, electruuu],
        featured: true
    },
    "rodzaj-rzeczownika": {
        title: 'Rodzaj rzeczownika',
        slug: 'rodzaj-rzeczownik.mdx',
        date: '2022-05-16',
        tags: ['niemiecki', 'gramatyka'],
        authors: [cheryx],
        summary: 'Pomoc do znalezienia rodzaju rzeczownika',
        thumbnail: 'https://images.unsplash.com/photo-1598965057003-1e9092d37b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    }
}