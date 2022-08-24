import Link from 'next/link'
import React from 'react'
import Header from './Header'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />

			<main className='pb-16 lg:pt-16'>
				{children}
			</main>

			<footer>Footer</footer>
		</>	
	)
}
