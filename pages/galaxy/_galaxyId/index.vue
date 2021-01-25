<template>
  <v-container>
    <v-row> Galaxy {{ galaxyId }}</v-row>
    <v-row>
      <v-col cols="3">
        <document-tree :galaxy-id="galaxyId" />
      </v-col>
      <v-col> <document-editor /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import DocumentEditor from '~/components/DocumentEditor.vue'
import DocumentTree from '~/components/DocumentTree.vue'

export default {
  components: { DocumentTree, DocumentEditor },
  props: { galaxyId: { type: String, default: '' } },
  data: () => {
    return {}
  },
}
</script>

<style></style>
