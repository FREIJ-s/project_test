<template>
    <tr class="bg-white">
      <td class="border border-gray-300 p-2">{{ task.name }}</td>
      <td class="border border-gray-300 p-2 capitalize text-center">
        <span :class="task.priority">{{ task.priority }}</span>
      </td>
      <td class="border border-gray-300 p-2 text-center">{{ task.dueDate }}</td>
      <td class="border border-gray-300 p-2 text-center">
        <button @click="edit" class="bg-yellow-500 text-white p-2 rounded-md mr-2">Modifier</button>
        <button @click="remove" class="bg-red-600 text-white p-2 rounded-md">Supprimer</button>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: {
      task: Object,
      index: Number
    },
    methods: {
      edit() {
        this.$emit('edit', this.index);
      },
      remove() {
        this.$emit('remove', this.index);
      }
    }
  };
  </script>
  