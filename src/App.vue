<script>
import Home  from './views/Home.vue'
import Header from './components/HeaderVue.vue'

import { RouterView } from 'vue-router';

export default {
  components: {
    Home,
    Header
  }
}
</script>

<template>
  <Header/>
  <RouterView/>
</template>
