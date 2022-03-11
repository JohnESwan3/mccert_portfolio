import Head from 'next/head'
import Hero from '../components/Projects/Hero'
import Content from '../components/Projects/Content'

export default function Projects() {
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
        <Content />
      </main>
    </div>
  )
}
