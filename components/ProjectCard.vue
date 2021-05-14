<template>
  <div class="projectCard">
    <div class="stripe"></div>
    <div class="content">
      <img
        :class="project"
        :src="require(`../assets/images/${project}-logo.svg`)"
      />
      <h3>{{ subtitle }}</h3>
      <span
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quo
        ex veritatis, mollitia ullam labore. Quo nisi, animi, numquam vero
        dolorem mollitia amet eum veritatis autem vitae quaerat pariatur
        expedita!</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['project', 'subtitle'],
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

.projectCard:nth-child(even) {
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
</style>
