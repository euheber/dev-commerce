<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> 
      <RouterLink to="/about">Sobre</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped lang="scss" src="./header.scss" />
