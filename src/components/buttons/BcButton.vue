<template>
  <div class="bcButton__wrapper">
    <q-btn color="primary" icon="mail" label="On Left" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    color: String,
    label: String,
    outline: Boolean,
    icon: String,
    round: Boolean,
    size: String,
    loading: Boolean,
  })
</script>

<style lang="scss" scoped>

</style>

