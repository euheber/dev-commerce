<template>
    <main>
        <section>
                <h1>Carrosel</h1>
        </section>

        <section class="products">
            <productCard   v-for="product in products" :key="product.key" :product = "product"/>           
        </section>       
    </main>
</template>

<script setup>
import { onMounted } from 'vue';
import productCard from '../../components/productCard/productCard.vue';
import { ref } from 'vue';

const products = ref('')

onMounted(async () => {
    const data = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => products.value = res)
})


</script>

<style lang="scss" scoped src="./home.scss"/>