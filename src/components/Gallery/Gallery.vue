<template>
  <div class="gallery">
    <div class="gallery__list">
      <gallery-item
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        @click="openGallery(index)"
      />
    </div>
    <popup-gallery
      :images="images"
      :current-index="currentIndex"
      v-if="showGallery"
      @close="closeGallery"
    />
  </div>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";

export default {
  name: "Gallery",
  components: {
    GalleryItem,
  },
  data() {
    return {
      images: [
        {
          src: "https://www.google.com/maps/place/%D0%A7%D0%B0%D1%81%D1%82%D0%BD%D1%8B%D0%B9+%D0%B4%D0%BE%D0%BC+%D0%BF%D1%80%D0%B5%D1%81%D1%82%D0%B0%D1%80%D0%B5%D0%BB%D1%8B%D1%85+%22%D0%9B%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C%22/@50.5245766,30.7808744,3a,75.9y,90t/data=!3m8!1e2!3m6!1sAF1QipNe35ZgUz769r04fLKznbM95QAKt4EbYyVGX98U!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNe35ZgUz769r04fLKznbM95QAKt4EbYyVGX98U%3Dw203-h152-k-no!7i1024!8i768!4m6!3m5!1s0x40d4d9202ddaa9df:0xb490cbc18198a219!8m2!3d50.524624!4d30.7810553!16s%2Fg%2F11q9520mrk#",
          alt: "Image 1",
        },
        {
          src: "@/assets/images/borshagovka/IMG_5868.webp",
          alt: "Image 2",
        },
        {
          src: "@/assets/images/borshagovka/IMG_5869.webp",
          alt: "Image 3",
        },
        {
          src: "@/assets/images/borshagovka/IMG_5870.webp",
          alt: "Image 4",
        },
      ],
      showGallery: false,
      currentIndex: 0,
    };
  },
  methods: {
    openGallery(index) {
      this.currentIndex = index;
      this.showGallery = true;
    },
    closeGallery() {
      this.showGallery = false;
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

@media (max-width: 768px) {
  .gallery__list {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
