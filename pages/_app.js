import Nav from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
