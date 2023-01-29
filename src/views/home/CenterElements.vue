<script>
import HomeSearchBar  from '@/components/home/HomeSearchBar.vue'
import CourseCards  from '@/components/home/CourseCards.vue'
import AdsSlider from '@/components/home/AdsSlider.vue'
export default {
  components: {
    HomeSearchBar,
    CourseCards,
    AdsSlider
  }
}
</script>

<template>
    <main>
      <AdsSlider/>
        <HomeSearchBar/>
        <div class = "">
          <CourseCards/>
        </div>
    </main>

</template>

<style scoped>
main{
    width: 1200px;
    position: relative;
    top: 0;
    left: 14%;
}
</style>