<template>
  <div id="data-create">
    <v-toolbar flat color="white">
      <v-toolbar-title>Update Data / #{{ id }}</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row>
        <v-flex xs12 md4>
          <penerima-editor :penerima.sync="penerima"/>
          <v-btn @click="save" block large dark depressed color="indigo" class="my-4">Save</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from '@/services/api'
import PenerimaEditor from '@/components/PenerimaEditor'

export default {
  name: 'DataCreate',
  components: {
    PenerimaEditor
  },
  props: ['id'],
  data: () => ({
    penerima: {
      nama: 'Jordan',
      pekerjaan: 3,
      penghasilan: 1200000,
      jaminan: 3,
      kondisiTempatTinggal: 2,
      tanggungan: 2,
      jangkaAngsuran: 12,
      besarPinjaman: 5000000,
      pengeluaran: 500000
    }
  }),
  methods: {
    async loadData () {
      try {
        const data = await API.getById(this.id)
        // console.log('data=', data)
        const { _id, ...penData } = data
        this.penerima = penData
      } catch (err) {
        alert('Gagal mengambil data')
        throw err
      }
    },
    async save () {
      const payload = this.penerima
      try {
        await API.update(this.id, payload)
        alert('Sukses mengubah data!')
      } catch (err) {
        console.log(err)
        alert('Gagal mengubah data')
      }
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style>

</style>
