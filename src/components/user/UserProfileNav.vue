<script>
export default {
    
}
</script>

<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>Media</li>
            <li>Favoris</li>
            <li>Forum</li>
        </ul>
    </nav>
</template>
<style scoped>

nav {
background-color: rgb(0, 0, 0);
width: 100%;
border: 2px solid rgb(63, 58, 58);
}
nav ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
}

nav ul li {
    margin: 5px;
    color: white;
}

</style>