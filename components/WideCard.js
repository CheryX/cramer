import Tag from '@/components/Tag'
import formatDate from '@/lib/formatDate'

const PostCard = ({ data }) => {

		const { date, title, thumbnail, summary, tags } = data.data

		const slug = data.filePath ? data.filePath.replace(/\.mdx$/, '') : ''

		return (

		<div className="col">
			<a href={`/posts/${slug}`} className='text-decoration-none'>
				<div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg">
					<div className="row justify-content-start">
						<div className='col d-none d-lg-block' style={{
							background:
							'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), '+`url(${thumbnail})`
						}}></div>
						<div className="col p-5 pb-3 text-shadow-1">
								<h2 className=" mb-4 display-6 lh-1 fw-bold ">
								{title}
								</h2>
							<ul className="d-flex list-unstyled mt-auto">
								<li className="d-flex align-items-center me-3">
									<i className="bi bi-tags mx-1"></i>
									<small>{tags.map((tag, index) => (<span key={index}><Tag key={index} text={tag}/> </span>))}</small>
								</li>
								<li className="d-flex align-items-center">
									<i className="bi bi-calendar3 mx-1"></i>
									<small><time dateTime={date}>{formatDate(date)}</time></small>
								</li>
							</ul>
						</div>
						<div className='col p-5 pb-3 text-shadow-1 d-none d-sm-block'>
							{summary}
						</div>
					</div>
				</div>
			</a>
		</div>
	
		)
}

export default PostCard