import { getAllPostsData, getAllTags } from '@/lib/notesData'
import Header from '@/components/Header';
import { useState } from 'react'
import PostCard from '@/components/PostCard';
import { subjects } from 'posts/data';
import Link from 'next/link';
import PageSEO from '@/components/SEO'

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
			
			<div id='landing' className='bg-custom'>
				<Header page='index' searchOptions={{
					onChange: (e) => setSearchValue(e.target.value),
					onKey: (e) => onKey(e)
				}}/>

				<div className='md:py-24 py-12'>
					<h1 className="text-4xl lg:text-6xl font-extrabold max-w-screen-md md:text-center mx-5 md:mx-auto">Miejsce z&nbsp;darmowymi notatkami do szkoły</h1>
					<p className='lg:text-xl md:text-center max-w-screen-md mx-5 md:mx-auto my-5 lg:my-10'>Platforma z&nbsp;notatkami zbudowana przez uczniów dla&nbsp;uczniów. Powtórz materiał przed ważnym sprawdzianem, utrwal umiejętności wykonując zadania.</p>
				</div>

			</div>

			<div id='posts' className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:max-w-screen-2xl mx-auto md:mt-5'>
				{posts.slice(0, 12).map((data, index) => {
					return <span key={index}><PostCard post={data}/></span>
				} )}
			</div>

			<h2 className='text-5xl font-extrabold text-center mt-16'>Przedmioty</h2>
			<p className='text-center text-xl font-medium mt-3'>Szukaj notatek przez przedmiot</p>

			<div id='subjects' className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-8 lg:max-w-screen-xl mx-auto my-10 md:my-20 gap-4'>
				{subjects.map((data, index) => {
					return (
						<Link href={`/posts?q=${data.name.toLowerCase()}`}>
							<a>
								<div key={index} className='flex flex-col'>
									<i className={`fa-solid ${data.icon} text-center fa-4x mb-5`}></i>
									<p className='text-center text-2xl font-bold'>{data.name}</p>
								</div>
							</a>
						</Link>
					)
				})}
			</div>

		</>
	)
}

export function getStaticProps() {
	const posts = getAllPostsData()
	const tags = getAllTags()

	return { props: { posts, tags } }
}
