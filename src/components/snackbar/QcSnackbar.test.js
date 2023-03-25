import QcSnackbar from './QcSnackbar.vue';
import { mount } from '@vue/test-utils';

test('Snackbar Works', () => {
  const wrapper = mount(QcSnackbar);
  expect(wrapper).toBeTruthy();
});
