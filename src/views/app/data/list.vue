<template>
  <div id="data-list">
    <v-toolbar flat color="white" extended>
      <v-toolbar-title>Data</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat icon color="red" to="/app/data-create">
          <v-icon>add</v-icon>
        </v-btn>
      </v-toolbar-items>
      <template v-slot:extension>
        <v-text-field
          flat
          v-model="keyword"
          v-on:keyup.enter="reload"
          label="Search"
          prepend-inner-icon="search"
          solo
        ></v-text-field>
      </template>
    </v-toolbar>
    <v-container>
      <v-layout row>
        <v-flex md6 xs12>
          <v-list two-line>
            <template v-for="item in items">
              <v-list-tile :key="`${item._id}-data-list`">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.nama }}</v-list-tile-title>
                  <v-list-tile-sub-title class="body-2 grey--text text--darken-1">#{{ item._id }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        color="indigo darken-2"
                        dark
                        icon
                        flat
                        v-on="on"
                      >
                        <v-icon>menu</v-icon>
                      </v-btn>
                    </template>
                    <v-list dense>
                      <v-list-tile :to="`/app/data-update/${item._id}`">
                        <v-list-tile-title>Edit</v-list-tile-title>
                      </v-list-tile>
                      <v-divider/>
                      <v-list-tile @click="remove(item._id)">
                        <v-list-tile-title>Hapus</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider :key="`${item._id}-data-divider`"/>
            </template>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from '@/services/api'

export default {
  name: 'DataList',
  data: () => ({
    addDialog: false,
    items: [],
    keyword: '',
    headers: [
      { text: '#ID', value: '_id' },
      { text: 'Nama', value: 'nama' },
      { text: 'Pekerjaan', value: 'pekerjaan' },
      { text: 'Penghasilan', value: 'penghasilan' },
      { text: 'Jaminan', value: 'jaminan' },
      { text: 'KTT', value: 'kondisiTempatTinggal' },
      { text: 'Tanggungan', value: 'tanggungan' },
      { text: 'Jangka Ang.', value: 'jangkaAngsuran' },
      { text: 'Pinjaman', value: 'besarPinjaman' },
      { text: 'Pengeluaran', value: 'pengeluaran' }
    ],
    loading: false
  }),
  methods: {
    async reload () {
      this.getData()
    },
    async getData () {
      this.loading = true
      try {
        const result = await API.getAll(this.keyword)
        this.items = result
      } catch (err) {
        console.log(err)
        alert('Terjadi kesalahan')
      } finally {
        this.loading = false
      }
    },
    async remove (id) {
      this.loading = true
      try {
        await API.delete(id)
      } catch (err) {
        console.log(err)
        alert('Terjadi kesalahan saat menghapus data')
      } finally {
        this.loading = false
        this.getData()
      }
    }
  },
  mounted () {
    this.reload()
  }
}
</script>

<style>

</style>
