import { getAllPostsData, getAllTags } from '@/lib/notesData'
import Header from '@/components/Header'
import { useState } from 'react'
import PostCard from '@/components/PostCard'

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

			<h2 className='text-5xl font-extrabold text-center mt-16'>Wszystkie notatki</h2>
			<p className='text-center text-xl font-medium mt-3 mx-10'>Pole wyszukiwania znajduje się w prawym górnym rogu</p>

			<div id='posts' className='sm:grid sm:grid-cols-2 xl:grid-cols-4 lg:max-w-screen-2xl mx-auto md:mt-5 mb-20'>
				{filteredBlogPosts.map((data, index) => {
					return <span key={index}><PostCard post={data}/></span>
				})}

			</div>

			{
				(filteredBlogPosts.length == 0) && <p className='text-center mb-20 text-3xl font-bold'>Brak postów, spróbuj użyć innych słów oraz tagów.</p> 
			}

		</>
	)
}

export function getServerSideProps(context) {
	const posts = getAllPostsData();
	const title = context.query.q || "";

	return { props: { posts, title } }

}