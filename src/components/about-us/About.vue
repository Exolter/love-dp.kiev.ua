<template>
  <div>
    <div class="about-area ptb-70">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="about-content">
              <span>Корисна інформація</span>
              <h2>Коротко про Пансіонат</h2>
              <p>
                Дім пристарілих "Любов" - це мережа пансіонатів в Києві та
                області. Ми займаємося доглядом за людьми похилого віку, а також
                инвалідами чи післяопераційними клієнтами. Авжеж, завдяки
                висококваліфікованому персоналу у сфері медицини. Будинки
                спеціально облаштовані для комфортного проживання, а також мають
                великі майданчики для прогулянок на подвір'ї. Наші клієнти
                завжди знаходяться під контролем санітарів, сиділок, медсестер,
                психологу та адміністратору будику.
              </p>
              <p>
                Завдяки більш ніж 5-ти річному досвіду роботи у сфері догляду за
                близькими - в компетенції нашого сервісу, перейматись не
                потрібно. Працюючи у правовому полі, ми гарантуємо безпеку та
                повний спектр послуг, який потрібен саме вашій родині. Ми, як
                ніхто інший, розуміємося в індивідуальному підході до наших
                мешканців - як с точки зору фізичних вад, а також психологічного
                здоров'я.
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="about-image">
              <img src="../../assets/images/about-img1.webp" alt="image" />

              <!-- <div 
                                class="video-btn popup-youtube"
                                v-on:click="isPopupMethod(isPopup)"
                                style="cursor: pointer"
                            >
                                <i class='fas fa-play'></i>
                            </div> -->
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
            <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
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
