<template>
    <Header />
    <RouterView />
<Footer />
</template>

<script setup>

import { RouterView } from 'vue-router'
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'

</script>

<style scoped lang="scss"/>

