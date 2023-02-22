<template>
    <main>

        <swiper />
        <div class="container">
            <div class="containerButtons animeLeft">
                <button @click="handleProductDisplay('mens')">Homem</button>
                <button @click="handleProductDisplay('womens')">Mulher</button>
                <button @click="handleProductDisplay('jewelery')">Jóias</button>
                <button @click="handleProductDisplay('electronics')">Eletrônicos</button>
            </div>

            <section class="products animeLeft">
                <productCard v-for="product in products" :key="product.id" :product="product"
                    :class="product.category.replace(`'`, '')" />
            </section>
        </div>
    </main>
</template>

<script setup>

import productCard from '../../components/productCard/productCard.vue';
import swiper from '../../components/swiper/swiper.vue';
import { onMounted } from 'vue';
import { ref } from 'vue';


let products = ref('')

onMounted(async () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(product => products.value = product)
})

const handleProductDisplay = (category) => {
    const allCards = document.querySelectorAll(`.card`)
    allCards.forEach((item) => {

        const showProduct = item.classList.contains(category)
        item.style.display = showProduct ? 'block' : 'none'
    })
}

</script>
<style lang="scss" scoped src="./home.scss"/>