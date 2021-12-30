
const faqServices = $axios => ({
  getCategories: () => {
    return $axios.$get('Faq/pub/getCategories')
  },

  getQaQuestions: (categoryCode) => {
    return $axios.$get('Faq/pub/getQaQuestions', { params: categoryCode })
  }
})

export default faqServices
