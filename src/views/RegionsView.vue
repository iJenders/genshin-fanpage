<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import NationCard from '@/components/NationCard.vue';
import CharacterCard from '@/components/CharacterCard.vue';

const route = useRouter();

const regions = [
    {
        name: "Mondstadt",
        motto: "The Nation of Freedom",
        description: 'A city of freedom that lies in the northeast of Teyvat. From amongst mountains and wide-open plains, carefree breezes carry the scent of dandelions — a gift from the Anemo God, Barbatos — across Cider Lake to Mondstadt, which sits on an island in the middle of the lake.',
        imageUrl: "/src/img/NationCards-Mondstadt.jpg",
        element: "anemo",
        elementColor: "#74c2a8",
        places: ["Galesong Hill", "Windwail Highland", "Starfell Valley", "Brightcrown Mountains"],
        characters: ["venti", "klee", "jean", "diluc",]
    },
    {
        name: "Liyue",
        motto: "The Nation of Contracts",
        description: 'A bountiful harbor that lies in the east of Teyvat. Mountains stand tall and proud alongside the stone forest, that together with the open plains and lively rivers make up Liyue\'s bountiful landscape, which shows its unique beauty through each of the four seasons. Just how many gifts from the Geo God lie in wait amongst the rocks of Liyue\'s mountains?',
        imageUrl: "/src/img/NationCards-Liyue.jpg",
        element: "geo",
        elementColor: "#fab632",
        places: ["Bishui Plain", "Chenyu Vale", "Sea Of Clouds", "Minlin"],
        characters: ["zhongli", "xiao", "xianyun", "yelan",]
    },
    {
        name: "Inazuma",
        motto: "The Nation of Eternity",
        description: 'An Isolated Archipelago Far East of Teyvat Overcome endless thunderstorms and set foot on the islands of red maple and cherry blossoms. On winding shores and towering cliffs, and in forests and mountains full of secrets, witness the Eternity pursued by Her Excellency, the Almighty Narukami Ogosho.',
        imageUrl: "/src/img/NationCards-Inazuma.jpg",
        element: "electro",
        elementColor: "#af8ec1",
        places: ["Nakurami Island", "Watatsumi Island", "Seirai Island", "Yashiori Island"],
        characters: ["raiden", "yae-miko", "kazuha", "chiori",]
    },
    {
        name: "Sumeru",
        motto: "The Nation of Wisdom",
        description: 'The city of scholars located in the west-central part of Teyvat. A fantastical nation of both lush rainforest and barren desert, where countless fruits of wisdom grow and are buried. Whether Travelers travel from afar through the forest to reach the academy city or delve deep into the desert to discover the historical ruins of the red desert, a wealth of valuable knowledge awaits them here.',
        imageUrl: "/src/img/NationCards-Sumeru.jpg",
        element: "dendro",
        elementColor: "#a4cc3c",
        places: ["Vanarana", "Ashavan Realm", "Hypostyle Desert", "Realm Of Farakhkert"],
        characters: ["nahida", "wanderer", "nilou", "alhaitham",]
    },
    {
        name: "Fontaine",
        motto: "The Nation of Justice",
        description: 'A terrestrial sea in the center of Teyvat. Following the direction of pure currents, crossing wilderness, the depths of the forests and vastness of the sea of sand, arriving at the origin of all the waters of the continent. At the top of the waterfall, in the depths of the capital atop the terrestrial sea... a story that has never been heard, a legend that has been forgotten, like a lost kingdom sunken beneath the waves, yearning for a bard to sing its drowned songs.',
        imageUrl: "/src/img/NationCards-Fontaine.jpg",
        element: "hydro",
        elementColor: "#4cc2f1",
        places: ["Court Of Fontaine Region", "Erinnyes Forest", "Fontaine Research Institute Of Kinetic Energy Engineering", "Morte Region"],
        characters: ["furina", "neuvillette", "wriothesley", "emilie",]
    },
    {
        name: "Natlan",
        motto: "The Nation of War",
        description: 'The nation of oaths situated in the western regions of Teyvat. Guided by the flame, you pass through lengthy gorges and valleys to reach the land where the torches blaze, where all fires converge. Upon the blazing fields where Saurians roam, witness the end of the ancient war alongside the valiant warriors who resist the darkness.',
        imageUrl: "/src/img/NationCards-Natlan.jpg",
        element: "pyro",
        elementColor: "#ef7938",
        places: ["Children Of Echoes", "Ancestral Temple", "Ameyalco Waters", "SulfurousVeins"],
        characters: ["kinich", "kachina", "mualani",]
    }
]

