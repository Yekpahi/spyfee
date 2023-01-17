<script>
import SearchBar  from '../components/SearchBar.vue'
import CourseCards  from '../components/CourseCards.vue'
export default {
  components: {
    SearchBar,
    CourseCards
  }
}
</script>

<template>
    <main>
        <SearchBar/>
        <div class = "cards">
          <CourseCards/>
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

.cards {
  margin-top: 30px;
}
</style>