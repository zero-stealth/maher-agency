<template>
  <div class="auth-container" >
    <div class="form-l-wrapper">
      <h1>Create an account</h1>
      <form @submit.prevent="create" class="l-form">
        <input type="email" class="input-l" placeholder="email address" v-model="email" />
        <input type="text" class="input-l" placeholder="phone number" v-model="phoneNumber" />
        <input type="password" class="input-l" placeholder="password 8 character (capital,lowercase,number)" v-model="password" />
        <input type="password" class="input-l" placeholder="confirm Password" v-model="confirmPassword" />
        <p>{{ errMsg }}</p>
        <button class="btn-f" type="submit">Sign up</button>
      </form>
      <span>or</span>
      <div class="l-alternatives">
        <button class="alt-btn" @click="login">
          Login
        </button>
        <span @click="goHome()" class="reverse">Go back home</span> 
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const password = ref('')
const errMsg = ref('')
const email = ref('')
const phoneNumber = ref('')
const confirmPassword = ref('')

const reset = () => {
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
  }

const create = () => {
    reset()
  }
  

const login = () => {
  router.push({ name: 'AdminLogin' })
}

const goHome = () => {
  router.push({ name: 'Home' })
}
</script>

<style>
@import '@/style/auth.css';
</style>
