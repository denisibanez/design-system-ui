<!-- Example use component -->
<script setup lang="ts">
import QcButton from './components/buttons/QcButton.vue';
import QcSnackbar from './components/snackbar/QcSnackbar.vue';
import { Ref, ref } from 'vue';

const loading: Ref<boolean> = ref(false);
</script>

<template>
  <div class="wrapper">
    <QcButton
      :label="'teste'"
      :color="'primary'"
      :loading="loading"
      @click.capture="loading = !loading"
    />

    <QcSnackbar />
  </div>
</template>

<style lang="scss"></style>
