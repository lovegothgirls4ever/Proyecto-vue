<template>
 <div>
     <h2>Lista de Tareas</h2>
     <input type="text" v-model="NuevaTarea" @keyup.enter="addTarea">
     <ul>
         <li v-for="(tarea, index) in Tareas" :key="index">
             {{ tarea }}
             <button @click="borrarTarea(index)">Borrar</button>
         </li>
     </ul>
 </div>
</template> 

<script setup>
import { ref } from 'vue'
const tareas = ref([]);
const NuevaTarea = ref('');
const addTarea = () => {
    tareas.value.push(NuevaTarea.value);
    NuevaTarea.value = '';
}
const borrarTarea = (index) => {
    tareas.value.splice(index, 1);
}
</script>

<style>

</style>