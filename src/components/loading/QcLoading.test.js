import QcLoading from './QcLoading.vue';
import { mount } from '@vue/test-utils';

test('Loading Works', () => {
  const wrapper = mount(QcLoading, {
    propsData: {
      loading: false,
    },
  });
  expect(wrapper).toBeTruthy();
});
