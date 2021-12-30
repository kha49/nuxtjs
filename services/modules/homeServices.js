import BaseHttpService from '../http-common'

const moduleApi = {}

moduleApi.getAll = () => {
  return BaseHttpService.get('Home/auth/getDataHomePage')
}

export default moduleApi
