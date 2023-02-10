<script>
import UserPic from '@/assets/profile.jpg'
import Header from '@/components/header/HeaderVue.vue'
export default {
    components : {
        Header
    },
    data() {
        return {
            userpic: UserPic
        }
    },
}
</script>

<template>
    <Header/>
    <div class="container-public-forum">
        <!-- Post 1-->
        <div class="postsList">


            <img :src="userpic" alt="">
            ​<details class="postTitledetails">

                <summary class="postTitle">Lorem ipsum dolor sit amet consectetur ...</summary>
                <div class="postDetails">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestiae laboriosam? Dignissimos
                        maxime eos omnis, eligendi laboriosam facere magnam quam assumenda ullam aliquam dolorem
                        quisquam
                        doloremque impedit tempora dolores vitae.</p>
                </div>
            </details>

            <div class="likeResponse">
                <p class="likes"><font-awesome-icon icon="fa-solid fa-heart" /><span>100.5k</span></p>
                <div class="responses">​<details>
                        <summary class="numResponse">100 Réponses</summary>
                        <div class="postResponseContent">Epcot is a theme park at Walt Disney World Resort featuring
                            exciting attractions,
                            international pavilions, award-winning fireworks and seasonal special events.</div>
                    </details>
                </div>
            </div>
        </div>
        <!-- Fin Post 1-->

        <!-- Post 2-->
        <div class="postsList">
            <img :src="userpic" alt="">
            ​<details class="postTitledetails">

                <summary class="postTitle">Lorem ipsum dolor sit amet consectetur ...</summary>
                <div class="postDetails">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestiae laboriosam? Dignissimos
                        maxime eos omnis, eligendi laboriosam facere magnam quam assumenda ullam aliquam dolorem
                        quisquam
                        doloremque impedit tempora dolores vitae.</p>
                </div>
            </details>

            <div class="likeResponse">
                <p class="likes"><font-awesome-icon icon="fa-solid fa-heart" /><span>100.5k</span></p>
                <div class="responses">​<details>
                        <summary class="numResponse">100 Réponses</summary>
                        <div class="postResponseContent">Epcot is a theme park at Walt Disney World Resort featuring
                            exciting attractions,
                            international pavilions, award-winning fireworks and seasonal special events.</div>
                    </details>
                </div>
            </div>
        </div>
        <!-- Fin Post 2-->

           <!-- Post 3-->
           <div class="postsList">
            <img :src="userpic" alt="">
            ​<details class="postTitledetails">

                <summary class="postTitle">Lorem ipsum dolor sit amet consectetur ...</summary>
                <div class="postDetails">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestiae laboriosam? Dignissimos
                        maxime eos omnis, eligendi laboriosam facere magnam quam assumenda ullam aliquam dolorem
                        quisquam
                        doloremque impedit tempora dolores vitae.</p>
                </div>
            </details>

            <div class="likeResponse">
                <p class="likes"><font-awesome-icon icon="fa-solid fa-heart" /><span>100.5k</span></p>
                <div class="responses">​<details>
                        <summary class="numResponse">100 Réponses</summary>
                        <div class="postResponseContent">Epcot is a theme park at Walt Disney World Resort featuring
                            exciting attractions,
                            international pavilions, award-winning fireworks and seasonal special events.</div>
                    </details>
                </div>
            </div>
        </div>
        <!-- Fin Post 3-->

           <!-- Post 4-->
           <div class="postsList">
            <img :src="userpic" alt="">
            ​<details class="postTitledetails">

                <summary class="postTitle">Lorem ipsum dolor sit amet consectetur ...</summary>
                <div class="postDetails">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestiae laboriosam? Dignissimos
                        maxime eos omnis, eligendi laboriosam facere magnam quam assumenda ullam aliquam dolorem
                        quisquam
                        doloremque impedit tempora dolores vitae.</p>
                </div>
            </details>

            <div class="likeResponse">
                <p class="likes"><font-awesome-icon icon="fa-solid fa-heart" /><span>100.5k</span></p>
                <div class="responses">​<details>
                        <summary class="numResponse">100 Réponses</summary>
                        <div class="postResponseContent">Epcot is a theme park at Walt Disney World Resort featuring
                            exciting attractions,
                            international pavilions, award-winning fireworks and seasonal special events.</div>
                    </details>
                </div>
            </div>
        </div>
        <!-- Fin Post 4-->

           <!-- Post 5-->
           <div class="postsList">
            <img :src="userpic" alt="">
            ​<details class="postTitledetails">

                <summary class="postTitle">Lorem ipsum dolor sit amet consectetur ...</summary>
                <div class="postDetails">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, molestiae laboriosam? Dignissimos
                        maxime eos omnis, eligendi laboriosam facere magnam quam assumenda ullam aliquam dolorem
                        quisquam
                        doloremque impedit tempora dolores vitae.</p>
                </div>
            </details>

            <div class="likeResponse">
                <p class="likes"><font-awesome-icon icon="fa-solid fa-heart" /><span>100.5k</span></p>
                <div class="responses">​<details>
                        <summary class="numResponse">100 Réponses</summary>
                        <div class="postResponseContent">Epcot is a theme park at Walt Disney World Resort featuring
                            exciting attractions,
                            international pavilions, award-winning fireworks and seasonal special events.</div>
                    </details>
                </div>
            </div>
        </div>
        <!-- Fin Post 5-->
    </div>
</template>

<style scoped>
.container-public-forum {
    margin: 0 auto;
    width: 33%;
    background-color: rgb(255, 255, 255);

}



.postsList {
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    border-left: 1px solid white;
    background-color: aqua;
    margin: 5px;
   
}

.postTitledetails {
    transform: translateY(-40px);
    font-size: 1.2em;
    margin-left: 30px;
    margin-right: 10px;
}

.postTitledetails .postTitle {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 1px solid white;
    padding: 5px;
    background-color: antiquewhite;
}

.postsList img {
    position: relative;
    top: 10px;
    height: 45px;
    width: 45px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 50%;
    transform: translateX(-25px);
    border: 1px solid white;
    box-shadow: rgba(252, 252, 255, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.postDetails {
    padding: 20px;
    background-color: rgb(243, 158, 47);
    border-bottom: 1px solid white;
}

.likeResponse {
    width: 100%;
    position: relative;
    top: -35px;
}

.likeResponse .responses {
    width: 75%;
    position: relative;
    top: -50px;
    left: 22%;
}

.likeResponse .responses .numResponse {
    color: rgb(45, 45, 40);
}

.likeResponse .responses .postResponseContent {
    background-color: rgb(83, 234, 204);
    padding: 10px;
}

.likeResponse .likes {
    margin-left: 35px;
}
</style>