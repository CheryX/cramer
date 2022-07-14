import { useState } from 'react'
import Header from '@/components/Header';
import PageSEO from "@/components/SEO"
import Link from 'next/link';

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ postData, children, posts, fileName, toc }) {
	
	const [searchValue, setSearchValue] = useState('')

	function onKey(e) {
		if (e.key == "Enter") {
			window.location.replace(`/posts?q=${searchValue}`);
		}
	}

	return (
		<>
			<PageSEO title={postData.title} description={postData.summary} type="post" />

			<Header page='notes' searchOptions={{
				onChange: (e) => setSearchValue(e.target.value),
				onKey: (e) => onKey(e)
			}}/>

			<div className='max-w-7xl mx-10 xl:mx-auto xl:flex mt-10'>

				<div className='print:hidden xl:w-1/5 xl:fixed z-20 xl:top-[3.8125rem] xl:bottom-0 xl:right-[max(0px,calc(50%-45rem))] xl:overflow-y-auto xl:pt-10 pb-10'>
					<div className=''>

						<h5 className='font-bold text-2xl mb-2'>Na tej stronie</h5>
						<ol>
							{toc.map((heading) => (
								<li key={heading.content} className={`toc-${heading.lvl}`}>
									<Link href={`#${heading.slug}`}>
										<a>{heading.content}</a>
									</Link>
								</li>
							))}
						</ol>

					</div>
				</div>

				<article className='xl:w-4/5 md:relative'>

					<h1 className='text-4xl font-bold mb-1'>{postData.title}</h1>
					
					
					<time dateTime={postData.date}>
						<div className='flex items-center my-2'>
							<i className="fa-regular fa-calendar text-xl mr-2"></i> {new Date(postData.date).toLocaleDateString('pl-PL', postDateTemplate)}
						</div>
					</time>

					<div className='my-5'>
						{children}
					</div>

					<hr className='my-5 border-primary-200 dark:border-primary-800' />

					<div className='flex items-center justify-between'>
						<div className='flex items-center mb-10 print:hidden text-primary-500'>
							<i className="fa-solid fa-tag text-lg mr-1"></i> {postData.tags.map((tag, index) => <span className='text-md ml-1'>{tag}</span>)}
						</div>

						<div className='flex items-center mb-10 print:hidden text-primary-500'>
							<i className="fa-brands fa-github text-lg mr-1"></i>
							<Link href={`https://github.com/CheryX/cramer/blob/master/posts/${postData.slug}`}>
								<a className='text-md ml-1'>Edytuj na GitHubie</a>
							</Link> 
						</div>
					</div>

				</article>

			</div>

		</>
	)
}