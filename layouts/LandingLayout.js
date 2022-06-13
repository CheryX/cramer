import PageSEO from "@/components/SEO"
import Link from "next/link"

export default function LandingLayout({ posts, tags }) {
	return (
		<>
			<PageSEO title="Home" description="thinking" />
			<h1>Home</h1>
			<p>Fajna stronka</p>
			<hr />
			<h2>Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.filePath}>
						<Link
							as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
							href={`/posts/[slug]`}
						>
							<a>{post.data.title}</a>
						</Link>
					</li>
				))}
			</ul>
			<hr />
			<h2>Tags</h2>
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
		</>
	)
}