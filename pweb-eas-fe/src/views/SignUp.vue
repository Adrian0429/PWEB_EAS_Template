<script setup>
import {ref} from 'vue'
import router from '../router'
const apiUrl = 'http://localhost:3000/api/chatter'
const email = ref('')
const password = ref('')
const username = ref('')

const Register = async ()=> {
try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        Username:username.value,
      }),
    });
    if (!response.ok) {
      throw new Error('Register failed');
    }
    
    console.log(response)
    console.log('Register successful');
    router.replace("/Login")
  } catch (error) {
    errorMessage.value = 'Invalid username or password';
    console.error('Register error:', error);
  }
};
</script>


<template> 
  <div class="d-flex flex-row row" style="height: 100vh; width: 100.8vw;">
    <div class="w-50 d-flex flex-column align-items-center justify-content-center" style="background-color: #fbe4db;">
      <img class="w-100" src="../assets/mobile.jpg" alt="">
      <h2 class="fw-bold">Welcome !</h2>
      <p class="fw-semibold">Hurry up and Register your account!</p>
    </div>
    <div class="w-50 mx-auto d-flex flex-column justify-content-around" style="background-color: #f5cbbc; width: 50vw;">
    <div class="mt-5">
      <div class="col-md-6 offset-md-3">
        <h2 class="mb-4">Register</h2>
        <form @submit.prevent="Register">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" id="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" required>
          </div>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input v-model="username" type="username" class="form-control" id="username" required>
          </div>
          <div class="d-flex justify-content-between">
              <button type="submit" class="btn bg-secondary-subtle px-4">Register</button>
              <a href="./Login" class="text-decoration-none text-secondary-emphasis">Login here</a>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
  
</template>
