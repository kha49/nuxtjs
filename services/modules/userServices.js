import BaseHttpService from '../http-common'

const moduleApi = {}

moduleApi.getAll = () => {
  return BaseHttpService.get('Users/getAll')
}

export default moduleApi
