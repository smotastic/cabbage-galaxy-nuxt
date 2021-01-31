<template>
  <!-- <v-data-table
    :headers="headers"
    :items="documents"
    :items-per-page="5"
    class="elevation-1"
    @click:row="$emit('onRowClick', $event)"
  ></v-data-table> -->
   <v-treeview :items="treeDocuments" dense hoverable></v-treeview>
</template>

<script>
import ToTree from '@/util/util.tree'
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
  computed: {
    treeDocuments() {
      return ToTree(this.documents);
    }
  }
}
</script>

<style>
tr {
  cursor: pointer;
}
</style>