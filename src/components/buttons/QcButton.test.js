import QcButton from './QcButton.vue';
import { mount } from '@vue/test-utils';

test('Button Works', () => {
  const wrapper = mount(QcButton);
  expect(wrapper).toBeTruthy();
});
