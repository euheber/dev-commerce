<template>
    <main>
        <h1>Olá, mundo</h1>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';



onMounted(async () => {
    const data = await fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
})
</script>



<style lang="scss" scoped src="./home.scss"/>