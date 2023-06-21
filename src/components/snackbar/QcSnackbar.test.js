import QcSnackbar from './QcSnackbar.vue';
import { mount } from '@vue/test-utils';
import { useQuasar } from 'quasar';
const $q = useQuasar();

test('Snackbar Works', () => {
  const wrapper = mount(QcSnackbar, {
    propsData: {
      model: false,
      bgColor: 'primary',
      text: 'Esse é um alerta!',
      icon: 'warning',
      actionLabelColor: 'white',
      textColor: 'white',
      closeLabel: 'Fechar',
    },
  });
  expect(wrapper).toBeTruthy();
});
