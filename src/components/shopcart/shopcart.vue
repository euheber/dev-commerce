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


        <span v-if="signIn">You must be loged in to buy it</span> <br>

        <span v-if="done">Done!</span>

        <button @click="buyNow" class="checkInBtn">Buy now <i class="fa-solid fa-basket-shopping"></i></button>
    </aside>
</template>

<script setup>
import productsInCart from '../productsInCart/productsInCart.vue';
import { userShopCart } from '../../stores/UserCartStore';
import { useUserStateStore } from '../../stores/UserStateStore';
import { ref } from 'vue';

const userState = useUserStateStore()
const chamarFunction = userShopCart()
const body = document.querySelector('body')

let handleCartshop = ref(true)
let signIn = ref(false)
let done = ref(false)


const handleCartshopFunction = () => {
    handleCartshop.value = !handleCartshop.value
    handleCartshop.value ? body.style.overflow = 'hidden' : body.style.overflow = 'scroll'
}

const buyNow = () => {
    if (userState.userConected) {
        done.value = !done.value
        setTimeout(() => {
            done.value = !done.value
        }, 2000)
        chamarFunction.clean()
        return       
    }

    signIn.value = !signIn.value

    setTimeout(() => {
        signIn.value = !signIn.value
    }, 2000)
}

defineExpose({
    handleCartshopFunction
})
</script>



<style scoped lang="scss" src="./shopcart.scss" />
