<template>
  <div class="penerima-editor">
    <v-text-field :readonly="readonly" v-bind:value="penerima.nama" v-on:keyup="onNamaChange" label="Nama Penerima"></v-text-field>
    <v-select label="Pekerjaan" :readonly="readonly" :items="options.pekerjaan" v-bind:value="penerima.pekerjaan" @change="onPekerjaanChange" />
    <v-text-field
      label="Penghasilan"
      v-bind:value="penerima.penghasilan"
      v-on:keyup="onPenghasilanChange"
      type="number" min="0"
      :suffix="rupiah(penerima.penghasilan)"/>
    <v-select label="Jaminan" :readonly="readonly" :items="options.jaminan" v-bind:value="penerima.jaminan" @change="onJaminanChange" />
    <v-select label="Kondisi Tempat Tinggal" :items="options.kondisiTempatTinggal" v-bind:value="penerima.kondisiTempatTinggal" :readonly="readonly" @change="onKondisiTempatTinggalChange" />
    <v-text-field
      label="Tanggungan"
      :readonly="readonly"
      v-bind:value="penerima.tanggungan"
      v-on:keyup="onTanggunganChange"
      type="number" min="0" suffix="Jiwa"/>
    <v-text-field
      label="Jangka Angsuran"
      :readonly="readonly"
      v-bind:value="penerima.jangkaAngsuran"
      v-on:keyup="onJangkaAngsuranChange"
      type="number" min="0" suffix="Bulan"/>
    <v-text-field
      label="Besar Pinjaman"
      :readonly="readonly"
      v-bind:value="penerima.besarPinjaman"
      v-on:keyup="onBesarPinjamanChange"
      type="number" min="0"
      :suffix="rupiah(penerima.besarPinjaman)"/>
    <v-text-field
      label="Pengeluaran"
      :readonly="readonly"
      v-bind:value="penerima.pengeluaran"
      v-on:keyup="onPengeluaranChange"
      type="number" min="0"
      :suffix="rupiah(penerima.pengeluaran)"/>
  </div>
</template>

<script>
import dataStructure from '@/services/data'
import settingsAPI from '@/services/settings'

const EV_NAME = 'update:penerima'

export default {
  props: ['penerima', 'readonly'],
  name: 'PenerimaEditor',
  data: () => ({
    options: {
      pekerjaan: dataStructure.pekerjaan.options.map(o => o.text),
      jaminan: dataStructure.jaminan.options.map(o => o.text),
      kondisiTempatTinggal: dataStructure.kondisiTempatTinggal.options.map(o => o.text)
    },
    loading: true
  }),
  methods: {
    async loadOptions () {
      this.loading = true
      try {
        const settings = await settingsAPI.get()
        this.options.pekerjaan = settings.pekerjaan.options.map(o => o.text)
        this.options.jaminan = settings.jaminan.options.map(o => o.text)
        this.options.kondisiTempatTinggal = settings.kondisiTempatTinggal.options.map(o => o.text)
      } catch (err) {
        console.log(err)
        alert('Gagal mengambil data')
      } finally {
        this.loading = false
      }
    },
    onNamaChange (e) {
      const nama = e.target.value
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { nama }))
    },
    onPekerjaanChange (e) {
      const pekerjaan = e
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { pekerjaan }))
    },
    onPenghasilanChange (e) {
      let penghasilan = parseInt(e.target.value)
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { penghasilan }))
    },
    onJaminanChange (e) {
      const jaminan = e
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { jaminan }))
    },
    onKondisiTempatTinggalChange (e) {
      const kondisiTempatTinggal = e
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { kondisiTempatTinggal }))
    },
    onTanggunganChange (e) {
      const tanggungan = parseInt(e.target.value)
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { tanggungan }))
    },
    onJangkaAngsuranChange (e) {
      const jangkaAngsuran = parseInt(e.target.value)
      // console.log('jangkaAngsuran=', jangkaAngsuran)
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { jangkaAngsuran }))
    },
    onBesarPinjamanChange (e) {
      const besarPinjaman = parseInt(e.target.value)
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { besarPinjaman }))
    },
    onPengeluaranChange (e) {
      const pengeluaran = parseInt(e.target.value)
      this.$emit(EV_NAME, Object.assign({}, this.penerima, { pengeluaran }))
    },
    rupiah(x) {
        return 'Rp, ' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ',00'
    }
  },
  mounted () {
    this.loadOptions()
  }
}
</script>

<style>

</style>
