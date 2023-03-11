<template>
    <div class="menu" :class="{ open: isMenuOpen}" @click="Toggle">
        <UserIcon />
        <div class="button" @click="LogoutAccount" title='Logout'>
            <Logout />
        </div>
    </div>
</template>
<script setup>

import Logout from '../../assets/SVG/Logout.vue'
import UserIcon from '../../assets/SVG/UserIcon.vue'

import { ref } from 'vue';
import { useUserStateStore } from '../../stores/UserStateStore';

const { LOGOUT } = useUserStateStore();

const isMenuOpen = ref(false);

function Toggle() {
    isMenuOpen.value = !isMenuOpen.value;
}
function LogoutAccount() {
    LOGOUT()
    localStorage.setItem("userSate", false);
}

</script>






<style scoped lang="scss" src="./menuButton.scss" />
