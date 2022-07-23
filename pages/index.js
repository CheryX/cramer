import { getAllPostsData, getAllTags } from '@/lib/notesData'
import Link from 'next/link';

import PostCard from '@/components/PostCard';
import PageSEO from '@/components/SEO'
import Subjects from '@/components/Subjects';
import Landing from '@/components/Landing';

export default function Index({ posts, tags }) {
	return (
		<>
			<PageSEO title="Projekt Cramer" description="Projekt Cramer to miejsce z darmowymi notatkami które możesz wykorzystać do nauki np. przed sprawdzianem" />
			<Landing />

			{/* Show top 12 posts (12 since it's a multiple of 1,2,3,4) */}
			<div id='posts' className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-screen-2xl mx-auto md:mt-5'>
				{posts.slice(0, 12).map((data) => ( <PostCard post={data}/> ) )}
			</div>

			<div className='flex justify-center mb-20 mt-5'>
				<Link href='posts'>
					<a>
						<div className='py-2 px-10 text-xl rounded-sm bg-primary-300 hover:bg-primary-400 dark:bg-primary-600 dark:hover:bg-primary-500 duration-200'>
							Pokaż więcej
						</div>
					</a>
				</Link>
			</div>

			<h2 className='text-5xl font-extrabold text-center mt-16'>Przedmioty</h2>
			<p className='text-center text-xl font-medium mt-3'>Szukaj notatek przez przedmiot</p>

			<Subjects />

		</>
	)
}

export function getStaticProps() {
	const posts = getAllPostsData()
	const tags = getAllTags()

	return { props: { posts, tags } }
}
