<script >
import TheWelcome from '../components/TheWelcome.vue'
import { GoogleLogin } from 'vue3-google-login'
import { decodeCredential } from 'vue3-google-login'



export default{
  components:{
    
    GoogleLogin,
    TheWelcome
  },
  data() {
  return {
    callback:(response) => {
        console.log('Handle the response', response)
        let user = decodeCredential(response.credential);
      console.log(user)
      }

    
  }
},
}

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->

    <!-- <GoogleLogin :callback="this.callback" prompt auto-login /> -->
    
  </main>
</template>
