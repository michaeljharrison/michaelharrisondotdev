<template>
  <div class="resumeItem">
    <div class="stripe"></div>
    <div class="content">
      <h3 :style="{ textAlign: 'start', opacity: '0.5', marginBottom: '0px' }">
        {{ dates }}
      </h3>
      <h2 :style="{ textAlign: 'start' }">{{ title }}</h2>
      <h3 :style="{ textAlign: 'start', marginBottom: '0px' }">
        {{ subtitle }}
      </h3>

      <span class="about" :style="{ textAlign: 'start', minWidth: '100%' }">{{
        description
      }}</span>
      <div
        class="points"
        :style="{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }"
      >
        <span v-for="point in items" :key="point" :style="{ flexGrow: 1 }">
          — {{ point }}</span
        >
      </div>
      <div class="buttons"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['title', 'subtitle', 'description', 'items', 'dates'],
  data() {
    return {}
  },
  methods: {
    capitalize(str) {
      const lower = str.toLowerCase()
      return str.charAt(0).toUpperCase() + lower.slice(1)
    },
  },
})
</script>
<style lang="less" scoped>
.resumeItem {
  min-width: 100%;
  background: white;
  min-height: 20vh;
  max-height: 50vh;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  border-top-left-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 0px;
  margin-bottom: 20px;
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
    background: linear-gradient(180deg, #8b6ea6 0%, #363951 175%);
    border-top-left-radius: 15px;
  }
  //background: white !important;
  h3 {
    text-align: start;
  }
}
</style>
