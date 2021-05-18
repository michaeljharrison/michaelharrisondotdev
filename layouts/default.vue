<template>
  <div>
    <a-layout id="components-layout-demo-fixed" class="layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <a-menu
          v-model="current"
          class="menu"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="home" class="logo">
            <a href="#home">MH.dev</a>
          </a-menu-item>
          <a-menu-item key="resume"> <a href="#resume">Resume</a> </a-menu-item>
          <a-menu-item key="projects">
            <a href="#projects">Projects</a>
          </a-menu-item>
          <a-menu-item key="publications">
            <a href="#publications">Publications</a>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ paddingTop: '64px' }">
        <div :style="{ minHeight: '380px' }">
          <Nuxt />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      current: ['home'],
    }
  },
})
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.menu {
  max-width: 1280px;
}
</style>
