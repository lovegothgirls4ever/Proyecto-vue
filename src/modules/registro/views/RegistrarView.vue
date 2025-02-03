<template>
<div>
    <h2>Formulario de Registro</h2>
    <form :validation-schema="schema" @submit="onSubmit">
        <div class="form">
        <label for="nombre">Nombre</label>
    <Field type="text" name="nombre" id="nombre" placeholder="ingrese su nombre" />
    <ErrorMessage name="nombre"></ErrorMessage>
</div>
<div class="form">
    <label for="email">Email</label>
    <Filed type="email" name="email" id="email" placeholder="Ingrese su email" />
    <ErrorMessage name="email"></ErrorMessage>
</div>
<div class="form">
    <button type="submit">Registrar</button>
</div>
</form>
</div>
</template>

<script setup>
import { form, Filed, errorMessage, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/ValidationSchema.js'

const onSubmit = () => {  
    console.log('Se ha enviado el formulario');
}
</script>

<style>
.from {
    margin-bottom: 10px;
}
</style>