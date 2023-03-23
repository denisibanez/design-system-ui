<template>
  <div class="bcButton__wrapper">
    <v-container>
      <v-row justify="space-between" class="text-center">
        <v-col>
          <v-btn
            icon="mdi-heart"
            color="primary"
          ></v-btn>
        </v-col>
        </v-row>
        </v-container>
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