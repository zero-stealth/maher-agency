<template>
  <div class="nav-section">
    <div class="nav-container">
      <div class="nav-logo">
        <img :src="logo" alt="logo" class="logo-img" />
      </div>
      <div class="nav-middle">
        <RouterLink to="/" class="nav-link" v-if="routeName === 'Home'">Job</RouterLink>
        <a href="#job" class="nav-link" :class="activeClass('#job')" v-else>Job</a>
        <a href="#categories" class="nav-link" :class="activeClass('#categories')">Categories</a>
        <a href="#about" class="nav-link" :class="activeClass('#about')">About us</a>
        <a href="#contact" class="nav-link" :class="activeClass('#contact')">Contact</a>
      </div>
      <div class="nav-end">
        <RouterLink to="/signup" class="nav-link">Signup</RouterLink>
        <RouterLink to="/login" class="nav-link btn-apply">Apply now</RouterLink>
      </div>
      <div class="mobile-nav">
        <MenuIcon class="menu-icon" @click="toggleMenu" />
      </div>
    </div>
    <div class="mobile-nav-menu" v-if="mobileNavActive">
      <div class="nav-content-menu">
        <RouterLink to="/" class="nav-link" @click="toggleMenu" v-if="routeName === 'Home'"
          >Job</RouterLink
        >
        <a
          href="#job"
          class="nav-link"
          @click="toggleMenu"
          :class="activeMobileClass('#job')"
          v-else
          >Job</a
        >
        <a href="#about" class="nav-link" @click="toggleMenu" :class="activeMobileClass('#about')"
          >About us</a
        >
        <a
          href="#categories"
          class="nav-link"
          @click="toggleMenu"
          :class="activeMobileClass('#categories')"
          >Categories</a
        >
        <a
          href="#contact"
          class="nav-link"
          @click="toggleMenu"
          :class="activeMobileClass('#contact')"
          >Contact</a
        >
      </div>
      <div class="nav-end-menu">
        <RouterLink to="/signup" class="nav-link menu-btn active-btn" @click="toggleMenu"
          >Signup</RouterLink
        >
        <RouterLink to="/login" class="nav-link menu-btn" @click="toggleMenu">Apply now</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import MenuIcon from '@/icons/MenuIcon.vue'
import logo from '@/assets/logo.png'

const mobileNavActive = ref(false)
const route = useRoute()
const routeName = ref('Home')

onMounted(() => {
  watchEffect(() => {
    routeName.value = route.hash
  })
})

const activeClass = (link) => {
  const style = ref(null)
  if (link === route.hash) {
    style.value = 'active'
  }

  return style.value
}

const activeMobileClass = (link) => {
  const style = ref(null)
  if (link === route.hash) {
    style.value = 'active-mobile'
  }

  return style.value
}

const toggleMenu = () => {
  mobileNavActive.value = !mobileNavActive.value
}
</script>

<style scoped>
@import '@/style/navbar.css';
</style>
