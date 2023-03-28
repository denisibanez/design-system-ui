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
          :model="model"
          :rules="[
            (val: any) => (val !== null && val !== '') || 'Campo obrigatório',
          ]"
        />
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
import { reactive, Ref, ref } from 'vue';
import QcTextfield from './components/form/textField/QcTextfield.vue';
import QcButton from './components/buttons/QcButton.vue';

const loading: Ref<boolean> = ref(false);
let model: any = ref(null);
const myForm = ref();

// METHODS
function onSubmit() {
  myForm.value.validate().then((success: any) => {
    if (success) {
    }
  });
}

function onReset() {
  model = null;
  console.log(model);
}
</script>

<style lang="scss"></style>
