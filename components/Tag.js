import Link from 'next/link'

const Tag = ({ text, color, m }) => {

       if (color == 'white') color = 'text-white'
  else if (color == 'black') color = 'text-black'
  else color = ''

  if (m === true) m = 'm-2'

  let classes = ["text-decoration-none font-monospace", color, m].join(' ')

  return (
    <Link href={`/tags/${text}`}>
      <a className={classes}>
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag