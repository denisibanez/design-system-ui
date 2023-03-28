<template>
  <div class="QcTextfield__wrapper">
    <q-input
      outlined
      lazy-rules
      :label="label"
      :rules="rules"
      :type="types"
      :model-value="value"
      @update:model-value="onInput($event)"
    />
  </div>
</template>

<script lang="ts" setup>
export interface QcTextfieldInterface {
  label: string;
  value: string | null | number;
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
  value: '',
});

const $emit = defineEmits(['onInputChange']);

function onInput(text: string | null | number) {
  $emit('onInputChange', text);
}
</script>
