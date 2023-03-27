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
import { Ref, ref, defineEmits, ExtractPropTypes } from 'vue';
import QcTextfieldInterface from './QcTextfield';

const props: Readonly<ExtractPropTypes<QcTextfieldInterface>> = defineProps({
  label: String,
});

console.log(props)

const $emit = defineEmits(['onInputChange']);

const model: Ref<string | null | number> = ref(null);

function onInput(text: string | null | number) {
  console.log(text);
  $emit('onInputChange', text);
}
</script>
