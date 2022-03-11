import Link from 'next/link'
export default function Hero() {
  return (
    <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
      <div className="mx-auto max-w-xl lg:max-w-screen-xl">
        <div className="mb-16 lg:mb-0 lg:max-w-lg">
          <div className="mb-6 max-w-xl">
            <h1 className="mb-1 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              I am{' '}
              <span className="tracking-wide text-cyan-500">John Swan</span>
            </h1>
            <h2 className="text-base text-gray-700 md:text-lg">
              Web Developer <span className="text-cyan-600">|</span> Hobby Game
              Developer <span className="text-cyan-600">|</span> Guitarist
            </h2>
          </div>
          <div className="flex items-center">
            <Link href="/projects">
              <a
                aria-label="See my projects"
                className="focus:shadow-outline mr-6 inline-flex h-12 items-center justify-center rounded bg-cyan-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-cyan-500 focus:outline-none"
              >
                My Projects
              </a>
            </Link>
            <Link href="/about">
              <a
                aria-label="More about me"
                className="inline-flex items-center font-semibold text-cyan-500 transition-colors duration-200 hover:text-cyan-700"
              >
                More about me
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:w-2/3 lg:items-end lg:justify-start xl:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1622748917434-46d05e8087c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          className="-mb-16 h-64 w-full max-w-xl rounded object-cover object-top shadow-2xl lg:ml-64 lg:-mb-24 lg:h-auto lg:max-w-screen-md xl:ml-8 xl:-mb-28"
          alt=""
        />
      </div>
    </div>
  )
}
