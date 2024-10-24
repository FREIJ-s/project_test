import { defineStore } from 'pinia'; 

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [], // Initialise avec un tableau vide
    editingTask: null,
    editTaskData: {
      name: '',
      priority: '',
      dueDate: '',
      dueTime: '',
      status: '',
    },
    currentUser: null, // Utilisateur actuellement connecté
  }),
  actions: {
    // Charger les tâches depuis le localStorage et convertir les dates en objets Date
    loadTasksFromLocalStorage() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks).map(task => ({
          ...task,
          dueDate: new Date(task.dueDate), // Convertir dueDate en objet Date
        }));
      }
    },

    addTask(task) {
      const taskDate = task.dueTime 
        ? new Date(`${task.dueDate}T${task.dueTime}`) 
        : new Date(task.dueDate);

      const newTask = {
        ...task,
        dueDate: taskDate, // Utiliser l'objet Date complet
        status: 'en cours',
      };

      this.tasks.push(newTask);
      this.saveTasksToLocalStorage(); // Sauvegarder les tâches dans localStorage après l'ajout
    },

    removeTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage(); // Sauvegarder les tâches après suppression
    },

    updateTask() {
      if (this.editTaskData.name && this.editTaskData.priority && this.editTaskData.dueDate) {
        this.tasks[this.editingTask] = { ...this.editTaskData };
        this.editingTask = null;
        this.saveTasksToLocalStorage(); // Sauvegarder après mise à jour
      }
    },

    updateTaskStatus(task) {
      const taskIndex = this.tasks.findIndex(t => t.name === task.name);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].status = task.status;
        this.saveTasksToLocalStorage();
      }
    },

    // Sauvegarder les tâches dans localStorage
    saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },

    // Gestion de la session utilisateur
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
  },

  // Appel de l'action pour charger les tâches lors de la création du store
  created() {
    this.loadTasksFromLocalStorage();
  },
});
