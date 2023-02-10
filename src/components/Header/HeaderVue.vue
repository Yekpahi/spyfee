<script>
import Logo from "@/assets/logo.png"
import Home from "@/assets/home.png"
import Signin from "@/assets/signin.png"
import Signup from "@/assets/signup.png"
import Gallery from "@/assets/gallery.png"
import Notification from "@/assets/notification.png"
import UserProfile from "@/assets/userprofile.png"
import AboutIcon from "@/assets/about.png"
import {RouterLink} from "vue-router"

export default {
    data: function () {
        return {
            logo: Logo,
            home: Home,
            signin:Signin,
            signup : Signup,
            gallery: Gallery,
            notification : Notification,
            userprofile : UserProfile,
            abouticon : AboutIcon
        }
    }
}
</script>

<template>
    <header>
        <nav class="header-container">
            <ul>
                <li class="header-left"> <img :src="logo" alt="" class="logo"/></li>
                <li class="header-left"><RouterLink to="/"><img :src="home" alt="" class="home"/></RouterLink></li>
                <li class="header-right"><RouterLink to="forum"><font-awesome-icon icon="fa-sharp fa-solid fa-users" /> <span>Forum</span></RouterLink></li>
                <li class="header-right"><fa icon="fa-solid fa-right-to-bracket" /></li>
                <li class="header-right"><img :src="signup" alt="" class="signup"/></li>
                <li class="header-right"><img :src="notification" alt="" class="notification"/></li>
                <li class="header-right"><img :src="gallery" alt="" class="gallery"/></li>
                <li class="header-right"><RouterLink to="user"><img :src="userprofile" alt="" class="userprofile"/></RouterLink></li>
                <li class="header-right"><RouterLink to="about"></RouterLink></li>
            
            </ul>
        </nav>
    </header>
</template>

<style scoped>A

header .header-container {
position: relative;
top: 20px;
}
header .header-container ul {
    position: relative;
    list-style: none;
    display: flex;
    justify-content:end;
    align-items: center;

}



header .header-container ul .header-left {
    transform: translateX(-1000px);
}
header .header-container ul .header-left .logo {
    width: 100px;

}
header .header-container ul .header-left .home {
    width: 30px;
  
}

header .header-container ul .header-right {
    transform: translateX(-100px);
}
header .header-container ul .header-right img {
    width: 30px;
    margin: 30px;
}


</style>