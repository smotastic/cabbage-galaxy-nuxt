<template>
  <v-container>
    <v-row> Galaxy {{ galaxyId }}</v-row>
    <v-row>
      <v-col cols="3">
        <v-data-table
          :headers="headers"
          :items="documents"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table
      ></v-col>
      <v-col>
        <vue-simplemde v-model="content" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { listDocument } from '@/service'

export default {
  props: { galaxyId: { type: String, default: '' } },
  data: () => {
    return {
      documents: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Labels', value: 'labels' },
      ],
      content: '#### how to use mavonEditor in nuxt.js',
      markdownOption: {
        bold: true,
      },
    }
  },
  mounted() {
    this.documents = listDocument(this.galaxyId)
  },
}
</script>

<style></style>
