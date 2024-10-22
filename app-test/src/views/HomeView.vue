<template>
    <div class="p-8 bg-gray-100 min-h-screen overflow-y-auto">
        
    <Navbar />
    <router-view />
    <TaskForm @add-task="addTask" />
    <TaskTable :tasks="tasks" @edit-task="editTask" @remove-task="removeTask" />
    <TaskForm v-if="editingTask !== null" :task="editTaskData" @update-task="updateTask" />
    </div>
</template>

<!-- <script>
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
    console.log(this.$store);
    return {
        tasks: this.$store.tasks,
        editingTask: this.$store.editingTask,
        editTaskData: this.$store.editTaskData,
    };
    },
    methods: {
    addTask(task) {
        this.$store.addTask(task);
    },
    removeTask(index) {
        this.$store.removeTask(index);
    },
    editTask(index) {
        this.$store.editTask(index);
    },
    updateTask() {
        this.$store.updateTask();
    }
    }
};
</script> -->

<script setup>
import Navbar from '@/components/Navbar.vue';
import TaskForm from '@/components/TaskForm.vue';
import TaskTable from '@/components/TaskTable.vue';

import { useTaskStore } from '@/stores/taskStore';

const store = useTaskStore();

const tasks = store.tasks; 
const editTaskData = store.editTaskData;
const editingTask = store.editingTask;
const addTask = store.addTask;
const editTask = store.editTask;    
const removeTask = store.removeTask;
</script>