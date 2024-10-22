<template>
  <div class="flex space-y-4">
    <vue-cal 
      :events="calendarEvents"
      :disable-views="['years', 'months']"
      view="week"
      style="height: 600px;"
    />
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/taskStore'; // Import du store Pinia
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'; // Import CSS pour VueCal
import { computed } from 'vue'; // Import de computed pour réactivité

export default {
  components: {
    VueCal,
  },
  setup() {
    const taskStore = useTaskStore(); // Initialisation du store

    // Calcul des événements à partir des tâches
    const calendarEvents = computed(() =>
      taskStore.tasks.map(task => ({
        start: new Date(task.dueDate),
        end: new Date(task.dueDate),
        title: task.name,
      }))
    );

    return {
      calendarEvents,
    };
  },
};
</script>
