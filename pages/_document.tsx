/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
      </Head>
      <body className='bg-gray-100 dark:text-white dark:bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
