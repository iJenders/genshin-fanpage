<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="Wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/regions">Regions</RouterLink>
        <RouterLink to="/characters">Characters</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="FooterContent">
      <div class="Info">
        <h2>Information</h2>
        <p>This isn't an Genshin Impact official webpage and it is maintained by iJenders</p>
        <p>Genshin Impact™ is a trademark of Cognosphere. Game content and materials are trademarks and copyrights of
          their respective publisher and its licensors.</p>
        <p>Copyright © COGNOSPHERE. All Rights Reserved.</p>
      </div>
      <div class="Links">
        <h2>Official links</h2>
        <a target="_blank" href="https://genshin.hoyoverse.com/">
          <i class="fa-solid fa-globe"></i>
          Website
        </a>
        <a target="_blank" href="https://x.com/genshinimpact">
          <i class="fa-brands fa-x-twitter"></i>
          X (Twitter)
        </a>
        <a target="_blank" href="https://www.youtube.com/@GenshinImpact/">
          <i class="fa-brands fa-youtube"></i>
          Youtube
        </a>
        <a target="_blank" href="https://www.facebook.com/Genshinimpact/">
          <i class="fa-brands fa-facebook"></i>
          Facebook
        </a>
        <a target="_blank" href="https://www.instagram.com/genshinimpact/">
          <i class="fa-brands fa-instagram"></i>
          Instagram
        </a>
        <a target="_blank" href="https://www.reddit.com/r/Genshin_Impact/">
          <i class="fa-brands fa-reddit"></i>
          Reddit
        </a>
        <a target="_blank" href="https://www.twitch.tv/genshinimpactofficial">
          <i class="fa-brands fa-twitch"></i>
          Twitch
        </a>
      </div>
    </div>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&family=Protest+Guerrilla&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@font-face {
  font-family: "ZhCn";
  src: url('/src/fonts/zh-cn.ttf');
}

;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #000000;
}

header {
  position: fixed;
  z-index: 10;

  width: 100%;
  backdrop-filter: blur(5px) brightness(0.95);
}

header .Wrapper nav {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 0;
  margin: 0 10%;

  border-bottom: solid 2px #fff5;
}

header .Wrapper nav a {
  padding: 8px;

  font-size: 16px;
  font-family: "Nanum Gothic Coding", monospace;
  font-weight: 700;
  font-style: normal;

  color: #fff;

  text-transform: uppercase;
  text-decoration: none;
}

footer {
  position: relative;
  width: 100%;
}

footer::before {
  content: '';
  position: absolute;
  top: -8px;
  z-index: 10;

  width: 100%;
  height: 8px;
  background: linear-gradient(0deg, #000000, transparent);
}

.FooterContent {
  width: 100%;
  padding: 24px;
  padding-top: 64px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 64px;

  background: #000;
}

.FooterContent .Info,
.FooterContent .Links {
  max-width: 50%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
}

.FooterContent p,
.FooterContent h2,
.FooterContent a {
  font-family: "Roboto", system-ui;
  font-weight: 400;
  font-style: normal;

  color: #aaa;

  text-decoration: none;
}

.FooterContent h2 {
  padding-bottom: 8px;
  font-size: 24px;
}

.FooterContent p {
  padding: 8px;
  margin-left: 8px;
  font-size: 12px;
}

.FooterContent a {
  display: inline-block;
  width: fit-content;
  padding: 8px;
  margin-left: 8px;
  font-size: 12px;

  transition: 0.2s;
}

.FooterContent a:hover {
  color: #fff;
}

.FooterContent i {
  padding-right: 8px;
}
</style>