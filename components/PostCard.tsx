import Link from 'next/link'
import React from 'react'
import { PostData } from '../data/postData'
import Header from './Header'

type Props = {
    title: string,
    excerpt: string,
    tags?: string[],
    slug: string
}

export default function PostCard({title, excerpt, tags, slug}: Props) {
	return (
		<Link href={`/posts/${slug}`}>
            <a>
                <div className='p-5 w-80 outline h-32 lg:h-40 mx-5'>
                    <h1 className='font-bold text-xl'>{title}</h1>
                    <p>{excerpt}</p>
                </div>	
            </a>
        </Link>
	)
}
