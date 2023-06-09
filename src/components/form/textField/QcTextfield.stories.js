import QcTextfield from './QcTextfield.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/form/textfield',
  component: QcTextfield,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onInput: { action: 'clicked' },
    types: {
      control: { type: 'select' },
      options: [
        'number',
        'text',
        'password',
        'textarea',
        'email',
        'search',
        'tel',
        'file',
        'url',
        'time',
        'date',
        undefined,
      ],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QcTextfield },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<QcTextfield v-bind="args" @onInputChange="value = $event" @onChangePasswordVisibility="types = $event" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  label: 'label',
  types: 'password',
  rules: [(val) => (val !== null && val !== '') || 'Campo obrigatório'],
  value: '',
  icon: 'visibility_off',
};
