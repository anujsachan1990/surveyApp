/* eslint-disable indent */
import axios from 'axios'
import qs from 'qs'
import serviceUrl from './services'

/**
 * this intercept each API call. One can add custom headers or API tokens
 * Handle Errors and Exceptions from single place
 * ex. api.get('https://www.mocky.io/v2/5185415ba171ea3a00704eed').then(response => console.log(response)
 * if the API call belongs to same domain it will add base url automatically
 *  **/

/**
 * axios instance
 */

const instance = axios.create({
  baseURL: serviceUrl.getBaseUrl,
  paramsSerializer: params => qs.stringify(params, { indices: false }),
})

// request header
instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    // api token
    // const apiToken = sessionStorage.getItem('token')
    // config.headers = { 'Custom-Header-IF-Exist': apiToken }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response parse
instance.interceptors.response.use(
  response => {
    return parseBody(response)
  },
  error => {
    /*eslint-disable-next-line*/
    console.warn('Error status', error.response.status)
    if (error.response) {
      return parseError(error.response.data)
    } else {
      return Promise.reject(error)
    }
  }
)

/**
 *
 * parse error response
 */

function parseError(messages) {
  // error
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages })
    } else {
      return Promise.reject({ messages: [messages] })
    }
  } else {
    return Promise.reject({ messages: ['An Error Occurred'] })
  }
}

/**
 * parse response
 */
function parseBody(response) {
  switch (response.status) {
    case 200:
    case 201:
      if (response.headers.authorization) {
        response = {
          ...response,
          data: {
            ...response.data,
            authHeaders: response.headers.authorization,
          },
        }
      }
      return response.data
    default:
      return this.parseError(response.data.messages)
  }
}

export const api = instance
