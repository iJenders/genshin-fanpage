<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
</script>

<template>
    <div class="NotFound">
        <div class="Content">
            <div class="Title">
                <h1>404</h1>
            </div>
            <div class="Description">
                <h2>Page not found</h2>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');

.NotFound {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 100vh;

    background: url('/src/img/404.jpg');
    background-position: center;
    background-size: cover;
}

.Content {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 700px;
    padding: 32px;
    border-radius: 10px;

    background: #000000aa;
}

.Content::before {
    position: absolute;
    right: 0;
    bottom: 0;

    content: '';

    background: url('/src/img/Miko.webp');
    background-size: cover;

    height: 70%;
    width: 200px;
}

@media (max-width: 770px) {
    .Content {
        width: fit-content;
    }

    .Content::before{
        display: none;
    }
}

.Title {
    font-family: "Tiny5", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 82px;
    text-align: center;

    color: #ffffff;
}

.Description {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 23px;
    text-align: center;
    text-wrap: nowrap;

    color: #ffffff;
}
</style>