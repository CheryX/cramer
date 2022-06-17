import PostCard from "@/components/PostCard"
import PageSEO from "@/components/SEO"
import Link from "next/link"

export default function LandingLayout({ posts, tags }) {
	return (
		<>
			<div className="container justify-content-center">
				<PageSEO title="Home" description="thinking" />
				<h2>Posty</h2>
				<div className="d-flex flex-row flex-wrap justify-content-evenly">
					{posts.map((post) => (
						<Link
							as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
							href={`/posts/[slug]`}
							key={post.filePath}
						>
							<a className="text-decoration-none">
							<PostCard title={post.data.title} description={post.data.description} date={post.data.date} thumbnail={post.data.thumbnail} />
							</a>
						</Link>
					))}
				</div>
				<hr />
				<h2>Tagi</h2>
				<ul>
					{tags.map((tag) => (
						<li key={tag}>
							<Link
								as={`/tags/${tag}`}
								href={`/tags/[tag]`}
							>
								<a>{tag}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}