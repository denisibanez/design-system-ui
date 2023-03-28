<!-- Example use component -->
<script setup lang="ts">
import QcLayout from './components/layout/QcLayout.vue';
import { Ref, ref } from 'vue';

const loading: Ref<boolean> = ref(false);
</script>

<template>
  <div class="wrapper">
    <QcLayout>
      Teste
    </QcLayout>
  </div>
</template>

<style lang="scss"></style>
