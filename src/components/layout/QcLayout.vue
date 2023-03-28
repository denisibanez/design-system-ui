<template>
  <div class="Qclayout__wrapper">
    <q-layout>
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> {{ appName }}</q-toolbar-title>

          <div @click="logoff" style="cursor: pointer">{{ logoffLabel }}</div>
        </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen.value" show-if-above bordered>
          <q-list>
            <q-item-label layout v-for="item in menu" @click="navigate(item)">
              {{ item.label }}
            </q-item-label>
          </q-list>
        </q-drawer>

        <q-page-container>
          <slot></slot>
        </q-page-container>
      </q-layout>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

export interface MenuInterface {
  label: string;
  route: string;
}

export interface QclayoutInterface {
  appName: string;
  logoffLabel: string;
  menu: any;
}

const props = withDefaults(defineProps<QclayoutInterface>(), {
  appName: 'Nome da app',
  logoffLabel: 'Sair',
  menu: [
    {
      label: 'menu item',
      route: '/',
    },
  ],
});

// VARIABLES
let leftDrawerOpen = reactive({ value: false });

const $emit = defineEmits(['logoff', 'navigate']);

// METHODS
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function navigate(item: any) {
  $emit('navigate', item);
}

function logoff() {
  $emit('logoff');
}
</script>

<style lang="scss" scoped>
.Qclayout {
  &__wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
