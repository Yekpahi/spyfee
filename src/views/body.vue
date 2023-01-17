<script>
import HeaderVue from '../components/HeaderVue.vue'
import Ads from '../components/AdsVue.vue'
import Main from "./Main.vue"

export default {
  components: {
    HeaderVue,
    Ads,
    Main
  }
}
</script>

<template>
    <div>
        <HeaderVue/>
        <Main/>
  <Ads/>
    </div>

</template>
