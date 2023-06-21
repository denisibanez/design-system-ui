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
    >
      <template v-slot:append v-if="icon.length">
        <q-icon :name="icon" @click="onIconClick()" class="QcTextfield__icon" />
      </template>
    </q-input>
  </div>
</template>

<script lang="ts" setup>
export interface QcTextfieldInterface {
  label?: string;
  icon?: string;
  value: string | null | number;
  types?:
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
  rules?: Array<any>;
}

const props = withDefaults(defineProps<QcTextfieldInterface>(), {
  label: 'Label',
  types: 'text',
  value: '',
  icon: '',
});

const $emit = defineEmits(['onInputChange', 'onChangePasswordVisibility']);

function onInput(text: string | null | number) {
  $emit('onInputChange', text);
}

function onIconClick() {
  if (props.icon === 'visibility') {
    $emit('onChangePasswordVisibility', {
      type: 'password',
      icon: 'visibility_off',
    });
  }

  if (props.icon === 'visibility_off') {
    $emit('onChangePasswordVisibility', {
      type: 'text',
      icon: 'visibility',
    });
  }
}
</script>

<style lang="scss" scoped>
.QcTextfield__icon {
  cursor: pointer;
}
</style>
