import Link from 'next/link'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${text}`}>
      <a className="text-decoration-none text-white font-monospace">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag