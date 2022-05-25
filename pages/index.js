import * as fs from 'fs'
import * as matter from 'gray-matter' 

import Head from 'next/head'
import Testowy from '../components/Testowy'
import PostList from '../components/PostList'
import Normal from '../layouts/NormalLayout'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Normal title="Main site">
        <Testowy />
        <PostList posts={posts}/>
      </Normal>
    </div>
  )
}

export async function getStaticProps() {
  const postList = fs.readdirSync('./posts', (e) => {console.log(e)} ) //this one dot...

  let posts = []
  for (let file of postList) {
    let fileContent = matter.read(`./posts/${file}`)
    fileContent.data.fileName = "/posts/"+file
    posts.push(fileContent.data)
  }

  return { props: { posts }}
}