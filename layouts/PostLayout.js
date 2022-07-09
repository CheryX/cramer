import { useState } from 'react'
import Header from '@/components/Header';

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ postData, children, }) {
	
	const [searchValue, setSearchValue] = useState('')

	function onKey(e) {
		if (e.key == "Enter") {
			window.location.replace(`/posts?q=${searchValue}`);
		}
	}

	return (
		<>
			<Header page='notes' searchOptions={{
				onChange: (e) => setSearchValue(e.target.value),
				onKey: (e) => onKey(e)
			}}/>

			<div className='max-w-5xl mx-10 lg:mx-auto md:flex mt-10'>

				<div className='md:w-1/4 print:hidden'>
					Na tej stronce
				</div>

				<article className='md:w-3/4'>

					<h1 className='text-4xl font-bold mb-1'>{postData.title}</h1>
					
					
					<time dateTime={postData.date}>
						<div className='flex items-center my-2'>
							<i className="fa-regular fa-calendar text-xl mr-2"></i> {new Date(postData.date).toLocaleDateString('pl-PL', postDateTemplate)}
						</div>
					</time>

					<div className='my-5'>
						{children}
					</div>

					<div className='flex items-center mb-10 print:hidden'>
						<i className="fa-solid fa-tag text-xl mr-1"></i> {postData.tags.map((tag, index) => <span className='text-lg ml-1'>{tag}</span>)}
					</div>

				</article>

			</div>

		</>
	)
}