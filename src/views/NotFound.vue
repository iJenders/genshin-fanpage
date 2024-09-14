<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();

const xd = ref(route.path)
</script>

<template>
    <h1>404</h1>
    <h2>Page not found: <br>{{ xd }}</h2>
</template>