import Header from '../components/Header';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { getAllPostsData, Post } from '../data/postData';
import generateRSS from '../data/rss';
import { setCookie } from 'cookies-next';

type Props = {
	posts: Post[]
}

const Home = ({ posts }: Props) => {

	setCookie('favourites', ['cpp', 'programowanie-html'], { maxAge: 60 * 60 * 24 * 60 });

	return (
		<Layout>
			<SEO ogUrl={`https://c.mmusielik.xyz/`} />
			
			<section id="landing" className='min-h-fit lg:text-center landing-bg text-white m-4 rounded-xl'>
				
				<div className='px-5 py-10 lg:py-28 rounded-xl'>

					<h1 className='text-2xl font-black lg:text-5xl'>Tworzymy notatki których i tak nikt nie używa</h1>
					<p className='lg:text-2xl lg:mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, soluta unde! Doloremque sit rem.</p>

				</div>

			</section>

			<section id="posts" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mx-2'>

				{posts.slice(0, 12).map((p, index) => (
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
