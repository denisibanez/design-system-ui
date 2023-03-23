import type { App } from 'vue';
import BcButton from '@/components/buttons/BcButton.vue';

export default {
  install: (app: App) => {
    app.component('BcButton', BcButton);
  },
};

export { BcButton };
