/* eslint-disable @next/next/no-img-element */
import PageSEO from "@/components/SEO"
import Link from "next/link"
import authors from "@/lib/authors"
import Image from "next/image"
import TOC from "@/components/TOC"
import Header from "@/components/Header"

const githubUrl = (username) => `https://github.com/${username}`
const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, children, posts, fileName, toc }) {
	let thumbnail = frontMatter.thumbnail || "/images/bg.jpg"

	return (
		<>
			<PageSEO title={frontMatter.title} description={frontMatter.description} type="post" />
			<Header type="posts" />
			<div className="d-flex align-items-center justify-content-center mt-7">
				<div className="container row g-2 justify-content-center">
					<div className="col-lg-3 me-3 d-none d-print-none d-lg-block">		

						{frontMatter.date&& (
							<>
								<span className="fs-5 d-flex align-items-center">
									<i className="bi bi-calendar3 me-3"></i>
									<time dateTime={frontMatter.date}>
										{new Date(frontMatter.date).toLocaleDateString('pl-PL', postDateTemplate)}
									</time>
								</span>
								<hr />
							</>
						)}
						{frontMatter.authors && (
							<>
								<ul className="list-unstyled">
									{frontMatter.authors.map((author, index) => (
										<li key={index} className="my-1 d-flex align-items-center">
											<img src={authors[author].avatar} className="avatar me-1" alt={authors[author].name} style={{
												width: "40px",
												height: "40px",
												borderRadius: "50%",
											}} />
											<div>
												{authors[author].name} <br /> <Link href={githubUrl(authors[author].github)}><a>@{authors[author].github}</a></Link>
											</div>
										</li>
									))}
								</ul>
								<hr />
							</>
						)}
						{(frontMatter.tags.length!=0) && (
							<div className="mt-3 mb-5 my-lg-0 mb-lg-5">
								<strong className="fs-4 my-2">Tagi</strong>
								<div className="flex flex-wrap">
									{frontMatter.tags.map((tag, index) => (
										<span className="me-1" key={index}>
										{tag}
										</span>
									))}
								</div>
							</div>
						)}

						{toc && (
							<>
								<hr />
								<div className="mt-3 mb-5 my-lg-0 mb-lg-5">
									<strong className="fs-4 my-2">Na tej stronie</strong>
									<nav id="TableOfContents">
										<TOC toc={toc} />
									</nav>
								</div>
							</>
						)}

					</div>

					<div className="col-lg-8">
						<div className="text-center d-flex justify-content-center align-items-center flex-column mb-5" style={{
							height: "300px",
							background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${thumbnail})`,
							backgroundSize: "cover",
							borderRadius: "5px",
						}}>
							<h1 className="mb-1 mb-lg-2 f1 fw-600 text-white"><b>{frontMatter.title}</b></h1>
							{frontMatter.summary && (
							<p className="description text-white">{frontMatter.summary}</p>
							)}
						</div>
						<div className="col-lg-3 me-3 d-lg-none">		
							{frontMatter.date&& (
								<>
									<span className="fs-5 d-flex align-items-center">
										<i className="bi bi-calendar3 me-3"></i>
										<time dateTime={frontMatter.date}>
											{new Date(frontMatter.date).toLocaleDateString('pl-PL', postDateTemplate)}
										</time>
									</span>
									<hr />
								</>
							)}
						</div>

						<article>{children}</article>

						<div className="col-lg-3 me-3 d-print-none">
							<a className="nav-link py-2 px-0 px-lg-2" target="_blank" rel="noopener noreferrer" href={`https://github.com/CheryX/posts/${fileName}.mdx`} >
								<i className="fs-5 bi bi-github"></i> <small className="ms-2">Zobacz na Githubie</small>
							</a>
						</div>
						<div className="col-lg-3 me-3 d-lg-none d-print-none">
							<hr />
							{frontMatter.authors && (
								<>
									{frontMatter.authors.map((author, index) => (
										<div key={index} className="my-1 d-flex align-items-center">
											<img src={authors[author].avatar} className="avatar me-1" alt={authors[author].name} style={{
												width: "40px",
												height: "40px",
												borderRadius: "50%",
											}} />
											<div>
												{authors[author].name} <br /> <Link href={githubUrl(authors[author].github)}><a>@{authors[author].github}</a></Link>
											</div>
										</div>
									))}
									<hr />
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}