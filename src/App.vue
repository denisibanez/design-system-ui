<template>
  <div class="wrapper">
    <QcLayout>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        ref="myForm"
      >
        <QcTextfield
          :value="user"
          :rules="[
            (val: any) => (val !== null && val !== '') || 'Campo obrigatório',
          ]"
          label="label"
          types="text"
          @onInputChange="user = $event"
          />
        <p class="q-pa-md">{{ user }}</p>
        <div class="row">
          <QcButton
            size="md"
            label="Entrar"
            type="submit"
            color="primary"
            :loading="loading"
          />
          <QcButton
            size="md"
            label="Cancelar"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </QcLayout>
  </div>
</template>

<!-- Example use component -->
<script setup lang="ts">
import QcLayout from './components/layout/QcLayout.vue';
import { Ref, ref } from 'vue';
import QcTextfield from './components/form/textField/QcTextfield.vue';
import QcButton from './components/buttons/QcButton.vue';

const loading: Ref<boolean> = ref(false);
const myForm = ref();

const user = ref(null)
const input = ref()

// METHODS
function onSubmit() {
  myForm.value.validate().then((success: any) => {
    if (success) {
    }
  });
}

function onReset() {
  user.value =null
}
</script>

<style lang="scss"></style>