const activeCharacters = ref([]);
const activeRegion = ref(parseInt(route.currentRoute.value.hash.replace("#", '')));
const mySwiper = ref(null);
const hoverPlace = ref(null);

const viewBackground = computed(() => {
    let background = 'RegionBackground-';

    if (regions[activeRegion.value]) {
        background += `${regions[activeRegion.value].name}`
        if (hoverPlace.value) {
            background += `-${hoverPlace.value.replaceAll(' ', '')}`
        }
    } else {
        background += 'Default';
    }

    background += '.jpg';

    return `url('/src/img/${background}')`;
});

const setActiveCharacters = (characterIds) => {
    characterIds.forEach((character, index) => {
        axios.get(`https://genshin.jmp.blue/characters/${character}/`).then(response => {
            activeCharacters.value.push(response.data);
        })
    })
}
const setHoverPlace = (value) => {
    hoverPlace.value = value
}
const setActiveRegion = (index) => {
    activeCharacters.value = [];
    route.push({ hash: `#${index}` });
    activeRegion.value = index;

    let sliderContainer = document.querySelector('.SliderContainer').getBoundingClientRect();
    let absoluteYPosition = sliderContainer.y + window.scrollY;
    window.scrollTo({
        top: absoluteYPosition - 64, // 64px of header height
        behavior: 'smooth'
    })

    if (regions[index]) {
        setActiveCharacters(regions[index].characters);
    }
}
const onSwiper = (swiper) => {
    mySwiper.value = swiper;
    mySwiper.value.slideTo(activeRegion.value, 500);
}

onMounted(() => {
    // Set scroll to regions slider
    if (regions[activeRegion.value]) {
        setActiveCharacters(regions[activeRegion.value].characters);
        setTimeout(() => {
            let sliderContainer = document.querySelector('.SliderContainer').getBoundingClientRect();
            let absoluteYPosition = sliderContainer.y + window.scrollY;
            window.scrollTo({
                top: absoluteYPosition - 64, // 64px of header height
                behavior: 'smooth'
            })
        }, 500);
    }
})
</script>

<template>
    <div class="Regions">
        <section class="Heading">
            <div class="HeadingContent">
                <h1>Genshin Impact Nations</h1>
                <p>Explore the diverse regions of Teyvat</p>
            </div>
        </section>
        <section class="RegionsSlider">
            <div class="SliderContainer">
                <swiper :slidesPerView="'auto'" :spaceBetween="30" class="mySwiper" @swiper="onSwiper">
                    <swiper-slide v-for="(item, index) in regions" :key="index">
                        <nation-card :name="item.name" :motto="item.motto" :image-url="item.imageUrl"
                            :element="item.element" :element-color="item.elementColor" :active="activeRegion == index"
                            @click="() => { setActiveRegion(index), setHoverPlace(null) }" />
                    </swiper-slide>
                </swiper>
            </div>
        </section>
        <section class="RegionInformation">
            <div class="TitleContainer" v-if="regions[activeRegion]">
                <h2>{{ regions[activeRegion].name }}</h2>
                <p>{{ regions[activeRegion].description }}</p>
            </div>
            <div class="TitleContainer" style="text-align: center;" v-else>
                <h2>Select a region<br><br><br></h2>
            </div>
            <div class="DetailsContainer" v-if="regions[activeRegion]">
                <div class="Places">
                    <h2><i class="fa-solid fa-location-dot"></i>Places of Interest</h2>
                    <div class="PlacesWrapper">
                        <a class="PlaceCard" v-for="(item, index) in regions[activeRegion].places"
                            :key="regions[activeRegion] + index"
                            :href="`/src/img/RegionBackground-${regions[activeRegion].name}-${item.replaceAll(' ', '')}.jpg`"
                            target="_blank" @pointerenter="setHoverPlace(item)">
                            <img :src="`/src/img/RegionBackground-${regions[activeRegion].name}-${item.replaceAll(' ', '')}.jpg`"
                                alt="">
                            <h3>{{ item }}</h3>
                        </a>
                    </div>
                </div>
                <div class="Characters">
                    <h2><i class="fa-solid fa-user-group"></i>Notable Characters</h2>
                    <div class="CharactersWrapper">
                        <CharacterCard v-for="(character, index) in activeCharacters" :key="regions[activeRegion]"
                            :character="character" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.Regions {
    background: v-bind(viewBackground);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    transition: 0.2s;
}

