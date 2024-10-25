import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    editingTask: null,
    editTaskData: {
      name: '',
      priority: '',
      dueDate: '',
      dueTime: '',
      status: '',
    },
    currentUser: null,
  }),
  actions: {
    loadTasksFromLocalStorage() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks).map(task => ({
          ...task,
          dueDate: new Date(task.dueDate),
        }));
      }
    },

    addTask(task) {
      const taskDate = task.dueTime
        ? new Date(`${task.dueDate}T${task.dueTime}`)
        : new Date(task.dueDate);

      const newTask = {
        ...task,
        dueDate: taskDate,
        status: 'en cours',
      };

      this.tasks.push(newTask);
      this.saveTasksToLocalStorage();
    },

    removeTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage();
    },

    // Charger la tâche en cours de modification
    editTask(index) {
      this.editingTask = index;
      this.editTaskData = { ...this.tasks[index] };
    },

    // Mettre à jour une tâche et sauvegarder dans le localStorage
    updateTask() {
      if (this.editingTask !== null) {
        this.tasks[this.editingTask] = { ...this.editTaskData };
        this.editingTask = null;
        this.editTaskData = {
          name: '',
          priority: '',
          dueDate: '',
          dueTime: '',
          status: '',
        };
        this.saveTasksToLocalStorage();
      }
    },

    cancelEdit() {
      this.editingTask = null;
      this.editTaskData = {
        name: '',
        priority: '',
        dueDate: '',
        dueTime: '',
        status: '',
      };
    },

    updateTaskStatus(task) {
      const taskIndex = this.tasks.findIndex(t => t.name === task.name);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].status = task.status;
        this.saveTasksToLocalStorage();
      }
    },

    login(user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
    },

    logout() {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
    },

    restoreSession() {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    },

    saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
  },

  created() {
    this.loadTasksFromLocalStorage();
  },
});
