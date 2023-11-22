<template>
  <div class="footer-component">
    <div class="ads-banner">
      <h1>
        Let's get connected <br />
        and start finding your dream job
      </h1>
      <button class="btn-banner" @click="openWhatsapp">Start now</button>
    </div>
    <div class="footer-container">
      <div class="footer-wrap">
        <div class="foot-part">
          <img :src="logo" alt="logo" class="footer-logo" />
          <p>
            Ensuring you <span @click="goAdmin()">get</span>  the job 
            that you deserve
          </p>

          <div class="info-contain">
            <div class="info-foot">
              <EmailIcon class="footer-icon" />
              <span>meheragencieslts21@yahoo.com</span>
            </div>
            <div class="info-foot">
              <LocationIcon class="footer-icon" />
              <span>P.o.box 5557- 0100</span>
            </div>
            <div class="info-foot">
              <PhoneIcon class="footer-icon" />
              <span>{{ phoneNumber }}</span>
            </div>
          </div>
        </div>
        <div class="foot-part-contain">
          <div class="foot-part">
          <h1>Quick links</h1>
          <RouterLink to="/" class="foot-link" v-if="routeName === 'Home'">Job</RouterLink>
          <a href="#job" class="foot-link" :class="activeClass('#job')" v-else>Job</a>
          <a href="#categories" class="foot-link" :class="activeClass('#categories')">Categories</a>
          <a href="#about" class="foot-link" :class="activeClass('#about')">About us</a>
          <a href="#contact" class="foot-link" :class="activeClass('#contact')">Contact</a>
        </div>
        <div class="foot-part">
          <h1>Resource</h1>
          <RouterLink to="/support" class="foot-link">support</RouterLink>
          <RouterLink to="/policy" class="foot-link">Policy</RouterLink>
          <RouterLink to="/Disclaimer" class="foot-link">Disclaimer</RouterLink>
          <RouterLink to="/Terms" class="foot-link">Terms & Condition</RouterLink>
        </div>
        </div>
        <div class="foot-part">
          <h1>Message us</h1>
          <form @submit.prevent="Message()" class="msg-section">
            <input type="text" :name="message" placeholder="send a message" class="foot-msg" />
            <span>{{ errMessage }}</span>
            <button type="submit" class="msg-btn">Message</button>
          </form>
          <div class="social-container">
            <div class="social-link-banner" @click="openWhatsapp">
              <WhatsappIcon class="social-link" />
            </div>
            <div class="social-link-banner" @click="openFacebook">
              <FacebookIcon class="social-link" />
            </div>
            <div class="social-link-banner" @click="openInstagram">
              <InstagramIcon class="social-link" />
            </div>
            <div class="social-link-banner" @click="openLinkedin">
              <LinkedinIcon class="social-link" />
            </div>
            <div class="social-link-banner" @click="openTwitter">
              <TwitterIcon class="social-link" />
            </div>
            <div class="social-link-banner" @click="openTelegram">
              <TelegramIcon class="social-link" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-down">© 2023 Maher Agencies Limited.</div>
  </div>
</template>

<script setup>
import logo from '@/assets/logo.png'
import { useRouter } from 'vue-router'
import PhoneIcon from '@/icons/PhoneIcon.vue'
import EmailIcon from '@/icons/EmailIcon.vue'
import { onMounted, ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import TwitterIcon from '@/icons/TwitterIcon.vue'
import FacebookIcon from '@/icons/FacebookIcon.vue'
import LocationIcon from '@/icons/LocationIcon.vue'
import TelegramIcon from '@/icons/TelegramIcon.vue'
import InstagramIcon from '@/icons/InstagramIcon.vue'
import LinkedinIcon from '@/icons/LinkedinIcon.vue'
import WhatsappIcon from '@/icons/WhatsappIcon.vue'

const message = ref('')
const route = useRoute()
const router = useRouter()
const errMessage = ref('')
const routeName = ref('Home')
const phoneNumber = ref('254720266644')


onMounted(() => {
  watchEffect(() => {
    routeName.value = route.hash
  })
})

const goAdmin = () => {
  router.push({ name: 'AdminLogin' })
}

const activeClass = (link) => {
  const style = ref(null)
  if (link === route.hash) {
    style.value = 'active'
  }

  return style.value
}


const openWhatsapp = () => {
  window.open(`https://wa.me/${phoneNumber.value}?text=Hi welcome to maher agency`, '_blank')
}
const openFacebook = () => {
  window.open('https://', '_blank')
}
const openInstagram = () => {
  window.open('https://', '_blank')
}

const openLinkedin = () => {
  window.open('https://', '_blank')
}

const openTwitter = () => {
  window.open('https://', '_blank')
}

const openTelegram = () => {
  window.open('https://', '_blank')
}

const reset = () => {
  message.value = ''
}

const Message = () => {
  if (message.value !== '') {
    window.open(`https://wa.me/${phoneNumber.value}?text=${message.value}`, '_blank')
  } else {
    errMessage.value = 'Write something'
  }

  reset()
}
</script>

<style scoped>
@import '@/style/footer.css';
</style>
