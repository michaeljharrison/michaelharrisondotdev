<template>
  <div class="projectCard">
    <h1>PROJECT</h1>
  </div>
</template>

<style lang="less" scoped>
.projectCard {
  background: white;
  min-width: 80%;
  min-height: 300px;
  height: 45%;
  max-height: 500px;
  flex-grow: 1;
  display: flex;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: 30px;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-top-left-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 0px;

  //background: white !important;
  h1 {
    color: white;
  }
}

.projectCard:nth-child(even) {
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
</style>
