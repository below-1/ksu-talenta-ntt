import API from './axiosInstance'

export default {
  get () {
    return API.get('/api/settings').then(resp => resp.data)
  },

  put (settings) {
    return API.put('/api/settings', settings).then(resp => resp.data)
  }
}
