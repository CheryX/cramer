import PageSEO from "@/components/SEO"
import Link from "next/link"
import { useState } from 'react'
import Header from "@/components/Header"
import WideCard from "@/components/WideCard"
import PostCard from "@/components/PostCard"

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
				<h1 className="fw-bold display-5 mt-lg-8">{title}</h1>
				

				<form className="mb-4 mb-md-7" role="search">
					<input
						aria-label="Szukaj notatek" type="text"
						onChange={(e) => setSearchValue(e.target.value)}
						className="form-control bg-white" placeholder="Szukaj notatek"
					/>
				</form>

				<div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4">
					{posts.map((data) => WideCard({data}) )}
				</div>

			</div>
		</>
	)
}