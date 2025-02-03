<template>
<h3>Propiedades computadas</h3>
<input type="text" v-model="valor">
{{ valorcalculado }}
<ResultadoSection :resultado="valorcalculado"></ResultadoSection>

</template>

<script setup>
import { ref, computed } from 'vue'
import ResultadoSection from '../components/ResultadoSection.vue'
const valor = ref('');
const valorcalculado = computed(() => {
    return valor.value * 3;
})  
</script>

<style>

</style>