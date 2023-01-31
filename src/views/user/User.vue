<script>
import UserProfile from "@/assets/profile.jpg"
import Search from "@/assets/search.png"
import Home from "@/assets/home.png"
import Dashboard from "@/assets/dashboard.png"
import { RouterLink } from "vue-router"
import Userinfo from "@/components/user/Userinfo.vue"
import StudentCourseCard from "@/components/user/StudentCourseCard.vue"
import ProfCourseCard from "@/components/user/ProfCourseCard.vue"
import UserProfileNav from "@/components/user/UserProfileNav.vue"
import privateForum from "./privateForum.vue"


export default {
    data: function () {
        return {

            userprofile: UserProfile,
            search: Search,
            home: Home,
            dashboard: Dashboard,
            layout: 'student'

        }
    },
    components: {
        Userinfo,
        StudentCourseCard,
        ProfCourseCard,
        UserProfileNav,
        privateForum
    }
}
</script>

<template>
    <main>

        <div class="main">
            <aside class="left">
                <div class="headerleft">
                    <font-awesome-icon icon="fa-solid fa-gear" />
                    <p>Les outils</p>
                </div>
               <hr>
                <div class="parameters">
                    <h4>Les paramètres</h4>
                <ul>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Admin</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Home</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Les services</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Vos contacts</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Vos depenses</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Les points cumulés</span></li>
                </ul>
                <h4>Les paramètres</h4>
                <ul>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Admin</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Home</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Les services</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Vos contacts</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Vos depenses</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Les points cumulés</span></li>
                </ul>
                <h4>Les paramètres</h4>
                <ul>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Admin</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Home</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Les services</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Vos contacts</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Vos depenses</span></li>
                    <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /><span class="desc-element">Les points cumulés</span></li>
                </ul>
                </div>
               
             
            </aside>
            <div class="center-container">
                <UserProfileNav/>
                <Userinfo/>
                <privateForum/>

            </div>
            <aside class="right">
                <div class="barUp">
                    <div class="search">
                        <input type="text" placeholder="Rechercher...">
                        <img :src="search" alt="">
                    </div>

                    <img class="userpics" :src="userprofile" alt="">
                </div>
                <div class="formationsList">
                    <h4>Vos formations</h4>
                    <div class="roles">
                        <button @click="layout = 'student'"
                            :class="layout == 'student' ? 'barActive' : 'defaulButtonClass'">Etudiant</button>
                        <button @click="layout = 'teacher'"
                            :class="layout == 'teacher' ? 'barActive' : 'defaulButtonClass'">Professeur</button>

                    </div>

                    <div class="courses-cards-container">
                        <div v-if="layout === 'student'">
                            <StudentCourseCard />
                        </div>
                        <div v-if="layout === 'teacher'">
                            <ProfCourseCard />
                        </div>

                    </div>


                </div>
            </aside>


        </div>
    </main>

</template>

<style scoped>
.main {
    margin-left: 0;
    height: 100vh;
    width: 100vw;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
}

.main .left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10vw;
    height: 100%;
    background-color: #1a161e;
}
.headerleft {
    display: flex;
    align-items: center;
    margin-left: 15px;
    padding: 5px;
}

.headerleft p{
    margin-left: 15px;
    color: aliceblue;
}
.main .left ul {
    padding-left:15px;
    display: flex;
    flex-direction: column;
    list-style: none;
}
.parameters h4 {
    margin-top: 10px;
}

.main .left ul li {
    margin-bottom: 15px;
    color: rgba(88,84,92,255);
}


.main .left ul li .desc-element {
    margin-left: 5px;
}
.main .right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20vw;
    height: 100%;
    background-color: rgb(23, 23, 25);

}

.center-container {
    background-color: rgb(12, 12, 12);
    width: 66%;
    position: absolute;
    left: 12%;
}

.right .barUp {
    position: relative;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.right .barUp .userpics {
    margin-left: 50px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}

.right .barUp .search input {
    width: 200px;
    height: 30px;
    border: none;
    padding-left: 30px;
    border-radius: 10px;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}

.right .barUp .search img {
    position: absolute;
    top: 7px;
    left: 5px;
    width: 15px;
    height: 15px;
    opacity: 0.5;
}



.courses-cards-container {

    background-color: rgb(255, 255, 255);
}

.formationsList {
    margin-top: 20px;

}

.formationsList .roles {
    display: flex;
    justify-content: center;
    align-items: center;

}

.barActive {
    background-color: red;
    color: white;
}

.defaulButtonClass {
    background-color: rgb(5, 134, 227);
    color: white;
}

.roles button {
    list-style: none;
    margin-right: 30px;
    width: 10em;
    padding: 5px;
    border: none;
    border-radius: 10px;
    color: rgb(1, 1, 1);
    cursor: pointer;
}



.formationsList h4 {
    margin-bottom: 0.5rem;
}
</style>