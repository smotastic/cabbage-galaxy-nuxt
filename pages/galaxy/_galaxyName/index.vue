<template>
  <v-card>Galaxy {{ galaxyName }}</v-card>
</template>

<script>
export default {
  props: { galaxyName: { type: String, default: 'aaaaa' } },
}
</script>

<style></style>
