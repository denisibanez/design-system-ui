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
      :flat="flat"
      :type="type"
    >
      <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
export interface QcButtonInterface {
  color: string;
  label: string;
  outline: boolean;
  icon?: string;
  round: boolean;
  size: string;
  loading: boolean;
  flat: boolean;
  type?: string,
}

const props = withDefaults(defineProps<QcButtonInterface>(), {
  color: 'primary',
  label: 'Label',
  outline: false,
  round: false,
  size: 'lg',
  loading: false,
  flat: false,
});
</script>

<style lang="scss" scoped></style>
