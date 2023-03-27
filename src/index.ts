import type { App } from 'vue';
import QcButton from '@/components/buttons/QcButton.vue';
import QcLoading from '@/components/loading/QcLoading.vue';
import QcSnackbar from '@/components/snackbar/QcSnackbar.vue';
import QcTextfield from '@/components/form/textField/QcTextfield.vue';

export default {
  install: (app: App) => {
    app.component('QcButton', QcButton);
    app.component('QcLoading', QcLoading);
    app.component('QcSnackbar', QcSnackbar);
    app.component('QcTextfield', QcTextfield);
  },
};

export { QcButton, QcTextfield, QcSnackbar, QcLoading };
