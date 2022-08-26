/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <script src="https://kit.fontawesome.com/3959075aa6.js" crossOrigin="anonymous"></script>
      </Head>
      <body className='bg-slate-200 dark:text-white dark:bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
