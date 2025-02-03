<template>
<div class="resultado">{{ props.resultado }}</div>
</template>

<script setup>

</script>
import {defineProps} from 'vue'
const props = defineProps(['resultado']);
<style scoped>
.resultado {
    background-color: aquamarine;
}
</style>