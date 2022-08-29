import React from 'react'
import Header from './Header'
import DataInfo from './DataInfo'
import { splashes } from '../data/data'
import { useState } from 'react'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
	return (
		<>
			<DataInfo />

			<Header />

			<main className='pb-16 lg:pl-80'>
				{children}
			</main>
		</>	
	)
}
