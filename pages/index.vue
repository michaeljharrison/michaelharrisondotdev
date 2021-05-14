<template>
  <div class="column">
    <VueScrollSnap>
      <div
        class="section item"
        :style="{ 'padding-left': '2%', 'padding-right': '2%' }"
      >
        <h1 :style="{ 'margin-bottom': '60px' }">MichaelHarrison.dev</h1>
        <span
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          numquam laborum cupiditate vero asperiores possimus consectetur error
          doloribus? A quaerat ullam ipsa dignissimos quod, consequatur optio
          facere saepe ut sequi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque voluptas architecto tempore illo obcaecati
          sit rerum exercitationem libero atque, quaerat deserunt doloremque
          aliquam mollitia in dolorum quisquam dicta, hic dolorem.</span
        >
      </div>
      <div class="section item">
        <h2>Where I've Worked</h2>
        <Timeline
          :timeline-items="timelineItems"
          :message-when-no-items="messageWhenNoItems"
          :show-day-and-month="true"
          order="desc"
        />
      </div>
      <div class="section item">
        <h2>My Projects</h2>
      </div>
      <div class="section item">
        <div class="container">
          <ProjectCard project="ProvenDB Database" class="provenDB" />
        </div>
      </div>
      <div class="section item">
        <div class="container">
          <ProjectCard project="Compliance Vault" class="compVault" />
        </div>
      </div>
      <div class="section item">
        <div class="container">
          <ProjectCard project="dbKoda" class="dbKoda" />
        </div>
      </div>
      <div class="section item">
        <div class="container">
          <ProjectCard project="Learn2Play" class="l2p" />
        </div>
      </div>
      <div class="section item">
        <div :style="{ textAlign: 'center' }">
          <div>
            <a href="https://github.com/michaeljharrison" target="__none">
              <a-button type="primary" shape="circle" icon="github" />
            </a>
            <a href="https://twitter.com/Code_With_MikeH" target="__none">
              <a-button type="primary" shape="circle" icon="twitter" />
            </a>
          </div>
          <div
            :style="{ textAlign: 'center', marginTop: '14px', color: 'white' }"
          >
            © 2021 Michael Harrison
          </div>
        </div>
      </div>
    </VueScrollSnap>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Timeline from 'timeline-vuejs'
import VueScrollSnap from 'vue-scroll-snap'
export default Vue.extend({
  components: { Timeline, VueScrollSnap },
  data: () => ({
    messageWhenNoItems: 'There are not items',
    timelineItems: [
      {
        from: new Date(2018, 7),
        title: 'Lead Developer - Southbank Software',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',
      },
      {
        from: new Date(2016, 1),
        title: 'Senior Developer - Southbank Software',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',
      },
      {
        from: new Date(2016, 6),
        title: 'Team Lead - Telstra Automation',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',
      },
      {
        from: new Date(2012, 1),
        title: 'Developer - Telstra Big Data',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.',
      },
    ],
  }),
})
</script>

<style>
.container {
  width: 100%;
  margin: 0 0;
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1280px;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.section {
  min-height: 100vh;
}
.snap {
  /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
  min-height: 90vh;
}
.scroll-snap-container {
  height: 96vh;
  width: 100vw;
}

.timeline {
  max-width: 100% !important;
}
.wrapper-timeline {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
