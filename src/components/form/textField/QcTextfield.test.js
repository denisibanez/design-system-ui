import QcTextfield from './QcTextfield.vue';
import { mount } from '@vue/test-utils';

test('Textfield Works', () => {
  const wrapper = mount(QcTextfield, {
    propsData: {
      label: 'Label',
      types: 'text',
      value: '',
      icon: '',
    },
  });
  expect(wrapper).toBeTruthy();
});
