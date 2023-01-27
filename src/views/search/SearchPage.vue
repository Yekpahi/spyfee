<script>
import Header from '@/components/HeaderVue.vue'
import SearchCard from '@/components/searchpage/SearchCard.vue'
import FilterCard from '@/components/searchpage/FilterCard.vue'

import Search from '@/assets/search.png'
import Filter from '@/assets/filter.png'

export default {
    components: {
        Header,
        SearchCard,
        FilterCard
    },
    data() {
        return {
            search: Search,
            filter: Filter,
            isHidden: false
        }
    },
}
</script>

<template>
    <Header />
    <div class="search-main">
        <div class="searchresultinfo">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, cupiditate!</p>
        </div>
        <div class="searchInput">
            <input type="text" placeholder="Rechercher ...">
            <img :src="search" alt="">
        </div>

        <div class="searchCard-cards-container">
            <div class="resultat">
                <p class="resulttext">Nous avons trouvé 50 000 résultats </p>
                <div class="filter">
                    <img :src="filter" v-on:click="isHidden = !isHidden" alt=""> 
                    <p>Filtrer</p>
                </div>
               
            </div>
            <h1 v-if="isHidden"> <FilterCard/> </h1>

            <SearchCard />
        </div>

    </div>
</template>

<style scoped>
.search-main {
    margin: 0 auto;
    width: 80%;
    background-color: rgb(255, 255, 255);
    padding: 20px;
}

.search-main .searchCard-cards-container {
    margin: 20px auto;
    background-color: rgb(255, 255, 255);
    width: 50%;
}

.search-main .searchInput {
    width: 80%;
    margin: 0 auto;
    position: relative;

}

.search-main .searchInput input {
    width: 100%;
    padding-left: 50px;
    height: 2.5rem;
    border: none;
    border-radius: 3rem;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

}

.search-main .searchInput img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top: 8px;
    opacity: 0.4;

}

.searchCard-cards-container .resultat {
display: flex;
justify-content:space-between;
}
.searchCard-cards-container .resultat .resulttext {
    font-weight: bold;
}
.searchCard-cards-container .resultat .filter {
    display: flex;
    justify-content:center;
    align-items: center;
}
.searchCard-cards-container .resultat .filter img {
    margin-right: 10px;
    width: 30px;
}

.search-main .searchresultinfo {
    background-color: antiquewhite;
    margin: 0 auto;
    margin-top: 2em;
    margin-bottom: 2em;
    width: 50%;
    padding: 20px;
}
</style>