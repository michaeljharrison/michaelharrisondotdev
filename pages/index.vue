<template>
  <div class="column">
    <VueScrollSnap>
      <div
        id="home"
        ref="homeRef"
        class="section item sec1"
        :style="{ 'padding-left': '2%', 'padding-right': '2%' }"
      >
        <div>
          <h1 :style="{ 'margin-bottom': '0px' }">Michael Harrison.dev</h1>
          <h3 class="subtitle">Developer and Massive Geek.</h3>
        </div>
        <img
          class="dp"
          :alt="`A stylized illustration of a handsome developer.`"
          :src="require(`../assets/images/mike-hero-dp.jpg`)"
        />
        <span class="introText"
          >I'm a full-stack software engineer, which really just means I can
          create bugs in a lot of different places. I'm also a reluctant SCRUM
          master, meaning I own a lot of colored markers. I have a passion for
          user centered design and love to collaborate on cool projects. My
          primary experience encompesses NodeJS front and back end, Golang back
          end and Cloud hosted Kubernetes.</span
        >
      </div>
      <div id="resume" class="section item resume sec2">
        <div class="container">
          <h2
            :style="{
              paddingTop: '64px',
              textAlign: 'center',
              marginBottom: '20px',
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
              justifyContent: 'center',
            }"
          >
            <a
              href="https://www.linkedin.com/in/michaelharrisonaus/"
              target="__none"
            >
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
            </a>
          </div>
          <Timeline
            :timeline-items="timelineItems"
            :message-when-no-items="messageWhenNoItems"
            :show-day-and-month="true"
            order="desc"
          />
        </div>
      </div>
      <div id="projects" class="section item sec3">
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
            description="ProvenDB uses Blockchain technology to create the world’s first genuinely trustworthy database. ProvenDB is for regulated industries or wherever impeccable data integrity is crucial. Solutions include DBAAS, Dockerized on premise deployment and devloper API integrations."
          />
        </div>
      </div>
      <div id="compVault" class="section item sec4">
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
            description="Compliance Vault provides a tamper-resistant digital store for your compliance data and documentation. We guarantee the origin, ownership, versioning, and security of your documents to satisfy the most rigorous compliance audit. Allows API integration for developers as well as a robust user interface for consumer document storage."
          />
        </div>
      </div>
      <div id="dbKoda" class="section item sec5">
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
            description="dbKoda is the open-source, next generation IDE for MongoDB. Take your database to the next level with a Rich Code Editor, Connection Manager, Visual Aggregation builder and Performance Dashboard. Avaliable for download on Windows, Linux and MacOS, completely free, completely open source."
          />
        </div>
      </div>
      <div id="learn2play" class="section item sec6">
        <div class="container">
          <h2 :style="{ textAlign: 'start' }">Learn2Play</h2>
          <ProjectCard
            project="l2p"
            color="#65D4BA"
            title="Learn2Play"
            subtitle="Cross Platform Digital Manuals"
            class="l2p"
            :source="null"
            :tags="['Dart', 'Flutter', 'Mobile', 'Firebase']"
            website="https://learn2play.landen.co/"
            description="We love board games, but we hate reading through the manual. Learn2Play lets you start playing your favourite games straight out of the box. Quick and easy visual guides to get you playing straight away. Built using Flutter and avaliable on Android and iOS."
          />
        </div>
      </div>
      <div id="publications" class="section item publications sec7">
        <div class="container">
          <h2
            :style="{
              paddingTop: '64px',
              textAlign: 'center',
              marginBottom: '20px',
            }"
          >
            Publications
          </h2>
          <div class="publication item">
            <h4><i>Book - Apress - April 2021</i></h4>
            <h3>MongoDB Performance Tuning</h3>
            <h4>Optimizing MongoDB Databases and their Applications</h4>
            <span :style="{ textAlign: 'start' }" class="about"
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
            <h4><i>Book - Packt - December 2020</i></h4>
            <h3>MongoDB Fundamentals</h3>
            <h4>
              A hands on guide to using MongoDB and Atlas in the real world.
            </h4>
            <span :style="{ textAlign: 'start' }" class="about"
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
          <div class="publication item">
            <h4><i>Blog Post - Medium - July 2019</i></h4>
            <h3>Building a NodeJS/Blockchain app in 15 minutes</h3>
            <h4>Step by step tutorial creating blockchain app.</h4>
            <span :style="{ textAlign: 'start' }" class="about"
              >Using ProvenDB and create-react-app this tutorial shows you how
              to spin up a web based blockchain-integrated app in under 15
              minutes, for free.</span
            >
            <div class="footer">
              <a-button
                type="primary"
                href="https://medium.com/provendb/building-a-nodejs-blockchain-app-in-15-minutes-7dfc85d99ac9"
                target="__none"
                >Read It</a-button
              >
            </div>
          </div>
          <div class="publication item">
            <h4><i>Blog Post - Medium - April 2018</i></h4>
            <h3>dbKoda Tips and Tricks</h3>
            <h4>Useful tips and tricks for the dbKoda application.</h4>
            <span :style="{ textAlign: 'start' }" class="about"
              >dbKoda contains a huge trove of features to help you work with
              your MongoDB deployments, here are some you might not know
              about.</span
            >
            <div class="footer">
              <a-button
                type="primary"
                href="https://medium.com/dbkoda/getting-started-with-mongodb-and-dbkoda-816da494005"
                target="__none"
                >Read It</a-button
              >
            </div>
          </div>
          <div class="publication item">
            <h4><i>Blog Post - Medium - December 2017</i></h4>
            <h3>Getting Started with MongoDB and dbKoda</h3>
            <h4>MongoDB is hard, dbKoda makes it easier.</h4>
            <span :style="{ textAlign: 'start' }" class="about"
              >MongoDB can be very difficult to get started with, but by using a
              free GUI like dbKoda, you can get the most out of MongoDB quickly
              and easily.</span
            >
            <div class="footer">
              <a-button
                type="primary"
                href="https://medium.com/dbkoda/getting-started-with-mongodb-and-dbkoda-816da494005"
                target="__none"
                >Read It</a-button
              >
            </div>
          </div>
        </div>
        <a :style="{ marginTop: '10px' }" href="#home">
          <a-button type="primary" shape="circle" icon="arrow-up" />
        </a>

        <div :style="{ textAlign: 'center', marginTop: '30px' }">
          <div>
            <a href="https://github.com/michaeljharrison" target="__none">
              <a-button type="primary" shape="circle" icon="github" />
            </a>
            <a href="https://twitter.com/Code_With_MikeH" target="__none">
              <a-button type="primary" shape="circle" icon="twitter" />
            </a>
            <a href="https://medium.com/@mike_831" target="__none">
              <a-button type="primary" shape="circle" icon="medium" />
            </a>
            <a
              href="https://www.linkedin.com/in/michaelharrisonaus/"
              target="__none"
            >
              <a-button type="primary" shape="circle" icon="linkedin" />
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
          'Recruitment, Design and Development from the ground up for ProvenDB, a Blockchain Enabled Database and the Compliance Vault, consumer blockchain proofs for important documents.\nKey Responsibilities and Technologies:\n - Full stack development including cloud architecture.\n - Deep understanding of Blockchain and DLT.\n - Deployment of Kubernetes infrastructure on Google Cloud and Azure.\n - Docker and Kubernetes.\n - Blockchain and Cryptography\n - Golang',
      },
      {
        from: new Date(2016, 11),
        title: 'Senior Developer - Southbank Software',
        description:
          'Senior Developer and Scrum Master on dbKoda, a next generation, open source IDE for MongoDB. \nKey Responsibilities and Technologies:\n - Full stack development for an Electron Application.\n - Deep understanding of MongoDB and Database practices.\n - CI and CD pipelines for application delivery.\n - MERN Stack (MongoDB/Express/React/NodeJS).\n - Marketing and exhibiting of application.\n - SCRUM master for project.',
      },
      {
        from: new Date(2016, 2),
        title: 'Team Lead - Telstra Automation',
        description:
          'Lead a small team of 3 developers to create bespoke Automation and Dashboard solutions for internal and external stake holders. \nKey Responsibilities and Technologies:\n - User Experience design and revamp for existing Web Applications. \n - Development of new platform architecture and database design.\n - ITIL ticketing and workflow automation.\n - LAMP Stack, MySQL and Postgres.\n - GoLang and Javascript',
      },
      {
        from: new Date(2015, 2),
        title: 'Developer - Telstra Big Data',
        description:
          'Junior Developer at Telstra Big Data as part of the Telstra Graduate Program.\nKey Responsibilities and Technologies:\n - Data Quality monitoring and process improvment.\n - Data Quality dashboarding, Data Sourcing and Data Ingestion.\n - Hadoop and Hive.\n - SpringXD Framework. \n - Splunk scripting, ingestion pipelines and dashboarding.',
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
