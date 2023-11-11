<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/copy">Второе окно</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  height: 110px;
  background-color: #253865;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
}

nav {
  display: flex;
  gap: 60px;
}

a {
  color: white;
  text-decoration: none;
  font-weight: 700;
}

</style>
