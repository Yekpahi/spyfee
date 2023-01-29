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
       <div class="biographie">
        <h2>Biographie</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos dolor esse amet expedita labore vel quisquam sed. Eligendi facilis laborum quibusdam at 
            soluta doloribus, iste officia cum nam atque!</p>
            <h2>Biographie</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos dolor esse amet expedita labore vel quisquam sed. Eligendi facilis laborum quibusdam at 
            soluta doloribus, iste officia cum nam atque!</p>
            <h2>Biographie</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos dolor esse amet expedita labore vel quisquam sed. Eligendi facilis laborum quibusdam at 
            soluta doloribus, iste officia cum nam atque!</p>  
            <h2>Biographie</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos dolor esse amet expedita labore vel quisquam sed. Eligendi facilis laborum quibusdam at 
            soluta doloribus, iste officia cum nam atque!</p>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos dolor esse amet expedita labore vel quisquam sed. Eligendi facilis laborum quibusdam at 
            soluta doloribus, iste officia cum nam atque!</p>
            <h2>Biographie</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos dolor esse amet expedita labore vel quisquam sed. Eligendi facilis laborum quibusdam at 
            soluta doloribus, iste officia cum nam atque!</p>
            <h2>Biographie</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos dolor esse amet expedita labore vel quisquam sed. Eligendi facilis laborum quibusdam at 
            soluta doloribus, iste officia cum nam atque!</p>  
            <h2>Biographie</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos dolor esse amet expedita labore vel quisquam sed. Eligendi facilis laborum quibusdam at 
            soluta doloribus, iste officia cum nam atque!</p>     
       </div>
    </div>
</template>

<style scoped>
.usermain {
    width:40vw;
    position: relative;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;
}
.usermain .profile .cover {
    width: 100%;
    height:40vh;
    border-radius: 20px;
    
}

.usermain .profile .myprofile {
position: absolute;
left: 0;
bottom: -70px;
width: 120px;
height: 120px;
border-radius: 50%;
box-shadow: rgba(4, 137, 252, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
border: 4px solid rgb(228, 215, 215);
}
.name-role {
    margin: 0;
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
left:100px;
bottom: -50px;
}

.usermain .biographie {
    margin-top: 70px;
    color: aliceblue;
}
</style>