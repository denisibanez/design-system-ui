<template>
  <div class="QcLayout__wrapper">
    <q-layout>
      <q-header elevated>
        <q-toolbar class="flex items-center">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title class="items-center flex justify-start text-left">
            <img :src="brand" class="QcLayout__brand" />

            <p class="q-mt-sm q-mb-none q-ml-xl" v-if="!checkMobile">
              {{ appName }}
            </p>
          </q-toolbar-title>

          <div class="q-pa-sm q-pl-md row items-center">
            <div class="cursor-pointer non-selectable">
              <q-icon color="white" name="apps" size="1.5rem" />
              <q-menu style="min-width: 150px">
                <q-list dense>
                  <template v-if="optionsMenu.length">
                    <div v-for="item in optionsMenu" :key="item.id">
                      <q-item
                        clickable
                        v-close-popup
                        style="min-height: 1px"
                        v-if="!item.submenu"
                      >
                        <q-item-section @click="navigate(item)">
                          <div class="flex row items-center">
                            <q-icon
                              color="primary"
                              :name="item.icon"
                              v-if="item.icon.length"
                              class="q-mr-xs"
                            />
                            {{ item.label }}
                          </div>
                        </q-item-section>
                      </q-item>
                      <q-separator
                        :key="'sep' + item.id"
                        v-if="item.separator"
                      />

                      <template v-if="item.submenu">
                        <q-item
                          clickable
                          class="flex row items-center"
                          v-for="submenu in item.submenu"
                          :key="submenu.id"
                          style="min-height: 1px"
                        >
                          <q-item-section>
                            <div
                              class="flex row justify-start row items-center"
                            >
                              <q-icon
                                color="primary"
                                :name="item.icon"
                                v-if="item.icon.length"
                                class="q-mr-xs"
                              />
                              {{ submenu.label }}
                            </div>
                          </q-item-section>
                          <q-item-section side>
                            <q-icon
                              color="primary"
                              name="keyboard_arrow_right"
                            />
                          </q-item-section>
                          <q-separator
                            :key="'sep' + item.id"
                            v-if="item.separator"
                          />

                          <q-menu anchor="top end" self="top start">
                            <q-list>
                              <template
                                v-for="submenuItems in submenu.items"
                                :key="submenuItems.id"
                              >
                                <q-item dense clickable>
                                  <div
                                    class="flex row justify-start row items-center"
                                    style="min-width: 120px"
                                  >
                                    <q-icon
                                      color="primary"
                                      :name="submenuItems.icon"
                                      v-if="submenuItems.icon.length"
                                      class="q-mr-xs"
                                    />
                                    {{ submenuItems.label }}
                                  </div>
                                </q-item>
                                <q-separator
                                  :key="'sep' + submenuItems.id"
                                  v-if="submenuItems.separator"
                                />
                              </template>
                            </q-list>
                          </q-menu>
                        </q-item>
                      </template>
                    </div>
                  </template>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section @click="logoff">
                      <div class="flex items-center">
                        <q-icon
                          color="primary"
                          name="logout"
                          class="q-mr-xs"
                        />{{ logoffLabel }}
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen.value" bordered>
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="item in menu" :key="item.id">
              <q-item
                clickable
                :active="item.label === 'Outbox'"
                v-ripple
                @click="navigate(item)"
              >
                <q-item-section avatar>
                  <q-icon color="primary" :name="item.icon" />
                </q-item-section>
                <q-item-section>
                  {{ item.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + item.id" v-if="item.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <slot></slot>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import brand from './logo.png';

// INTERFACES
export interface MenuInterface {
  label: string;
  route: string;
}

export interface QclayoutInterface {
  appName?: string;
  logoffLabel?: string;
  menu?: any;
  brand?: string;
  optionsMenu?: any;
}

// PROPS
const props = withDefaults(defineProps<QclayoutInterface>(), {
  appName: 'Nome da app',
  logoffLabel: 'Sair',
  menu: [],
  optionsMenu: [],
  brand,
});

// VARIABLES
let leftDrawerOpen = reactive({
  value: false,
});

const checkMobile = ref();

const $emit = defineEmits(['logoff', 'navigate']);

// LIFECIYCLE
onMounted(() => {
  checkMobile.value = window.innerWidth <= 1024;
});

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
.QcLayout {
  &__wrapper {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__brand {
    width: 140px;
  }
}
</style>
