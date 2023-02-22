<template>
    <aside v-show="handleCartshop" class="animeRight">
        <section class="cart-header">
            <div class="price-box">
                <h2><i class="fa-solid fa-money-check-dollar"></i> ${{ Math.abs(useStoreFunction.total.toFixed(2)) }}</h2>
            </div>

            <button @click="handleCartshopFunction" class="closeBtn"><i class="fa-solid fa-circle-xmark"></i></button>
        </section>

        <section class="products-list">
            <productsInCart v-for="product in useStoreFunction.cartShop" :key="product.id" :product="product" />
        </section>



        <section class="checkInContainer">
            <button @click="buyNow" class="checkInBtn">Buy now <i class="fa-solid fa-basket-shopping"></i></button>
            <Transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut" mode="out-in">

                <span v-show="signIn">
                    You must be loged in to buy it
                </span>
            </Transition>


            <Transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut" mode="out-in">

                <span v-show="done">
                    Done!
                </span>
            </Transition>

            <Transition enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut" mode="out-in">
                <span v-show="emptyCartShop">
                    Your  cart shopping is empty
                </span>
            </Transition>
        </section>
    </aside>
</template>

<script setup>
import productsInCart from '../productsInCart/productsInCart.vue';
import { userShopCart } from '../../stores/UserCartStore';
import { useUserStateStore } from '../../stores/UserStateStore';
import { ref } from 'vue';

const userState = useUserStateStore()
const useStoreFunction = userShopCart()
const body = document.querySelector('body')

let handleCartshop = ref(false)
let signIn = ref(false)
let done = ref(false)
let emptyCartShop = ref(false)

const handleCartshopFunction = () => {
    handleCartshop.value = !handleCartshop.value
}

const buyNow = () => {
    if (userState.userConected && useStoreFunction.cartShop.length === 0) {
        emptyCartShop.value = !emptyCartShop.value
        setTimeout(() => {
            emptyCartShop.value = !emptyCartShop.value
        }, 2000)
        return
    }

    if (userState.userConected) {
        done.value = !done.value
        setTimeout(() => {
            done.value = !done.value
        }, 2000)
        useStoreFunction.clean()
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
