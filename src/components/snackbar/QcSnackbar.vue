<script setup lang="ts">
import { useQuasar } from 'quasar';
import { watchEffect } from 'vue';

const props = defineProps({
  model: Boolean,
  bgColor: String,
  text: String,
  icon: String,
  actionLabelColor: String,
  textColor: String,
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
