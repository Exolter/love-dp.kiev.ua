<template>
  <div>
    <div class="about-area ptb-70">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="about-content">
              <!-- <span>Корисна інформація</span> -->
              <h2>Реабілітація</h2>
              <!-- <p>
                На відео зображений реабілітолог та список послуг, які ми
                надаємо в наших пансіонатах
              </p> -->
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="about-image">
              <img src="../../assets/images/reabilitation.webp" alt="image" />
              <div
                class="video-btn popup-youtube"
                v-on:click="isPopupMethod(isPopup)"
                style="cursor: pointer"
              >
                <i class="fas fa-play"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup-video" v-if="isPopup">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="popup-overlay-close" v-on:click="isPopupMethod(isPopup)">
            <div class="popup-overlay-close-line"></div>
            <div class="popup-overlay-close-line"></div>
          </div>
          <div class="play-video">
            <iframe src="https://www.youtube.com/embed/kIybwc9frBw"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoTitle",
  data() {
    return {
      isPopup: false,
    };
  },
  methods: {
    isPopupMethod(isPopup) {
      return (this.isPopup = !isPopup);
    },
  },
};
</script>
