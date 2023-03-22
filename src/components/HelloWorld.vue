<script setup lang="ts">
import { MyButton } from './button';
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>


<template>
  <q-btn color="black" label="Black" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
