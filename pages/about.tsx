import type { NextPage } from 'next'
import Header from '../components/Header'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO ogUrl={`https://c.mmusielik.xyz/about`} />


      Hello, World about me page
    </Layout>
  )
}

export default Home
