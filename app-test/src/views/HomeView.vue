<template>
    <div class="p-8 bg-gray-100 min-h-screen overflow-y-auto">
        <TaskForm @add-task="addTask" />
        <TaskTable :tasks="tasks" @edit-task="editTask" @remove-task="removeTask" />
        <TaskForm v-if="store.editingTask !== null" :task="store.editTaskData" @update-task="updateTask" />
    </div>
</template>
<script setup>
import TaskForm from '@/components/TaskForm.vue';
import TaskTable from '@/components/TaskTable.vue';
import { useTaskStore } from '@/stores/taskStore';
import { ref } from 'vue';

const store = useTaskStore();
const { tasks, addTask, removeTask, editTask, updateTask } = store;

const editingTask = ref(null);

</script>