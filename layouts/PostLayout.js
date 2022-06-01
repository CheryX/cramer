import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, tags } = frontMatter

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        Published on <time dateTime={date}>{new Date(date).toLocaleDateString('pl-PL', postDateTemplate)}</time>

        <PageTitle>{title}</PageTitle>

        {children}

        <h2>Authors</h2>

        <ul className="">
          {authorDetails.map((author) => (
            <li key={author.name}></li>
          ))}
        </ul>

        <h2>Tags</h2>

        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}

        {(next || prev) && (
          <div>
            {prev && (
              <p>
                Previous Article <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
              </p>
            )}
            {next && (
              <p>
                Next Article <Link href={`/blog/${next.slug}`}>{next.title}</Link>
              </p>
            )}
          </div>
        )}

      </article>
    </>
  )
}
