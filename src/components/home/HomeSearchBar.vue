<script>
import SearchImage from "@/assets/search.png"


export default {
    data: function () {
        return {
            search: SearchImage
        }
    }
}
</script>

<template>
    <div class="search">
        <input type="text" placeholder="Rechercher">
        <router-link to="search"><img class="searchLoop" :src="search" alt=""></router-link>
    </div>
</template>

<style scoped>
.search {
    width: 100%;
    position: relative;
    top: 350px;
}
.search input {
    width: 100%;
    height: 40px;
    margin-top: 40px;
    border-color: aqua;
    border-radius: 20px;
    padding-left: 60px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

}

.searchLoop {
    width: 20px;
    height: 20px;
    opacity: 0.4;
    bottom: 30px;
    left: 10px;
}
</style>