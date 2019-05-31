<template>
  <div id="data-list" style="height: 100%;">
    <div v-if="state === 'idle'">
      <v-layout row>
        <v-flex md6 xs12 class="text-xs-center">
          <v-toolbar flat color="white">
            <v-spacer></v-spacer>
            <v-toolbar-title>Klasifikasi</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-btn
            large
            color="indigo"
            dark
            depressed
            class="order-button"
            @click="doClassification"
          >
            Urutkan Data!
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
    
    <div v-if="state === 'result' && detailId === undefined">
      <v-toolbar flat color="white">
        <v-toolbar-title>Hasil Klasifikasi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat dark color="indigo darken-2" @click="state = 'idle'">Ulangi</v-btn>
      </v-toolbar>
      <v-container fluid>
        <v-layout row>
          <v-flex md6 xs12>
            <v-list two-line>
              <template v-for="item in items">
                <v-list-tile avatar :key="`${item.row._id}-classfication-list`">
                  <v-list-tile-avatar>
                    <v-icon dark :color="item.worth ? 'green' : 'red'">
                      {{item.worth ? 'check' : 'close'}}
                    </v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.row.nama }}</v-list-tile-title>
                    <v-list-tile-sub-title class="body-2 grey--text text--darken-1">
                      {{ item.pref }}
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn
                      color="indigo darken-3"
                      dark
                      icon
                      flat
                      @click="detailId = item.row._id"
                    >
                      <v-icon>menu</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider :key="`${item.row._id}-classification-divider`"/>
              </template>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div v-if="detailId !== undefined">
      <v-toolbar flat color="white">
        <v-toolbar-side-icon @click="detailId = undefined">
          <v-icon>
            keyboard_arrow_left
          </v-icon>
        </v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title>Detail Klasifikasi</v-toolbar-title>
      </v-toolbar>

      <v-container fluid>
        <v-layout row>
          <v-flex md6 xs12>
            <v-text-field label="Preferensi" :value="detailItem.pref" readonly />
            <v-text-field label="Ideal Negatif" :value="detailItem.idealNeg" readonly />
            <v-text-field label="Ideal Positif" :value="detailItem.idealPos" readonly />
            <penerima-editor :penerima="detailItem.row" readonly></penerima-editor>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <loader :show="showLoader"></loader>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import PenerimaEditor from '@/components/PenerimaEditor'
import classificationAPI from '@/services/classification'

export default {
  name: 'Classification',
  components: {
    Loader,
    PenerimaEditor
  },
  data: () => ({
    addDialog: false,
    state: 'idle',
    items: [],
    keyword: '',
    loading: false,
    detailId: undefined
  }),
  methods: {
    async doClassification () {
      this.state = 'loading'
      const result = await classificationAPI.get()
      this.state = 'result'
      this.items = result
    }
  },
  computed: {
    showLoader () {
      return this.state === 'loading'
    },
    detailItem () {
      if (this.detailId === undefined) {
        return undefined
      }
      if (this.items.length === 0) {
        return undefined
      }
      return this.items.find(item => item.row._id === this.detailId)
    }
  }
}
</script>

<style lang="scss">
$order-space: 30px;
.order-button {
  margin-top: $order-space;
  margin-bottom: $order-space;
}
</style>
