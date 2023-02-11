<template>
    <main>
        <section>
            <h1>Carrosel</h1>
        </section>
        <button @click="handleApi(men)">Homem</button>
        <button @click="handleApi(women)">Mulher</button>
        <button @click="handleApi(jewelery)">Jóias</button>
        <button @click="handleApi(electronics)">Eletrônicos</button>
        <section class="products">
            <productCard v-for="product in products" :key="product.key" :product="product" class="teste" />
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
        .then(product => separateProducts(product))
})

// const handleApi = async (category) => {

//         const mapeado = products.value.filter(jewelery => jewelery.category === category)

//         products.value = mapeado
// }

const men = [];
const women = [];
const jewelery = [];
const electronics = [];

const handleApi = (category) => {

    if(!category){ console.log('ta vazio')}
    products.value = category
}

function separateProducts(products) {
    products.forEach(product => {
        switch (product.category) {
            case "men's clothing":
                men.push(product);
                break;
            case "electronics":
                electronics.push(product);
                break;
            case "jewelery":
                jewelery.push(product);
                break;
            case "women's clothing":
                women.push(product);
                break;
            default:
                break;
        }
    });
}



</script>


<style lang="scss" scoped src="./home.scss"/>