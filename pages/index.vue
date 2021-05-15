<template>
  <div class="column">
    <VueScrollSnap>
      <div
        class="section item"
        id="home"
        :style="{ 'padding-left': '2%', 'padding-right': '2%' }"
      >
        <h1 :style="{ 'margin-bottom': '60px' }">MichaelHarrison.dev</h1>
        <span class="introText"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          numquam laborum cupiditate vero asperiores possimus consectetur error
          doloribus? A quaerat ullam ipsa dignissimos quod, consequatur optio
          facere saepe ut sequi. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque voluptas architecto tempore illo obcaecati
          sit rerum exercitationem libero atque, quaerat deserunt doloremque
          aliquam mollitia in dolorum quisquam dicta, hic dolorem.</span
        >
      </div>
      <div class="section item resume" id="resume">
        <div class="container">
          <h2
            :style="{
              marginTop: '20px',
              textAlign: 'center',
              marginBottom: '30px',
            }"
          >
            Where I've Worked
          </h2>
          <div
            :style="{
              marginBottom: '40px',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
            }"
          >
            <a-button
              :style="{
                width: '200px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }"
              type="primary"
            >
              Full Resume
            </a-button>
            <a-button
              :style="{
                width: '200px',
                height: '50px',
                marginLeft: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }"
              type="primary"
            >
              LinkedIn
            </a-button>
          </div>
          <Timeline
            :timeline-items="timelineItems"
            :message-when-no-items="messageWhenNoItems"
            :show-day-and-month="true"
            order="desc"
          />
        </div>
      </div>
      <div class="section item" id="projects">
        <div class="container">
          <h2 :style="{ textAlign: 'start' }">ProvenDB</h2>
          <ProjectCard
            project="provendb"
            title="ProvenDB"
            color="#4c7d9b"
            subtitle="Blockchain Enabled Database"
            class="provenDB"
            :source="null"
            :tags="['NodeJS', 'GoLang', 'Kubernetes', 'Azure', 'Blockchain']"
            website="https://provendb.com"
          />
        </div>
      </div>
      <div class="section item" id="compVault">
        <div class="container">
          <h2 :style="{ textAlign: 'start' }">Compliance Vault</h2>
          <ProjectCard
            project="compvault"
            title="Compliance Vault"
            color="#7cadcb"
            subtitle="Digital Store for Compliance Documentation."
            class="compVault"
            :source="null"
            :tags="['NodeJS', 'React', 'GraphQL', 'MongoDB']"
            website="https://www.provendb.com/solutions/compliance"
          />
        </div>
      </div>
      <div class="section item" id="dbKoda">
        <div class="container">
          <h2 :style="{ textAlign: 'start' }">dbKoda</h2>
          <ProjectCard
            project="dbkoda"
            color="#40455E"
            title="dbKoda"
            subtitle="Open Source MongoDB IDE"
            class="dbKoda"
            :tags="['NodeJS', 'React', 'Electron', 'MongoDB']"
            source="https://github.com/SouthbankSoftware/dbkoda"
            website="https://dbkoda.com"
          />
        </div>
      </div>
      <div class="section item" id="learn2play">
        <div class="container">
          <h2 :style="{ textAlign: 'start' }">Learn2Play</h2>
          <ProjectCard
            project="l2p"
            color="#3f5466"
            title="Learn2Play"
            subtitle="Cross Platform Digital Manuals"
            class="l2p"
            :source="null"
            :tags="['Dart', 'Flutter', 'Mobile', 'Firebase']"
            website="https://learn2play.landen.co/"
          />
        </div>
      </div>
      <div class="section item" id="publications">
        <h2
          :style="{
            marginTop: '20px',
            textAlign: 'center',
            marginBottom: '30px',
          }"
        >
          Publications
        </h2>
        <div :style="{ marginLeft: 'auto', marginRight: 'auto' }">
          <a-button
            href="https://medium.com/@mike_831"
            target="__none"
            :style="{
              width: '200px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }"
            type="primary"
          >
            Medium Articles
          </a-button>
        </div>
        <div class="publication">
          <h4><i>Apress - April 2021</i></h4>
          <h3>MongoDB Performance Tuning</h3>
          <h4>Optimizing MongoDB Databases and their Applications</h4>
          <span
            >Fast and complete guide to optimize the performance of MongoDB
            databases and the applications that depend on them.</span
          >
          <div class="footer">
            <a-button
              type="primary"
              href="https://www.apress.com/gp/book/9781484268780"
              target="__none"
              >Read It</a-button
            >
          </div>
        </div>
        <div class="publication">
          <h4><i>Packt - December 2020</i></h4>
          <h3>MongoDB Fundamentals</h3>
          <h4>
            A hands on guide to using MongoDB and Atlas in the real world.
          </h4>
          <span
            >A practical, excercise based guide to learning the essential
            MongoDB skills required in the workplace with a hands-on
            focus.</span
          >
          <div class="footer">
            <a-button
              type="primary"
              href="https://www.packtpub.com/product/mongodb-fundamentals/9781839210648"
              target="__none"
              >Read It</a-button
            >
          </div>
        </div>
      </div>
      <div class="section item" id="contact">
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
        from: new Date(2018, 11),
        title: 'Lead Developer - Southbank Software',
        description:
          'Lead recruitment, design and development from the ground up for ProvenDB, a Blockchain Enabled Database and the Compliance Vault, a web app allowing users to easily anchor their compliance documentation on public block chains. Responsabilities included full stack development, cloud architecture and leading the team using agile methodologies. ',
      },
      {
        from: new Date(2016, 11),
        title: 'Senior Developer - Southbank Software',
        description:
          'Senior developer and Scrum Master on dbKoda, a next generation, open source IDE for MongoDB. Responsabilities included running agile related activities, along side both front and back end development of an Electron App.',
      },
      {
        from: new Date(2016, 2),
        title: 'Team Lead - Telstra Automation',
        description:
          'Lead a small team of 3 developers to create bespoke Automation and Dashboard solutions for internal and external stake holders. Key responsabilties included requirements gathering, solution design, coordinating with stakeholders and developing both front and back end.',
      },
      {
        from: new Date(2015, 2),
        title: 'Developer - Telstra Big Data',
        description:
          'Junior Developer at Telstra Big Data as part of the Telstra Graduate Program. Main responsability involved maintaining Splunk ingestion pipelines, NPS data cleansing pipelines and creation of a customer experience dashboard.',
      },
    ],
  }),
})
</script>

<style>
.container {
  margin-top: 40px;
  width: 100%;
  margin: 0 0;
  min-height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1280px;
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
  justify-content: center;
  align-items: center;
}
</style>
