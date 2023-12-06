<template>
  <div class="container mt-5">
    <h2 class="mb-4">Channels</h2>
    <ul>
      <!-- Iterate over channels -->
      <li v-for="channel in channels" :key="channel.id">
        <h3>{{ channel.Channel_Name }}</h3>
        <ul>
          <!-- Iterate over messages for each channel -->
          <li v-for="message in channel.Messages" :key="message.id">
            <div>
              <strong>{{ message.Sender_name }}:</strong> {{ message.Messages }}
            </div>
            <div><small>Time: {{ message.createdAt }}</small></div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const apiUrl = 'http://localhost:3000/api/channels';
const channels = ref([]);

const fetchChannels = async () => {
  try {
    const response = await axios.get(apiUrl);
    channels.value = response.data.docs;
  } catch (error) {
    console.error('Error fetching channels:', error);
  }
};

// Fetch channels when the component is mounted
onMounted(fetchChannels);
</script>
