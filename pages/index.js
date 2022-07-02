import { getAllPostsData, getAllTags } from '@/lib/notesData'
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
			<Header page='index' searchOptions={{
				onChange: (e) => setSearchValue(e.target.value),
				onKey: (e) => onKey(e)
			}}/>

			<h2 className='text-2xl'>Posts</h2>

			<ul>
				{posts.map((data, index) => {
					return <li key={index}>{data.title}</li>
				} )}
			</ul>

			<h2 className='text-2xl'>Tags</h2>

			<ul>
				{tags.map((t, index) => {
					return <li key={index}>{t}</li>
				})}
			</ul>

		</>
	)
}

export function getStaticProps() {
	const posts = getAllPostsData()
	const tags = getAllTags()

	return { props: { posts, tags } }
}
