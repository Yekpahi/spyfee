<script>
import Pic1 from "../assets/pic1.jpg"
import Pic2 from "../assets/pic2.png"
import Pic3 from "../assets/pic3.png"
import Pic4 from "../assets/pic4.png"
import Ppic from "../assets/profile.jpg"

export default {
    data: function () {
        return {
            pic1: Pic1,
            pic2: Pic2,
            pic3: Pic3,
            pic4: Pic4,
            ppic: Ppic
        }
    }
}
</script>

<template>
    <div class="cardsContainer">
        <div class="card" :on-mouseover="OpenModal">
            <img class ="cardImg" :src="pic1" alt="">
        <div class="title-desc">
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.... </h4>
          
        </div>
        <div class="user-infos">
            <ul>
                <li class="author-pic-li"><img class="author-pic" :src="ppic" alt=""></li>
                <li class="author-name"><p>Ange Deborah Bai</p></li>
            </ul>
        </div>
        <p class="price">100.99$</p>
       <ul class="othersinfos">
        <li class="rate">**5**</li>
        <li class="time">2h30</li>
        <li class="date">20 juin 2022</li>
       </ul>
        </div>
        <div class="card">
            <img class ="cardImg" :src="pic2" alt="">
        <div class="title-desc">
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing ... </h4>
        </div>
        <div class="user-infos">
            <ul>
                <li class="author-pic-li"><img class="author-pic" :src="ppic" alt=""></li>
                <li class="author-name"><p>Gbagbo Stephane</p></li>
            </ul>
        </div>
        <p class="price">99.99$</p>
       <ul class="othersinfos">
        <li class="rate">**5**</li>
        <li class="time">2h30</li>
        <li class="date">20 juin 2022</li>
       </ul>
        </div>
        <div class="card">
            <img class ="cardImg" :src="pic3" alt="">
        <div class="title-desc">
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing .... </h4>
     
        </div>
        <div class="user-infos">
            <ul>
                <li class="author-pic-li"><img class="author-pic" :src="ppic" alt=""></li>
                <li class="author-name"><p>Koffi Beranger</p></li>
            </ul>
        </div>
        <p class="price">10.99$</p>

       <ul class="othersinfos">
        <li class="rate">**5**</li>
        <li class="time">2h30</li>
        <li class="date">20 juin 2022</li>
       </ul>
        </div>

        <div class="card">
            <img class ="cardImg" :src="pic4" alt="">
            
        <div class="title-desc">
            <h4>Lolor sit amet consectetur adipisicing elit. Hic, ea... </h4>
        </div>
        <div class="user-infos">
            <ul>
                <li class="author-pic-li"><img class="author-pic" :src="ppic" alt=""></li>
                <li class="author-name"><p>Yekpah Prince Bai</p></li>
            </ul>
        </div>
        <p class="price">40.99$</p>
       <ul class="othersinfos">
        <li class="time">2h30</li>
        <li class="date">20 juin 2022</li>
       </ul>
       <div>
        <span>5</span>

       </div>
        </div>
        
    </div>
</template>

<style scoped>
.cardsContainer {
    display: flex;
    flex-direction: row;
}

.card {
    width:25%;
    height:350px;
    margin: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 10px;
}

.card img {
    width: 100%;
    height: 35%;
}

.user-infos ul {
    display: flex;
    padding: 0;
    justify-content:flex-start;
    align-items: center;
    list-style: none;
}
.user-infos ul li {
    margin-right:5px;
}
.user-infos ul li .author-pic {
    width :35px;
    height: 35px;
    border-radius: 50%;
}
.othersinfos {
    display: flex;
    padding: 0;
    justify-content:flex-start;
    align-items: center;
    list-style: none;
}

.title-desc h4 {
    font-weight: bold;
    text-align: start;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 5px;
    margin-bottom: 5px;
}
.price {
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>