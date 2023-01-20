<script>
import HeaderVue from '../components/HeaderVue.vue'
import Ads from '../components/AdsVue.vue'
import Main from "./Main.vue"
import RightSide  from './RightSide.vue'

export default {
  components: {
    HeaderVue,
    Ads,
    Main,
    RightSide
  }
}
</script>

<template>
    <div>
        <HeaderVue/>
        <Main/>
        <RightSide/>
  <Ads/>
    </div>

</template>
