import type { NextPage } from 'next'
import Header from '../components/Header';
import Layout from '../components/Layout'
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import { getAllPostsData, Post } from '../data/postData';
import generateRSS from '../data/rss';
import Search from '../components/Search'
import { useState } from 'react'

type Props = {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
	let [searchValue, setSearchValue] = useState('')

	let filteredBlogPosts = posts.filter((posts) => {
		const searchContent = posts.data.title + posts.data.summary + posts.data.tags.join(' ')
		return searchContent.toLowerCase().includes(searchValue.toLowerCase())
	})

	function onKey(e: any) {
		(e.key == "Enter") && window.location.replace(`/posts?q=${searchValue}`);
	}

	return (
		<Layout>
		<SEO ogUrl={`https://c.mmusielik.xyz/posts`} />

				<Search onChange={(e) => {console.log(e.target); setSearchValue(String(/*e.target.value*/))}} onKey={(e) => onKey(e)} value="" />

				<section id="posts" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mx-auto'>

					{filteredBlogPosts.map((p, index) => (
							<span key={index}>
								<PostCard slug={p.filePath.replace('.mdx', '')} title={p.data.title} excerpt={p.data.excerpt} thumbnail={p.data.thumbnail} date={p.data.date} />
							</span>
						))
					}

				</section>

		</Layout>
	)
}

export async function getStaticProps() {
	
  await generateRSS();
	const posts = getAllPostsData();

	return {
		props: {
			posts
		}
	}
  
}

export default Home
