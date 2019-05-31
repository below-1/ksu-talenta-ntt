<template>
  <div id="create-dataset">
    <v-toolbar flat color="white">
      <v-toolbar-title class="font-weight-bold">Dataset Baru</v-toolbar-title>
    </v-toolbar>
    <v-container fluid>
      <v-layout row>
        <v-flex md4 sm12>
          <v-text-field flat v-model="name" label="Nama dataset"/>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex md12 sm12>
          <v-card flat>
            <v-toolbar dense flat>
              <v-dialog width="700" v-model="addDataTypeDialog">
                <template v-slot:activator="{ on }">
                  <v-btn depressed dark color="pink" flat v-on="on">
                    Tambah
                    <v-icon right>create</v-icon>
                  </v-btn>
                </template>
                <add-data-type/>
              </v-dialog>
            </v-toolbar>
            <v-card-text>
              soup!
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AddDataType from '@/components/AddDataType'

export default {
  components: {
    AddDataType
  },
  data: () => ({
    name: '',
    types: [],
    step: 1,
    addDataTypeDialog: false
  }),
  methods: {
    next () {
      this.step += 1
    }
  }
}
</script>

<style>

</style>
