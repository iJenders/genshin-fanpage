<script setup>
import CharacterCard from '@/components/CharacterCard.vue';
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

const visions = ["All", "Pyro", "Hydro", "Anemo", "Electro", "Geo", "Cryo", 'Dendro'];
const weapons = ["All", "Sword", "Bow", "Polearm", "Catalyst", "Claymore"];
const nations = ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "Natlan", "Sneznaya", "Other"]
const filters = [
    { name: 'vision', values: visions, imgSrc: (id) => `/src/img/ElementLogo-${id}.webp` },
    { name: 'weapon', values: weapons, imgSrc: (id) => `/src/img/WeaponLogo-${id}.webp` },
];

const characters = ref([]);
const bindedFilter = ref(0);
const activeFilter = ref(0);

const getIsBinded = (index) => {
    return bindedFilter.value == index ? 'BindedFilter' : '';
}
const getIsActive = (index) => {
    return activeFilter.value == index ? 'ActiveArgument' : '';
}
const filterArguments = computed(() => {
    return filters[bindedFilter.value].values;
})
const getCharacters = computed(() => {
    let filteredCharacters = [[], [], [], [], [], [], []];

    characters.value.forEach(character => {
        let filter = filters[bindedFilter.value].name;
        let value = filters[bindedFilter.value].values[activeFilter.value];
        if (character[filter] == value || value == 'All') {
            nations.forEach((nation, index) => {
                if (character.nation.toLowerCase() == nation.toLowerCase()) {
                    filteredCharacters[index].push(character);
                }
            });
        }
    })
    return filteredCharacters;
})

onMounted(() => {
    axios.get('https://genshin.jmp.blue/characters/all')
        .then((response) => {
            characters.value = response.data;
        })
})
</script>

<template>
    <div class="CharactersViewContainer">
        <section class="TitleBanner">
            <h1>Genshin Impact Characters</h1>
        </section>
        <section class="Filters">
            <div class="FilterList">
                <a v-for="(filter, index) in filters" :key="index" :class="getIsBinded(index)"
                    @click="() => { bindedFilter = index; activeFilter = 0 }">
                    Filter by {{ filter.name }}
                </a>
            </div>
            <div class="FilterArgumentsContainer">
                <div class="FilterArguments">
                    <div class="Argument" v-for="(item, index) in filterArguments" :key="item"
                        :class="getIsActive(index)" @click="() => { activeFilter = index }">
                        <img :src="filters[bindedFilter].imgSrc(item.toLowerCase())" alt="">
                        <span>{{ item }}</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="CharacterList">
            <div class="NationSection" v-for="(nation, index) in nations" :key="nation">
                <div class="Banner">
                    <div class="Background" :style="`background: url('/src/img/RegionBanner-${nation}.jpg')`"></div>
                    <h2>{{ nation }}</h2>
                </div>
                <div class="List">
                    <CharacterCard v-for="character in getCharacters[index]" :key="character.id"
                        :character="character" />
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
.TitleBanner {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 450px;
    background: linear-gradient(0deg, #192229, transparent);
}

.TitleBanner::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: url('/src/img/CharactersBackground.jpg');
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
}

.TitleBanner h1 {
    font-family: "Zhcn", system-ui;
    font-size: 56px;
    text-align: center;

    color: #fff;
}

.Filters {
    background: #192229;
    padding: 32px;
    padding-top: 64px;
}

.FilterList {
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 8px;
    border-radius: 8px;

    background: #cccccc;
}

.FilterList a {
    display: inline-block;
    flex: 1;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-align: center;
    place-content: center;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 20px;

    color: #000;

    padding: 8px;
    border-radius: 8px;

    cursor: pointer;
}

.FilterList a.BindedFilter {
    background: #eeeeee;
    box-shadow: 0px 1px 3px 0px #0005;
}

.FilterArgumentsContainer {
    display: flex;
    justify-content: center;
    background: #cccccc;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 16px;
    overflow: hidden;
}

.FilterArguments {
    display: flex;
    gap: 8px;

    width: fit-content;
    padding: 16px 0;

    overflow-x: auto;
}

.FilterArguments .Argument {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    padding: 8px;

    background: #eeeeee;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 20px;

    border-radius: 8px;
    box-shadow: 0px 2px 3px 0px #0005;

    cursor: pointer;
    user-select: none;
}

.FilterArguments .ActiveArgument {
    background: linear-gradient(45deg, #e719fa, #1f99d1);
    color: #fff;
}

.FilterArguments .Argument img {
    height: 23px;
}

.CharacterList {
    padding: 0;
    padding-bottom: 64px;
    margin: 0 auto;

    color: #fff;
    font-size: 20px;

    background: #192229;
}

.CharacterList .NationSection .Banner {
    position: relative;
    box-sizing: content-box;

    width: 100%;
    height: 240px;
    padding: 32px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Zhcn", 'Courier New', system-ui;
}

.CharacterList .NationSection h2{
    position: relative;
    font-size: 32px;
    z-index: 1;
}

.CharacterList .NationSection .Banner .Background{
    position: absolute;
    top: 32px;
    left: 0;
    z-index: 0;

    width: 100%;
    height: 240px;

    filter: brightness(0.5);
    background-size: cover !important;
    background-position: center !important;
}

.CharacterList .NationSection .List {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;

    padding: 0 32px;
}
</style>