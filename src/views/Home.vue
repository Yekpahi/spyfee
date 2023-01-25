<script>
import Ads from '../components/AdsVue.vue'
import CenterElements from "./CenterElements.vue"
import RightSide from './RightSide.vue'

export default {
  components: {
    Ads,
    CenterElements,
    RightSide
  }
}
</script>

<template>
  <div>
    <CenterElements />
    <RightSide />
    <Ads />
  </div>

</template>
