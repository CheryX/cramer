import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { getAllPostsData } from '@/lib/notesData'
import Link from 'next/link';

export default function Index({ posts }) {

	return (
		<Layout>
			<SEO ogUrl={`https://c.mmusielik.xyz/posts`} />

			{posts.map((post, index) => {
				return <span className='py-4 block' key={index}>

					<Link href={'/posts/' + post.filePath.replace('.mdx', '')}>
						<a>
							<h1 className='text-3xl font-bold'>{post.data.title}</h1>
							<p>{post.data.excerpt}</p>
						</a>
					</Link>
				
				</span>
			})}

		</Layout>
	)
}

export function getServerSideProps() {
	const posts = getAllPostsData();
	return { props: { posts } }
}