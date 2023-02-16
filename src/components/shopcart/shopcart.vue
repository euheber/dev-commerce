<template>
    <aside v-show="handleCartshop">
        <section class="cart-header">
            <div class="price-box">
                <h2><i class="fa-solid fa-money-check-dollar"></i>${{ Math.abs(chamarFunction.total.toFixed(2)) }}</h2>
            </div>

            <button @click="handleCartshopFunction">Fechar</button>
        </section>

        <section class="products-list">
            <productsInCart v-for="product in chamarFunction.cartShop" :key="product.id" :product="product" />
        </section>
    </aside>
</template>

<script setup>
import productsInCart from '../productsInCart/productsInCart.vue';
import { userShopCart } from '../../stores/UserCartStore';
import { ref } from 'vue';
const chamarFunction = userShopCart()


let handleCartshop = ref(false)

const handleCartshopFunction = () => { 
    handleCartshop.value =! handleCartshop.value
}

defineExpose({
    handleCartshopFunction
})
</script>



<style scoped lang="scss" src="./shopcart.scss" />
