import QcSnackbar from './QcSnackbar.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/Snackbar',
  component: QcSnackbar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    bgColor: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'amber',
        'brown-5',
        'deep-orange',
        'purple',
        'black',
      ],
    },
    icon: {
      control: { type: 'select' },
      options: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_front',
        'my_location',
      ],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QcSnackbar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<QcSnackbar v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  model: true,
  bgColor: 'primary',
  text: 'Esse é um alerta!',
  icon: 'announcement',
  actionLabelColor: 'white',
  textColor: 'white',
};
