<script>
import Sad from "@/assets/sad.png"

export default {
    data: function () {
        return {
            sad: Sad,
            inforamtion:"Gretting, Please Wait...."
    
        }
    },
    methods: {

         redirectMe() {
            this.$router.push({name : 'home'});
         }
      },
      created(){
      setTimeout( () => this.$router.push({ path: '/home'}), 5000);

    }
}
</script>
<template>
    <div class="container">
        <img :src="sad" alt="">
       <p>The page you are searching doesn't exist!!</p>
       <button @click="redirectMe()">Revenir à la page d'accueil</button>
       <p>{{ inforamtion }}</p>
    </div>
</template>

<style scoped>
.container {
    margin:100px auto;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container p {
    font-weight: bold;
    color: red;
    font-size: 2em;
    margin-bottom: 2rem;

}
.container button {
    border: none;
    font-size: 1.5em;
    background-color: rgb(95, 84, 213);
    color: aliceblue;
    border-radius: 5px;
    padding: 1rem;
    cursor: pointer;
}
</style>