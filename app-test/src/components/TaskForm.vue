<template>
  <form @submit.prevent="submitTask" class="mb-8 flex space-x-4">
    <input
      v-model="task.name"
      placeholder="Nom de la tâche"
      class="w-1/3 p-3 border rounded-md shadow-lg"
      required
    />
    <select v-model="task.priority" class="w-1/4 p-3 border rounded-md shadow-lg">
      <option value="">Choisir une priorité</option>
      <option value="basse">Basse</option>
      <option value="moyenne">Moyenne</option>
      <option value="haute">Haute</option>
    </select>
    <input type="date" v-model="task.dueDate" class="w-1/4 p-3 border rounded-md shadow-lg" />
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
        dueDate: ''
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
      this.$emit(this.isEditMode ? 'update-task' : 'add-task', this.$props.task);
      this.taskData = { name: '', priority: '', dueDate: '' }; // Réinitialiser le formulaire
    }
  }
};
</script>
