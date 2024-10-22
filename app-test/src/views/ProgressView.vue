<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-6 text-center">Suivi de la Progression des Tâches</h1>
      <ul class="space-y-4">
        <li v-for="(task, index) in tasks" :key="index" class="bg-white p-4 rounded-lg shadow-md border-l-4"
            :class="task.status === 'terminé' ? 'border-green-500' : 'border-yellow-500'">
          
          <div class="flex justify-between items-center mb-2">
            <h2 class="text-lg font-semibold">{{ task.name }}</h2>
            <select v-model="task.status" class="border p-1 rounded bg-gray-50">
              <option value="en cours">En cours</option>
              <option value="terminé">Terminé</option>
            </select>
          </div>
  
          <div class="flex items-center justify-between">
            <progress :value="task.status === 'terminé' ? 100 : 50" max="100" class="w-full h-4 mr-2"></progress>
            <span class="text-sm" :class="task.status === 'terminé' ? 'text-green-500' : 'text-yellow-500'">
              {{ task.status === 'terminé' ? 'Terminé' : 'En cours' }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { name: 'Tâche 1', status: 'en cours' },
          { name: 'Tâche 2', status: 'terminé' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques si besoin */
  </style>
  