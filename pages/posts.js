import { getAllPostsData, getAllTags } from '@/lib/notesData'
import Header from '@/components/Header'
import { useState } from 'react'

export default function Index({ posts, title }) {
	let [searchValue, setSearchValue] = useState(title)

	let filteredBlogPosts = posts.filter((posts) => {
		const searchContent = posts.title + posts.summary + posts.tags.join(' ')
		return searchContent.toLowerCase().includes(searchValue.toLowerCase())
	})

	function onKey(e) {
		(e.key == "Enter") && window.location.replace(`/posts?q=${searchValue}`);
	}

	return (
		<>
			<Header page='notes' searchOptions={{
				onChange: (e) => setSearchValue(e.target.value),
				onKey: (e) => onKey(e),
				value: title
			}}/>

			<h1 className='text-3xl'>Szukaj notatek</h1>

			<hr />

			<h1 className='text-2xl'>Znalezione posty:</h1>

			<ul className='list-decimal'>
				{filteredBlogPosts.map((data, index) => {
					return <li key={index}>{data.title}</li>
				} )}
			</ul>

		</>
	)
}

export function getServerSideProps(context) {
	const posts = getAllPostsData();
	const title = context.query.q || "";

	return { props: { posts, title } }

}