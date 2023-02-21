<template >
    <section>
        <div class="singupContainer container">
            <div class="illustration">
                <BackgroundSignup />
            </div>
            <form @submit.prevent>

                <div class="card">
                    <a class="singup">Sign Up</a>
                    <div class="inputBox1">
                        <input type="email" required />
                        <span class="user">Email</span>
                    </div>

                    <div class="inputBox">
                        <input type="text" required />
                        <span>Username</span>
                    </div>

                    <div class="inputBox">
                        <input type="password" required />
                        <span>Password</span>
                    </div>

                    <button class="enter" type="submit" @click="confirmAccess">Register</button>

                </div>

            </form>
        </div>
    </section>
</template>
<script setup>

import { useUserStateStore } from '../../stores/UserStateStore';
import BackgroundSignup from '../../assets/SVG/BackgroundSignup.vue'
import router from '../../router';
import { onMounted } from 'vue';

const userState = useUserStateStore();

onMounted(() => {
    if (userState.userConected) {
        router.push({ path: '/' })
    }
})


function confirmAccess() {
    localStorage.setItem("userSate", true);
    userState.LOGIN();
    router.push({ path: '/' })
}
</script>
















<style scoped lang="scss" src="./signup.scss" />
