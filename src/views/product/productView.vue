<template>
  <main v-if="product">
    <section >
      <p>
        {{ product.title }}
      </p>
      <img :src="product.image" alt="Teste">
    </section>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute()
const id = route.params

let product = ref('')

onMounted(async () => {
    await fetch(`https://fakestoreapi.com/products/${id.id}`)
        .then(response => response.json())
        .then(item => product.value = item)
})

</script>

<style scoped lang="scss" src="./product.scss" />

