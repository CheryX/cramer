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

			<div className='max-w-screen-2xl mx-auto xl:flex'>

				<div className='print:hidden xl:min-w-fit mx-10 xl:px-5 xl:border-r dark:xl:border-r-primary-800 pt-10'>
					<div className='xl:top-32 xl:sticky'>

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

				<article className='xl:w-auto mx-5 md:mx-20 xl:mx-auto md:relative pt-10'>

					<h1 className='text-4xl font-bold mb-1'>{postData.title}</h1>
					
					<time dateTime={postData.date}>
						<div className='flex items-center my-2'>
							<i className="fa-regular fa-calendar text-xl mr-2"></i> {new Date(postData.date).toLocaleDateString('pl-PL', postDateTemplate)}
						</div>
					</time>

					<span className='lg:w-1/2 lg:float-left hidden'/>
					<span className='lg:w-1/3 lg:float-none hidden'/>
					<span className='lg:w-2/3 lg:float-right hidden'/>

					<div className='my-5'>
						{children}
					</div>

					<hr className='my-5 border-primary-200 dark:border-primary-800 print:hidden' />

					<div className='ml-5 xl:ml-0 xl:flex items-center justify-between print:hidden'>
						{postData.authors && postData.authors.map((author, index) => (
							<div className='flex items-center' key={index}>
								<img src={author.avatar} className="rounded-full mr-2" width={40} height={40}/>
								<div>
									<span className="font-medium text-primary-700 dark:text-primary-100 p-0 m-0 block">{author.name}</span>
									<Link href={`https://github.com/${author.github}`}>
										<a className="text-sm text-teal-500 p-0 m-0 block">@{author.github}</a>
									</Link>
								</div>
							</div>
						))}
					</div>

					{postData.authors && (
						<hr className='my-5 border-primary-200 dark:border-primary-800 print:hidden' />
					) }

					<div className='ml-5 xl:ml-0 xl:flex items-center justify-between'>
						<div className='flex items-center xl:mb-10 mb-5 print:hidden text-primary-500'>
							<i className="fa-solid fa-tag text-lg mr-1"></i> {postData.tags.map((tag, index) => (
								<Link href={`/posts?q=${tag}`}>
									<a className='text-md ml-1'>{tag}</a>
								</Link>
							))}
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