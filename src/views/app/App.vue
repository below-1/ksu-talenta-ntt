<template>
  <div id="main-app" style="height: 100%;">
    <v-toolbar color="white">
      <v-toolbar-side-icon @click="showNav = !showNav">

      </v-toolbar-side-icon>
      <v-toolbar-title>Talenta</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Github</v-btn>
        <v-btn flat>About Me</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="showNav" app mini-variant width="220">
      <v-list class="pt-0" three-line>
        <v-divider></v-divider>
        <v-list-tile v-for="nav in navItems" :to="nav.path" :key="nav.path">
          <v-list-tile-action>
            <v-icon>{{nav.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{nav.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <router-view/>

    <v-bottom-nav
      :value="true"
      app
    >
      <v-btn
        color="teal"
        flat
        to="/app/data"
      >
        <span>Data</span>
        <v-icon>list</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        to="/app/settings"
      >
        <span>Setting</span>
        <v-icon>build</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="nearby"
        to="/app/classification"
      >
        <span>Klasifikasi</span>
        <v-icon>dns</v-icon>
      </v-btn>
    </v-bottom-nav>
    <!-- <v-footer
      app
      height="auto"
      inset
    >
      <v-card
        class="text-xs-center grey lighten-4"
        style="width: 100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            icon
          >
            <font-awesome-icon size="2x" :icon="icon"></font-awesome-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
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
    ],
    navItems: [
      {
        path: '/',
        icon: 'home',
        title: 'Home'
      },
      {
        path: '/app/dataset',
        icon: 'list',
        title: 'Dataset'
      },
      {
        path: '/app/data/import',
        icon: 'file_copy',
        title: 'Data'
      },
      {
        path: '/app/settings',
        icon: 'settings',
        title: 'Settings'
      },
      {
        path: '/app/testing-kfold',
        icon: 'text_fields',
        title: 'Import'
      },
      {
        path: '/logout',
        icon: 'power_settings_new',
        title: 'Logout'
      }
    ],
    showNav: false
  })
}
</script>

<style>

</style>
