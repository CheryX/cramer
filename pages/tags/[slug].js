import ListLayout from '@/layouts/ListLayout'
import { getAllPosts, getAllTags } from '@/lib/notesData'

export default function Index({ posts, tags, tag }) {
	return (
		<ListLayout posts={posts} tags={tags} tag={tag} />
	)
}

export async function getStaticPaths() {
    const tags = await getAllTags()
    const paths = tags.map((slug) => ({
        params: {
          slug,
        },
    }))

    return {
      paths,
      fallback: false,
    }

  }

  
export function getStaticProps({ params }) {
	const posts = getAllPosts();
    const tags = getAllTags();

    let filteredPosts = [];
    for (const post of posts) {
        if (post.data.tags.includes(params.slug)) {
            filteredPosts.push(post);
        }
    }

    return {
        props: {
            posts: filteredPosts,
            tags,
            tag: params.slug,
        }
    }
}
