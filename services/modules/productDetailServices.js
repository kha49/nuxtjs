import BaseHttpService from '../http-common'

const moduleApi = {}

moduleApi.getById = (id) => {
  return BaseHttpService.get(`ProductDetail/auth/getDataPdp/${id}`)
}

export default moduleApi
