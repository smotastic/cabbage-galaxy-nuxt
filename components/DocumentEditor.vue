<template>
  <div>
    <v-row
      ><v-col>
        <v-text-field
          v-model="name"
          outlined
          label="Name"
        ></v-text-field></v-col
    ></v-row>
    <v-row>
      <v-col>
        <vue-simplemde v-model="content" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-combobox
          label="Labels"
          outlined
          :items="suggestions"
          v-model="labels"
          clearable
          multiple
          small-chips
        ></v-combobox> </v-col
    ></v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      labels: ['hehe/hehe'],
      content: '#### how to use',
      name: 'aa',
      suggestions: ['hallo', 'wie'],
    }
  },
}
</script>

<style>
</style>