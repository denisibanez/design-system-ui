import QcDialog from './QcDialog.vue';
import { mount } from '@vue/test-utils';

test('dialog Works', () => {
  const wrapper = mount(QcDialog);
  expect(wrapper).toBeTruthy();
});
