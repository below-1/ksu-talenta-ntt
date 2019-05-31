<template>
  <div id="data-create">
    <v-toolbar flat color="white">
      <v-toolbar-title>Add Data</v-toolbar-title>
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
  data: () => ({
    penerima: {
      nama: 'Jordan',
      pekerjaan: undefined,
      penghasilan: 1200000,
      jaminan: undefined,
      kondisiTempatTinggal: undefined,
      tanggungan: 2,
      jangkaAngsuran: 12,
      besarPinjaman: 5000000,
      pengeluaran: 500000
    }
  }),
  methods: {
    async save () {
      const payload = this.penerima
      try {
        await API.create(payload)
        alert('Done!')
      } catch (err) {
        console.log(err)
        alert('Oucchh!! that hurts')
      }
    }
  }
}
</script>

<style>

</style>
