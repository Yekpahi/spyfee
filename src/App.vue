<script>
import Home  from '@/views/home/Home.vue'


import { RouterView } from 'vue-router';

export default {
  components: {
    Home,
  }
}
</script>

<template>
  <Header/>
  <RouterView/>
</template>
