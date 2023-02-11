<template>
    <main>
        <section>
            <h1>Carrosel</h1>
        </section>
        <button @click="handleApi('celular')">celular</button>
        <button @click="handleApi('electrnoc')">celular</button>
        <section class="products">
            <productCard v-for="product in products" :key="product.key" :product="product" class="teste"/>
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
const jewelry = [];
const electronics = [];

const handleApi = () => { 
    products.value = men
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
            case "jewelry":
                jewelry.push(product);
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