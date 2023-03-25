<template>
  <div class="QcTextfield__wrapper">
    <q-input
      v-model="model"
      :label="label"
      outlined
      @update:model-value="(newValue) => onInput(newValue)"
    />
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, defineEmits } from 'vue';

const props = defineProps({
  label: String,
});

const $emit = defineEmits(['onInputChange']);

const model: Ref<string | null | number> = ref(null);

function onInput(text: string | null | number) {
  console.log(text);
  $emit('onInputChange', text);
}
</script>
