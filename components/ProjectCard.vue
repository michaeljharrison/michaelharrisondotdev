<template>
  <div class="projectCard">
    <a-modal v-model="visible" :title="title" @ok="handleOk">
      <a-carousel>
        <div
          :style="{
            display: 'flex !important',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <img
            class="screenshot"
            :alt="`Screenshot 1 of ${project}.`"
            :src="require(`../assets/images/screenshots/${project}-1.jpeg`)"
          />
        </div>
        <div
          :style="{
            display: 'flex !important',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <img
            class="screenshot"
            :alt="`Screenshot 2 of ${project}.`"
            :src="require(`../assets/images/screenshots/${project}-2.jpeg`)"
          />
        </div>
        <div
          :style="{
            display: 'flex !important',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <img
            class="screenshot"
            :alt="`Screenshot 3 of ${project}.`"
            :src="require(`../assets/images/screenshots/${project}-3.jpeg`)"
          />
        </div>
      </a-carousel>
    </a-modal>
    <div class="stripe"></div>
    <div class="content">
      <img
        :class="project"
        :alt="`${project} logo.`"
        :src="require(`../assets/images/${project}-logo.svg`)"
      />
      <div class="stack">
        <a-tag v-for="tag in tags" :key="tag" :color="color">{{ tag }}</a-tag>
      </div>
      <h3 :style="{ textAlign: 'start' }">{{ subtitle }}</h3>
      <span class="about" :style="{ textAlign: 'start' }">{{
        description
      }}</span>

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
  props: [
    'project',
    'subtitle',
    'color',
    'source',
    'website',
    'title',
    'tags',
    'description',
  ],
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
.ant-carousel {
  .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
  }
  .custom-slick-arrow:before {
    display: none;
  }
  .custom-slick-arrow:hover {
    opacity: 0.5;
  }

  .slick-slide h3 {
    color: #fff;
  }
}
</style>
