<template>
  <div class="bg-gradient-to-r from-stone-500 via-neutral-200 to-gray-500 min-h-screen">
    <Navbar />
     <RouterView />
  </div>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue';
</script>
