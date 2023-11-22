<template>
  <div class="panel-container">
    <div class="panel-bar" :class="[isOpen ? 'close-dash' : '']">
      <div class="panel-nav">
        <div>
          <div class="pan-arrow-container " @click="goBack()">
            <span>Go home</span>
            <HomeIcon class="pan-arrow" />
          </div>
          <div class="panel-profile">
            <div class="panel-img" :style="{ backgroundImage: `url(${logo})` }"></div>
            <div class="panel-profile-info">
              <h1>Maher Agencies</h1>
              <span>Admin</span>
            </div>
          </div>
        </div>
        <div class="panel-btn-container">
          <button
            @click="setActivePage(UserManagement)"
            :class="getButtonClass(UserManagement)"
          >
            <GroupIcon class="icon-panel" />
            <span>User Management</span>
          </button>
          <button @click="setActivePage(JobManagement)" :class="getButtonClass(JobManagement)">
            <GameIcon class="icon-panel" />
            <span>Job Management</span>
          </button>
          <button @click="setActivePage(PostJob)" :class="getButtonClass(PostJob)">
            <GamePostIcon class="icon-panel" />
            <span> Post Job</span>
          </button>
        </div>
      </div>
      <button @click="logout" :class="getButtonClass(logout)">
        <LogoutIcon class="icon-panel" />
        <span>Logout </span>
      </button>
    </div>
    <div class="panel-main">
      <component :is="activePage" />
      <div class="float-menu" @click="showMenu">
        <DashIcon class="float-m-icon" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watchEffect, shallowRef } from 'vue'
import GamePostIcon from '@/icons/gamePostIcon.vue'
import LogoutIcon from '@/icons/logoutIcon.vue'
import GroupIcon from '@/icons/GroupIcon.vue'
import GameIcon from '@/icons/gameIcon.vue'
import DashIcon from '@/icons/DashIcon.vue'
import HomeIcon from '@/icons/homeIcon.vue'
import logo from '@/assets/banner.png'
import { useRouter } from 'vue-router'

const username = ref('admin')
const router = useRouter()
const isOpen = ref(false)

watchEffect(() => {
  username.value = localStorage.getItem('username')
})

const showMenu = () => {
  isOpen.value = !isOpen.value
}

const goBack = () => {
  router.push({ name: 'Home' })
}
// pages
import UserManagement from '@/components/UserManagement.vue'
import JobManagement from '@/components/JobManagement.vue'
import PostJob from '@/components/PostJob.vue'

const activePage = shallowRef(UserManagement)

const setActivePage = (page) => {
  activePage.value = page
}

const getButtonClass = (page) => {
  return ['panel-btn', activePage.value === page ? 'active-cp' : 'inactive-cp']
}

const logout = () => {
  localStorage.removeItem('token')
  router.push({ name: 'Home' })
}
</script>
<style>
@import '@/style/panel.css';
</style>
