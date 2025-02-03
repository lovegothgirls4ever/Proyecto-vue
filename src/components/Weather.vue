<script setup>
import { useWeather } from '../Composables/useWeather.js' 
import {onMounted} from 'vue'
import { useWeatherStore } from '../stores/WeatherStore.js';    

const weatherStore = useWeatherStore();
onMounted(() => {
    useWeather();
})
</script>

<template>
<h3>La temperatura actual es de: {{ weatherStore.temperatura }} °</h3>
</template>

<style scoped>

</style>