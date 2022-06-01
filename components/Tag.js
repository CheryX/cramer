import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="text-decoration-none text-white font-monospace">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
