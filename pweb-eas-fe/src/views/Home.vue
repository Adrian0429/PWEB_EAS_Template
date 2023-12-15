<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FFF8EA; height: 7vh;">
  <div class="container-fluid border mx-2 d-flex align-content-between">
    <a class="navbar-brand" href="/Home">PWEB!</a>
    <a class="navbar-brand" href="/Home">Hello ! {{ username }}</a>
  </div>
  </nav>
  <div class="d-flex flex-row" style="height: 93vh; width: 100vw;">
      <div class="" style="height: 93vh; width:30vw;">
        <div class="overflow-y-scroll w-100 overflow-x-hidden"  style="height: 85vh; width:30vw;">
          <Channels v-for="(channel, index) in channels" :key="index" :Name="channel.Channel_Name" :Active="index === selectedChannelIndex" @click="selectChannel(index)" />
        </div>
        <form @submit.prevent="AddChannels" class="w-100 border d-flex flex-row px-3 align-items-center" style="height: 8vh; width: 100%;">
            <input type="text" v-model="channelName" id="channelName" class=" w-100 form-control" placeholder="Make a new channel">
          <button type="submit" class="btn btn-primary" style="margin-left: 5px;">Add</button>
        </form>
      </div>
      <div class="col-9" style="height: 93vh; width: 70vw;">
        <div class="overflow-y-scroll w-100 " style="height: 85vh; width: 100%;" >
         <Chats v-for="(message, index) in reversedMessages" :key="index" :Sender="message.Sender_name" :Text="message.Messages"/>
        </div>
        <form @submit.prevent="AddMessage" class="w-100 border d-flex flex-row px-3 align-items-center" style="height: 8vh; width: 100%;">
            <input v-model="messageInput" type="text" class="w-100 form-control">
          <button type="submit" class="btn btn-primary" style="margin-left: 10px;">Send</button>
        </form>
      </div>
  </div>

</template>

<script setup>

import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import Channels from "../components/Channels.vue"
import Chats from "../components/Chats.vue"

const channelUrl = 'http://localhost:3000/api/channels';
const meUrl = 'http://localhost:3000/api/chatter/me';
const chatUrl = 'http://localhost:3000/api/messages';
const channels = ref([]);
var reversedMessages = ref([]);
const messages = ref([]);
const messageInput = ref('')
const username = ref('')
const channelName = ref('')

const selectedChannelIndex = ref(); 

const selectChannel = (index) => {
  selectedChannelIndex.value = index;
  messages.value = [];
  FetchMessages();
};

const FetchMessages = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/messages?where[ChannelID][equals]='+ channels.value[selectedChannelIndex.value].id);
    console.log(response)
    messages.value = response.data.docs;
    reversedMessages = computed(() => messages.value.slice().reverse());
  } catch (error) {
    console.error('Error fetching messages:', error);
  }
};

const AddMessage = async () => {
try {
    const resp = await fetch(chatUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Messages: messageInput.value,
        Sender_name: username.value,
        ChannelID: channels.value[selectedChannelIndex.value].id,
      }),
    });

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message;
      throw new Error(errorMsg);
    }
    const message = await resp.json();
    console.log(message);
    messageInput.value='';
    FetchMessages()
  } catch (error) {
    alert("Send message Error : " + error.message);
  }
};

const GetUser = async () => {
  try {
    const resp = await fetch(meUrl, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message;
      throw new Error(errorMsg);
    }
    const user = await resp.json();
    username.value = user.user.Username;
    // console.log(username.value)
    // console.log(user);
  } catch (error) {
   console.error('Error fetching meuser:', error);
  }
};

const FetchChannels = async () => {
  try {
    const response = await axios.get(channelUrl);
    console.log(response)
    channels.value = response.data.docs;
  } catch (error) {
    console.error('Error fetching channels:', error);
  }
};

const AddChannels = async () => {
try {
    const resp = await fetch(channelUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Channel_Name: channelName.value,
        Channel_Creator: username.value,
      }),
    });

    if (!resp.ok) {
      const errorMsg = (await resp.json())?.errors[0].message;
      throw new Error(errorMsg);
    }
    const channel = await resp.json();
    console.log(channel);
    channelName.value='';
    FetchChannels()
  } catch (error) {
    alert("Sign In Error " + error.message);
  }
};

onMounted(FetchChannels);
onMounted(GetUser)
</script>
