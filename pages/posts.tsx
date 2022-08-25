import type { NextPage } from 'next'
import Header from '../components/Header';
import Layout from '../components/Layout'
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import { getAllPostsData, Post } from '../data/postData';
import generateRSS from '../data/rss';

type Props = {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <Layout>
      <SEO ogUrl={`https://c.mmusielik.xyz/posts`} />

			<section id="posts" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mx-auto'>

				{posts.slice(0, 6).map((p, index) => (
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
