import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="nav p-3 border-bottom">
      <Link href="/" passHref>
        <h2 className="pointer">blog</h2>
      </Link>

      <Link href="/posts" passHref>
        <p className="ms-5 pointer lead my-auto">posty</p>
      </Link>

      <Link href="/about" passHref>
        <p className="ms-5 pointer lead my-auto">o projekcie</p>
      </Link>


      <Link href="/ram" passHref>
        <p className="ms-5 pointer lead my-auto">darmowy ram</p>
      </Link>
    </nav>
  )
}

export default Nav
