import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePopUpStore = defineStore('PopUp', () => {
  const popDrawer = ref(false);
  const jobID = ref(null);

  const togglePop = (id) => {
    jobID.value = id;
    popDrawer.value = !popDrawer.value;
  };

  return {
    jobID,
    popDrawer,
    togglePop,
  };
});
