<template>
  <div class="projectCard">
    <a-modal v-model="visible" :title="title" @ok="handleOk">
      <p>Under construction</p>
    </a-modal>
    <div class="stripe"></div>
    <div class="content">
      <img
        :class="project"
        :src="require(`../assets/images/${project}-logo.svg`)"
      />
      <div class="stack">
        <a-tag v-for="tag in tags" :key="tag" :color="color">{{ tag }}</a-tag>
      </div>
      <h3 :style="{ textAlign: 'start' }">{{ subtitle }}</h3>
      <span class="about" :style="{ textAlign: 'start' }"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quo
        ex veritatis, mollitia ullam labore. Quo nisi, animi, numquam vero
        dolorem mollitia amet eum veritatis autem vitae quaerat pariatur
        expedita!</span
      >

      <div class="buttons">
        <a-button v-if="source" target="__none" :href="source">
          Source Code
        </a-button>
        <a-button v-if="website" target="__none" :href="website">
          Website
        </a-button>
        <a-button type="primary" @click="showModal"> Screenshots</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['project', 'subtitle', 'color', 'source', 'website', 'title', 'tags'],
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
    capitalize(str) {
      const lower = str.toLowerCase()
      return str.charAt(0).toUpperCase() + lower.slice(1)
    },
  },
})
</script>
<style lang="less" scoped>
.projectCard {
  min-width: 100%;
  background: white;
  min-height: 65vh;
  max-height: 80vh;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  border-top-left-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 0px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.75);

  .content {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    width: 100%;
    text-align: start;
    img {
      width: 40%;
    }
  }
  .stripe {
    height: auto;
    width: 16%;
    background-color: black;
    border-top-left-radius: 15px;
  }
  //background: white !important;
  h3 {
    color: white;
    font-size: 24px;
    text-align: start;
  }
}

.ant-modal {
  min-width: 94vw;
}
</style>
