<template>
  <div class="flex space-y-4">
    <h1>Vue Calendrier des Tâches</h1>
    <vue-cal 
      :events="calendarEvents"
      :disable-views="['years', 'months']"
      view="week"
      style="height: 600px;"
    />
  </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'; // Import CSS for VueCal

export default {
  components: {
    VueCal,
  },
  data() {
    return {
      calendarEvents: this.$store.tasks.map(task => ({
        start: new Date(task.dueDate),
        end: new Date(task.dueDate),
        title: task.name,
      })),
    };
  },
  computed: {
    tasks() {
      return this.$store.tasks;
    },
  },
};
</script>
