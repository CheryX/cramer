import LandingLayout from '@/layouts/LandingLayout'
import { getAllPostsData, getAllTags } from '@/lib/notesData'

export default function Index({ posts, tags }) {
	return (
		<LandingLayout posts={posts} tags={tags} />
	)
}

export function getStaticProps() {
	const posts = getAllPostsData()
	const tags = getAllTags()

	return { props: { posts, tags } }
}
