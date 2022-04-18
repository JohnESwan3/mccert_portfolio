import Head from 'next/head'
import Hero from '../components/Home/Hero'
import Content from '../components/Home/Content'
import Bottom from '../components/Home/Bottom'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
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
        <Content />
        {/* <Bottom /> */}
      </main>
    </div>
  )
}
