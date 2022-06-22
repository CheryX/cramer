import Tag from '@/components/Tag'
import formatDate from '@/lib/formatDate'

const PostCard = ({ data }) => {

	const { date, title, thumbnail, summary, tags } = data.data
	const slug = data.filePath ? data.filePath.replace(/\.mdx$/, '') : ''

	return (

		<div className="col">
			<div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{
				 background:
					'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), '+`url(${thumbnail})`
			}}>
				<div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
						<a href={`/posts/${slug}`} className='text-white text-decoration-none'>
							<h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold ">
							{title}
							</h2>
						</a>
					<ul className="d-flex list-unstyled mt-auto">
						<li className="d-flex align-items-center me-3">
							<i className="bi bi-tags mx-1"></i>
							<small>{tags.map((tag, index) => (<span key={index}><Tag key={index} text={tag} color="white" /> </span>))}</small>
						</li>
						<li className="d-flex align-items-center">
							<i className="bi bi-calendar3 mx-1"></i>
							<small><time dateTime={date}>{formatDate(date)}</time></small>
						</li>
					</ul>
				</div>
			</div>
		</div>
	
	)
}

export default PostCard