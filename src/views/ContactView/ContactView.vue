<template>
    <section>
        <div class="container containerContact">
            <form @submit.prevent>
                <div class="card">
                    <h1 class="singup">Contact</h1>

                    <div class="inputBox1">
                        <input type="email" required />
                        <span class="user">Email</span>
                    </div>

                    <div class="inputBox">
                        <input type="text" required />
                        <span>Name</span>
                    </div>

                    <div class="inputBox">
                        <textarea cols="30" rows="10"></textarea>
                        <span>Message</span>
                    </div>

                    <button class="enter" type="submit">Send</button>

                </div>
            </form>
            <div class="illustration">
                <ContactIllustration />
            </div>
        </div>
</section>
</template>
<script setup>
import ContactIllustration from '../../assets/SVG/ContactIllustration.vue';
</script>

<style scoped lang="scss" src="./Contact.scss"/>