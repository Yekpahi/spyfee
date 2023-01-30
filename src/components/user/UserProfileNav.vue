<script>
export default {
    
}
</script>

<template>
    <nav>
        <ul>
            <li class="lileft"><font-awesome-icon icon="fa-solid fa-house-user" /></li>
            <li class="lileft"><font-awesome-icon icon="fa-solid fa-photo-film"/></li>
            <li class="liright"><font-awesome-icon icon="fa-solid fa-heart"/></li>
            <li class="liright"><font-awesome-icon icon="fa-solid fa-users-viewfinder" /></li>
        </ul>
    </nav>
</template>
<style scoped>

nav {
background-color: rgb(30, 31, 24);
width: 100%;
border: 1px solid white;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
margin-bottom: 20px;
}
nav ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
}

.lileft {
    transform: translateX(0);
}
.liright {
    transform: translateX(1050px);
}
nav ul li {
    margin-right: 15px;
    color: white;
}

</style>