import QcLayout from './QcLayout.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/layout',
  component: QcLayout,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: { onClick: { action: 'clicked' } },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QcLayout },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<QcLayout v-bind="args" @navigate="onClick" @logoff="onClick" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  appName: 'Nome da app',
  logoffLabel: 'Sair',
  optionsMenu: [
    {
      router: '/',
      id: 1,
      label: 'Teste',
      icon: 'home',
    },
    {
      router: '/',
      id: 2,
      label: 'Teste',
      icon: 'settings',
    },
    {
      router: '/',
      id: 3,
      label: 'Sub-menu',
      icon: 'menu',
      submenu: [
        {
          separator: true,
          router: '/',
          id: 4,
          label: 'Item',
          icon: 'download',
          items: [
            {
              separator: true,
              router: '/',
              id: 5,
              label: 'Teste',
              icon: 'settings',
            },
            {
              separator: true,
              router: '/',
              id: 6,
              label: 'Teste',
              icon: 'settings',
            },
          ],
        },
      ],
    },
  ],

  menu: [
    {
      label: 'Menu item',
      route: '/',
      icon: 'home',
      separator: true,
    },
    {
      label: 'Menu item',
      route: '/',
      icon: 'home',
      separator: true,
    },
    {
      label: 'Menu item',
      route: '/',
      icon: 'home',
      separator: true,
    },
  ],
};
