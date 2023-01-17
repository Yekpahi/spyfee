<script>
import SearchBar  from '../components/SearchBar.vue'
import CourseCard  from '../components/CourseCard.vue'
export default {
  components: {
    SearchBar,
    CourseCard
  }
}
</script>

<template>
    <main>
        <SearchBar/>
        <div>
          <CourseCard/>
        </div>
    </main>

</template>

<style scoped>
main{
    width: 1200px;
    position: absolute;
    top: 480px;
    left: 14%;
}
</style>