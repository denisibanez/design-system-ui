import '@quasar/extras/roboto-font/roboto-font.css';
// These are optional
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/animate/fadeInUp.css';
import '@quasar/extras/animate/fadeOutDown.css';
import '@quasar/extras/animate/fadeInRight.css';
import '@quasar/extras/animate/fadeOutRight.css';
import { Notify } from "quasar";

// Loads the quasar styles and registers quasar functionality with storybook
import 'quasar/dist/quasar.css';
import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';

// This is also where you would setup things such as pinia for storybook

setup((app) => {
  app.use(Quasar, {
    plugins: {
      Notify,
    }, // import Quasar plugins and add here
    config: {
      brand: {  
        primary   : '#00305b',
        secondary : '#26A69A',
        accent    : '#9C27B0',

        positive  : '#21BA45',
        negative  : '#C10015',
        info      : '#31CCEC',
        warning   : '#F2C037',

  
        dark: '#1d1d1d',
        'dark-page': '#121212',
      }
    }
  });
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
