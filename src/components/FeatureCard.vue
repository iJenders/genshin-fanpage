<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    }
});

const getBackgroundImgUrl = computed(() => `url('/src/img/${props.background}.jpg')`);
const getBackgroundGifUrl = computed(() => `url('/src/img/${props.background}.gif')`);
</script>

<template>
    <div class="FeatureCard">
        <div class="Background"></div>
        <div class="Icon">
            <i :class="props.icon"></i>
        </div>
        <div class="Title">
            <h3>{{ props.title }}</h3>
        </div>
        <div class="Description">
            {{ props.description }}
        </div>
    </div>
</template>

<style scoped>
.FeatureCard {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 32px;

    width: 250px;
    height: 350px;
    padding: 16px;

    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
}

.FeatureCard .Background {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
}

.FeatureCard .Background::before {
    content: '';
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;

    filter: brightness(0.4);
    background: v-bind(getBackgroundImgUrl);
}

.FeatureCard .Background::after {
    content: '';
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;

    transition: 0.3s;
    filter: opacity(0) brightness(0.4);
    background: v-bind(getBackgroundGifUrl);
    background-size: cover;
    background-position: center;
}

.FeatureCard:hover .Background::after {
    filter: opacity(1) brightness(0.4);
}

.Icon i {
    font-size: 64px;
    color: #ffffff;
}

.Title {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    text-align: center;

    color: #fff;
}

.Description {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    text-align: center;

    color: #fff;
}
</style>