<template>
<div class="container">
    <SideBar></SideBar>
    <div class="content">
        <router-view></router-view>
    </div>
</div>
</template>

<style>
.container {
    display: flex;
}
.container {
    flex: 1;
    padding: 20px;
}
</style>    

<script setup>
import SideBar from '../components/SideBar.vue'
</script>