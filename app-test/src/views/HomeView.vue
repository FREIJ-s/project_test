<template>
    <div class="p-8 bg-gray-100 min-h-screen overflow-y-auto">
      <div v-if="store.currentUser" class="mb-6 p-4 bg-white rounded-lg shadow-md">
        <img :src="store.currentUser.photo" alt="Photo de profil" v-if="store.currentUser.photo" class="w-20 h-20 rounded-full object-cover mb-4" />
        <button @click="logout" class="mt-4 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">Se déconnecter</button>
      </div>
      <TaskForm @add-task="addTask" />
      <TaskTable :tasks="tasks" @edit-task="editTask" @remove-task="removeTask" />
      <TaskForm v-if="store.editingTask !== null" :task="store.editTaskData" @update-task="updateTask" />
    </div>
  </template>
  
  <script setup>
  import TaskForm from '@/components/TaskForm.vue';
  import TaskTable from '@/components/TaskTable.vue';
  import { useTaskStore } from '@/stores/taskstore';
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const store = useTaskStore();
  const { tasks, addTask, removeTask, editTask, updateTask } = store;
  
  onMounted(() => {
    store.restoreSession(); // Restaurer la session utilisateur si elle existe
    if (!store.currentUser) {
      router.push('/LoginView'); // Rediriger si l'utilisateur n'est pas connecté
    }
  });
  
  const logout = () => {
    store.logout();
    router.push('/LoginView'); // Rediriger vers la page de connexion
  };
  </script>
  