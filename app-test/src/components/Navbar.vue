<template>
    <h1 class="text-2xl font-bold mb-6 text-center">Gestion des Tâches</h1>
    <nav class="bg-gradient-to-r from-gray-800 via-zinc-600 to-gray-800">
        
      <ul class="flex space-x-4 justify-center">
        <li><router-link to="/" class="text-white hover:underline">Accueil</router-link></li>
        <li><router-link to="/calendar" class="text-white hover:underline">Calendrier</router-link></li>
        <li><router-link to="/progress" class="text-white hover:underline">Suivi</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  nav {
    padding: 1rem;
  }
  </style>
  