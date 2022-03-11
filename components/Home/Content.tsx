export default function Content() {
  return (
    <div className="mx-auto  px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20 ">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Full Sail University <br />{' '}
          <span className="text-lg font-semibold tracking-wide text-cyan-600">
            Media Communications Cert.
          </span>
        </h2>
        <p className="text-base md:text-lg">
          I am a soon-to-be-graduate of the Media Communictations Certificate
          program at Full Sail University. I have been able to use and improve
          my skills as a self-taught Web Developer during this course. This
          portfolio is a showcase for some of the work I have done in this
          program.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 sm:mx-auto lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="col-span-2 h-56 w-full rounded object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt=""
          />
          <img
            className="h-48 w-full rounded object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
            alt=""
          />
          <img
            className="h-48 w-full rounded object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-4 border-b pb-4">
            <h6 className="mb-2 font-semibold leading-5">
              Media Communications
            </h6>
            <p className="text-sm text-gray-900">
              From font and text styling to audio and video production and
              analysis, this course has taught me to look at the projects and
              content that I view and create differently.
            </p>
          </div>
          <div className="mb-4 border-b pb-4">
            <h6 className="mb-2 font-semibold leading-5">Web Development</h6>
            <p className="text-sm text-gray-900">
              During my time at Full Sail University, I took advantage of the
              many projects and assignments to further build my web development
              skills. I created websites and improved them. I took what I
              learned from this program to improve existing projects, and I
              built the skills necessary to do so.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Web Design</h6>
            <p className="text-sm text-gray-900">
              Designing websites can be complicated. Learning about fonts,
              color, layouts and the emotions they can inspire has helped me
              exponentially improve my design skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
