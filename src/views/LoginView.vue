<template>
  <div class="auth-container">
    <div class="form-l-wrapper">
      <h1>{{ title }}</h1>
      <form @submit.prevent="login" class="l-form" v-if="!resetPage">
        <input type="email" class="input-l" placeholder="email address" v-model="email" />
        <input type="password" class="input-l" placeholder="Password" v-model="password" />
        <p>{{ errMsg }}</p>
        <button class="btn-f" type="submit">Login</button>
        <span @click="forgot" class="reverse">Forgot password</span>
      </form>
      <form @submit.prevent="resetAuth" class="l-form" v-else>
        <input type="email" class="input-l" placeholder="email address" v-model="email" />
        <input type="password" class="input-l" placeholder="Password" v-model="password" />
        <p>{{ errMsg }}</p>
        <button class="btn-f" type="submit">Reset</button>
      </form>
      <span>or</span>
      <div class="l-alternatives">
        <button class="alt-btn" @click="create">
          Create an account
        </button>
        <span @click="goHome()" class="reverse">Go back home</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const resetPage = ref(false)
const router = useRouter()
const username = ref('')
const password = ref('')
const title = ref('Login')
const errMsg = ref('')
const email = ref('')

const reset = () => {
  password.value = ''
  username.value = ''
  email.value = ''
}

const create = () => {
  router.push({ name: 'Signup' })
  
}

const login = () => {
  router.push({ name: 'Login' })
}

const forgot = () => {
  title.value = 'Reset your account'
  resetPage.value = !resetPage.value
}

const goHome = () => {
  router.push({ name: 'Home' })
}

const resetAuth = async () => {
  reset()
}

</script>

<style>
@import '@/style/auth.css';
</style>
