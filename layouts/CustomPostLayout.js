/* eslint-disable @next/next/no-img-element */
import PageSEO from "@/components/SEO"
import Header from "@/components/Header"

export default function CustomPostLayout({ frontMatter, children, type }) {
	let thumbnail = frontMatter.thumbnail || "/images/bg.jpg"

	return (
		<>
			<PageSEO title={frontMatter.title} description={frontMatter.description} type="post" />
			<Header type={type} />
			<div className="d-flex align-items-center justify-content-center mt-7">
				<div className="container row g-2 justify-content-center">
					<div className="col-lg-8 d-flex flex-column">
						<div className="text-center d-flex justify-content-center align-items-center flex-column mb-5" style={{
							height: "300px",
							background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${thumbnail})`,
							backgroundSize: "100% auto",
							borderRadius: "5px",
						}}>
							<h1 className="mb-1 mb-lg-2 f1 fw-600 text-white"><b>{frontMatter.title}</b></h1>
							{frontMatter.summary && (
							<p className="description text-white">{frontMatter.summary}</p>
							)}
						</div>

						<article>{children}</article>
			
					</div>
				</div>
			</div>
		</>
	)
}