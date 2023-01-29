<script>
import CenterElements from "./CenterElements.vue"
import RightSide from './RightSide.vue'
import Header from '@/components/header/HeaderVue.vue'


export default {
  components: {
    Header,
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
