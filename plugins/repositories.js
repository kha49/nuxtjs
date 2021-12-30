import userApi from '~/services/userServices'
import faqServicesApi from '~/services/faqServices'
import homeServiceApi from '~/services/homeServices'
import productDetailApi from '~/services/productDetailServices'

export default ({ $axios }, inject) => {
  const repositories = {
    fag: faqServicesApi($axios),
    home: homeServiceApi($axios),
    productDetail: productDetailApi($axios),
    user: userApi($axios)
  }
  inject('repo', repositories)
}
