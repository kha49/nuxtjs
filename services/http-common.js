/* eslint-disable no-use-before-define */
import axios from 'axios'

export const BASE_URL = 'http://localhost:7012/api/'

export const apiServices = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
})

apiServices.interceptors.response.use(
  response => Promise.resolve(response),
  (error) => {
    return Promise.reject(error)
  }
)

const BaseHttpService = {}
BaseHttpService.get = (endpoint, params, options = {}) => {
  return apiServices
    .get(`/${endpoint}${toQueryString(params)}`, options)
    .catch(error => BaseHttpService._handleHttpError(error))
}

BaseHttpService.post = (endpoint, data = {}, options = {}) => {
  return apiServices
    .post(`/${endpoint}`, data, options)
    .catch(error => BaseHttpService._handleHttpError(error))
}

BaseHttpService.delete = (endpoint, options = {}) => {
  return apiServices
    .delete(`/${endpoint}`, options)
    .catch(error => BaseHttpService._handleHttpError(error))
}

BaseHttpService.patch = (endpoint, data = {}, options = {}) => {
  return apiServices
    .patch(`/${endpoint}`, data, options)
    .catch(error => BaseHttpService._handleHttpError(error))
}

BaseHttpService._handleHttpError = (error) => {
  console.log('error :>> ', error)
}

export default BaseHttpService

export const toQueryString = (params) => {
  const searchParams = new URLSearchParams(params)
  return `?${searchParams.toString()}`
}
