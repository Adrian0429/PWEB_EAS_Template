<script setup>
import {ref} from 'vue'
const apiUrl = 'http://localhost:3000/api/chatter'
const email = ref('')
const password = ref('')

const Login = async ()=> {
try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email : email.value,
        password: password.value,
      }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
    console.log(response)
    console.log('Login successful');
    
  } catch (error) {
    errorMessage.value = 'Invalid username or password';
    console.error('Login error:', error);
  }
};

</script>

<template> 
    <div class="container mt-5">
      <div class="col-md-6 offset-md-3">
        <h2 class="mb-4">Login</h2>
        <form @submit.prevent="Login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" id="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" required>
          </div>

          <div class="mb-3 text-danger" v-if="errorMessage">{{ errorMessage }}</div>
          <div class="">
              <button type="submit" class="btn btn-primary">Login</button>
          </div>
          
        </form>
      </div>
    </div>
</template>
