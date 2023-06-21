<template>
  <div class="wrapper">
    <QcLayout
      :menu="menu"
      :optionsMenu="optionsMenu"
      :appName="'Nome da sua app'"
    >
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
          :types="types"
          :icon="icon"
          @onInputChange="user = $event"
          @onChangePasswordVisibility="
            (types = $event.type), (icon = $event.icon)
          "
        />

        <QcTextfield
          :value="user2"
          :rules="[
            (val: any) => (val !== null && val !== '') || 'Campo obrigatório',
          ]"
          label="label"
          :types="types"
          :icon="icon"
          @onInputChange="user2 = $event"
          @onChangePasswordVisibility="
            (types = $event.type), (icon = $event.icon)
          "
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
      <br />
      <QcButton type="button" @click.capture="open()" label="abrir"></QcButton>
      <QcDialog :model="model" @close="close()" title="Título">
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>
      </QcDialog>

      <QcDatatable
        ref="test"
        :loading="loadingTable"
        selection="multiple"
        :columns="columns"
        :rows="rows"
        :flat="true"
        :bordered="true"
        :showSearch="true"
        :showCsv="true"
        :dense="true"
        searchPlaceholder="Buscar"
        csvLabel="Gerar relatório"
        @getEvent="onRequest($event)"
      />
    </QcLayout>
  </div>
</template>

<!-- Example use component -->
<script setup lang="ts">
import QcLayout from '@/components/layout/QcLayout.vue';
import { reactive, Ref, ref } from 'vue';
import QcTextfield from '@/components/form/textField/QcTextfield.vue';
import QcButton from '@/components/buttons/QcButton.vue';
import QcDialog from '@/components/dialog/QcDialog.vue';
import QcDatatable from '@/components/table/QcDatatable.vue';

const loading: Ref<boolean> = ref(false);
const myForm = ref();

const user = ref(null);
const user2 = ref(null);
const types = ref();
const icon = ref('visibility');
const model = ref(false);
const test = ref();
const loadingTable = ref(false);

const columns: any = ref([
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: (row: any) => row.name,
    format: (val: any) => `${val}`,
    sortable: true,
  },
  {
    name: 'calories',
    align: 'center',
    label: 'Calories',
    field: 'calories',
    sortable: true,
  },
  {
    name: 'fat',
    label: 'Fat (g)',
    field: 'fat',
    sortable: true,
    style: 'width: 10px',
  },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  {
    name: 'calcium',
    label: 'Calcium (%)',
    field: 'calcium',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: 'Iron (%)',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
]);

let rows: any = ref([]);

const optionsMenu = reactive([
  {
    separator: true,
    router: '/',
    id: 1,
    label: 'Teste',
    icon: 'home',
  },
  {
    separator: true,
    router: '/',
    id: 2,
    label: 'Teste',
    icon: 'settings',
  },
  {
    separator: false,
    router: '/',
    id: 3,
    label: 'Sub-menu',
    icon: 'menu',
    submenu: [
      {
        separator: true,
        router: '/',
        id: 4,
        label: 'Item',
        icon: 'download',
        items: [
          {
            separator: true,
            router: '/',
            id: 5,
            label: 'Teste',
            icon: 'settings',
          },
          {
            separator: true,
            router: '/',
            id: 6,
            label: 'Teste',
            icon: 'settings',
          },
        ],
      },
    ],
  },
]);

const menu = reactive([
  {
    label: 'Menu item',
    route: '/',
    icon: 'home',
    separator: true,
  },
  {
    label: 'Menu item',
    route: '/',
    icon: 'home',
    separator: true,
  },
  {
    label: 'Menu item',
    route: '/',
    icon: 'home',
    separator: true,
  },
]);

// METHODS
function onSubmit() {
  myForm.value.validate().then((success: any) => {
    if (success) {
    }
  });
}

function onReset() {
  user.value = null;
}

function open() {
  model.value = true;
}

function close() {
  model.value = false;
}

function onRequest($event: any) {
  const { page, rowsPerPage, sortBy, descending } = $event.pagination;

  loadingTable.value = true;

  // emulate server
  setTimeout(() => {
    const returnedData = [
      {
        id: 1,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%',
      },
      {
        id: 2,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%',
      },
      {
        id: 3,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%',
      },
      {
        id: 4,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%',
      },
      {
        id: 5,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%',
      },
      {
        id: 5,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%',
      },
      {
        id: 7,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%',
      },
    ];

    rows.value = [...returnedData];

    test.value.tableRef.pagination.page = page;
    test.value.tableRef.pagination.rowsPerPage = 5;
    test.value.tableRef.pagination.sortBy = sortBy;
    test.value.tableRef.pagination.descending = descending;
    test.value.tableRef.pagination.rowsNumber = 15;

    loadingTable.value = false;
  }, 1500);
}
</script>

<style lang="scss"></style>
