<script>
import Logo from "../assets/logo.png"


export default {
    data: function () {
        return {
            logo: Logo
        }
    }
}
</script>

<template>
    <header>
        <div class="header-container">
            <img :src="logo" alt="" />
            <ul>
                <li>Web Development | </li>
                <li>C++ courses | </li>
                <li>Python language | </li>
                <li>VueJs</li>
                <li>React framework | </li>
                <li>Django</li>
                <li>Computer Science | </li>
                <li>Spider and communication | </li>
                <li>JavaScript language | </li>
                <li>C Program | </li>
                <li>Devops | </li>
                <li>Others program</li>

            </ul>
        </div>
    </header>
</template>

<style scoped>
header {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
 
}
header .header-container {
    display: flex;
    justify-content:center;
    
}
header .header-container img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid red;
    margin: 10px;
}

header .header-container ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 20px;
    padding: 15px;
    border-bottom: 2px solid rgb(70, 64, 64);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

header .header-container ul li {
    margin-right: 10px;
}
</style>