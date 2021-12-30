const productDetailServices = $axios => ({
  getById: (id) => {
    return $axios.$get(`ProductDetail/auth/getDataPdp/${id}`)
  }
})

export default productDetailServices
