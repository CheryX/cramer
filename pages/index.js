import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import FullLogo from '@/data/logoFull.svg'
import ArticleCard from '@/components/ArticleCard'
const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')

  return { props: { posts, tags } }
}

export default function Home({ posts, tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div style={{ backgroundImage: 'url("/static/images/Background.png")', padding: '5em 0' }} className='container-fluid m-0 text-white d-flex justify-content-center align-items-center'>
        <FullLogo className="img-fluid" />
      </div>

      <div className='container my-5 py-4'>
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <h1 className="text-center fw-bold my-5">O nas</h1>
            <p className='text-justify mx-5'>Irure aute dolor occaecat nostrud labore quis eu est incididunt excepteur aute. Ullamco incididunt sit excepteur aute. Duis labore eu Lorem nulla qui fugiat commodo aliquip duis. Amet proident aliqua nulla enim pariatur magna irure officia.</p>
          </div>
          <div className="col-md-5">
            <h1 className="text-center fw-bold my-5">Jak stworzyć notatkę</h1>
            <p className='text-justify mx-5'>Minim quis esse velit voluptate ex cillum est qui aliqua id elit. Duis aliqua consequat aliquip laborum dolore ad occaecat anim irure nisi. Officia culpa nisi nisi cillum enim sit nisi esse. Quis nisi et quis </p>
          </div>
        </div>
      </div>

      <div className="container-fluid bgAlt">
        <div className="container px-4 py-5" id="custom-cards">
          <h2 className="pb-2 text-center fw-bold ">Ostatnie notatki</h2>

          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

            {!posts.length && 'Nie znaleziono postów'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {return (<ArticleCard key={frontMatter.slug} frontMatter={frontMatter} />)})}

          </div>
        </div>
      </div>

      <div className='container-fluid p-4 mb-5'>
        <h2 className="text-center fw-bold my-5">Najpopulariejsze tagi</h2>
        <div className="text-center">
          {Object.keys(tags).length === 0 && 'Nie znaleziono tagów'}
          {sortedTags.map((t) => {
            return (
              <>
                <Tag text={t}/>
                <Link
                  href={`/tags/${kebabCase(t)}`}
                  className="fw-bold text-decoration-none text-muted font-monospace me-4"
                >
                  {`(${tags[t]})`}
                </Link>
              </>
            )
          })}
        </div>
      </div>

      <div className='container-fluid py-5 mt-5 text-center bgAlt'>
        <h1 className='py-5'>Dziękujemy! ❤️</h1>
      </div>
    </>
  )
}