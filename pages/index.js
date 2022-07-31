import { getAllPostsData, getAllTags } from '@/lib/notesData'
import Link from 'next/link';

import PostCard from '@/components/PostCard';
import PageSEO from '@/components/SEO'
import Subjects from '@/components/Subjects';
import Landing from '@/components/Landing';
import Header from '@/components/Header';
import { useState } from 'react'

export default function Index({ posts, tags }) {
	const [searchValue, setSearchValue] = useState('')

	function onKey(e) {
		if (e.key == "Enter") {
			window.location.replace(`/posts?q=${searchValue}`);
		}
	}

	return (
		<>
			<PageSEO title="Projekt Cramer" description="Projekt Cramer to miejsce z darmowymi notatkami które możesz wykorzystać do nauki np. przed sprawdzianem" />
			
			<Header page='index' searchOptions={{
                onChange: (e) => setSearchValue(e.target.value),
                onKey: (e) => onKey(e)
            }}/>

			<Landing />

			<div className='max-w-screen-2xl mx-auto my-10'>
				
				<h2 className='text-3xl font-extrabold text-center md:my-10 my-5 lg:text-5xl'>Najnowsze notatki</h2>

				{/* Show top 8 posts */}
				<div id='posts' className='sm:grid sm:grid-cols-2 xl:grid-cols-4 mx-auto px-1'>
					{posts.slice(0, 8).map((data) => ( <PostCard post={data}/> ) )}
				</div>

				<Link href='posts'><a>
					<div className='inline-block my-5 ml-3 py-2 px-12 text-2xl font-bold rounded-md bg-blue-500 text-white'>
						Pokaż więcej <i className="ml-2 fa-solid fa-angles-right text-xl"></i>
					</div>
				</a></Link>

			</div>

		</>
	)
}

export function getStaticProps() {
	const posts = getAllPostsData()
	const tags = getAllTags()

	return { props: { posts, tags } }
}
