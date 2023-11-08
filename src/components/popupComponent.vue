<script setup>
import { usePopUpStore } from '@/stores/drawer'
import ExitIcon from '@/icons/ExitIcon.vue'

import { ref, watchEffect } from 'vue'

const popUpStore = usePopUpStore()
const open = ref(null)

watchEffect(() => {
  open.value = popUpStore.popDrawer
})

const props = defineProps({
  title: String 
})
</script>
<template>
  <Teleport to="body">
    <div class="pop-container" v-if="open">
      <div class="pop-inner">
        <div class="pop-circle-container">
          <div class="pop-circle" @click="popUpStore.togglePop">
            <ExitIcon class="pop-exit-icon" />
          </div>
        </div>
        <div class="pop-up-details">
          <h1>{{ props.title }}</h1>
        </div>
      </div>
      <div class="pop-sec-d">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
<style>
@import '@/style/popup.css';
</style>
