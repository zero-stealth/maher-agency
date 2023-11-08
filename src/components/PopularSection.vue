<template>
  <div class="popular-section">
    <div class="category-header popular-hp">
      <div class="category-title">
        <h1>Popular jobs</h1>
        <span></span>
      </div>
      <p>
        Explore the diverse job opportunities we offer across various industries, spanning
        entry-level to experienced positions.We foster a dynamic and inclusive work
        environment, providing roles in technology, healthcare, finance, and more.
      </p>
    </div>
    <div class="popular-component">
      <div class="popular-card" v-for="d in data" :key="d.id">
        <div class="popular-header">
          <div class="p-header-inner">
            <img :src="d.logo" :alt="d.job" class="popular-img" />
            <span>{{ d.company }}</span>
          </div>
          <div class="popular-category">
            <div class="circle-popular"></div>
            <span>{{ d.category }}</span>
          </div>
        </div>
        <div class="popular-info-inner">
          <h1>{{ d.job }}</h1>
          <p>{{ d.description }}</p>
        </div>
        <div class="popular-footer">
          <span>{{ d.duration }}</span> >> <span> {{ d.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    id: 1,
    logo: 'https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png',
    category: 'Tech',
    company: 'Google',
    duration:'fulltime',
    job: 'Software Engineer',
    location: 'San Francisco',
    description: 'work as a software engineer at google'
  },
  {
    id: 2,
    logo: 'https://seeklogo.com/images/A/apple-logo-6384F6C4BA-seeklogo.com.png',
    category: 'Tech',
    company: 'Apple',
    duration:'parttime',
    job: 'Product Manager',
    location: 'Los Angeles',
    description: 'work as a software engineer at google'
  },
   {
    id: 3,
    logo: 'https://seeklogo.com/images/M/microsoft-logo-83ECA0A7A4-seeklogo.com.png',
    category: 'Tech',
    company: 'Microsoft',
    duration:'fulltime',
    job: 'Data Analyst',
    location: 'New York',
    description: 'work as a software engineer at google'
  },
  {
    id: 4,
    logo: 'https://seeklogo.com/images/A/Aqua_Cleaning-logo-D785CF7108-seeklogo.com.png',
    category: 'cleaning',
    company: 'Elerion',
    duration:'fulltime',
    job: 'House keeper',
    location: 'japan',
    description: 'work as a House keeper at google'
  }
  
])

</script>
<style>
@import '@/style/popular.css';
</style>
