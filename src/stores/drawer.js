import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePopUpStore = defineStore('PopUp', () => {
  const popDrawer = ref(false);
  const jobID = ref(localStorage.getItem('jobID') || null);

  const togglePop = (id) => {
    jobID.value = id;
    localStorage.setItem('jobID', id);
    popDrawer.value = !popDrawer.value;
  };

  return {
    jobID,
    popDrawer,
    togglePop,
  };
});
