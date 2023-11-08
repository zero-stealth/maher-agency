<template>
  <div class="companies-component">
    <div class="company-autoscroll">
      <template v-if="data.length > 0">
        <div class="company-container" ref="companyContainer">
          <img v-for="d in data" :key="d.id" :src="d.image" :alt="d.company" class="league-c-img" />
        </div>
      </template>
      <template v-else>
        <div class="error">
          <h1>No companies found</h1>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import logo1 from '@/assets/logo.png'


const data = ref([
  {
    id: 1,
    image: logo1,
   
  },
  {
    id: 2,
    image: 'https://seeklogo.com/images/W/WWF-logo-93D7960C39-seeklogo.com.png',
   
  },
  {
    id: 3,
    image: 'https://seeklogo.com/images/U/usa-flag-logo-F080109EF3-seeklogo.com.png',
   
  },
  {
    id: 4,
    image: 'https://seeklogo.com/images/U/United_Nations-logo-47BC42E72F-seeklogo.com.png',
   
  },
  {
    id: 5,
    image: 'https://seeklogo.com/images/E/European_Union-logo-75776F70C0-seeklogo.com.png',
   
  },
    {
    id: 6,
    image: 'https://seeklogo.com/images/U/UNICEF-logo-BC1D59CDC0-seeklogo.com.png',
   
  },
  {
    id: 7,
    image: 'https://seeklogo.com/images/M/meb-milli-egitim-bakanligi-logo-E7B80C5FA9-seeklogo.com.png',
   
  },
  {
    id: 8,
    image: 'https://seeklogo.com/images/T/TSE-logo-6770CA9F80-seeklogo.com.png',
   
  },
  {
    id: 9,
    image: 'https://seeklogo.com/images/B/bandeira-do-brasil-logo-5D75AAD6AF-seeklogo.com.png',
   
  },
  {
    id: 10,
    image: 'https://seeklogo.com/images/B/bumn-hadir-untuk-negeri-logo-E0EF5C02ED-seeklogo.com.png',
   
  },
  {
    id: 11,
    image: 'https://seeklogo.com/images/P/phibrows-logo-5E3B771335-seeklogo.com.png',
   
  },
  {
    id: 12,
    image: 'https://seeklogo.com/images/P/Pantene-logo-DAA1B67CA0-seeklogo.com.png',
   
  },
  {
    id: 13,
    image: 'https://seeklogo.com/images/B/balenciaga-paris-logo-A8DB2BEDDD-seeklogo.com.png',
   
  },
  {
    id: 14,
    image: 'https://seeklogo.com/images/M/MAC_Cosmetics-logo-B1FCBA71E6-seeklogo.com.png',
   
  },
  {
    id: 15,
    image: 'https://seeklogo.com/images/A/ascension-health-logo-AD8B3A7EB0-seeklogo.com.png',
  },
  {
    id: 16,
    image: 'https://seeklogo.com/images/P/piramal-group-logo-26066C2128-seeklogo.com.png',
  },
  {
    id: 17,
    image:'https://seeklogo.com/images/D/doctor-medical-mk-logo-A197A7A78F-seeklogo.com.png',
  }
  
  
])

const companyContainer = ref(null);
let animationInterval;

const scrollImages = () => {
  const container = companyContainer.value;
  if (container) {
    container.scrollLeft += 2; 
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }
  }
};

onMounted(() => {
  animationInterval = setInterval(scrollImages, 50); 
});

onBeforeUnmount(() => {
  clearInterval(animationInterval);
});
</script>

<style scoped>
@import '@/style/companies.css';
</style>
