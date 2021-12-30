const homeServices = $axios => ({
  getAll: () => {
    return $axios.$get('Home/auth/getDataHomePage')
  }
})

export default homeServices
