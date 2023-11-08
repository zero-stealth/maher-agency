<template>
  <div class="hero-component">
    <NavBar />
    <div class="hero-section">
      <div class="section-info">
        <div class="hero-section-banner">
          <span>Qoute</span>
          <h2>If we all did the things we are capable of, we would literally astound ourselves.</h2>
        </div>
        <div class="h-info">
          <h1>Find a <span>job</span> abroad easily today<span>.</span></h1>
          <p>
            Discover exciting career opportunities that match your skills and interests. Whether
            you're a recent graduate or an experienced professional, we can help you find the
            perfect job for your future.
          </p>
        </div>
        <form @submit.prevent="searchJobs" class="form-h">
          <div class="h-input-container">
            <SearchIcon class="icon icon-h" />
            <input type="text" v-model="search" placeholder="title" class="inputoh" />
          </div>
          <div class="h-input-container">
            <LocationIcon class="icon icon-h" />
            <input type="text" v-model="location" placeholder="Location" class="inputoh" />
          </div>
          <button type="submit" class="h-btn" :disabled="loading" @click="showResult">
            <div class="h-btn-inner" v-if="!loading">
              <SearchIcon class="icon icon-sbtn" /> <span>Search</span>
            </div>
            <Loading v-else />
          </button>
        </form>
        <div class="search-result" v-if="resultBar">
          <template v-if="filteredData.length > 0">
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Location</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="d in filteredData" :key="d.id" @click="showinfo(d.id)">
                  <td>{{ d.job }}</td>
                  <td>{{ d.location }}</td>
                  <td>{{ d.company }}</td>
                </tr>
              </tbody>
            </table>
          </template>
          <template v-else>
            <div class="error">
              <img :src="nothing" alt="nothing found" class="notFound-img" />
              <h1>No jobs found</h1>
            </div>
          </template>
        </div>
      </div>
      <div class="section-img">
        <div class="job-count job-top">
          <h1>550+</h1>
          <span>jobs available</span>
        </div>
        <img :src="working" alt="working" class="hero-img" />
        <div class="job-count job-bottom">
          <h1>1000+ candidates</h1>
          <div class="job-img-contain">
            <img :src="profile1" alt="participants" class="p-img p-mva" />
            <img :src="profile2" alt="participants" class="p-img p-mvb" />
            <img :src="profile3" alt="participants" class="p-img p-mvc" />
            <img :src="profile4" alt="participants" class="p-img p-mvd" />
            <div class="p-img p-icon-contain p-mve" @click="Login()">
              <AddIcon class="icon-add" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <PopUP title="Apply for this job">
      <div class="job-details" v-for="d in specificData" :key="d.id">
        <div class="job-heading">
          <div class="job-heading-inner">
            <h1>{{ d.job }}</h1>
            <span>{{ d.company }}</span>
          </div>
          <span>{{ d.location }}</span>
        </div>
        <div class="description">
          <p>{{ d.description }}</p>
        </div>
        <button class="h-btn" :disabled="loading" @click="applyJob()">
          <div class="h-btn-inner" v-if="!loading">Apply</div>
          <Loading v-else />
        </button>
      </div>
    </PopUP>
    <CompanySection />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import working from '@/assets/working.gif'
import nothing from '@/assets/nothing.gif'
import AddIcon from '@/icons/AddIcon.vue'
import profile1 from '@/assets/profile1.jpeg'
import profile2 from '@/assets/profile2.jpeg'
import profile3 from '@/assets/profile3.jpeg'
import profile4 from '@/assets/profile4.jpeg'
import NavBar from '@/components/NavBar.vue'
import SearchIcon from '@/icons/SearchIcon.vue'
import { usePopUpStore } from '@/stores/drawer'
import LocationIcon from '@/icons/LocationIcon.vue'
import Loading from '@/components/LoadingState.vue'
import PopUP from '@/components/popupComponent.vue'
import CompanySection from '@/components/CompanySection.vue'



const popStore = usePopUpStore()
const router = useRouter()

const location = ref('')
const search = ref('')
const data = ref([
  {
    id: 1,
    job: 'Software Engineer',
    location: 'San Francisco',
    company: 'Google',
    description: 'work as a software engineer at google'
  },
  {
    id: 1,
    job: 'Software Engineer',
    location: 'San Francisco',
    company: 'Google',
    description: 'work as a software engineer at google'
  },
  {
    id: 1,
    job: 'Software Engineer',
    location: 'San Francisco',
    company: 'Google',
    description: 'work as a software engineer at google'
  },
  {
    id: 1,
    job: 'Software Engineer',
    location: 'San Francisco',
    company: 'Google',
    description: 'work as a software engineer at google'
  },
  {
    id: 1,
    job: 'Software Engineer',
    location: 'San Francisco',
    company: 'Google',
    description: 'work as a software engineer at google'
  },
  {
    id: 1,
    job: 'Software Engineer',
    location: 'San Francisco',
    company: 'Google',
    description: 'work as a software engineer at google'
  },
  {
    id: 1,
    job: 'Software Engineer',
    location: 'San Francisco',
    company: 'Google',
    description: 'work as a software engineer at google'
  },
])

const filteredData = ref([])
const specificData = ref([])
const loading = ref(false)
const resultBar = ref(false)

const showResult = () => {
  resultBar.value = true
}

const Login = async () => {
  router.push({ name: 'login' })
}
const toggleResultBar = () => {
  resultBar.value = !resultBar.value
}

const showSpecificJob = (id) => {
  specificData.value = data.value.filter((d) => {
    return d.id.includes(id)
  })
}

const showinfo = (id) => {
  popStore.togglePop(id)
  toggleResultBar()
  showSpecificJob()
}

const searchJobs = () => {
  const searchTerm = search.value.toLowerCase().trim()
  const locationTerm = location.value.toLowerCase().trim()

  loading.value = true

  if (searchTerm || locationTerm) {
    filteredData.value = data.value.filter((d) => {
      return (
        d.job.toLowerCase().includes(searchTerm) || d.location.toLowerCase().includes(locationTerm)
      )
    })
  } else {
    filteredData.value = data.value
  }

  loading.value = false
}

watchEffect(() => {
  searchJobs()
})
</script>

<style scoped>
@import '@/style/hero.css';
</style>
