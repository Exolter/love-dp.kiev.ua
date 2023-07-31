<template>
  <div :class="['navbar-area', { 'is-sticky': isSticky }]">
    <div class="dplove-nav">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <router-link class="navbar-brand" to="/">
            <img src="../../assets/images/logo.png" alt="image" />
            <img src="../../assets/images/black-logo.png" alt="image" />
          </router-link>

          <div
            class="navbar-toggler"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
            v-bind:class="{ active: button_active_state }"
            v-on:click="button_active_state = !button_active_state"
          >
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </div>

          <b-collapse
            class="collapse navbar-collapse"
            :class="{ show: active }"
            is-nav
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link"> Головна </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about-us" class="nav-link">
                  Про пансіонат
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/team" class="nav-link">
                  Персонал
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/features-1" class="nav-link">
                  Послуги
                </router-link>
              </li>

              <!-- <li class="nav-item">
                <a href="#" class="nav-link">
                  Pages <i class="fas fa-chevron-down"></i>
                </a>

                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/about-us" class="nav-link">
                      Про пансіонат
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Features <i class="fas fa-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/features-1" class="nav-link">
                          Features Style One
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/features-2" class="nav-link">
                          Features Style Two
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/team" class="nav-link">
                      Фахівці
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pricing" class="nav-link">
                      Ціни
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link">
                      Login
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/register" class="nav-link">
                      Register
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/faq" class="nav-link"> FAQ </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/error" class="nav-link">
                      Error Page
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/terms-condition" class="nav-link">
                      Terms & Conditions
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/privacy-policy" class="nav-link">
                      Privacy Policy
                    </router-link>
                  </li>
                </ul>
              </li> -->
              <!-- <li class="nav-item">
                <router-link to="/pricing" class="nav-link"> Ціни </router-link>
              </li> -->
              <li class="nav-item">
                <router-link to="/blog-1" class="nav-link"> Блог </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">
                  Контакти
                </router-link>
              </li>
            </ul>
          </b-collapse>
          <!-- <div class="others-options">
            <router-link to="/login" class="login-btn">
              <i class="flaticon-user"></i> Log In
            </router-link>
          </div> -->
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isSticky: false,
      active: false,
      button_active_state: false,
    };
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>
