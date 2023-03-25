import QcTextfield from './QcTextfield.vue';
import { mount } from '@vue/test-utils';

test('Textfield Works', () => {
  const wrapper = mount(QcTextfield);
  expect(wrapper).toBeTruthy();
});
