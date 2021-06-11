export default {
  target: 'static',
  buildModules: [
    '@nuxt/image'
  ],
  image: {
    //use your ik id here
    imagekit: {
      baseURL: 'https://ik.imagekit.io/demo'
    }
  }
}