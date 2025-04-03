<template>
  <Carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
    <Slide v-for="(item, index) in items" :key="index">
      <div class="carousel-item">
        <div>
          <iframe :src="item.src" class="image"> </iframe>
        </div>

        <div class="content">
          <!-- <h4 class="tag">{{ item.tag }}</h4> -->
          <h2 class="title">{{ item.title }}</h2>
          <p class="description">{{ item.description }}</p>
          <a
            target="_blank"
            :href="item.src"
            class="text-sm mt-4 py-3 px-6 border rounded-full font-bold text-primary-500 bg-white hover:bg-primary-500 hover:text-white transition-all inline-block"
          >
            <span> WATCH VIDEO </span>
            <v-icon name="pr-arrow-up-right" scale="1" />
          </a>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/carousel.css"; // Import styles

export default defineComponent({
  components: { Carousel, Slide, Pagination, Navigation },
  data() {
    return {
      items: [
        {
          src: "https://www.youtube.com/embed/DrOMxcb5vTw?si=O8gQSh01HYHZR_Ga",
          tag: "NEWS",
          title: "Emergency officials evacuate Maiduguri flood victims",
          description:
            "Emergency workers step up rescue efforts to evacuate thousands trapped in their homes after flood waters swept across #Maiduguri in northeast #Nigeria. Fidelis Mbah has more.",
        },
        {
          src: "https://www.youtube.com/embed/0sRnn2ZtWR4",
          tag: "NEWS",
          title: "Nigeria investigates military drone attacks on villagers.",
          description:
            "Nigeria’s army has admitted to making a mistake after a drone strike hit worshippers gathered to mark an important Muslim holiday event in northwest Kaduna state. Atleast 85 were killed during the attack. Fidelis Mbah visited Tudun Biri village and now reports.",
        },
        {
          src: "https://www.youtube.com/embed/_gUkcQ71FNI?si=-1IRHn5MS4KohrkX",
          tag: "NEWS",
          title: "Senegal Holds Parliamentary Elections",
          description:
            "Senegalese voters cast ballots on Sunday to elect a new parliament, The election is widely seen as a test run of the 2019 presidential election. President Macky Sall's ruling coalition is expected to retain its majority.",
        },
        {
          src: "https://www.youtube.com/embed/OLJp0EFGSzM?si=iMBC9MEoRkCqni1e",
          tag: "NEWS",
          title: "South Sudan Cancels Independence Celebrations",
          description:
            "For the second year in a row, the conflict-ridden country has cancelled festivities due to a lack of funds. In 2013, South Sudan became embroiled in a civil war that has killed tens of thousands of people. Nearly 4 million have been displaced.",
          href: "https://www.aljazeera.com/news/2021/3/2/children-seized-towns-attacked-can-nigeria-fix-security-crises",
        },
      ],
    };
  },
});
</script>

<style scoped>
.carousel-item {
  display: grid;
  grid-template-columns: 450px 400px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  /* border: 1px solid rgba(169, 169, 169, 0.348); */
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
}

.image {
  /* width: 400px; */
  margin: 0 auto;
  height: 300px;
  width: 100%;
  /* border-radius: 10px; */
}

.content {
  margin-top: 10px;
}

.tag {
  background: #5c5c5c;
  color: #fff;
  padding: 2px 4px;
  font-size: 15px;
  border-radius: 2px;
  display: inline-block;
}

.title {
  font-size: 1.5rem;
  margin: 10px 0;
  font-weight: 500;
  line-height: 30px;
}

.description {
  font-size: 14px;
  color: #555;
}

@media only screen and (max-width: 600px) {
  .carousel-item {
    grid-template-columns: auto;
    place-content: center;
    place-items: center;
  }
}
</style>
