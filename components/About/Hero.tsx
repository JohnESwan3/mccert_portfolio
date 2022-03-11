export default function Hero() {
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1558390326-a5411515258c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        className="absolute inset-0 h-full w-full object-cover"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 filter backdrop-blur-md">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a <span className="text-cyan-400">lazy dog</span>
              </h2>
              <p className="mb-4 max-w-xl text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="https://www.johneswan3.com"
                aria-label="Go to John E Swan 3 dot com"
                className="inline-flex items-center font-semibold tracking-wider text-cyan-400 transition-colors duration-200 hover:text-cyan-700"
              >
                My Developer Portfolio
                <svg
                  className="ml-2 inline-block w-3"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
