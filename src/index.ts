import type { App } from 'vue';
import { MyButton } from "@/components/button";

export default {
  install: (app: App) => {
    app.component('MyButton', MyButton);
  }
};

export { MyButton };