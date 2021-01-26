<template>
  <v-container class="ps-0">
    <v-row>
      <v-col> Galaxy {{ galaxyId }}</v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <document-tree :documents="documents" @onRowClick="selectDocument" />
      </v-col>
      <v-col>
        <document-editor
          :document="selectedDocument"
          :galaxyId="galaxyId"
          :saveDocument="saveDocument"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DocumentEditor from '~/components/DocumentEditor.vue'
import DocumentTree from '~/components/DocumentTree.vue'

import { listDocument, createDocument, updateDocument } from '@/service'

export default {
  components: { DocumentTree, DocumentEditor },
  props: { galaxyId: { type: String, default: '' } },
  data: () => {
    return {
      documents: [],
      selectedDocument: {},
    }
  },
  methods: {
    saveDocument(doc) {
      if (doc.id) {
        updateDocument(doc).then((updated) => {
          console.log(updated);
        })
      } else {
        createDocument({ ...doc, galaxy: this.galaxyId }).then((newDoc) => {
          this.documents.push(newDoc)
          this.selectedDocument = {}
        })
      }
    },
    selectDocument(doc) {
      // TODO content wird nicht aktualisiert
      this.selectedDocument = { ...doc }
    },
  },
  mounted() {
    this.documents = listDocument(this.galaxyId)
  },
}
</script>

<style></style>
