<template>
  <div class="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 min-h-screen">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue';
</script>
