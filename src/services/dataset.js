// const BASE_URL = process.env.VUE_APP_BASE_URL
// const base_url = `${BASE_URL}/api/dataset`
const dataset = [
  {
    id: '121212',
    name: 'utama',
    types: [
      {
        type: 'string',
        name: 'direction',
        label: 'Direction',
        categories: [
          {
            label: 'A',
            value: 'a'
          },
          {
            label: 'B',
            value: 'b'
          }
        ]
      },
      {
        type: 'string',
        name: 'porth',
        label: 'Porth',
        categories: [
          {
            label: 'A',
            value: 'a',
            weight: 1
          },
          {
            label: 'B',
            value: 'b',
            weight: 2
          }
        ]
      }
    ]
  }
]

export default {

  dataset: dataset,

  async create (name) {
    const id = Math.round((Math.random() * 10000))
    this.dataset.push({ id, name }) 
  },

  async getAll () {
    return this.dataset
  },

  async findOneById (id) {
    return this.dataset.find(d => d.id === id)
  }
}
