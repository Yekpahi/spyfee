<script>
import UserProfile from "@/assets/profile.jpg"
import Search from "@/assets/search.png"
import Home from "@/assets/home.png"
import Dashboard from "@/assets/dashboard.png"
import { RouterLink } from "vue-router"
import Userinfo from "@/components/user/Userinfo.vue"
import CourseCard from "@/components/user/CourseCard.vue"

export default {
    data: function () {
        return {

            userprofile: UserProfile,
            search: Search,
            home: Home,
            dashboard: Dashboard,

        }
    },
    components: {
        Userinfo,
        CourseCard,
    }
}
</script>

<template>
    <main>
        <div class="main">
            <aside class="left">
                <div class="dashboardHome">
                    <div class="dashboard">
                        <img :src="dashboard" alt="">
                    </div>
                    <div class="home">
                        <router-link to="home">
                            <img :src="home" alt="">
                        </router-link>

                    </div>
                </div>
            </aside>

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
                        <button class="etudiant">Etudiant</button>
                        <button class="prof">Professeur</button>
                    </div>

                    <div class="courses-cards-container">
                        <CourseCard />
                        
                    </div>


                </div>
            </aside>

            <div class="center-container">

                <Userinfo />

            </div>
        </div>
    </main>

</template>

<style scoped>
main .main {
    height: 90vh;
    width: 90vw;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    text-align: center;
    margin: 50px auto;
    border-radius: 3em;
}

main .main .left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 10vw;
    height: 100%;
    background-color: rgb(253, 227, 227);
    border-radius: 3em 0em 0em 3em;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

main .main .right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 20vw;
    height: 100%;
    background-color: rgb(221, 222, 233);
    border-radius: 0px 3em 3em 0px;
    box-shadow: rgba(185, 185, 236, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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

.left .dashboardHome {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.left .dashboardHome .home img {
    width: 30px;
    height: 30px;
    margin-left: 50px;
    cursor: pointer;
}

.left .dashboardHome .dashboard img {
    margin-right: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.formationsList {
    margin-top: 20px;
}

.formationsList .roles {
    display: flex;
    justify-content: center;
    align-items: center;

}

.formationsList .roles button {
    list-style: none;
    margin-right: 30px;
    width: 10em;
    padding: 5px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

}

.formationsList .roles .etudiant {
    background-color: red;
    color: white;

}

.formationsList .roles .prof {
    background-color: rgb(26, 66, 242);
    color: white;

}

.formationsList h4 {
    margin-bottom: 0.5rem;
}
</style>