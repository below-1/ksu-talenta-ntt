import API from './axiosInstance'

export default {

  async create (payload) {
    await API.post('/api/peminjaman', payload)
  },

  async getAll (keyword) {
    let _keyword = ''
    if (keyword) {
      _keyword = keyword
    }
    const resp = await API.get(`/api/peminjaman`, {
      params: {
        keyword: _keyword
      }
    })
    return resp.data
  },

  async getById (id) {
    const url = `/api/peminjaman/${id}`
    const resp = await API.get(url)
    return resp.data
  },

  async update (_id, payload) {
    const url = `/api/peminjaman/${_id}`
    await API.put(url, payload)
  },

  async delete (_id) {
    const url = `/api/peminjaman/${_id}`
    await API.delete(url)
  }
}
