<template>
  <div class="abt-section">
    <div class="abt-contain">
      <div class="abt-info">
        <div class="abt-h">
          <span>About Company</span>
          <h1>Your success, our priority</h1>
        </div>
        <p>
          We have been dedicated to serving the job market for over three decades. Our commitment to excellence and innovation has made us a trusted name in the industry. We provide top-notch services to job seekers and employers alike. Our mission is to connect the right talent with the right opportunities.
        </p>
        <div class="abt-list">
          <li>Committed to your success</li>
          <li>Innovative solutions for job seekers</li>
          <li>Connecting employers with top talent</li>
        </div>
      </div>
      <div class="abt-img">
        <img :src="aboutImage" alt="about image" class="about-image" />
      </div>
    </div>
    <div class="abt-steps">
      <span>Your journey begins here</span>
      <h1>Follow these steps to get started</h1>
    </div>
    <div class="step-contain">
      <div class="step-wrap">
        <div class="step-icon">
          <LoginIcon class="step-icon-c" />
        </div>
        <p>Login or create an account</p>
      </div>
      <div class="step-wrap">
        <div class="step-icon">
          <JobIcon class="step-icon-c" />
        </div>
        <p>Search for the job you want</p>
      </div>
      <div class="step-wrap">
        <div class="step-icon">
          <ApplyIcon class="step-icon-c" />
        </div>
        <p>Apply for your dream job</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import aboutImage from '../assets/abt.gif'
import JobIcon from '../icons/JobIcon.vue'
import LoginIcon from '../icons/LoginIcon.vue'
import ApplyIcon from '../icons/ApplyIcon.vue'
</script>
<style>
@import '@/style/about.css';
</style>
