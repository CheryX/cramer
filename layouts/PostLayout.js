import PageSEO from "@/components/SEO"
import Link from "next/link"
import authors from "@/lib/authors"

const githubUrl = (username) => `https://github.com/cheryx/notes/blob/master/data/blog/${username}`
const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, children, posts }) {
	return (
		<>
			<PageSEO title={frontMatter.title} description={frontMatter.description} type="post" />
			<div className="d-flex align-items-center justify-content-center">
				<div className="container row g-2 justify-content-center">
					<div className="col-md-3 me-3">
						<h1 className="mb-1 mb-lg-2 f1 fw-600 text-center"><b>{frontMatter.title}</b></h1>
						{frontMatter.description && (
						<p className="description">{frontMatter.description}</p>
						)}
						<hr />
						
						{frontMatter.date&& (
							<>
								<h3>Opublikowano</h3>
								<time dateTime={frontMatter.date}>
									{new Date(frontMatter.date).toLocaleDateString('pl-PL', postDateTemplate)}
								</time>

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
							<>
								<h3>TAGI</h3>
								<div className="flex flex-wrap">
									{frontMatter.tags.map((tag) => (
										<span className="me-1">
										{tag}
										</span>
									))}
								</div>
							</>
						)}

					</div>
					<div className="col-md-8">
						{frontMatter.thumbnail && (
							<img src={frontMatter.thumbnail} className="img-fluid rounded-3 mb-4" alt="" />
						)}
						{children}
					</div>
				</div>
			</div>
		</>
	)
}