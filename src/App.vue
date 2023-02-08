<template>
    <Header />
    <Login/>
    <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header/header.vue'
import Login from './components/login/login.vue'
</script>

<style scoped lang="scss" />


