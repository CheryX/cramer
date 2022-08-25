import Link from 'next/link'
import React from 'react'
import { PostData } from '../data/postData'
import Header from './Header'

type Props = {
    title: string,
    excerpt: string,
    tags?: string[],
    thumbnail?: string,
    slug: string,
    date: string
}

function parseLongText(str: string): string {
    
    let newStr = str.slice(0,60);
    if (str.length > 60) newStr += "...";

    return newStr
    
}

export default function PostCard({title, excerpt, tags, slug, thumbnail, date}: Props) {
	return (
		<Link href={`/posts/${slug}`}>
            <a>
                <div className='h-40 m-2 rounded-xl text-white shadow' style={{backgroundImage: `url(${thumbnail})`}}>
                    <div className='h-40 p-5 rounded-xl bg-black/20 backdrop-blur-sm flex flex-col justify-between'>
                        <div>
                            <h1 className='font-bold text-xl z-50'>{title}</h1>
                            <p>{parseLongText(excerpt)}</p>
                        </div>
                        <div className='flex items-center'>
                            <span className="material-symbols-rounded mr-2">schedule</span> {date}
                        </div>
                    </div>
                </div>	
            </a>
        </Link>
	)
}
