<template>
  <div id="app-settings">
    <v-toolbar flat color="white">
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-toolbar>
    <v-container fluid>

      <v-layout row>
        <v-flex md6 xs12>
          <v-list two-line>

            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-btn
                  icon
                  dark
                  color="indigo"
                  @click="activeFieldsDialog = 'pekerjaan'"
                >
                  <v-icon>create</v-icon>
                </v-btn>
                <v-dialog
                  :value="activeFieldsDialog === 'pekerjaan'"
                  width="500"
                >
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        type="number"
                        v-model.number="settings.pekerjaan.weight"
                        label="Bobot"
                        min="0"/>
                      <template v-for="(opt, idx) in settings.pekerjaan.options">
                        <v-text-field
                          type="number"
                          :key="`pekerjaan-opt-${idx}`"
                          :label="opt.text"
                          v-model.number="opt.value"
                          min="0"/>
                        <v-divider :key="`pekerjaan-opt-div-${idx}`"/>
                      </template>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        @click="activeFieldsDialog = undefined"
                        dark
                        color="red"
                        depressed
                        block
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Pekerjaan</v-list-tile-title>
                <v-list-tile-sub-title>Bobot: {{ settings.pekerjaan.weight }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-switch
                  v-model="settings.pekerjaan.cost"
                />
                <v-list-tile-action-text>Cost</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-btn
                  icon
                  dark
                  color="indigo"
                  @click="activeFieldsDialog = 'penghasilan'"
                >
                  <v-icon>create</v-icon>
                </v-btn>
                <v-dialog
                  :value="activeFieldsDialog === 'penghasilan'"
                  width="500"
                >
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        type="number"
                        v-model.number="settings.penghasilan.weight"
                        label="Bobot"
                        min="0"/>
                      <template v-for="(opt, idx) in settings.penghasilan.options">
                        <v-text-field
                          type="number"
                          :key="`penghasilan-opt-${idx}`"
                          :label="`${opt.lower} - ${opt.upper}`"
                          v-model.number="opt.value"
                          min="0"/>
                        <v-divider :key="`penghasilan-opt-div-${idx}`"/>
                      </template>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        @click="activeFieldsDialog = undefined"
                        dark
                        color="red"
                        depressed
                        block
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Pneghasilan</v-list-tile-title>
                <v-list-tile-sub-title>Bobot: {{ settings.penghasilan.weight }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-switch
                  v-model="settings.pekerjaan.cost"
                />
                <v-list-tile-action-text>Cost</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-btn
                  icon
                  dark
                  color="indigo"
                  @click="activeFieldsDialog = 'jaminan'"
                >
                  <v-icon>create</v-icon>
                </v-btn>
                <v-dialog
                  :value="activeFieldsDialog === 'jaminan'"
                  width="500"
                >
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        type="number"
                        v-model.number="settings.jaminan.weight"
                        label="Bobot"
                        min="0"/>
                      <template v-for="(opt, idx) in settings.jaminan.options">
                        <v-text-field
                          type="number"
                          :key="`jaminan-opt-${idx}`"
                          :label="opt.text"
                          v-model.number="opt.value"
                          min="0"/>
                        <v-divider :key="`jaminan-opt-div-${idx}`"/>
                      </template>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        @click="activeFieldsDialog = undefined"
                        dark
                        color="red"
                        depressed
                        block
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Jaminan</v-list-tile-title>
                <v-list-tile-sub-title>Bobot: {{ settings.jaminan.weight }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-switch
                  v-model="settings.jaminan.cost"
                />
                <v-list-tile-action-text>Cost</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-btn
                  icon
                  dark
                  color="indigo"
                  @click="activeFieldsDialog = 'kondisiTempatTinggal'"
                >
                  <v-icon>create</v-icon>
                </v-btn>
                <v-dialog
                  :value="activeFieldsDialog === 'kondisiTempatTinggal'"
                  width="500"
                >
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        type="number"
                        v-model.number="settings.kondisiTempatTinggal.weight"
                        label="Bobot"
                        min="0"/>
                      <template v-for="(opt, idx) in settings.kondisiTempatTinggal.options">
                        <v-text-field
                          type="number"
                          :key="`jaminan-opt-${idx}`"
                          :label="opt.text"
                          v-model.number="opt.value"
                          min="0"/>
                        <v-divider :key="`jaminan-opt-div-${idx}`"/>
                      </template>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        @click="activeFieldsDialog = undefined"
                        dark
                        color="red"
                        depressed
                        block
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Kondisi Tempat Tinggal</v-list-tile-title>
                <v-list-tile-sub-title>Bobot: {{ settings.kondisiTempatTinggal.weight }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-switch
                  v-model="settings.kondisiTempatTinggal.cost"
                />
                <v-list-tile-action-text>Cost</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-btn
                  icon
                  dark
                  color="indigo"
                  @click="activeFieldsDialog = 'tanggungan'"
                >
                  <v-icon>create</v-icon>
                </v-btn>
                <v-dialog
                  :value="activeFieldsDialog === 'tanggungan'"
                  width="500"
                >
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        type="number"
                        v-model.number="settings.tanggungan.weight"
                        label="Bobot"
                        min="0"/>
                      <template v-for="(opt, idx) in settings.tanggungan.options">
                        <v-text-field
                          type="number"
                          :key="`tanggungan-opt-${idx}`"
                          :label="`${opt.lower} - ${opt.upper}`"
                          v-model.number="opt.value"
                          min="0"/>
                        <v-divider :key="`tanggungan-opt-div-${idx}`"/>
                      </template>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        @click="activeFieldsDialog = undefined"
                        dark
                        color="red"
                        depressed
                        block
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Tanggungan</v-list-tile-title>
                <v-list-tile-sub-title>Bobot: {{ settings.tanggungan.weight }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-switch
                  v-model="settings.tanggungan.cost"
                />
                <v-list-tile-action-text>Cost</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-btn
                  icon
                  dark
                  color="indigo"
                  @click="activeFieldsDialog = 'jangkaAngsuran'"
                >
                  <v-icon>create</v-icon>
                </v-btn>
                <v-dialog
                  :value="activeFieldsDialog === 'jangkaAngsuran'"
                  width="500"
                >
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        type="number"
                        v-model.number="settings.jangkaAngsuran.weight"
                        label="Bobot"
                        min="0"/>
                      <template v-for="(opt, idx) in settings.jangkaAngsuran.options">
                        <v-text-field
                          type="number"
                          :key="`ja-opt-${idx}`"
                          :label="`${opt.lower} - ${opt.upper}`"
                          v-model.number="opt.value"
                          min="0"/>
                        <v-divider :key="`ja-opt-div-${idx}`"/>
                      </template>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        @click="activeFieldsDialog = undefined"
                        dark
                        color="red"
                        depressed
                        block
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Jangka Angsuran</v-list-tile-title>
                <v-list-tile-sub-title>Bobot: {{ settings.jangkaAngsuran.weight }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-switch
                  v-model="settings.jangkaAngsuran.cost"
                />
                <v-list-tile-action-text>Cost</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-btn
                  icon
                  dark
                  color="indigo"
                  @click="activeFieldsDialog = 'besarPinjaman'"
                >
                  <v-icon>create</v-icon>
                </v-btn>
                <v-dialog
                  :value="activeFieldsDialog === 'besarPinjaman'"
                  width="500"
                >
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        type="number"
                        v-model.number="settings.besarPinjaman.weight"
                        label="Bobot"
                        min="0"/>
                      <template v-for="(opt, idx) in settings.besarPinjaman.options">
                        <v-text-field
                          type="number"
                          :key="`ja-opt-${idx}`"
                          :label="`${opt.lower} - ${opt.upper}`"
                          v-model.number="opt.value"
                          min="0"/>
                        <v-divider :key="`ja-opt-div-${idx}`"/>
                      </template>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        @click="activeFieldsDialog = undefined"
                        dark
                        color="red"
                        depressed
                        block
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Besar Pinjaman</v-list-tile-title>
                <v-list-tile-sub-title>Bobot: {{ settings.besarPinjaman.weight }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-switch
                  v-model="settings.besarPinjaman.cost"
                />
                <v-list-tile-action-text>Cost</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-btn
                  icon
                  dark
                  color="indigo"
                  @click="activeFieldsDialog = 'pengeluaran'"
                >
                  <v-icon>create</v-icon>
                </v-btn>
                <v-dialog
                  :value="activeFieldsDialog === 'pengeluaran'"
                  width="500"
                >
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        type="number"
                        v-model.number="settings.pengeluaran.weight"
                        label="Bobot"
                        min="0"/>
                      <template v-for="(opt, idx) in settings.pengeluaran.options">
                        <v-text-field
                          type="number"
                          :key="`ja-opt-${idx}`"
                          :label="`${opt.lower} - ${opt.upper}`"
                          v-model.number="opt.value"
                          min="0"/>
                        <v-divider :key="`ja-opt-div-${idx}`"/>
                      </template>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        @click="activeFieldsDialog = undefined"
                        dark
                        color="red"
                        depressed
                        block
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Pengeluaran</v-list-tile-title>
                <v-list-tile-sub-title>Bobot: {{ settings.pengeluaran.weight }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-switch
                  v-model="settings.pengeluaran.cost"
                />
                <v-list-tile-action-text>Cost</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>

          </v-list>
          <v-btn
            @click="update"
            dark
            depressed
            color="indigo"
            block
          >
            Save
            <v-icon right>backup</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <!-- <v-layout row>
        <v-flex md6 xs12>
          <v-card>
            <v-toolbar dense flat>
              <v-toolbar-title>Pekerjaan</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field type="number" v-model.number="settings.pekerjaan.weight" label="Bobot" min="0"/>
              <template v-for="(opt, idx) in settings.pekerjaan.options">
                <v-text-field :key="`pekerjaan-opt-${idx}`" :label="opt.text" v-model.number="opt.value" min="0"/>
                <v-divider :key="`pekerjaan-opt-div-${idx}`"/>
              </template>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout> -->

    </v-container>
  </div>
</template>

<script>
import settingsAPI from '@/services/settings'
import defaultSettings from '@/services/data'

const defSettingsWithId = {
  _id: undefined,
  ...defaultSettings
}

export default {
  name: 'AppSettings',
  data: () => ({
    settings: defSettingsWithId,
    activeFieldsDialog: undefined
  }),
  methods: {
    async getSettings () {
      const settings = await settingsAPI.get()
      this.settings = settings
    },
    async update () {
      const settings = this.settings
      await settingsAPI.put(settings)
      await this.getSettings()
    }
  },
  mounted () {
    this.getSettings()
  }
}
</script>

<style>

</style>
