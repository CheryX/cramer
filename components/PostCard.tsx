import Link from 'next/link'
import React from 'react'
import { PostData } from '../data/postData'
import Header from './Header'

type Props = {
    title: string,
    excerpt: string,
    tags?: string[]
}

export default function PostCard(frontMatter: Props) {
	return (
		<div className='p-5 w-70 outline h-60 mx-5'>
			<h1 className='font-bold text-xl'>{frontMatter.title}</h1>
			<p>{frontMatter.excerpt}</p>
		</div>	
	)
}
