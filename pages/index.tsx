import type { NextPage } from 'next'
import SEO from '../components/SEO';
import { getAllPostsData } from '../data/postData';
import generateRSS from '../data/rss';

const Home: NextPage = () => {
  return (
    <main>
      <SEO ogUrl={`https://c.mmusielik.xyz/`} />
      Hello, World!
    </main>
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
