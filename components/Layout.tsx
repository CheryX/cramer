import React from 'react'
import Header from './Header'
import { splashes } from '../data/data'
import { useState } from 'react'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
	return (
		<>
			<Header />

			<main className='pb-16 lg:pl-80'>
				{children}
			</main>
		</>	
	)
}
