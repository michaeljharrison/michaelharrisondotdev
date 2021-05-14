<template>
  <div class="projectCard">
    <div class="stripe"></div>
    <div class="content">
      <h1>{{ project }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['project'],
})
</script>
<style lang="less" scoped>
.projectCard {
  min-width: 100%;
  background: white;
  min-height: 65vh;
  max-height: 80vh;
  flex-grow: 1;
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-top-left-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 0px;

  .content {
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
  .stripe {
    height: auto;
    width: 16%;
    background-color: black;
    margin-left: 4%;
  }
  //background: white !important;
  h1 {
    color: white;
    font-size: 40px;
  }
}

.projectCard:nth-child(even) {
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
</style>
