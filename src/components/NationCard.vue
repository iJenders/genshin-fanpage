<script setup>
import { ref } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    motto: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    element: {
        type: String,
        required: true
    },
    elementColor: {
        type: String,
        required: true
    },
    comingSoon: {
        type: Boolean,
        required: false
    }
});

const translucentColor = ref(props.elementColor + "");
</script>

<template>
    <div class="NationCard">
        <div class="BackgroundImg"
            :style="props.comingSoon ? 'filter: contrast(25%) brightness(50%) saturate(0%);' : ''">
            <img :src="props.imageUrl" :alt="props.name">
        </div>
        <div class="Title">
            <div class="Span">
                <span>
                    <span>{{ props.name }}</span>
                    <p>{{ props.motto }}</p>
                </span>
            </div>
        </div>
        <div class="Element">
            <img :src="`/src/img/ElementLogo-${props.element}.webp`" :alt="props.element" width="80">
        </div>
    </div>
</template>

<style scoped>
.NationCard {
    position: relative;
    overflow: hidden;

    width: 200px;
    height: 300px;

    background-color: #ccc;

    cursor: pointer;
}

.NationCard .BackgroundImg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100%;
    height: 100%;

    filter: saturate(0.5) blur(1px);
    transform: scale(1.1);
    transition: 0.2s;
}

.NationCard:hover .BackgroundImg {
    filter: saturate(1);
    transform: scale(1);
}

.BackgroundImg img {
    width: 100%;
    height: 100%;
}

.BackgroundImg::before {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;
}

.Title {
    position: absolute;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    width: 100%;
    height: 100%;
}

.Title .Span {
    position: relative;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    font-family: "Zhcn", system-ui;
    font-size: 18px;
    text-align: center;

    width: 100%;
    height: 100%;
    padding: 16px;

    color: #fff;
    background: linear-gradient(0deg, #000, transparent);
    transition: 0.5s;
}

.NationCard p {
    font-size: 10px;
    padding-top: 6px;
    font-style: italic;
}

.NationCard:hover .Title .Span {
    top: 100%;
}

.Element {
    position: relative;
    z-index: 3;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    transition: 0.2s;
    filter: opacity(1) drop-shadow(0 0 16px v-bind(translucentColor));
}

.NationCard:hover .Element {
    filter: opacity(0);
    transform: translateY(-64px);
}
</style>