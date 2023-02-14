<template>
    <div class="menu" :class="{ open: open }" @click="Toggle">
        <UserIcon />
        <div class="button" @click="userState.LOGOUT" title='Logout'>
            <Logout />
        </div>
        <div class="button" title='Config'>
            <ConfigIcon />
        </div>
        <div class="button" title='Shopping Cart'>
            <ShoppingCart />
        </div>
    </div>
</template>
<script setup>

import Logout from '../../assets/SVG/Logout.vue'
import ShoppingCart from '../../assets/SVG/ShoppingCart.vue'
import ConfigIcon from '../../assets/SVG/ConfigIcon.vue'
import UserIcon from '../../assets/SVG/UserIcon.vue'
import { ref } from 'vue';
import { useUserStateStore } from '../../stores/UserStateStore';

const userState = useUserStateStore();

const open = ref(false);

function Toggle() {
    open.value = !open.value
}

</script>



<style scoped lang="scss" src="./menuButton.scss" />
