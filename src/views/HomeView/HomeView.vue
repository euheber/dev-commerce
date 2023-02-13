<template>
    <main>
        <div class="btns">
            <button @click="handleProductDisplay(`clothing`)" class="filterBtn">Roupas</button>
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
let handleDisplay = ref('')

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

// const handleApi = category => products.value = category

const handleProductDisplay = (category) => {
    // handleDisplay.value = category
    const todasClasses = document.querySelectorAll(`.card`)
    todasClasses.forEach((item) => {
        if (item.classList.contains(category)) {
            item.classList.add('active')
            item.classList.remove('of')
        } else {
            item.classList.remove('active')
            item.classList.add('of')
        }


    })
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