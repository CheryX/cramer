interface Person {
    name: string,
    avatar: string,
    github: string
}

const data = {
    title: 'Projekt Cramer',
    author: 'Maciej Musielik',
    headerTitle: 'Projekt Cramer',
    description: 'Projekt Cramer, czyli jak przeżyć w szkole.',
    language: 'pl',
    
    siteUrl: 'https://c.mmusielik.xyz/',
    siteRepo: 'https://github.com/CheryX/cramer',
    siteFavicon: '/favicon.ico',

    authors: {
        cheryx: {
            name: 'Maciej Musielik',
            avatar: 'https://avatars.githubusercontent.com/u/58445363?s=40&v=4',
            github: 'CheryX'
        },
        electruuu: {
            name: 'Electruuu',
            avatar: 'https://avatars.githubusercontent.com/u/60323922?s=64&v=4',
            github: 'electruuu'
        }
    }
}

export default data;