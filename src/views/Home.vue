<script>
import Ads from '../components/AdsVue.vue'
import CenterElements from "./CenterElements.vue"
import RightSide from './RightSide.vue'
import Header from '@/components/HeaderVue.vue'


export default {
  components: {
    Header,
    Ads,
    CenterElements,
    RightSide
  }
}
</script>

<template>
  <div>
    <Header/>
    <CenterElements />
    <RightSide />
    <Ads />
  </div>

</template>
