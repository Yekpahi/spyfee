<template>
  <div class="homeSlider">

 
  <Swiper class="ads-swiper-container" :modules="modules" :space-between="10" :loop="true"
    :pagination="{ clickable: true }" :autoplay="{
      dalay: 60000000000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }">
    <swiper-slide v-for="text in swiperTextBase" :key="text.description" class="ads-slide-container">
      <div class="ads-text-container">
        <h1 class="ads-text-title">{{ text.author }}</h1>
        <h1 class="ads-text-desc">{{ text.description }}</h1>
      </div>
      <img :src="text.img" alt="" class="ads-text-img">
    </swiper-slide>
  </Swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { ref } from "vue"

export default {
  components: {
    Swiper,
    SwiperSlide,
    Autoplay,
    Pagination
  },
  setup() {
    const swiperTextBase = ref([
      {
        author: "Elon Musk",
        description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition ...",
        img: "https://www.transparentpng.com/thumb/happy-person/VJdvLa-download-happy-blackman-png.png"
      },
      {
        author: "Bill Gates",
        description: "On sait depuis longtemps que travailler avec du texte lisible et ...",
        img: "https://www.ceicom-solutions.fr/wp-content/uploads/2014/03/happy-people1.png"
      },
      {
        author: "Jeff Bezos",
        description: "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là ...",
        img: "https://freepngimg.com/thumb/happy_person/4-2-happy-person-transparent.png"
      }

    ]);
    return { modules: [Pagination, Autoplay], swiperTextBase }
  }
}
</script>

<style scoped>
.homeSlider  {
  position: absolute;
top: 0;
  width: 100%;
}
.ads-swiper-container {
  width: 100%;
  height: 350px;
  background-color: rgb(231, 248, 118);
}

.ads-text-img {
  width: 400px;
  transform: translate(800px, -20%);
}

.ads-text-container {
  padding: 20px;
  width: 48%;
  background-color: rgb(17, 18, 19);
  transform: translate(200px, 50%);

}

.ads-text-desc {
  font-size: 23px;
  color: aliceblue;
}

.ads-text-title {
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  color: rgb(197, 225, 12);
}
</style>