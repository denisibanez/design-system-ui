<template>
  <div class="qcDatatable__wrapper q-mt-md q-mb-md">
    <q-table
      ref="tableRef"
      :flat="flat"
      :bordered="bordered"
      :dense="dense"
      :selection="selection"
      row-key="id"
      :rows="rows"
      :columns="columns"
      :filter="filter"
      :loading="loading"
      :grid="checkMobile.value"
      v-model:selected="selected"
      v-model:pagination="pagination"
      @request="onRequest"
    >
      <template v-slot:top-left>
        <q-input
          v-if="showSearch"
          borderless
          dense
          debounce="300"
          outlined
          v-model="filter"
          :placeholder="searchPlaceholder"
          class="q-mb-lg q-mt-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:top-right>
        <q-btn
          v-if="showCvs"
          color="primary"
          class="q-mb-lg q-mt-md"
          icon-right="archive"
          :label="csvLabel"
          no-caps
          @click="exportTable"
        />
      </template>

      <template v-slot:item="props">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="props.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card
            bordered
            flat
            :class="
              props.selected
                ? $q.dark.isActive
                  ? 'bg-grey-9'
                  : 'bg-grey-2'
                : ''
            "
          >
            <q-card-section>
              <q-checkbox
                dense
                v-model="props.selected"
                :label="props.row.name"
              />
            </q-card-section>
            <q-separator />
            <q-list dense>
              <q-item
                v-for="col in props.cols.filter((col: any) => col.name !== 'desc')"
                :key="col.name"
              >
                <q-item-section>
                  <q-item-label>{{ col.label }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label caption>{{ col.value }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </template>

      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, defineEmits, ref } from 'vue';
import { useQuasar, exportFile } from 'quasar';

export interface QcTableInterface {
  loading?: boolean;
  selection?: 'multiple' | 'single' | 'none' | undefined;
  columns: any;
  rows: any;
  flat?: boolean;
  bordered?: boolean;
  dense?: boolean;
  searchPlaceholder?: string;
  csvLabel?: string;
  showCvs?: boolean;
  showSearch?: boolean;
  allLabel?: string;
  recordsPerPage?: string;
  failCsv?: string;
}

const $emit = defineEmits(['getEvent']);

// PROPS
const props = withDefaults(defineProps<QcTableInterface>(), {
  selection: 'none',
  loading: false,
  flat: true,
  searchPlaceholder: 'Buscar',
  csvLabel: 'Gerar relatório',
  bordered: true,
  showCvs: true,
  showSearch: true,
  dense: true,
  columns: [],
  rows: [],
  allLabel: 'Todos',
  recordsPerPage: 'Itens por página',
  failCsv: 'Ocorreu uma falha no relatório',
});

// VARIABLES
const tableRef = ref();
const checkMobile = reactive({
  value: false,
});
const $q = useQuasar();
const selected = ref([]);
const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 15,
});

const filter = ref('');
// LIFECIYCLE
onMounted(() => {
  checkMobile.value = window.innerWidth <= 1024;
  // get initial data from server (1st page)
  tableRef.value.requestServerInteraction();
  $q.lang.table.allRows = props.allLabel;
  $q.lang.table.recordsPerPage = props.recordsPerPage;
});

// METHODS
function onRequest(props: any) {
  $emit('getEvent', props);
}

function wrapCsvValue(val: any, formatFn?: any, row?: any) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

  formatted =
    formatted === void 0 || formatted === null ? '' : String(formatted);

  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`;
}

function exportTable() {
  // naive encoding to csv format
  const content = [props.columns.map((col: any) => wrapCsvValue(col.label))]
    .concat(
      props.rows.map((row: any) =>
        props.columns
          .map((col: any) =>
            wrapCsvValue(
              typeof col.field === 'function'
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format,
              row
            )
          )
          .join(',')
      )
    )
    .join('\r\n');

  const status = exportFile('table-export.csv', content, 'text/csv');

  if (status !== true) {
    $q.notify({
      message: props.failCsv,
      color: 'negative',
      icon: 'warning',
    });
  }
}

defineExpose({
  tableRef,
});
</script>
