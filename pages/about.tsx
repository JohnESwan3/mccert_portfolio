import Head from 'next/head'
import Hero from '../components/About/Hero'
import Content from '../components/About/Content'
import Timeline from '../components/About/Timeline'
import Feature from '../components/About/Feature'

export default function Projects() {
  return (
    <div className="">
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
        {/* <Timeline /> */}
        <Feature />
      </main>
    </div>
  )
}
