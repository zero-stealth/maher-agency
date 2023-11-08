<script setup>
import HeroSection from '@/components/HeroSection.vue'
import CategorySection from '@/components/CategorySection.vue'
import PopularSection from '@/components/PopularSection.vue'
import AboutSection from '@/components/AboutSection.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>
<template>
  <div class="home-container">
    <HeroSection id="job"/>
    <CategorySection id="categories"/>
    <AboutSection id="about"/>
    <PopularSection/>
    <FooterSection id="contact"/>
  </div>
</template>
<style scoped>
@import '@/style/home.css';
</style>
