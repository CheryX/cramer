import type { NextPage } from 'next'
import Layout from '../components/Layout'
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
          <div key={index} className="my-5 px-5 border-l bg-pri">
            <h3 className='text-2xl'>{p.data.title}</h3>
            <p>{p.data.excerpt}</p>
          </div>
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
