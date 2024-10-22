<template>
    <h1 class="text-2xl font-bold mb-6 text-center">Gestion des Tâches</h1>
    <nav class="bg-gradient-to-r from-gray-800 via-zinc-600 to-gray-800">
        
    <ul class="flex space-x-4 justify-center">

        <li><RouterLink to="/" class="text-white hover:underline">Accueil</RouterLink></li>
        <li><RouterLink to="/CalendarView" class="text-white hover:underline">Calendrier</RouterLink></li>
        <li><RouterLink to="/ProgressView" class="text-white hover:underline">Suivi</RouterLink></li>
    </ul>
    </nav>  
</template>

<script>

import { RouterLink } from 'vue-router';

export default {};
</script>

<style scoped>
nav {
    padding: 1rem;
}
</style>
