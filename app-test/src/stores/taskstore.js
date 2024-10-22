import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
state: () => ({
    tasks: [],
    editingTask: null,
    editTaskData: {
    name: '',
    priority: '',
    dueDate: ''
    },
}),
actions: {
    addTask(task) {
    this.tasks.push({ ...task });
    },
    removeTask(index) {
    this.tasks.splice(index, 1);
    },
    editTask(index) {
    this.editingTask = index;
    this.editTaskData = { ...this.tasks[index] };
    },
    updateTask() {
    if (this.editTaskData.name && this.editTaskData.priority && this.editTaskData.dueDate) {
        console.log(this.editTaskData, this.tasks);
        this.tasks[this.editingTask] = { ...this.editTaskData };
        console.log(this.editTaskData, this.tasks);
        this.editingTask = null;
    }
    },
    cancelEdit() {
    this.editingTask = null;
    }
}
});
