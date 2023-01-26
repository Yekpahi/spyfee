<script>
import Cover from "@/assets/belle.jpg"
import Profile from "@/assets/belle2.jpg"
export default {
    data() {
        return {
            cover : Cover,
            profile : Profile
        }
    },
}
</script>
<template>
    <div class ="usermain">
       <div class="profile">
        <img class = "cover" :src="cover" alt="">
        <img class ="myprofile" :src="profile" alt="">
        <ul class="name-role">
            <li class="liname">Natacha Roller</li>
            <li class="role">Etudiante</li>
        </ul>
       </div>
    </div>
</template>

<style scoped>
.usermain {
    width:1000px;
    position: relative;
    left: 250px;
    padding: 10px;
    background-color: aqua;
    
}
.usermain .profile {
    position: relative;
}

.usermain .profile .cover {
    width: 100%;
    height:400px;
}

.usermain .profile .myprofile {
position: absolute;
left: 0;
bottom: 0;
width: 150px;
height: 150px;
border-radius: 50%;
}
</style>