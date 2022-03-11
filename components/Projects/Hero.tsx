export default function Hero() {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="mb-16 flex flex-col sm:mb-0 sm:text-center">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className=" flex h-auto w-96 items-center justify-center rounded-full">
                <img
                  src="https://hello.fullsail.edu/lp/shared/app/common/images/logo.svg"
                  alt="Full Sail University Logo"
                />
              </div>
            </a>
            <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-slate-900 sm:text-4xl md:mx-auto">
                MCT Certification Portfolio
              </h2>
              <p className="text-base text-slate-800 md:text-lg">
                Take a look at some of the projects that I have worked on
                through this course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
