<template>
  <div class="QcButton__wrapper">
    <q-btn
      :color="color"
      :label="label"
      :icon="icon"
      :outline="outline"
      :round="round"
      :size="size"
      :loading="loading"
    >
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ExtractPropTypes } from 'vue';
import QcButtonInterface from './QcButton';

const props: Readonly<ExtractPropTypes<QcButtonInterface>> = defineProps({
  color: String,
  label: String,
  outline: Boolean,
  icon: String,
  round: Boolean,
  size: String,
  loading: Boolean,
});
</script>

<style lang="scss" scoped></style>
