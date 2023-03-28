<template>
  <div class="QcTextfield__wrapper">
    <q-input
      v-model="model"
      :label="label"
      outlined
      lazy-rules
      :rules="rules"
      :type="types"
      @update:model-value="(newValue) => onInput(newValue)"
    />
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

export interface QcTextfieldInterface {
  label: string;
  types:
    | 'number'
    | 'text'
    | 'password'
    | 'textarea'
    | 'email'
    | 'search'
    | 'tel'
    | 'file'
    | 'url'
    | 'time'
    | 'date'
    | undefined;
  rules: Array<any>;
}

const props = withDefaults(defineProps<QcTextfieldInterface>(), {
  label: 'Label',
  types: 'text',
});

console.log(props);

const $emit = defineEmits(['onInputChange']);

const model: Ref<string | null | number> = ref(null);

function onInput(text: string | null | number) {
  console.log(text);
  $emit('onInputChange', text);
}
</script>
