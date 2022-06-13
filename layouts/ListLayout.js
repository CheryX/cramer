import PageSEO from "@/components/SEO"
import Link from "next/link"
import { useState } from 'react'

export default function ListLayout({ posts, tags, initialDisplayPosts = [] }) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter((frontMatter) => {
      const searchContent = frontMatter.data.title + frontMatter.data.summary + frontMatter.data.tags.join(' ')
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })

    const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

	return (
		<>
			<PageSEO title="Search" description="thinking" type="list" />
			<h1>Posts</h1>
            <form className="mt-5 mb-4" role="search">
              <input
                aria-label="Szukaj notatek"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                className="form-control"
                placeholder="Szukaj notatek"
              />
            </form>
			<ul>
				{displayPosts.map((post) => (
					<li key={post.filePath}>
						<Link
							as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
							href={`/posts/[slug]`}
						>
							<a>{post.data.title}</a>
						</Link>
                         - Tags: {post.data.tags.join(', ')}
                        <hr />
					</li>
				))}
			</ul>
		</>
	)
}