import React from 'react'
import Header from './Header'
import { splashes } from '../data/data'
import { useState } from 'react'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {

	const [message, setMessage] = useState("todo");

	return (
		<>
			<Header />

			<main className='pb-16 lg:pl-80'>
				{children}
			</main>

			<footer className='hidden lg:block pl-80 w-full bg-slate-50 text-center dark:bg-slate-800 dark:text-white py-2'>{message}</footer>
		</>	
	)
}
