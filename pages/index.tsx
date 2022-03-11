import Head from 'next/head'
import Hero from '../components/Home/Hero'
import Content1 from '../components/Home/Content1'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | John Swan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="John Swan's Fullsail University Media Communications Certificate Portfolio"
        />
      </Head>
      <main>
        <Hero />
        <Content1 />
      </main>
    </div>
  )
}
