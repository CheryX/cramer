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

function parseLongText(str: string): string {
    
    let newStr = str.slice(0,100);
    if (str.length > 100) newStr += "...";

    return newStr
    
}

export default function PostCard({title, excerpt, tags, slug}: Props) {
	return (
		<Link href={`/posts/${slug}`}>
            <a>
                <div className='p-5 w-80 outline h-32 lg:h-40 mx-5'>
                    <h1 className='font-bold text-xl'>{title}</h1>
                    <p>{parseLongText(excerpt)}</p>
                </div>	
            </a>
        </Link>
	)
}
