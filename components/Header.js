import Link from 'next/link'

export default function Header() {
  return (
    <header>
        <Link as='/' href='/'><a><h1>Projekt Cramer</h1></a></Link>
        <ul>
            <li><Link as='/about' href='/about'><a>About</a></Link></li>
            <li><Link as='/contributing' href='/contributing'><a>Contributing</a></Link></li>
            <li><Link as='/posts' href='/posts'><a>Search</a></Link></li>
            <li><b><Link as='/testing' href='/testing'><a>[DEV] Testing</a></Link></b></li>
        </ul>
        <hr />
    </header>
  )
}
