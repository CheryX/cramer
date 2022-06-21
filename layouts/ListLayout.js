import PageSEO from "@/components/SEO"
import Link from "next/link"
import { useState } from 'react'
import Header from "@/components/Header"
import WideCard from "@/components/WideCard"

export default function ListLayout({ posts, tags, tag, initialDisplayPosts = [] }) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter((frontMatter) => {
      const searchContent = frontMatter.data.title + frontMatter.data.summary + frontMatter.data.tags.join(' ')
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })

    const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;
	let title;
	if (tag == null) {
		title = "Wszystkie notatki"
	}
	else {
		title = `Notatki o tagu ${tag}`
	}


	return (
		<>
			<PageSEO title="Search" description="thinking" type="list" />
			<Header type="posts" />
			<div className="container">
				<h1 className="mt-7">{title}</h1>
				<form className="mt-5 mb-4" role="search">
				<input
					aria-label="Szukaj notatek"
					type="text"
					onChange={(e) => setSearchValue(e.target.value)}
					className="form-control"
					placeholder="Szukaj notatek"
				/>
				</form>
				<hr />
					{displayPosts.map((post) => (
						<>
							<WideCard data={post}/>
							<div className="mb-5"></div>
						</>
					))}
			</div>
		</>
	)
}