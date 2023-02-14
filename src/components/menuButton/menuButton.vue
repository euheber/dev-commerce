<template>
    <div class="menu" :class="{ open: isMenuOpen, notificationIcon: notificationIcon }" @click="Toggle">
        <UserIcon />
        <div class="button" @click="LogoutAccount" title='Logout'>
            <Logout />
        </div>
        <div class="button" title='Config'>
            <ConfigIcon />
        </div>
        <div class="button" title='Shopping Cart'>
            <ShoppingCart />
            <span v-if="notificationIcon" :class="{ numberItens: notificationIcon }">{{
                cartShop.length
            }}</span>
        </div>
    </div>
</template>
<script setup>

import Logout from '../../assets/SVG/Logout.vue'
import ShoppingCart from '../../assets/SVG/ShoppingCart.vue'
import ConfigIcon from '../../assets/SVG/ConfigIcon.vue'
import UserIcon from '../../assets/SVG/UserIcon.vue'

import { ref, onMounted, watch } from 'vue';
import { useUserStateStore } from '../../stores/UserStateStore';
import { userShopCart } from '../../stores/UserCartStore';

const { userConected, LOGOUT } = useUserStateStore();
const { cartShop } = userShopCart();

const isMenuOpen = ref(false);
const notificationIcon = ref(false);

onMounted(() => {
    if (cartShop.length > 0 && userConected) {
        notificationIcon.value = localStorage.getItem("notification") === "true";
    }
});

watch(cartShop, (newValue) => {
    notificationIcon.value = newValue.length > 0 && userConected;
    localStorage.setItem("notification", notificationIcon.value);
});

if (cartShop.length > 0) {
    const notificationIconStorage = localStorage.getItem("notification");
    notificationIcon.value = userConected ? notificationIconStorage : false;
}

function Toggle() {
    isMenuOpen.value = !isMenuOpen.value;
}
function LogoutAccount() {
    LOGOUT()
    localStorage.setItem("userSate", false);
}

</script>






<style scoped lang="scss" src="./menuButton.scss" />
