<template>
  <div id="create-dataset">
    <v-toolbar dark>
      <v-toolbar-title>Create Dataset</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container fluid class="white">
      <div>
        <v-text-field v-model="name" label="Dataset's Name"/>
      </div>
    </v-container>
    <v-toolbar>
      <v-toolbar-items>
        <v-btn flat @click="save">Simpan</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Cancel</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import datasetAPI from '@/services/dataset'

export default {
  data: () => ({
    step: 0,
    name: '',
    types: []
  }),
  methods: {
    async save () {
      await datasetAPI.create(this.name)
      this.$emit('new-dataset')
    }
  },
  computed: {
    canPrev () {
      return this.step !== 0
    }
  }
}
</script>

<style>

</style>
