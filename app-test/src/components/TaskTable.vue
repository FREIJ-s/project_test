<template>
    <table class="table-fixed w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-600 text-white">
          <th class="w-1/3 border border-gray-300 p-2">Nom de la tâche</th>
          <th class="w-1/6 border border-gray-300 p-2">Priorité</th>
          <th class="w-1/6 border border-gray-300 p-2">Date limite</th>
          <th class="w-1/6 border border-gray-300 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" :index="index" @edit="editTask" @remove="removeTask" />
      </tbody>
    </table>
  </template>
  
  <script>
  import TaskItem from '@/components/TaskItem.vue';
  
  export default {
    components: {
      TaskItem,
    },
    props: {
      tasks: Array,
    },
    methods: {
      editTask(index) {
        this.$emit('edit-task', index);
      },
      removeTask(index) {
        this.$emit('remove-task', index);
      }
    }
  };
  </script>
  