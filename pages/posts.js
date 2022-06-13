import ListLayout from '@/layouts/ListLayout'
import { getAllPosts, getAllTags } from '@/lib/notesData'

export default function Index({ posts, tags }) {
	return (
		<ListLayout posts={posts} tags={tags} />
	)
}

export function getStaticProps() {
	const posts = getAllPosts()
	const tags = getAllTags()

	return { props: { posts, tags } }
}
