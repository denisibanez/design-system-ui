import Qclayout from './Qclayout.vue';
import { mount } from '@vue/test-utils';

test('layout Works', () => {
  const wrapper = mount(Qclayout);
  expect(wrapper).toBeTruthy();
});
