import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { getAllPostsData } from '../data/postData';
import generateRSS from '../data/rss';

const Home: NextPage = () => {
  return (
    <Layout>
      Hello, World!
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
