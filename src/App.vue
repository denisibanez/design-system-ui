<script setup lang="ts">
import BcButton from './components/buttons/BcButton.vue';
import { Ref, ref } from 'vue';

const loading: Ref<boolean> = ref(false);
</script>

<template>
  <div class="wrapper">
    <BcButton
      :label="'teste'"
      :color="'primary'"
      :loading="loading"
      @click.capture="loading = !loading"
    />
  </div>
</template>

<style lang="scss"></style>
