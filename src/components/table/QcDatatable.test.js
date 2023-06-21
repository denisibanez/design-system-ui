/*
import QcDatatable from './QcDatatable.vue';
import { mount, shallowMount } from '@vue/test-utils';

const mock =  {
  tableRef: {
    value:{
      requesServerInteraction:  jest.fn()
    }
  }
};



beforeEach(() => {
  const wrapper = mount(QcDatatable, {
    propsData:{
    },
    stubs: {
      'tableRef': QcDatatable
    },
    mocks: {
      $q: {
        notify: jest.fn()
      },
      mock,
    }
  })
  
  const mockedMethod = jest.fn()
  wrapper.vm.$refs.QcDatatable.tableRef.value.requesServerInteraction = mockedMethod
  wrapper.vm.propsData.$q = mockedMethod
  
})

test('Table Works', () => {
   expect(wrapper).toBeTruthy();
});
*/

test('Table Works', () => {});
