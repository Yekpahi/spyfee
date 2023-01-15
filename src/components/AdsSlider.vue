<script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
  
    // Import AdsImage
    import AdsImage from "../assets/happy.png"
    // Import Swiper styles
    export default {
      components: {
        Swiper,
        SwiperSlide,
        happy : AdsImage
      },
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
    };
</script>

<template>
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
            <img class="sliderImage" :src="happy" alt="" />
            <div class="pub-text">
                <h1>Now Go forward with us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sunt pariatur 
            repellat itaque repudiandae aut voluptates, excepturi assumenda.</p>
            </div>
       
      </swiper-slide>
     
      <swiper-slide>
            <img :src="happy" alt="" />
            <div class="pub-text">
                <h1>Now Go forward with us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sunt pariatur 
            repellat itaque repudiandae aut voluptates, excepturi assumenda.</p>
            </div>
       
      </swiper-slide>
      <swiper-slide>
            <img class="sliderImage" :src="happy" alt="" />
            <div class="pub-text">
                <h1>Now Go forward with us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sunt pariatur 
            repellat itaque repudiandae aut voluptates, excepturi assumenda.</p>
            </div>
       
      </swiper-slide>
     
      <swiper-slide>
            <img :src="happy" alt="" />
            <div class="pub-text">
                <h1>Now Go forward with us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sunt pariatur 
            repellat itaque repudiandae aut voluptates, excepturi assumenda.</p>
            </div>
       
      </swiper-slide>

    </swiper>
  </template>
  <style scoped>
.sliderImage {
   width: 400px;
   transform: translate(800px, 75%);
}

.pub-text {
    width: 40%;
    padding: 20px;
   transform: translate(180px, -50%);
   background-color: aliceblue;
}

.pub-text p {
   font-size: 23px;
}
.pub-text h1 {
   font-size: 23px;
   font-weight: bold;
   text-align: center;
}
</style>