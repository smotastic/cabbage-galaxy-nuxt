<template>
  <div>
    <v-row>
      <v-col>
        <no-ssr>
          <vue-simplemde v-model="document.content" />
        </no-ssr>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="document.name"
          outlined
          label="Name"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-combobox
          label="Labels"
          outlined
          :items="suggestions"
          v-model="document.labels"
          clearable
          multiple
          small-chips
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="onSaveDocument" color="primary">Save</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  props: {
    saveDocument: {
      type: Function,
    },
    document: {
      type: Object,
      default: () => ({ name: '', content: 'Neues Dokument', labels: [] }),
    },
  },
  data: () => {
    return {
      suggestions: ['hallo', 'wie'],
    }
  },
  methods: {
    onSaveDocument() {
      this.saveDocument(this.document);
    },
  },
}
</script>

<style>
</style>