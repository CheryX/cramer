import Header from '../components/Header';
import PostCard from '../components/PostCard';
import SEO from '../components/SEO';
import { getAllPostsData, Post } from '../data/postData';
import generateRSS from '../data/rss';

type Props = {
	posts: Post[]
}

const Home = ({ posts }: Props) => {
	return (
		<main className='landing-page'>
			<SEO ogUrl={`https://c.mmusielik.xyz/`} />

			<Header />

			<main className='pb-16'>
				
				<section id="landing" className='min-h-fit lg:text-center landing-bg text-white'>
					
					<div className='px-5 py-10 lg:pb-28 lg:pt-40'>

						<h1 className='text-2xl font-black lg:text-5xl'>Tworzymy notatki których i tak nikt nie używa</h1>
						<p className='lg:text-2xl lg:mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, soluta unde! Doloremque sit rem.</p>

					</div>

				</section>

				<section id="posts" className='my-8 lg:my-10'>
					
					<div className='flex overflow-x-scroll py-5'>

						{posts.slice(0, 6).map((p, index) => (
								<span key={index}>
									<PostCard slug={p.filePath.replace('.mdx', '')} title={p.data.title} excerpt={p.data.excerpt} />
								</span>
							))
						}

					</div>

				</section>

				<section id='about' className='mx-5'>
					
					<h1 className='lg:text-center text-4xl font-black lg:text-5xl my-5'>O nas</h1>
					
					<p className='lg:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, id odio non dolores reiciendis suscipit odit, saepe ad quis hic tempore sint impedit asperiores dicta animi velit esse mollitia doloremque?</p>
					<p className='lg:text-center'>Illum nesciunt mollitia sunt porro voluptates labore inventore amet quasi, dolore quod libero nam tempora, consequuntur aspernatur modi culpa distinctio numquam sapiente recusandae? Ipsa laboriosam placeat alias accusamus at ad.</p>
					<p className='lg:text-center'>Esse rerum cum, nisi deleniti inventore nobis sunt doloremque qui ut. Praesentium similique quaerat libero modi esse. Aut quod porro soluta doloribus dolores atque beatae consequuntur. Necessitatibus doloremque delectus impedit.</p>
					<p className='lg:text-center'>Dolorem optio perferendis iure ea id quo? Officiis itaque perferendis odio dolorem magni dignissimos, asperiores doloremque non dolore commodi expedita maiores officia, numquam incidunt eveniet ad facilis minus labore reprehenderit.</p>
					<p className='lg:text-center'>Incidunt nihil commodi voluptatem nesciunt quae deserunt iusto, dolorem inventore aut quaerat dicta vitae labore ab a quis vero, ullam alias cupiditate! Quas ipsa et ex veritatis sint, quis quidem!</p>

				</section>

			</main>

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
