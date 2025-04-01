<template>
  <Carousel :items-to-show="1" :wrap-around="true" :autoplay="3000">
    <Slide v-for="(item, index) in items" :key="index">
      <div class="carousel-item space-x-5">
        <img :src="item.image" alt="Carousel Image" class="image" />
        <div class="content">
          <h4 class="tag">{{ item.tag }}</h4>
          <h2 class="title">{{ item.title }}</h2>
          <p class="description">{{ item.description }}</p>
          <a
            target="_blank"
            :href="item.href"
            class="text-sm mt-4 py-3 px-6 border rounded-full font-bold text-primary-500 bg-white hover:bg-primary-500 hover:text-white transition-all inline-block"
          >
            <span> LEARN MORE </span>
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
import obi from "@/assets/obi.png";
import LinkButton from "./LinkButton.vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: { Carousel, Slide, Pagination, Navigation },
  data() {
    return {
      items: [
        {
          image:
            "https://www.aljazeera.com/wp-content/uploads/2024/12/AP582079694182-1734542186.jpg?resize=770%2C513&quality=80",
          tag: "NEWS",
          title:
            "In Nigeria’s crude capital, a plan to win the war against oil theft",
          description:
            "Through improved security measures, including gunboats, authorities in Rivers State hope to stop criminals and improve production.",
          href: "https://www.aljazeera.com/news/2024/12/19/in-nigerias-crude-capital-a-plan-to-win-the-war-against-oil-theft",
        },
        {
          image:
            "https://www.aljazeera.com/wp-content/uploads/2024/02/2022-12-12T113008Z_379931144_RC2A6X9A2MH5_RTRMADP_3_NIGERIA-MILITARY-CHILDREN-1708513687.jpg?resize=770%2C513&quality=80",
          tag: "NEWS",
          title:
            "‘ECOWAS is making efforts to get across to Niger’: Nigerian defence chief",
          description:
            "Ahead of an ECOWAS summit in Abuja, the Nigerian general speaks to Al Jazeera about insecurity in West Africa.",
          href: "https://www.aljazeera.com/news/2024/2/21/qa-nigerian-army-chief-ecowas",
        },
        {
          image:
            "https://www.aljazeera.com/wp-content/uploads/2023/01/2010-03-16T120000Z_1108022299_BM2E63G0VVV01_RTRMADP_3_OPEC.jpg?resize=770%2C513&quality=80",
          tag: "NEWS",
          title: "OPEC does not control price of oil, says cartel chief",
          description:
            "OPEC president talks to Al Jazeera about output cuts, price volatility, and Russia’s war in Ukraine and its effect on oil prices.",
          href: "https://www.aljazeera.com/economy/2023/1/31/opec-does-not-control-the-price-opec-president",
        },
        {
          image:
            "https://www.aljazeera.com/wp-content/uploads/2020/12/2016-06-18T120000Z_630071213_D1AETKPXWZAA_RTRMADP_3_NIGERIA-SECURITY-NIGER.jpg?resize=770%2C513&quality=80",
          tag: "NEWS",
          title:
            "Children seized. Towns attacked. Can Nigeria fix security crises?",
          description:
            "From gangs kidnapping for ransom to armed groups overrunning towns, the government faces a series of security challenges across the country’s increasingly restive north.",
          href: "https://www.aljazeera.com/news/2021/3/2/children-seized-towns-attacked-can-nigeria-fix-security-crises",
        },
        {
          image:
            "https://www.aljazeera.com/wp-content/uploads/2021/02/2020-12-15T144408Z_270950136_RC2QNK9AOO09_RTRMADP_3_NIGERIA-SECURITY-KIDNAPPINGS.jpg?resize=770%2C513&quality=80",
          tag: "NEWS",
          title: "Dozens of Nigerian students abducted by armed ‘bandits’",
          description:
            "President Buhari has condemned abduction of 27 students from a secondary school in Niger state.",
          href: "https://www.aljazeera.com/news/2021/2/17/unspecified-number-of-nigeria-school-students-reportedly-abducted",
        },
      ],
    };
  },
});
</script>

<style scoped>
.carousel-item {
  display: grid;
  grid-template-columns: 400px 300px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid rgba(169, 169, 169, 0.348);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.image {
  width: 400px;
  margin: 0 auto;
  border-radius: 10px;
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
