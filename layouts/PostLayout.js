import PageSEO from "@/components/SEO"
import Link from "next/link"

export default function PostLayout({ frontMatter, children, posts }) {
	return (
		<>
			<PageSEO title={frontMatter.title} description={frontMatter.description} type="post" />
			<header>
				<nav>
					<Link href="/">
						<a>👈 Go back home</a>
					</Link>
				</nav>
			</header>
			<div className="post-header">
				<h1>{frontMatter.title}</h1>
				{frontMatter.description && (
					<p className="description">{frontMatter.description}</p>
				)}
			</div>
			<main className='w-50'>
				{children}
			</main>
		</>
	)
}