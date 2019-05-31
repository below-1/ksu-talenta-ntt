<template>
  <div id="dataset-list">
    <v-toolbar flat color="white">
      <v-toolbar-title>Dataset</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-dialog v-model="addDialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn dark large icon color="red" v-on="on">
              <v-icon>add</v-icon>
            </v-btn>
          </template>
          <add-dataset @new-dataset="reload; addDialog = false;"/>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table :items="datasetList" :headers="dataTable.headers">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td></td>
        <td class="text-xs-right">
          <v-btn small icon flat dark color="indigo" :to="`/app/edit-dataset/${props.item.id}`">
            <v-icon>create</v-icon>
          </v-btn>
          <v-btn small icon flat dark color="red">
            <v-icon>remove_circle</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import AddDataset from '@/components/AddDataset'
import datasetAPI from '@/services/dataset'

export default {
  components: {
    AddDataset
  },
  data: () => ({
    datasetList: [],
    addDialog: false,
    modifyNewDatasetDialog: false,
    newDatasetName: '',
    dataTable: {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nama', value: 'name' },
        { text: 'Categories', sortable: false },
        { text: '', sortable: false }
      ]
    }
  }),
  methods: {
    async reload () {
      this.datasetList = await datasetAPI.getAll()
    }
  },
  mounted () {
    this.reload()
  }
}
</script>

<style>

</style>
