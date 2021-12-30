import BaseHttpService from '../http-common'

const moduleApi = {}

moduleApi.getCategories = () => {
  return BaseHttpService.get('Faq/pub/getCategories')
}

moduleApi.getQaQuestions = (categoryCode) => {
  return BaseHttpService.get('Faq/pub/getQaQuestions', categoryCode)
}

export default moduleApi
