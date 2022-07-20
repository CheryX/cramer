import { getAllPostsData } from "@/lib/notesData"
let posts = getAllPostsData();

export default (req, res) => {

  function parseSearch(post) {
    let search = `${post.title.toLowerCase()} ${post.summary.toLowerCase()}`
    for (let tag of post.tags) {
      search += " "+tag
    }

    return search
  }

  const results = req.query.q ? posts.filter(post => parseSearch(post).includes(req.query.q.toLowerCase())) : []

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
