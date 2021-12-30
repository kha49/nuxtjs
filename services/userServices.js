const userServices = $axios => ({
  getAll: () => {
    return $axios.$get('Users/getAll')
  }
})

export default userServices
