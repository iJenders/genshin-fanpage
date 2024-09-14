<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import NationCard from '@/components/NationCard.vue';

const regions = [
  {
    name: "Mondstadt",
    motto: "La Nación de la Libertad",
    imageUrl: "src/assets/img/Mondstadt.jpg",
    element: "anemo",
    elementColor: "#74c2a8",
  },
  {
    name: "Liyue",
    motto: "La Nación de los Contratos",
    imageUrl: "src/assets/img/Liyue.jpg",
    element: "geo",
    elementColor: "#fab632",
  },
  {
    name: "Inazuma",
    motto: "La Nación de la Eternidad",
    imageUrl: "src/assets/img/Inazuma.jpg",
    element: "electro",
    elementColor: "#af8ec1",
  },
  {
    name: "Sumeru",
    motto: "La Nación de la Sabiduría",
    imageUrl: "src/assets/img/Sumeru.jpg",
    element: "dendro",
    elementColor: "#a4cc3c",
  },
  {
    name: "Fontaine",
    motto: "...",
    imageUrl: "src/assets/img/Fontaine.jpg",
    element: "hydro",
    elementColor: "#4cc2f1",
  },
  {
    name: "Natlan",
    motto: "Nación de la guerra",
    imageUrl: "src/assets/img/Natlan.jpg",
    element: "pyro",
    elementColor: "#ef7938",
  },
  {
    name: "???",
    motto: "...",
    imageUrl: "src/assets/img/ComingSoon.jpg",
    element: "cryo",
    elementColor: "#9fd6e3",
    comingSoon: true
  }
]
</script>

<template>
  <div class="HomeViewContainer">
    <div class="HomeView">
      <div class="Landing">
        <div class="Background"></div>
        <div class="Void"></div>
        <div class="Title">
          <img src="../assets/img/GenshinLogo.png" alt="GenshinLogo">
        </div>
        <div class="Foot">
          <span>Step Into a Vast Magical World of Adventure</span>
        </div>
      </div>
      <div class="Regions">
        <div class="Title">
          <span>Seven nations to explore</span>
        </div>
        <div class="SliderContainer">
          <swiper :slidesPerView="'auto'" :spaceBetween="30" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) in regions" :key="index">
              <nation-card :name="item.name" :motto="item.motto" :image-url="item.imageUrl" :element="item.element"
                :element-color="item.elementColor" :coming-soon="item.comingSoon" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Landing {
  position: relative;

  width: 100%;
  height: 100vh;
  padding: 0 15%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Landing div {
  height: calc(100%/3);
}

.Landing .Background {
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  background: url(src/assets/img/HomeBackground.jpg);
  background-size: cover;
  background-position-x: 25%;
}

.Landing .Background::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(0deg, #192229, transparent);
  background-size: cover;
  background-position-x: 25%;
}

.Landing .Title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  filter: invert(1);
}

.Landing .Title img {
  max-width: 320px;
  min-width: 200px;
}

.Landing .Foot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  font-family: "Zhcn", system-ui;
  font-size: 24px;
  text-align: center;

  color: #fff;
  text-shadow:
    0px 0px 20px #ffb89c,
    0px 0px 15px #ffb89c,
    0px 0px 10px #ffb89c;
}

.Regions {
  position: relative;

  width: 100%;
  padding: 64px 15%;

  background: #192229;
}

.Regions .Title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 32px;

  font-family: "Zhcn", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  text-align: center;

  color: #fff;
}

.Regions .swiper-slide {
  width: fit-content;
}
</style>