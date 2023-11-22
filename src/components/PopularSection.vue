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
    <div class="popular-component" v-for="item in data" :key="item._id">
      <div class="popular-card" v-for="d in item" :key="d._id">
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
          <h1>{{ d.title }}</h1>
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
import axios from 'axios'
import { ref, onMounted } from 'vue'


const SERVER_HOST = import.meta.env.VITE_SERVER_HOST

const data = ref([])


const getJob = async () => {
  try {
    const response = await axios.get(`${SERVER_HOST}/data/jobs/`)
    data.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  getJob()
})
</script>
<style>
@import '@/style/popular.css';
</style>
