<script setup lang="ts">
import { useQuasar } from 'quasar';
import { watchEffect } from 'vue';

export interface QcSnackbarInterface {
  model: boolean;
  bgColor: string;
  text: string;
  icon: string;
  actionLabelColor: string;
  textColor: string;
}

const props = withDefaults(defineProps<QcSnackbarInterface>(), {
  model: false,
  bgColor: 'primary',
  text: 'Esse é um alerta!',
  icon: 'warning',
  actionLabelColor: 'white',
  textColor: 'white',
});

const $q = useQuasar();

function showNotifs() {
  $q.notify({
    progress: true,
    message: props.text,
    color: props.bgColor,
    multiLine: false,
    textColor: props.textColor,
    icon: props.icon,
    actions: [
      { label: 'Fechar', color: props.actionLabelColor, handler: () => {} },
    ],
  });
}

watchEffect(() => {
  if (props.model) {
    showNotifs();
  }
});
</script>
