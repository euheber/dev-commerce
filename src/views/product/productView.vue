<template>
    
  <main>
    <section>
       
     <p>
        {{ product.image }}
     </p>

     <img :src="product.image" alt="teste">
    </section>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref,onBeforeMount } from 'vue';

const rota = useRoute()
const param = rota.params


let product = ref()

onBeforeMount(async () => {

    await fetch(`https://fakestoreapi.com/products/${param.id}`)
        .then(response => response.json())
        .then(item => product.value = item)
})

</script>

<style scoped lang="scss" src="./product.scss" />

