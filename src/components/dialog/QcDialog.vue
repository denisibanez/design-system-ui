<template>
  <div class="qcdialog__wrapper">
    <q-dialog
      v-model="value"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="bg-white text-black">
        <q-bar class="bg-primary text-white">
          <div class="flex items-center">
            <p class="q-pa-none q-ma-none text-white">{{ title }}</p>
          </div>

          <q-space />

          <q-btn
            dense
            flat
            icon="close"
            v-close-popup
            @click.capture="onClose()"
          >
            <q-tooltip class="bg-primary text-white">Fechar</q-tooltip>
          </q-btn>
        </q-bar>

        <slot></slot>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface QcDialogInterface {
  model?: boolean;
  title?: string;
}

const emit = defineEmits(['update:modelValue', 'close']);

const value = computed({
  get() {
    return props.model;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const props = withDefaults(defineProps<QcDialogInterface>(), {
  model: false,
  title: '',
});

function onClose() {
  emit('close');
}
</script>
