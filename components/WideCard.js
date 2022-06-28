/* eslint-disable @next/next/no-img-element */
import Tag from '@/components/Tag'
import formatDate from '@/lib/formatDate'

const WideCard = ({ data }) => {

		const { date, title, thumbnail, summary, tags } = data.data

		const slug = data.filePath ? data.filePath.replace(/\.mdx$/, '') : ''

		return (

			<div className="col">
				<a href={`/posts/${slug}`} className='text-decoration-none'>
					<div className="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative bg-white">

						<div className="col p-5 d-flex flex-column position-static">

							<strong className="d-inline-block mb-2 text-success">
								<i className="bi bi-tags mx-1"></i>
								<Tag text={tags[0]}/>
							</strong>

							<h3 className="mb-0 fw-bold ">{title}</h3>

							<div className="mb-1 text-muted">
								<time dateTime={date}>{formatDate(date)}</time>
							</div>

							<p className="mb-auto">{summary}</p>
							<a href={`/posts/${slug}`} className="stretched-link">Czytaj dalej</a>
						</div>

						<div className="col-auto d-none d-lg-block">
							<img src={thumbnail} className="cropImg" width={200} height={250} alt="Thumbnail" />
						</div>

					</div>
				</a>
			</div>
		)
}

export default WideCard