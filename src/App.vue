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
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&family=Protest+Guerrilla&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@font-face {
  font-family: "ZhCn";
  src: url('/src/fonts/zh-cn.ttf');
};

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  position: fixed;
  z-index: 10;

  width: 100%;
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
</style>