<template>
    
  <main>
    <section>
       <p>
        {{ product.title }}
       </p>
    </section>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';

const route = useRoute()

const id = route.params

let product = ref()
onBeforeMount(async () => {
    await fetch(`https://fakestoreapi.com/products/${id.id}`)
        .then(response => response.json())
        .then(item => product.value = item)
})

</script>

<style scoped lang="scss" src="./product.scss" />

