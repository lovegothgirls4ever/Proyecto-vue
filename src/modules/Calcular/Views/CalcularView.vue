<template>
<h3>Propiedades computadas</h3>
<input type="text" v-model="valor">
{{ valorcalculado }}
<ResultadoSection v-if="mostrarElemento" :resultado="valorcalculado"></ResultadoSection>
<div v-else-if="isNaN(valor)">Debe ser un numero para calcular</div>
<div v-else>Aqui no se mestura nada</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ResultadoSection from '../components/ResultadoSection.vue'
const valor = ref('');
const valorcalculado = computed(() => {
    return valor.value * 3;
})  

const mostrarElemento = computed(() => {
    return valor.value > 10;
})
</script>

<style>

</style>