<template>
  <div class="column">
    <h1 :style="{ 'margin-bottom': '60px' }">MichaelHarrison.dev</h1>
    <div class="section snap">
      <h2>About Me</h2>
      <span
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo numquam
        laborum cupiditate vero asperiores possimus consectetur error doloribus?
        A quaerat ullam ipsa dignissimos quod, consequatur optio facere saepe ut
        sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        voluptas architecto tempore illo obcaecati sit rerum exercitationem
        libero atque, quaerat deserunt doloremque aliquam mollitia in dolorum
        quisquam dicta, hic dolorem.</span
      >
    </div>
    <div class="section snap">
      <h2>Where I've Worked</h2>
      <Timeline
        :timeline-items="timelineItems"
        :message-when-no-items="messageWhenNoItems"
        :show-day-and-month="true"
        order="desc"
      />
    </div>
    <div class="section item">
      <h2 :style="{ 'margin-bottom': '0px' }">Stuff I've Built</h2>
      <div class="container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Timeline from 'timeline-vuejs'
export default Vue.extend({
  components: { Timeline },
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
</style>
