<template>
  <div style="height: 100%">
    <v-toolbar flat fixed dense dark color="transparent" height="80" scroll-off-screen>
      <v-toolbar-side-icon>
        <font-awesome-icon
          :icon="['fab', 'black-tie']"
          size="2x"
          class="indigo--text"
        >
        </font-awesome-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Talenta</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Github</v-btn>
        <v-btn flat>About Me</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-parallax src="/bg3.jpg" height="700" id="home-parallax">
      <v-container fluid fill-height>
        <v-layout row justify-center fill-height>
          <v-flex md6 class="text-xs-center">
            <v-layout justify-center align-center fill-height column>
              <div class="display-1">KSU - Talenta</div>
              <div class="subtitle">Penentuan Penerimaan Pinjaman Menggunakan Metode AHP</div>
              <v-btn
                to="/app/data"
                large
                dark
                depressed
                color="indigo darken-1"
              >
                Mulai
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <v-container grid-list-xl style="height: 100vh; padding-top: 80px; padding-bottom: 80px;" fluid fill-height>
      <v-layout row fill-height>
        <v-flex md10 class="mx-auto" fill-height>
          <v-layout row fill-height>
            <v-flex md6 class="mr-auto">
              <v-layout align-start fill-height justify-center column class="px-4">
                <div class="display-2">Metode AHP</div>
                <div class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</div>
              </v-layout>
            </v-flex>
            <v-flex md4>
              <v-layout align-center fill-height>
                <v-img
                  src="/bg.jpg"
                  aspect-ratio="1"
                  class="grey lighten-1"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-footer
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="grey darken-3 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <font-awesome-icon size="2x" :icon="icon"></font-awesome-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
        ['fab', 'facebook'],
        ['fab', 'twitter'],
        ['fab', 'google-plus'],
        ['fab', 'linkedin'],
        ['fab', 'instagram']
      ]
  })
}
</script>

<style lang="scss">
  .ksu-parallax {
    /* The image used */
    background-image: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/bg2.jpg');

    /* Full height */
    height: 100vh; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  #home-parallax {
    .v-parallax__content {
      padding: 0;
      background-color: rgba(0,0, 0, 0.6);
    }
  }
</style>
