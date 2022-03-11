export default function Content() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      {/* Fill with Sanity */}
      <div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3 ">
        <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300 ">
          <img
            src="https://images.unsplash.com/photo-1646935239823-85952f60d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="h-64 w-full object-cover "
            alt=""
          />
          <div className="border border-t-0 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
              28 Dec 2022
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
            >
              Project
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
