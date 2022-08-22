import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { getAllPostsData, Post } from '../data/postData';
import generateRSS from '../data/rss';

type Props = {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  return (
    <Layout>
      <h1 className='text-3xl'>Post List</h1>

      {posts.map((p, index) => {
        return (
          <div key={index} className="my-5 px-5 border-l">
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
