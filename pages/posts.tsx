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

      <h1 className='text-3xl'>Post List</h1>

      {posts.map((p, index) => {
        return (
          <span key={index}>
            <PostCard slug={p.filePath.replace('.mdx', '')} title={p.data.title} excerpt={p.data.excerpt} />
          </span>
        )
      })}

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
