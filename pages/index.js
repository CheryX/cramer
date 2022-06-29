import { getAllPostsData, getAllTags } from '@/lib/notesData'

export default function Index({ posts, tags }) {
	return (
		<>
			<ul>
				{posts.map((data, index) => {
					return <li key={index}>{data.data.title}</li>
				} )}
			</ul>

			<ul>
				{tags.map((t, index) => {
					return <li key={index}>{t}</li>
				})}
			</ul>

		</>
	)
}

export function getStaticProps() {
	const posts = getAllPostsData()
	const tags = getAllTags()

	return { props: { posts, tags } }
}
