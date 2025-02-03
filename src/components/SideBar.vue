<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registrarStore.nombre }}</h3>
        <h3>Email: {{ registrarStore.email.value }}</h3>
        <ul>
        <li><RouterLink to="/Contador">Contador</RouterLink></li>
        <li><RouterLink to="/ListaDeTareas">Lista de Tareas</RouterLink></li>
        <li><RouterLink to="/registrar">Registrar</RouterLink></li>
    </ul>
    </div>

</template>

<script setup>
import { useRegistrarStore } from '../modules/registro/stores/RegistrarStore.js'

const registrarStore = useRegistrarStore();

</script>

<style>
.sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;  
}

</style>