<template>
          <div class="w-50 align-items-center rounded-2 my-4 mx-2" style="background-color: #FFF8EA;">
            <div class="col fw-bold m-2">
               {{ Sender }}
            </div>
            <div class="col fw-normal mx-3 mb-2">
                {{ Text }}
            </div>
          </div>
    
</template>

<script>
export default {
    name:"Chats",
    props:['Sender', 'Text']
}
</script>