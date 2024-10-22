<template>
  <div class="bg-gradient-to-r from-stone-900 via-neutral-700 to-gray-900 min-h-screen">
    <Navbar />
    <br>
    <router-view />
    <!-- Formulaire de création de tâche -->
    <TaskForm @add-task="addTask" />

    

    <br>
    
    <!-- Tableau des tâches -->
    <TaskTable :tasks="tasks" @edit-task="editTask" @remove-task="removeTask" />

    <!-- Formulaire de modification de tâche -->
    <TaskForm v-if="editingTask !== null" :task="editTaskData" @update-task="updateTask" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import TaskForm from '@/components/TaskForm.vue';
import TaskTable from '@/components/TaskTable.vue';

export default {
  components: {
    Navbar,
    TaskForm,
    TaskTable,
  },
  data() {
    return {
      tasks: [],
      editingTask: null, // Index de la tâche en cours de modification
      editTaskData: {
        name: '',
        priority: '',
        dueDate: ''
      }
    };
  },
  methods: {
    addTask(newTask) {
      this.tasks.push(newTask);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.editingTask = index;
      this.editTaskData = { ...this.tasks[index] };
    },
    updateTask(updatedTask) {
      this.$set(this.tasks, this.editingTask, updatedTask);
      this.editingTask = null;
    },
  }
};
</script>
<style>
.basse { color: rgb(228, 25, 25); }
.moyenne { color: rgb(255, 166, 0); }
.haute { color: rgb(61, 180, 1); }
</style>
