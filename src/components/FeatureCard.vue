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
    },
    url: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    }
});

const openUrl = () => {
    console.log(props.target)
    window.open(props.url, props.target);
}

const hover = ref(false);

const getBackgroundImgUrl = computed(() => `url('/src/img/${props.background}.jpg')`);
const getBackgroundGifUrl = computed(() => {
    if (hover.value) {
        return `url('/src/img/${props.background}.gif')`;
    }
    return '#000000';
});
const getBackgroundGifOpacity = computed(() => {
    let opacity = 0;
    if (hover.value) {
        opacity = 1
    }
    return `opacity(${opacity}) brightness(0.4)`;
})

const toggleHover = (value) => {
    hover.value = value;
}
</script>

<template>
    <div class="FeatureCard" @click="openUrl" @pointerenter="toggleHover(true)" @pointerleave="toggleHover(false)">
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
    filter: v-bind(getBackgroundGifOpacity);
    background: v-bind(getBackgroundGifUrl);
    background-size: cover;
    background-position: center;
}

.Icon i {
    font-size: 64px;
    color: #ffffff;
}

.FeatureCard:hover i {
    color: #ffc773;
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