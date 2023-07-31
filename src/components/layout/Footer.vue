<template>
  <div>
    <footer class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="single-footer-widget">
              <div class="logo">
                <router-link to="/"
                  ><img src="../../assets/images/black-logo.png" alt="logo"
                /></router-link>
                <p>
                  Завдяки нашому професіоналізму та бездоганній репутації ми
                  щодня надаємо допомогу людям похилого віку та піклуємося про
                  ваших близьких. Вибираючи нас, ви можете бути впевнені в
                  якісному догляді за своїми родичами.
                </p>
              </div>

              <!-- <ul class="social-links">
                <li>
                  <a href="https://www.facebook.com/" target="_blank"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </li>
              </ul> -->
            </div>
          </div>

          <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="single-footer-widget pl-5">
              <h3>Посилання</h3>

              <ul class="list">
                <li><router-link to="/about-us">Про пансіонат</router-link></li>
                <li><router-link to="/features-1">Послуги</router-link></li>
                <!-- <li><router-link to="/pricing">Ціни</router-link></li> -->
                <li><router-link to="/blog">Блог</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="single-footer-widget">
              <h3>Допомога</h3>

              <ul class="list">
                <li>
                  <router-link to="/faq"
                    >Відповіді на постійні запитання</router-link
                  >
                </li>
                <li><router-link to="/contact">Контакти</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="single-footer-widget">
              <h3>Контактна інформація</h3>

              <ul class="footer-contact-info">
                <li>
                  <span>Адреса: </span>
                  <a
                    href="https://goo.gl/maps/eBvR4PdtvYRyFZKAA"
                    target="_blank"
                    >Бровари, вулиця Пантелеймона Куліша</a
                  >
                </li>
                <li>
                  <span>Адреса: </span>
                  <a
                    href="https://goo.gl/maps/7tW93yVqAdm1qqkLA"
                    target="_blank"
                    >Бровари, вул. Чубинского 38</a
                  >
                </li>
                <li>
                  <span>Адреса: </span>
                  <a
                    href="https://goo.gl/maps/UG7rvaiXbMPxbdag9"
                    target="_blank"
                    >Ворзель, вул. Тюльпанова 12</a
                  >
                </li>
                <li>
                  <span>Адреса: </span>
                  <a
                    href="https://goo.gl/maps/c4gf45ZPtE1VGo8VA"
                    target="_blank"
                    >Зазим'є, вул. Широка 94</a
                  >
                </li>
                <li>
                  <span>Адреса: </span>
                  <a
                    href="https://goo.gl/maps/hjxGMdvEsRdHmTru6"
                    target="_blank"
                    >Літки, провулок Мельника, 8</a
                  >
                </li>
                <li>
                  <span>Email: </span>
                  <a href="lovedp.kiev.ua@gmail.com"
                    >lovedp.kiev.ua@gmail.com</a
                  >
                </li>
                <li>
                  <span>Телефон: </span>
                  <a href="tel:+380672262774"> +38 (067) 226-27-74</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="copyright-area">
          <p>
            &copy; {{ currentYear }} Усі права захищені. Розробник
            <a href="tel:+380931199218" target="_blank">Гаркуша Артур</a>
          </p>
        </div>
      </div>

      <div class="map-image">
        <img src="../../assets/images/map.png" alt="map" />
      </div>
    </footer>
    <!-- End Footer Area -->

    <div
      @click="scrollToTop()"
      :class="['back-to-top-btn', { 'go-top': isTop }]"
    >
      <i class="fas fa-arrow-up"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      isTop: false,
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isTop = true;
      } else {
        that.isTop = false;
      }
    });
  },
};
</script>
