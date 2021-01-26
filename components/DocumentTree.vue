<template>
  <v-data-table
    :headers="headers"
    :items="documents"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  props: {
    documents: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Labels', value: 'labels' },
      ],
    }
  },
}
</script>

<style>
</style>