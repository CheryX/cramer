import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const Card = ({ frontMatter }) => {
    const { slug, date, title, thumbnail, summary, tags } = frontMatter
    return (

    <div className="col">
      <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${thumbnail})`}}>
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"><a href={`/blog/${slug}`} className='text-white text-decoration-none'>{title}</a></h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="d-flex align-items-center me-3">
              <i className="bi bi-tags mx-1"></i>
              <small>{tags.map((tag) => (<><Tag key={tag} text={tag} />, </>))}</small>
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

export default Card