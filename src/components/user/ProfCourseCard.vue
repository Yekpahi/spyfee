<script>
import C1 from "@/assets/c1.jpg"
import C2 from "@/assets/c2.jpg"
import C3 from "@/assets/c3.jpg"
import C4 from "@/assets/c4.jpg"
import C5 from "@/assets/c5.jpg"
import C6 from "@/assets/c6.jpg"

export default {
    data: function () {
        return {
            c1: C1,
            c2: C2,
            c3: C3,
            c4: C4,
            c5: C5,
            c6: C6
        }
    },
}
</script>

<template>
      <hr style="margin-top:12px">
    <div class="course-card">
        <img :src="c1" alt="">
        <div class="course-info">
            <h3>Prof cours information utile</h3>
            <h4>11.52k etudiants</h4>
            <h5>61%..</h5>
        </div>
    </div>
    <hr style="margin-top:12px">
    <div class="course-card">
        <img :src="c2" alt="">
        <div class="course-info">
            <h3>Java contre-attaque</h3>
            <h4>11.52k etudiants</h4>
            <h5>61%..</h5>
        </div>
    </div>
    <hr style="margin-top:12px">
    <div class="course-card">
        <img :src="c3" alt="">
        <div class="course-info">
            <h3>Prof cours information utile</h3>
            <h4>11.52k etudiants</h4>
            <h5>61%..</h5>
        </div>
    </div>
    <hr style="margin-top:12px">
    <div class="course-card">
        <img :src="c4" alt="">
        <div class="course-info">
            <h3>Prof cours information utile</h3>
            <h4>11.52k etudiants</h4>
            <h5>61%..</h5>
        </div>
    </div>
    <hr style="margin-top:12px">
    <div class="course-card">
        <img :src="c5" alt="">
        <div class="course-info">
            <h3>Prof cours information utile</h3>
            <h4>11.52k etudiants</h4>
            <h5>61%..</h5>
        </div>
    </div>
    <hr style="margin-top:12px">
    <div class="course-card">
        <img :src="c6" alt="">
        <div class="course-info">
            <h3>Prof cours information utile</h3>
            <h4>11.52k etudiants</h4>
            <h5>61%..</h5>
        </div>
    </div>
    <hr style="margin-top:12px">
</template>

<style scoped>
.course-card {
    display: flex;
    padding-left: 30px;
    margin-top: 20px;

}
.course-card img {
    margin-right: 25px;
    width: 8em;
}
.course-card .course-info {
    display: flex;
    flex-direction: column;
    padding: 0;
}

.course-card .course-info h3 {
    font-weight: bold;
    text-align: left;
}

.course-card .course-info h4 {
    position: relative;
    left: 0;
    padding: 0;
    color: rgb(12, 11, 11);

    text-align: left;
}

.course-card .course-info h5 {
    position: relative;
    left: 0;
    padding: 0;
    color: rgb(206, 25, 25);
    text-align: left;
}
</style>