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
          <button type="submit" class="h-btn" @click="showResult">
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
              <tbody v-for="item in jobData" :key="item._id">
                <tr v-for="d in item" :key="d._id" @click="showinfo(d._id)">
                  <td>{{ d.title }}</td>
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
    <CompanySection />
    <PopUP :title="title">
      <div class="job-details" v-for="d in specificData" :key="d.id">
        <div class="job-details-inner">
          <div class="job-heading">
            <div class="job-heading-inner">
              <div>
                <h1>Company</h1>
                <span>{{ d.company }}</span>
              </div>
            </div>
            <div>
              <h1>Location</h1>
              <span> {{ d.location }}</span>
            </div>
            <div>
              <h1>Category</h1>
              <span> {{ d.category }}</span>
            </div>
          </div>
          <div class="description">
            <h1>Description</h1>
            <p>{{ d.description }}</p>
          </div>
        </div>
        <button class="pop-btn" @click="applyJob">
          <div class="h-btn-inner">Apply for this job</div>
        </button>
      </div>
    </PopUP>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
import working from '@/assets/working.gif'
import nothing from '@/assets/nothing.gif'
import AddIcon from '@/icons/AddIcon.vue'
import profile1 from '@/assets/profile1.jpeg'
import profile2 from '@/assets/profile2.jpeg'
import profile3 from '@/assets/profile3.jpeg'
import profile4 from '@/assets/profile4.jpeg'
import NavBar from '@/components/NavBar.vue'
import { ref, watchEffect, onMounted } from 'vue'
import SearchIcon from '@/icons/SearchIcon.vue'
import { usePopUpStore } from '@/stores/drawer'
import LocationIcon from '@/icons/LocationIcon.vue'
import Loading from '@/components/LoadingState.vue'
import PopUP from '@/components/popupComponent.vue'
import CompanySection from '@/components/CompanySection.vue'

const SERVER_HOST = import.meta.env.VITE_SERVER_HOST
const popUpStore = usePopUpStore()
const router = useRouter()

const location = ref('')
const search = ref('')
const title = ref('')
const jobData = ref([])

const getJob = async () => {
  try {
    const response = await axios.get(`${SERVER_HOST}/data/jobs/`)
    jobData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}
const filteredData = ref([])
const specificData = ref([])
const loading = ref(false)
const resultBar = ref(false)
const phoneNumber = ref('254720266644')

const showResult = () => {
  if (location.value === '' && search.value === '') {
    filteredData.value = jobData.value
    toggleResultBar()
  } else {
    resultBar.value = true
  }
}

const Login = async () => {
  router.push({ name: 'Login' })
}
const toggleResultBar = () => {
  resultBar.value = !resultBar.value
}

const showSpecificJob = async () => {
  try {
    const response = await axios.get(`${SERVER_HOST}/data/jobs/${popUpStore.jobID}`)
    specificData.value = response.data ? [response.data] : []
  } catch (err) {
    console.error(err)
  }
  title.value = specificData.value[0].title
}
const applyJob = () => {
  if (localStorage.getItem('email') === null) {
    router.push({ name: 'Login' });
    popUpStore.togglePop();
  } else {
    window.open(
      `https://wa.me/${phoneNumber.value}?text=
*Hi, I would like to apply for the following job:*

*Job Title:* ${title.value}

*Company:* ${specificData.value[0].company}
*Category:* ${specificData.value[0].category}

*Location:* ${specificData.value[0].location}

*My email is* ${localStorage.getItem('email')}

*Thank you! *`,
      '_blank'
    );
    popUpStore.togglePop();
  }
};

const showinfo = (id) => {
  popUpStore.togglePop(id)
  toggleResultBar()
  showSpecificJob()
}
const searchJobs = () => {
  const searchTerm = search.value.toLowerCase().trim()
  const locationTerm = location.value.toLowerCase().trim()

  if (jobData.value && jobData.value.length > 0) {
    filteredData.value = jobData.value.filter((d) => {
      const jobTitle = d.job ? d.job.toLowerCase() : ''
      const jobLocation = d.location ? d.location.toLowerCase() : ''

      return jobTitle.includes(searchTerm) || jobLocation.includes(locationTerm)
    })
  } else {
    filteredData.value = []
  }
}

watchEffect(() => {
  searchJobs()
})

onMounted(() => {
  getJob()
})
</script>

<style scoped>
@import '@/style/hero.css';
</style>
