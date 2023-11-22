<template>
  <div class="game-container">
    <div class="game-game-p">
      <div class="game-cf">
        <div class="game-table">
          <table>
            <thead>
              <tr>
                <th>Logo</th>
                <th>Title</th>
                <th>location</th>
                <th>duration</th>
                <th>category</th>
                <th>company</th>
                <th>description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody v-for="item in jobData" :key="item._id">
              <tr v-for="data in item" :key="data._id">
                <td>
                  <div class="game-tbl-img">
                    <img :src="data.logo" alt="game-p" class="game-pi" />
                    <span>{{ data.title }}</span>
                  </div>
                </td>
                <td>
                  <span>{{ data.location }}</span>
                </td>
                <td>
                  <span>{{ data.duration }}</span>
                </td>
                <td>
                  <span>{{ data.category }}</span>
                </td>
                <td>
                  <span>{{ data.company }}</span>
                </td>
                 <td>
                  <span>{{ data.description }}</span>
                </td>
                <td>
                  <div class="game-delete" @click="editGame(EditJob, data._id)">
                    <FileIcon class="icon-delete" />
                  </div>
                </td>
                <td>
                  <div class="game-delete" @click="deleteJob(data._id)">
                    <DeleteIcon class="icon-delete" />
                  </div>
                </td>
              </tr>

              <tr v-if="jobData.length === 0">
                <td colspan="8">No job posted!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
    </div>
  </div>
  <Teleport to="body">
    <div class="game-edit" :class="[isJobOpen ? 'showEdit' : 'closeEdit']">
      <div class="mobile-exit">
        <ExitIcon class="icon-exit" @click="showEdit" />
      </div>
      <div class="game-main-p">
        <component
          @formSubmit="updateJob"
          :is="activePage"
        />
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import axios from 'axios'
import ExitIcon from '@/icons/ExitIcon.vue'
import FileIcon from '@/icons/FileIcon.vue'
import DeleteIcon from '@/icons/DeleteIcon.vue'
import EditJob from '@/components/EditJob.vue'
import { ref, onMounted, shallowRef } from 'vue'


const message = ref()
const jobData = ref([])
const isJobOpen = ref(false)
const SERVER_HOST = import.meta.env.VITE_SERVER_HOST

const getJob = async () => {
  try {
    const response = await axios.get(
      `${SERVER_HOST}/data/jobs/`
    )
    jobData.value = response.data.length > 0 ? [response.data] : []
  } catch (err) {
    console.log(err)
  }
}

const showEdit = () => {
  isJobOpen.value = !isJobOpen.value
}

const activePage = shallowRef(EditJob)
const jobID = ref('')


const editGame = (job, id) => {
  activePage.value = job
  jobID.value = id
  showEdit()
}


async function updateJob(formData) {
  try {
    const token = JSON.parse(localStorage.getItem('token'))
    const formDataa = new FormData()
    if (formData.title !== '') {
      formDataa.append('title', formData.title)
    }
    if (formData.logo !== null) {
      formDataa.append('logo', formData.logo)
    }
    if (formData.location !== '') {
      formDataa.append('location', formData.location)
    }
    if (formData.company !== '') {
      formDataa.append('company', formData.company)
    }
    if (formData.duration !== '') {
      formDataa.append('duration', formData.duration)
    }
    if (formData.category !== '') {
      formDataa.append('category', formData.category)
    }
    if (formData.description !== '') {
      formDataa.append('description', formData.description)
    }
    const response = await axios.put(
      `${SERVER_HOST}/data/jobs/${jobID.value}`,
      formDataa,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    alert('job updated')
  } catch (error) {
    console.error('Error updating job:', error)
  }
}


onMounted(() => {
  getJob()
})

const deleteJob = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'))

    const response = await axios.delete(`${SERVER_HOST}/data/jobs/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    message.value = response.data.message
    await getJob()
  } catch (err) {
    message.value = 'deletion failed'
  }
  alert('job deleted')
}



</script>
<style scoped>
@import '@/style/management.css';
</style>
