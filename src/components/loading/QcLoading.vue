<template>
  <div class="QcLoading__wrapper" v-if="loading">
    <q-spinner-puff :color="color" :size="size" />

    <h3>{{ text }}</h3>
  </div>
</template>

<script setup lang="ts">
export interface QcLoadingInterface {
  color: string;
  size: string;
  loading: boolean;
  text: string;
}

const props = withDefaults(defineProps<QcLoadingInterface>(), {
  color: 'primary',
  size: 'lg',
  loading: false,
  text: 'Carregando',
});
</script>

<style lang="scss" scoped>
.QcLoading {
  &__wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
