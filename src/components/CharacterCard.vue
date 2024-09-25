<script setup>
import { ref } from 'vue';

const props = defineProps({
    character: {
        type: Object,
        required: true,
    },
    fetch: {
        type: Boolean,
        required: false
    }
});

const visionsColors = {
    Pyro: '#EC4923',
    Hydro: '#00BFFF',
    Anemo: '#359697',
    Electro: '#945dc4',
    Dendro: '#608a00',
    Cryo: '#4682B4',
    Geo: '#debd6c',
}

const getBackgroundUrl = ref(`url(https://genshin.jmp.blue/characters/${props.character.id.toLowerCase()}/icon-big)`);
const getGradient = ref(`linear-gradient(135deg, ${visionsColors[props.character.vision]}, #ffffff)`)

const openLink = () => {
    window.open(
        `https://genshin-impact.fandom.com/wiki/${props.character.name.replace(' ', '_')}`,
        '_blank'
    )
}
</script>

<template>
    <div class="CharacterCard" @click="openLink">
        <div class="Name">
            <p>{{ props.character.name }}</p>
        </div>
        <div class="Title">
            <p>«{{ props.character.title }}»</p>
        </div>
        <div class="Info">
            <img :src="`/src/img/ElementLogo-${props.character.vision.toLowerCase()}.webp`"
                :alt="props.character.vision.toLowerCase()" class="Vision">
            <img :src="`/src/img/WeaponLogo-${props.character.weapon_type.toLowerCase()}.webp`"
                :alt="props.character.weapon_type.toLowerCase()" class="Weapon">
            <div class="Rarity">
                <img v-for="(star, index) in props.character.rarity" :key="index" src="/src/img/Star.png"
                    :alt="props.character.rarity">
            </div>
        </div>
    </div>
</template>
<style scoped>
.CharacterCard {
    position: relative;
    z-index: 2;

    width: 200px;
    aspect-ratio: 3/4;
    padding: 16px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    background: v-bind(getGradient);
    cursor: pointer;
    overflow: hidden;
}

.CharacterCard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background: v-bind(getBackgroundUrl);
    background-size: cover;
    background-position: center;

    filter: brightness(1);
}

.CharacterCard::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background: linear-gradient(0deg, #000a, transparent);
    opacity: 0;

    transition: 0.2s;
}

.CharacterCard:hover::after {
    opacity: 1;
}

.CharacterCard p {
    font-family: "Roboto", sans-serif;
    text-align: center;
    opacity: 0;
    transition: 0.3s;
}

.CharacterCard:hover p {
    opacity: 1;
}

.CharacterCard .Name {
    font-size: 24px;
    margin-bottom: 8px;
}

.CharacterCard .Info {
    position: absolute;

    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 32px;

    top: 8px;
    right: 8px;
}

.CharacterCard .Info img {
    width: 100%;
    background: #000000aa;
    border-radius: 50%;
    box-shadow: 0 0 10px #000a;
}

.CharacterCard .Info img.Weapon {
    filter: brightness(2);
}

.CharacterCard .Info .Rarity {
    background: #000000aa;
    border-radius: 32px;
    box-shadow: 0 0 10px #000000aa;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 4px 0;
}

.CharacterCard .Info .Rarity img {
    width: 75%;
    background: transparent;
    box-shadow: none;
}
</style>