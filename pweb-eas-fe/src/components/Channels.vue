<template>
  <div class="row p-2 border-top border-bottom" :class="{ 'bg-info': Active }" style="width:30vw;">
    <img class="col-2" src="../assets/user.png" />
    <div class="col-10 fw-semibold fs-4">{{ Name }}</div>
  </div>
</template>

<script>
export default {
  name: "Channels",
  props: ['Name', 'Active']
}
</script>
