import Head from 'next/head'
import Link from 'next/link'

export default function Test() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Test</h1>
      <Link href="/">Back to homepage (works no hard refresh)</Link>
      <br />
      <Link href="/12333/test">This link does hard refresh</Link>
      <br />
      <Link href="/54133/test">This link does hard refresh</Link>
      <br />
      <Link href="/99333/test">This link does hard refresh</Link>
    </>
  )
}
