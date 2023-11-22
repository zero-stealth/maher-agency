<template>
  <div>
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="form-container">
      <div class="form-wrapper">
        <h1>Update Job</h1>
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
        <button type="submit" class="btn-f-f">Update Job</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['formSubmit'])

const title = ref('')
const logo = ref(null)
const duration = ref('')
const location = ref('')
const company = ref('')
const category = ref('')
const description = ref('')

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    logo.value = file
  }
}

function handleSubmit() {
  try {
    const formData = {
      title: title.value,
      logo: logo.value,
      location: location.value,
      duration: duration.value,
      company: company.value,
      category: category.value,
      description: description.value
    }

    emit('formSubmit', formData)
  } catch (err) {
    console.log(err)
  }
}
</script>

<style>
@import '@/style/games.css';
</style>
