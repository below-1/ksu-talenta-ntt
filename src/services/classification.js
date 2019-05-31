import API from './axiosInstance'

export default {
  get () {
    return API.get('/api/ahp').then(resp => resp.data)
  }
}
