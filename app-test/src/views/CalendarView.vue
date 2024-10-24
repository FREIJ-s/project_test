<template>
  <div class="flex space-y-4">
    <vue-cal 
      :events="calendarEvents"
      :disable-views="['years', 'months']"
      view="week"
      style="height: 600px;"
      :time-from="8 * 60" 
      :time-to="20 * 60"   
      hide-weekends
      editable-events
    />
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/taskstore'; // Import du store Pinia
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'; // Import CSS pour VueCal
import { computed, onMounted } from 'vue'; // Import de computed et onMounted pour réactivité

export default {
  components: {
    VueCal,
  },
  setup() {
    const taskStore = useTaskStore(); // Initialisation du store

    // Calcul des événements à partir des tâches avec conversion de la date
    const calendarEvents = computed(() =>
      taskStore.tasks.map(task => ({
        start: new Date(task.dueDate), // Assure-toi que dueDate est bien un objet Date
        end: new Date(task.dueDate),
        title: task.name,
        allDay: task.allDay || false,
      }))
    );

    // Vérification des rappels (facultatif, déjà dans ton code)
    const sendReminder = (event) => { /* Code existant pour les rappels */ };
    const checkReminders = (events) => { /* Code existant pour vérifier les rappels */ };

    onMounted(() => {
      checkReminders(calendarEvents.value);
    });

    return {
      calendarEvents,
    };
  },
};
</script>
