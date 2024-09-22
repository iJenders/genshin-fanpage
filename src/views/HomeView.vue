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
const videosId = ['dz0w5JRG3jY', 'DoOPaMEwflU', 'uKr_9h79yf0']

const videos = ref([
  {
    title: "",
    url: "",
    thumbnail: ""
  }
]);
const currentVideo = ref(0);
const loadedVideos = ref(false);

const currentVideoUrl = computed(() => videosId[currentVideo.value]);
const currentVideoCssUrl = computed(() => `url(${videos.value[currentVideo.value].thumbnail})`);
const playingVideo = computed(() => route.currentRoute.value.hash == '#video');

const togglePlayingVideo = () => {
  if (playingVideo.value) {
    route.push({ hash: '' })
  } else {
    route.push({ hash: '#video' })
  }
}
const refreshVideos = () => {
  videosId.forEach(async (videoId, index) => {
    let object = {
      title: "",
      url: "",
      thumbnail: ""
    }

    await axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`)
      .then(response => {
        object.title = response.data.title;
        object.url = response.data.url
        object.thumbnail = `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        videos.value[index] = object;
        loadedVideos.value = true;
      }).catch(error => {
        loadedVideos.value = false;
      });
  });
}
const refreshCurrentVideo = (value) => {
  currentVideo.value = value;
}

onMounted(() => {
  refreshVideos();
});
</script>

<template>
  <div class="HomeViewContainer">
    <div class="HomeView">
      <section class="Landing">
        <div class="Background"></div>
        <div class="Void"></div>
        <div class="Title">
          <img src="/src/img/GenshinLogo.png" alt="GenshinLogo">
        </div>
        <div class="Foot">
          <span>Step Into a Vast Magical World of Adventure</span>
        </div>
      </section>
      <section class="Regions">
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
      </section>
      <section class="Videos" v-if="loadedVideos">
        <div class="VideoInfo">
          <div class="Title">
            <p>{{ videos[currentVideo].title }}</p>
          </div>
          <div class="PlayButton" @click="() => { togglePlayingVideo() }">
            <i class="fa-regular fa-circle-play"></i>
            <i>Play video</i>
          </div>
          <a href="https://www.youtube.com/@GenshinImpact" target="_blank">Explore more</a>
        </div>
        <div class="VideoList">
          <div class="Video" v-for="(video, index) in videos" :key="index" @mouseenter="refreshCurrentVideo(index)"
            @click="() => { togglePlayingVideo() }">
            <div class="VideoBackground">
              <img draggable="false" :src="video.thumbnail" :alt="video.title">
            </div>
            <div class="PlayButton">
              <i class="fa-regular fa-circle-play"></i>
            </div>
          </div>
        </div>
        <div class="Background"></div>
        <Teleport to="body">
          <div class="VideoPlayer" v-if="playingVideo" @click="togglePlayingVideo">
            <iframe width="853" height="480" :src="`https://www.youtube.com/embed/${currentVideoUrl}`"
              title="Miscelánea de Genshin Impact - Kinich: Todo tiene su recompensa #Kinich #GenshinImpact"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </Teleport>
      </section>
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

  background: url('/src/img/HomeBackground.jpg');
  background-size: cover;
  background-position-x: 25%;
}

.Landing .Background::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 50%;

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

.Videos {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  min-height: 580px;
  padding: 0 128px;
}

.Videos::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;

  width: 100%;
  height: 10%;

  background: linear-gradient(180deg, #192229, transparent);
  background-size: cover;
  background-position-x: 25%;
}

.VideoInfo {
  position: relative;
  z-index: 2;

  width: 60%;
  padding: 20px;
  margin-right: auto;
}

.VideoInfo .Title {
  width: 100%;
  padding-bottom: 32px;

  font-family: "Nanum Gothic Coding", monospace;
  font-weight: 700;
  font-style: normal;
  font-size: 32px;
  text-align: left;

  color: #fff;
}

.VideoInfo .PlayButton {
  display: flex;
  align-items: center;
  gap: 8px;

  width: fit-content;
}

.VideoInfo .PlayButton i {
  color: #ffffff;
  font-size: 64px;

  cursor: pointer;

  transition: 0.2s;
}

.VideoInfo .PlayButton i:nth-child(2) {
  font-family: "Zhcn", system-ui;
  font-size: 32px;
}

.VideoInfo .PlayButton:hover i {
  color: #ffb89c;
}

.VideoInfo a {
  display: inline-block;

  margin-top: 32px;

  font-family: "Nanum Gothic Coding", monospace;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  text-align: left;

  color: #fff;

  transition: 0.2s;
}

.VideoInfo a:hover {
  color: #ffb89c;
}

.VideoList {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.VideoList .Video {
  position: relative;

  border-radius: 5px;

  cursor: pointer;

  overflow: hidden;
}

.VideoList .Video .VideoBackground {
  height: 160px;
  aspect-ratio: 16/10;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s;
}

.VideoList .Video:hover .VideoBackground {
  filter: brightness(0.5);
}

.VideoList .Video .VideoBackground img {
  width: 100%;
  height: 100%;

  object-position: center;
  object-fit: cover;

  user-select: none;
  -webkit-user-drag: none;
}

.VideoList .Video .PlayButton {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  filter: opacity(0);
  transition: 0.2s;
}

.VideoList .Video:hover .PlayButton {
  filter: opacity(1);
}

.VideoList .Video .PlayButton i {
  color: #ffffff;
  font-size: 48px;
  transition: 0.2s;
}

.VideoList .Video:hover .PlayButton i {
  color: #ffb89c;
}

.Videos .Background {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: v-bind(currentVideoCssUrl);
  background-position: center;
  background-size: cover;

  transition: background-image 0.2s ease-in-out;
  filter: brightness(0.5);
}

.VideoPlayer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background: #000000aa;
}

.VideoPlayer iframe {
  width: 80%;
}

@media (max-width: 920px) {
  .Videos {
    padding: 20px;
  }

  .Videos .VideoList {
    width: 100%;
  }

  .Videos .VideoInfo {
    display: none;
  }
}
</style>