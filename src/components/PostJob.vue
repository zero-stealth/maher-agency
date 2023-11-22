<template>
  <div>
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="form-container">
      <div class="form-wrapper">
        <h1>Add a job</h1>
        <div class="form-group">
          <label for="name">Job Name:</label>
          <input v-model="title" type="text" class="form-g-input" placeholder="name" id="name" />
        </div>
        <div class="form-group">
          <label for="logo">Company Logo:</label>
          <input
            @change="handleFileUpload"
            type="file"
            class="form-g-input"
            id="Image"
            accept="image/*"
          />
        </div>
        <div class="form-group">
          <label for="location">Location:</label>
          <input
            v-model="location"
            type="text"
            class="form-g-input"
            placeholder="job location"
            id="location"
          />
        </div>
        <div class="form-group">
          <label for="duration">Duration:</label>
          <input
            v-model="duration"
            type="text"
            class="form-g-input"
            placeholder="fulltime/partime"
            id="duration"
          />
        </div>
        <div class="form-group">
          <label for="category">job category:</label>
          <input
            v-model="category"
            type="text"
            class="form-g-input"
            placeholder="cleaning"
            id="category"
          />
        </div>
        <div class="form-group">
          <label for="company">Company:</label>
          <input
            v-model="company"
            type="text"
            class="form-g-input"
            placeholder="company"
            id="company"
          />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <input
            v-model="description"
            type="text"
            class="form-g-input"
            placeholder="description of the job"
            id="description"
          />
        </div>
        <button type="submit" class="btn-f-f">Add Job</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const title = ref('')
const logo = ref(null)
const duration = ref('')
const location = ref('')
const company = ref('')
const category = ref('')
const description = ref('')

const SERVER_HOST = import.meta.env.VITE_SERVER_HOST

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    logo.value = file
  }
}

async function handleSubmit() {
  if (
    title.value.trim() !== '' &&
    logo.value !== null &&
    location.value.trim() !== '' &&
    duration.value.trim() !== '' &&
    company.value.trim() !== '' &&
    category.value.trim() !== '' &&
    description.value.trim() !== ''
  ) {
    try {
      const formData = new FormData()
      formData.append('title', title.value)
      formData.append('logo', logo.value)
      formData.append('location', location.value)
      formData.append('duration', duration.value)
      formData.append('company', company.value)
      formData.append('category', category.value)
      formData.append('description', description.value)

      const user = JSON.parse(localStorage.getItem('token'))
      await axios.post(`${SERVER_HOST}/data/jobs/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user}`
        }
      })
      alert('Job added successfully!')
    } catch (err) {
      console.error(err)
      alert('An error occurred while adding the job.')
    }
  } else {
    alert('No empty fields allowed')
  }
}
</script>

<style>
@import '@/style/form.css';
</style>
