import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'g29nqxsc',
  dataset: 'production',
  useCdn: true,
})
