<script>
import AdsSlider from "./AdsSlider.vue"


export default {
  components: {
    AdsSlider,
  }
}
</script>

<template>
    <div class=" pub-container">
<AdsSlider />
        </div>
</template>

<style scoped> 
.pub-container {
    margin: 0 auto;
    background-color: rgb(12, 133, 239);
    width: 1200px;
    height: 350px;
    position: relative;
    left: -3.5%;
}


</style>