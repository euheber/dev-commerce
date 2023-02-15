<template>
    <main>
        <div class="btns">
            <button @click="handleProductDisplay('mens')" class="filterBtn">Homem</button>
            <button @click="handleProductDisplay('womens')" class="filterBtn">Mulher</button>
            <button @click="handleProductDisplay('jewelery')" class="filterBtn">Jóias</button>
            <button @click="handleProductDisplay('electronics')" class="filterBtn">Eletrônicos</button>
        </div>

        <section class="products">
            <productCard v-for="product in products" :key="product.id" :product="product"
                :class="product.category.replace(`'`, '')" />
        </section>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';
import productCard from '../../components/productCard/productCard.vue';
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