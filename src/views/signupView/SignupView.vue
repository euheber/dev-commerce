<template >
    <section>
        <div class="singupContainer container">
            <div class="illustration">
                <BackgroundSignup />
            </div>
            <form @submit.prevent="validateForm">

                <div class="card">
                    <h1>Sign Up</h1>

                    <div class="inputBox">
                        <input type="text" v-model="name" />
                        <span>Username</span>
                    </div>
                    <small v-if="nameError">{{ nameError }}</small>

                    <div class="inputBox1">
                        <input type="email" v-model="email" />
                        <span class="user">Email</span>
                    </div>
                    <small v-if="emailError">{{ emailError }}</small>

                    <div class="inputBox">
                        <input type="password" v-model="password" />
                        <span>Password</span>

                    </div>
                    <small v-if="passwordError">{{ passwordError }}</small>
                    <p> The password must be at least 8 characters long, contain at least one uppercase letter, one
                        lowercase letter, one number and one special character.</p>

                    <button class="enter" type="submit">Register</button>

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
import { ref } from 'vue';

const userState = useUserStateStore();

onMounted(() => {
    if (userState.userConected) {
        router.push({ path: '/' })
    }
})

const name = ref('');
const email = ref('');
const password = ref('');
const nameError = ref('');
const emailError = ref('');
const passwordError = ref('');

function confirmAccess() {
    localStorage.setItem("userSate", true);
    userState.LOGIN();
    router.push({ path: '/' })
}
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
};

const validateForm = () => {
    nameError.value = '';
    emailError.value = '';
    passwordError.value = '';

    if (!name.value) {
        nameError.value = 'Name is required';
        return;
    }

    if (!email.value) {
        emailError.value = 'E-mail is mandatory';
        return;
    } else if (!isValidEmail(email.value)) {
        emailError.value = 'Invalid e-mail';
        return;
    }

    if (!password.value) {
        passwordError.value = 'Password is mandatory';
        return;
    } else if (!isValidPassword(password.value)) {
        passwordError.value = 'Invalid password'
        return;
    }
    confirmAccess();
};


</script>
















<style scoped lang="scss" src="./signup.scss" />
