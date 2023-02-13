<template>
    <aside>
        <section class="cart-header">
            <div class="price-box">
                <h2><i class="fa-solid fa-money-check-dollar"></i> $999 99</h2>
            </div>
            <button>Fechar</button>
        </section>

        <section class="products-list">
            <productsInCart v-for="cartShop in userShopCart.cartShop" :key="cartShop.id" :cartShop="cartShop" />
        </section>
    </aside>
</template>

<script setup>
import productsInCart from '../productsInCart/productsInCart.vue';
import { userShopCart } from '@/stores/UserCartStore'


</script>





<style scoped lang="scss" src="./shopcart.scss" />
