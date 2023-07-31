<template>
  <div class="feedback-area ptb-70 bg-f7fafd">
    <div class="container">
      <div class="section-title">
        <h2>Відгуки наших клієнтів</h2>
        <div class="bar"></div>
        <!-- <p>
          Ці коментарі зібрані у людей після 3 місяців користування нашим
          сервісом.
        </p> -->
      </div>

      <div class="feedback-slides">
        <carousel
          :autoplay="5000"
          :settings="settings"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-feedback">
              <div class="client-img">
                <img :src="slide.image" alt="image" />
              </div>

              <h3>{{ slide.name }}</h3>
              <span>{{ slide.position }}</span>
              <p>{{ slide.description }}</p>
            </div>
          </slide>

          <template #addons>
            <Navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ManagePortfolio",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/images/clients/client-1.jpg"),
        name: "Валентина Григорівна, 80 років",
        position: "Мешкає в пансіонаті більше 12 міс.",
        description:
          "Від щирого серця дякую вашому колективу за медичний догляд і турботу!",
      },
      {
        id: 2,
        image: require("../../assets/images/clients/client-2.jpg"),
        name: "Олена Миколаївна",
        position: "Її бабуся мешкає в пансіонаті більше 8 міс.",
        description:
          "Я знаю, що з першого дня, моя бабуся в надійних руках професіоналів. Дякую за допомогу!",
      },
      {
        id: 3,
        image: require("../../assets/images/clients/client-3.jpg"),
        name: "Анастасія Сергієвна, 72 роки",
        position: "Мешкає в пансіонаті більше 4 міс.",
        description:
          "Дякую за теплий прийом та доброзичливу атмосферу в пансіонаті",
      },
    ],
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
  }),
});
</script>
