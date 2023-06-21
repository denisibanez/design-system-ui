import type { App } from 'vue';
import QcButton from '@/components/buttons/QcButton.vue';
import QcLoading from '@/components/loading/QcLoading.vue';
import QcSnackbar from '@/components/snackbar/QcSnackbar.vue';
import QcTextfield from '@/components/form/textField/QcTextfield.vue';
import QcLayout from '@/components/layout/QcLayout.vue';
import QcDialog from '@/components/dialog/QcDialog.vue';
import QcDatatable from '@/components/table/QcDatatable.vue';

export default {
  install: (app: App) => {
    app.component('QcButton', QcButton);
    app.component('QcLoading', QcLoading);
    app.component('QcSnackbar', QcSnackbar);
    app.component('QcTextfield', QcTextfield);
    app.component('QcLayout', QcLayout);
    app.component('QcDialog', QcDialog);
    app.component('QcDatatable', QcDatatable);
  },
};

export {
  QcButton,
  QcTextfield,
  QcSnackbar,
  QcLoading,
  QcLayout,
  QcDialog,
  QcDatatable,
};
