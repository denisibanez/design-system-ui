<template>
  <div class="QcLoading__wrapper" v-if="loading">
    <q-spinner-puff :color="color" :size="size" />

    <h3>{{ text }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ExtractPropTypes } from 'vue';
import QcLoadingInterface from './QcLoading';

const props: Readonly<ExtractPropTypes<QcLoadingInterface>> = defineProps({
  color: String,
  size: String,
  loading: Boolean,
  text: String,
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
