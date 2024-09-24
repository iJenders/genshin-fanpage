<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import NationCard from '@/components/NationCard.vue';

const route = useRouter();

const regions = [
    {
        name: "Mondstadt",
        motto: "The Nation of Freedom",
        imageUrl: "/src/img/NationCards-Mondstadt.jpg",
        element: "anemo",
        elementColor: "#74c2a8",
    },
    {
        name: "Liyue",
        motto: "The Nation of Contracts",
        imageUrl: "/src/img/NationCards-Liyue.jpg",
        element: "geo",
        elementColor: "#fab632",
    },
    {
        name: "Inazuma",
        motto: "The Nation of Eternity",
        imageUrl: "/src/img/NationCards-Inazuma.jpg",
        element: "electro",
        elementColor: "#af8ec1",
    },
    {
        name: "Sumeru",
        motto: "The Nation of Wisdom",
        imageUrl: "/src/img/NationCards-Sumeru.jpg",
        element: "dendro",
        elementColor: "#a4cc3c",
    },
    {
        name: "Fontaine",
        motto: "The Nation of Justice",
        imageUrl: "/src/img/NationCards-Fontaine.jpg",
        element: "hydro",
        elementColor: "#4cc2f1",
    },
    {
        name: "Natlan",
        motto: "The Nation of War",
        imageUrl: "/src/img/NationCards-Natlan.jpg",
        element: "pyro",
        elementColor: "#ef7938",
    },
    {
        name: "???",
        motto: "...",
        imageUrl: "/src/img/NationCards-ComingSoon.jpg",
        element: "cryo",
        elementColor: "#9fd6e3",
        comingSoon: true
    }
]
const activeRegion = ref(null);
</script>

<template>
    <div class="Regions">
        <section class="Heading">
            <h1>Genshin Impact Nations</h1>
            <p>Explore the diverse regions of Teyvat</p>
        </section>
        <section class="RegionsSlider">
            <div class="SliderContainer">
                <swiper :slidesPerView="'auto'" :spaceBetween="30" class="mySwiper">
                    <swiper-slide v-for="(item, index) in regions" :key="index">
                        <nation-card :name="item.name" :motto="item.motto" :image-url="item.imageUrl"
                            :element="item.element" :element-color="item.elementColor" :coming-soon="item.comingSoon"
                            :active="activeRegion == index" />
                    </swiper-slide>
                </swiper>
            </div>
        </section>
    </div>
</template>

<style scoped>
.Heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 400px;
    padding: 0 16px;

    font-family: "Zhcn", system-ui;
    text-align: center;
    color: #fff;
}

.Heading h1 {
    font-size: 40px;
    width: fit-content;
    padding: 0 16px;
    border-bottom: solid 1px #aaa;
}

.Heading p {
    font-size: 16px;
}

.RegionsSlider {
    padding: 64px;
}

.RegionsSlider .swiper-slide {
    width: fit-content;
}
</style>