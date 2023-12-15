<template>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FFF8EA;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PWEB!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Chats</a>
        </li>
      </ul>
      <router-link to="/Login">
        <button type="button" class="btn" style="background-color:#9E7676;">Login?</button>
      </router-link>
    </div>
  </div>
</nav>
  <div class="d-flex flex-row align-items-center" style="background-color: #fbe4db; height: 95vh; width: 100vw;">
      <div class="h-50 col-5 d-flex flex-column px-5 justify-content-center">
      <h1 class="fw-bold">Welcome To My PWEB Chatting App</h1>
      <router-link to="/SignUp">
        <button class="fw-semibold btn w-25 text-light" style="background-color: #9E7676;">Register here !</button>
      </router-link>
      </div>
    <div class="col-7">
      <img class="w-100" src="../assets/mobile.jpg" alt="">
    </div>
  </div>
</template>

<script setup>

</script>
