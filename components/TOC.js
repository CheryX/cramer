const TOC = ({
  toc,
  exclude = '',
}) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth == 1 && !re.test(heading.value)
  )

  const tocList = (
    <ul className="list-unstyled">
      {filteredToc.map((heading) => (
        <li className="" key={heading.value}>
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  )

  let toc = []
  return tocList
}

export default TOC