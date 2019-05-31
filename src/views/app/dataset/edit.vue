<template>
  <div id="modify-dataset">
    <v-toolbar flat dense color="white">
      <v-toolbar-title>Modify Dataset / <span class="font-weight-bold">{{ this.dataset.name }}</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark color="teal" depressed>Save</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container fluid grid-list-md>
      <v-layout row>
        <v-flex md4>
          <v-card>
            <v-card-text>
              <v-text-field v-model="dataset.name" label="Dataset's name"></v-text-field>
            </v-card-text>
            <v-card-text>
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar color="blue">
                    <v-icon dark @click="addColumn.dialog = true">add</v-icon>
                  </v-list-tile-avatar>
                </v-list-tile>
                <v-subheader>Columns</v-subheader>
                <template v-for="type in dataset.types">
                  <v-list-tile
                    @click="activeCol = type.name"
                    avatar
                    :class="{'active': type.name === activeCol}"
                    :key="`${dataset.name}-${type.name}-list-tile`">
                    <v-list-tile-avatar
                      color="pink"
                      :class="{ 'active': activeCol === type.name }"
                      class="white--text font-weight-bold"
                    >
                      V
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ type.name }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ type.type }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-divider :key="`${dataset.name}-${type.name}-list-tile-divider`"/>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md8 v-if="activeCol !== undefined">
          <v-card>
            <v-toolbar flat color="white">
              <v-toolbar-title>Categories of Column / <span class="font-weight-bold">{{ activeCol }}</span></v-toolbar-title>
              <v-spacer/>
              <v-btn dark depressed flat color="red">
                Delete
                <v-icon right>close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-data-table
                v-if="activeColData.categories"
                :headers="stringTypeHeaders"
                :items="activeColData.categories"
                :total-items="activeColData.categories.length"
                hide-actions
              >
                <template v-slot:items="props">
                  <td>{{ props.item.value }}</td>
                  <td>{{ props.item.label }}</td>
                  <td>{{ props.item.weight }}</td>
                  <td class="text-xs-right">
                    <v-btn flat icon dark color="red">
                      <v-icon>remove_circle</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-model="addColumn.dialog" width="500">
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Add Column</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field v-model="addColumn.name" label="Column name"/>
          <v-text-field v-model="addColumn.label" label="Column label"/>
          <v-select v-model="addColumn.type" :items='addColumn.typeOptions' label="Choose column type"/>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="doAddColumn" flat dark color="teal">Save</v-btn>
          <v-btn @click="addColumn.dialog = false" flat dark color="red">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import datasetAPI from '@/services/dataset'

export default {
  props: ['id'],
  name: 'EditDataset',
  data: () => ({
    addColumn: {
      dialog: false,
      name: '',
      label: '',
      type: 'string',
      typeOptions: ['string', 'number', 'interval']
    },
    activeCol: undefined,
    stringTypeHeaders: [
      { text: 'Value', value: 'value', width: '120px' },
      { text: 'Label', value: 'label', width: '120px' },
      { text: 'Weight', value: 'weight', width: '120px' },
      { text: '', sortable: false }
    ],
    dataset: {
      name: '',
      types: []
    }
  }),
  methods: {
    async loadDataset () {
      const id = this.id
      const dataset = await datasetAPI.findOneById(id)
      this.dataset = dataset
    },
    async doAddColumn () {
      const newCol = {
        name: this.addColumn.name,
        label: this.addColumn.label,
        type: this.addColumn.type
      }
      this.dataset.types.push(newCol)
      this.addColumn.dialog = false
    }
  },
  computed: {
    activeColData () {
      if (this.activeCol === undefined) {
        return undefined
      }
      const activeCol = this.activeCol
      return this.dataset.types.find(type => type.name === activeCol)
    }
  },
  mounted () {
    this.loadDataset()
  }
}
</script>

<style>

</style>
