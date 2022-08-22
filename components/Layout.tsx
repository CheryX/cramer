import Link from 'next/link'
import React from 'react'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
	return (
		<>
			<nav className='header'>

				<Link href={'/'}><a>Home</a></Link>
				<Link href={'/about'}><a>About</a></Link>
				<Link href={'/posts'}><a>Search Posts</a></Link>
				<Link href={'/posts/example'}><a>Example Post</a></Link>

			</nav>

			<main>
				{children}
			</main>

			<footer>Footer</footer>
		</>	
	)
}