.Regions>section {
    position: relative;
    z-index: 2;
}

.Heading {
    position: relative;
    font-family: "Zhcn", system-ui;
    text-align: center;
    color: #fff;

    background: url('/src/img/RegionsViewHeading.jpg');
    background-size: cover;
    background-position: center;
}

.HeadingContent {
    min-height: 400px;
    padding: 0 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    backdrop-filter: brightness(0.6);
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
    padding: 64px 32px;
    background: #000000cc;
}

.RegionsSlider::before {
    content: '';
    position: absolute;
    top: -64px;
    left: 0;
    z-index: 2;

    width: 100%;
    height: 128px;

    backdrop-filter: blur(32px);
    mask-image: linear-gradient(0deg, transparent, #000, transparent);
}

.RegionsSlider .swiper-slide {
    width: fit-content;
}

.RegionsSlider .SliderContainer {
    display: flex;
}

.RegionInformation {
    padding: 32px;

    background: #000000aa;
}

.RegionInformation .TitleContainer {
    max-width: 600px;
    color: #fff;
}

.RegionInformation .TitleContainer h2 {
    font-family: "Zhcn", system-ui;
    font-size: 64px;
    color: #fff;
}

.RegionInformation .TitleContainer p {
    font-family: "Roboto", sans-serif;
    margin-top: 24px;
    line-height: 24px;
    color: #fff;
}

.RegionInformation .DetailsContainer {
    margin-top: 128px;
    color: #fff;
}

.RegionInformation .Places h2 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    color: #fff;
}

.RegionInformation .Places i {
    margin-right: 16px;
    transform: scale(1.4);
}

.RegionInformation .Places .PlacesWrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 24px;

    margin-top: 32px;
}

.PlaceCard {
    position: relative;
    width: 260px;
    cursor: pointer;
    text-decoration: none;
}

.PlaceCard img {
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 10px;
    object-fit: cover;
}

.PlaceCard::before {
    content: "\f08e";
    font-family: "Font Awesome 6 Free";
    font-size: 64px;
    font-weight: 900;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    aspect-ratio: 4/3;

    background: linear-gradient(0deg, #000a, #0002);
    border-radius: 10px;

    opacity: 0;
    transition: 0.2s;
}


.PlaceCard:hover::before {
    opacity: 1;
}

.PlaceCard h3 {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #fff;

    padding-left: 8px;
}

.RegionInformation .Characters {
    margin-top: 64px;
}

.RegionInformation .Characters h2 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    color: #fff;
}

.RegionInformation .Characters i {
    margin-right: 16px;
    transform: scale(1.4);
}

.RegionInformation .Characters .CharactersWrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 24px;

    margin-top: 32px;
}




@media(max-width: 520px) {
    .RegionInformation .TitleContainer h2 {
        font-size: 32px;
    }

    .RegionInformation .TitleContainer p {
        font-size: 16px;
    }
}
</style>