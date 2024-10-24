<template>
  <form @submit.prevent="submitTask" class="mb-8 flex space-x-4">
    <input
      v-model="taskData.name"
      placeholder="Nom de la tâche"
      class="w-1/3 p-3 border rounded-md shadow-lg"
      required
    />
    <select v-model="taskData.priority" class="w-1/4 p-3 border rounded-md shadow-lg">
      <option value="">Choisir une priorité</option>
      <option value="basse">Basse</option>
      <option value="moyenne">Moyenne</option>
      <option value="haute">Haute</option>
    </select>
    <input type="date" v-model="taskData.dueDate" class="w-1/4 p-3 border rounded-md shadow-lg" />
    <input type="time" v-model="taskData.dueTime" class="w-1/4 p-3 border rounded-md shadow-lg" /> <!-- Ajout du champ heure -->
    <button type="submit" class="w-1/6 bg-gray-600 text-white p-3 rounded-md shadow-lg">
      {{ isEditMode ? 'Modifier' : 'Ajouter' }}
    </button>
  </form>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({
        name: '',
        priority: '',
        dueDate: '',
        dueTime: '' // Ajout de l'heure d'exécution
      })
    }
  },
  data() {
    return {
      taskData: { ...this.task },
      isEditMode: false,
    };
  },
  watch: {
    task: {
      immediate: true,
      handler(newTask) {
        this.taskData = { ...newTask };
        this.isEditMode = !!newTask.name;
      }
    }
  },
  methods: {
    submitTask() {
      // Combiner la date et l'heure en un seul objet Date
      if (this.taskData.dueDate && this.taskData.dueTime) {
        const dateTime = new Date(`${this.taskData.dueDate}T${this.taskData.dueTime}`);
        this.taskData.dueDate = dateTime; // On modifie l'objet taskData pour avoir une seule date complète
      }

      // Émettre l'événement d'ajout ou de mise à jour avec les nouvelles données
      this.$emit(this.isEditMode ? 'update-task' : 'add-task', { ...this.taskData });
      this.taskData = { name: '', priority: '', dueDate: '', dueTime: '' }; // Réinitialiser le formulaire
    }
  }
};
</script>
