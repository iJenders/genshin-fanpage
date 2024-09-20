<script setup>
import FeatureCard from '@/components/FeatureCard.vue';
import { onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import '@/helpers/particles.js'

const features = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Vast Open World",
    description: "Explore the diverse and breathtaking landscapes of Teyvat, from lush forests to snow-capped mountains.",
    background: "FeatureCard-World",
    url: "https://act.hoyolab.com/ys/app/interactive-map/index.html"
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Elemental Combat",
    description: "Master the seven elements and engage in strategic, fast-paced battles against formidable foes.",
    background: "FeatureCard-Combat",
    url: "/"
  },
  {
    icon: "fa-solid fa-user-group",
    title: "Unique Characters",
    description: "Collect and play as a diverse cast of characters, each with their own elemental powers and backstories.",
    background: "FeatureCard-Characters",
    url: "/"
  },
]

onMounted(() => {
  window.particlesJS(
    'features',
    {
      "particles": {
        "number": {
          "value": 500,
          "density": {
            "enable": false,
            "value_area": 500
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 25,
          "color": "#ffffff",
          "opacity": 0.3,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 70,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
  )
})
onBeforeUnmount(() => {
  window.pJSDom[0].pJS.fn.vendors.destroypJS();
  window["pJSDom"] = [];
})
</script>

<template>
  <div class="AboutViewContainer">
    <div class="AboutView">
      <section class="Landing">
        <h2>
          Welcome to <span>Teyvat</span>
        </h2>
        <p>
          Embark on an epic journey across the seven nations in Genshin Impact, a breathtaking open-world adventure.
        </p>
      </section>
      <section class="Features" id="features">
        <h2>Key Features</h2>
        <div class="FeatureCardsContainer">
          <swiper @swiper="mySwiper" :slidesPerView="'auto'" :spaceBetween="30" :modules="modules"
            class="FeatureCardsSwiper" :navigation="true">
            <swiper-slide v-for="(item, index) in features" :key="index">
              <FeatureCard :icon="item.icon" :title="item.title" :description="item.description"
                :background="item.background" :url="item.url" />
            </swiper-slide>
          </swiper>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.Landing {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 600px;
  padding: 0 32px;
}

.Landing::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  background: url('/src/img/ChenyuBackground.webp');
  background-size: cover;
  background-position: center;

  filter: brightness(0.5);
}

.Landing::after {
  content: '';
  position: absolute;
  bottom: -64px;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 128px;

  backdrop-filter: blur(20px);
  mask-image: linear-gradient(0deg, transparent, #000, transparent)
}

.Landing h2 {
  font-family: "Zhcn", system-ui;
  font-size: 56px;
  text-align: center;

  color: #fff;
}

.Landing h2 span {
  color: #ffc773;
}

.Landing p {
  max-width: 700px;

  margin-top: 32px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: center;

  color: #fff;
}

.Features {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 32px;
}

.Features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  background: url('/src/img/StarsBackground.webp');
  background-size: cover;
  background-position: center;

  filter: brightness(0.5);
}

.Features h2 {
  padding-top: 64px;

  font-family: "Zhcn", system-ui;
  font-size: 32px;
  text-align: center;

  color: #fff;
}

.FeatureCardsContainer {
  width: 100%;
  padding: 64px 0;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style>
.FeatureCardsContainer .swiper-slide {
  width: fit-content;
}

.particles-js-canvas-el {
  position: absolute;
  top: 0;
  left: 0;
}
</style>