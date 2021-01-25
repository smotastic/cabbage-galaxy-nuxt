<template>
  <v-list-group :value="true" prepend-icon="mdi-account-circle">
    <template #activator>
      <v-list-item-content>
        <v-list-item-title>Galaxies</v-list-item-title>
      </v-list-item-content>
    </template>

    <v-list-item
      v-for="(galaxy, i) in galaxies"
      :key="i"
      :to="generateGalaxyLink(galaxy)"
    >
      <v-list-item-title v-text="galaxy.name"></v-list-item-title>
    </v-list-item>
    <!-- Add new -->
    <v-list-item>
      <v-text-field
        v-model="addedGalaxy"
        label="Add Galaxy"
        :append-icon="'mdi-plus'"
        @click:append="addGalaxy"
      ></v-text-field>
    </v-list-item>
  </v-list-group>
</template>

<script>
import {listGalaxy, createGalaxy} from '../service'

export default {
  data: () => {
    return {
      addedGalaxy: '',
      galaxies: [],
    }
  },
  mounted() {
    this.galaxies = listGalaxy()
  },
  methods: {
    generateGalaxyLink(galaxy) {
      return `/galaxy/${galaxy.id}`
    },
    addGalaxy() {
      createGalaxy(this.addedGalaxy).then((_) => {
        this.addedGalaxy = ''
      })
    },
  },
}
</script>

<style></style>
