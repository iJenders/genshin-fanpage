<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();

const currentRoute = ref(route.path)
</script>

<template>
    <div class="NotFound">
        <div class="Content">
            <div class="Title">
                <h1>404</h1>
            </div>
            <div class="Description">
                <h2>Page not found:</h2>
                <p>"{{ currentRoute }}"</p>
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
    padding: 64px 10%;
    border-radius: 10px;

    background: #000000aa;
}

@media (min-width: 770px) {
    .Content::before {
        position: absolute;
        right: 0;
        bottom: 0;

        content: '';

        background: url('src/img/Miko.webp');
        background-size: cover;

        height: 60%;
        width: 200px;
    }
}

@media (max-width: 770px) {
    .Content {
        width: fit-content;
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
    font-size: 24px;
    text-align: center;

    color: #ffffff;
}

.Description p {
    padding: 8px;
    margin-top: 8px;

    background: #00000055;

    font-size: 16px;
    text-align: center;
    color: rgb(58, 206, 58);
}
</style>