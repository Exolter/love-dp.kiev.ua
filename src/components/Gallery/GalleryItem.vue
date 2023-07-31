<template>
  <div class="gallery-item" @click="showModal">
    <img :src="src" alt="" />
    <modal-window v-if="isModalVisible" @close="isModalVisible = false">
      <img :src="src" alt="" />
    </modal-window>
  </div>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";

export default {
  name: "GalleryItem",
  components: {
    ModalWindow,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
  },
};
</script>

<style>
.gallery-item {
  cursor: pointer;
  margin: 10px;
  flex: 1;
}

.gallery-item img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
