export default function ({ $axios, $cookiz, query, env }) {
  const accessToken = query.access_token || $cookiz.get('access_token')

  $axios.setBaseURL(env.API_URL || 'http://localhost:7012/api/')

  $axios.onRequest((config) => {
    config.headers.Accept = 'application/json, text/plain, */*'

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`
    }
  })
}
