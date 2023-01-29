<script>
import Pic1 from "@/assets/pic1.jpg"
import Pic2 from "@/assets/pic2.png"
import Pic3 from "@/assets/pic3.png"
import Pic4 from "@/assets/pic4.png"
import Ppic from "@/assets/profile.jpg"
import Star from "@/assets/star.png"

export default {
    data: function () {
        return {
            pic1: Pic1,
            pic2: Pic2,
            pic3: Pic3,
            pic4: Pic4,
            ppic: Ppic,
            star: Star
        }
    }
}
</script>

<template>
    <div class="cardsContainer">
        <div class="card" :on-mouseover="OpenModal">
            <div class="cardImgDiv">
                <img class="cardImg" :src="pic1" alt="">
                <p class="duration">05:05:28</p>
            </div>

            <div class="title-desc">
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.... </h4>

            </div>
            <div class="user-infos">
                <ul>
                    <li class="author-pic-li"><img class="author-pic" :src="ppic" alt=""></li>
                    <li class="author-name">
                        <p>Ange Deborah Bai</p>
                    </li>
                </ul>
            </div>
            <p class="price">100.99$</p>

            <p class="date">Publié le 20 juin 2022</p>

            <div class="rate">
                <ul>
                    <li class="numberOfStar">5.5</li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li style="color: green; fontWeight : bold">(8561)</li>

                </ul>
            </div>

        </div>

        <div class="card">
            <div class="cardImgDiv">
                <img class="cardImg" :src="pic2" alt="">
                <p class="duration">00:40:12</p>
            </div>
            <div class="title-desc">
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing ... </h4>
            </div>
            <div class="user-infos">
                <ul>
                    <li class="author-pic-li"><img class="author-pic" :src="ppic" alt=""></li>
                    <li class="author-name">
                        <p>Gbagbo Stephane</p>
                    </li>
                </ul>
            </div>
            <p class="price">99.99$</p>
            <p class="date">Publié le 20 juin 2022</p>
            <div class="rate">
                <ul>
                    <li class="numberOfStar">5.5</li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li style="color: green; fontWeight : bold">(82000)</li>

                </ul>
            </div>
        </div>

        <div class="card">
            <div class="cardImgDiv">
                <img class="cardImg" :src="pic3" alt="">
                <p class="duration">20:41:58</p>
            </div>
            <div class="title-desc">
                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing .... </h4>

            </div>
            <div class="user-infos">
                <ul>
                    <li class="author-pic-li"><img class="author-pic" :src="ppic" alt=""></li>
                    <li class="author-name">
                        <p>Koffi Beranger</p>
                    </li>
                </ul>
            </div>
            <p class="price">10.99$</p>

            <p class="date">Publié le 20 juin 2022</p>
            <div class="rate">
                <ul>
                    <li class="numberOfStar">5.5</li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li style="color: green; fontWeight : bold">(500)</li>

                </ul>
            </div>
        </div>

        <div class="card">
            <div class="cardImgDiv">
                <img class="cardImg" :src="pic4" alt="">
                <p class="duration">10:30:05</p>
            </div>

            <div class="title-desc">
                <h4>Lolor sit amet consectetur adipisicing elit. Hic, ea... </h4>
            </div>
            <div class="user-infos">
                <ul>
                    <li class="author-pic-li"><img class="author-pic" :src="ppic" alt=""></li>
                    <li class="author-name">
                        <p>Yekpah Prince Bai</p>
                    </li>
                </ul>
            </div>
            <p class="price">40.99$</p>
            <p class="date">Publié le 20 juin 2022</p>
            <div class="rate">
                <ul>
                    <li class="numberOfStar">5.5</li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li class="star"><img :src="star" alt=""></li>
                    <li style="color: green; fontWeight : bold">(12000)</li>

                </ul>
            </div>

        </div>

    </div>
</template>

<style scoped>
.cardsContainer {
    position: absolurelate;
    top: 360px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.card {
    width: 25%;
    height: 350px;
    margin: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 10px;
}

.cardImgDiv {
    width: 100%;
    height: 40%;
}

.cardImgDiv img {
    width: 100%;
    height: 100%;
}

.cardImgDiv .duration {
    width: 25%;
    color: white;
    background-color: rgb(48, 10, 235);
    transform: translateY(-35px);
    padding-left: 5px;
    border-radius: 5px;
    box-shadow: rgb(85, 91, 255) 0px 0px 0px 1px, rgb(31, 193, 27) 0px 0px 0px 2px, rgb(255, 217, 19) 0px 0px 0px 3px, rgb(255, 156, 85) 0px 0px 0px 7px, rgb(255, 85, 85) 0px 0px 0px 8px;
}


.user-infos ul {
    display: flex;
    padding: 0;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
}

.user-infos ul li {
    margin-right: 5px;
}

.user-infos ul li .author-pic {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}

.othersinfos {
    display: flex;
    padding: 0;
    justify-content: flex-start;
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

.rate {
    padding: 0;
}

.rate ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
}

.rate ul li {
    margin-right: 1px;
}

.rate ul .numberOfStar {
    font-size: 18px;
    font-weight: bolder;
    color: rgb(234, 46, 46);
    margin-right: 4px;
}

.star img {
    width: 18px;
    height: 18px;
    margin-top: 6.5px;
}
</style>