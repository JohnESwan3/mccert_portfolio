import Head from 'next/head'
import Hero from '../components/Projects/Hero'
import Link from 'next/link'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Projects({ posts }: Props) {
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
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          {posts.map((post) => (
            <Link key={post._id} href={`/projects/${post.slug.current}`}>
              <div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3 ">
                <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300 ">
                  <div className="group cursor-pointer overflow-hidden rounded-lg border">
                    <img
                      src={urlFor(post.mainImage).url()!}
                      className="h-64 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                      alt=""
                    />
                    <div className="border border-t-0 p-5">
                      <h1 className="mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200">
                        {post.title}
                      </h1>
                      <p className="mb-2 text-gray-700">{post.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

// Server Side Rendering the Posts
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name,
      image,
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
