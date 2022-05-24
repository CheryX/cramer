import Head from 'next/head'
import Testowy from '../components/Testowy'
import Normal from '../layouts/NormalLayout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Normal>
        strona główna
        <Testowy />
      </Normal>
    </div>
  )
}
