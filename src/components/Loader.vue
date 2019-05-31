<template>
  <v-container fluid fill-height v-if="show">
    <v-layout fill-height justify-center align-center>
      <v-progress-circular
        width="16"
        size="126"
        color="indigo"
        indeterminate
      >
      </v-progress-circular>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Loader',
  props: ['show']
}
</script>

<style>

</style>
