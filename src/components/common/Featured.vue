<template>
  <div class="featured-boxes-area">
    <div class="container">
      <div class="featured-boxes-inner">
        <div class="row m-0">
          <div class="col-lg-3 col-sm-6 col-md-6 p-0">
            <div class="single-featured-box">
              <div class="icon color-fb7756">
                <i class="flaticon-wallet"></i>
              </div>

              <h3>Кваліфікований персонал</h3>
              <p>
                Вища освіта та багаторічний досвід команди - гарантують вашим
                близьким професійний догляд 24/7.
              </p>

              <router-link to="/features-1" class="read-more-btn"
                >Дізнатись більше</router-link
              >
            </div>
          </div>

          <div class="col-lg-3 col-sm-6 col-md-6 p-0">
            <div class="single-featured-box">
              <div class="icon color-facd60">
                <i class="flaticon-shield"></i>
              </div>

              <h3>Безпека</h3>
              <p>
                Цілодобове знаходження в пансіонаті медсестри, доглядальниці,
                охорони та наявність індивідуальної кнопки виклику персоналу.
              </p>

              <router-link to="/features-1" class="read-more-btn"
                >Дізнатись більше</router-link
              >
            </div>
          </div>

          <div class="col-lg-3 col-sm-6 col-md-6 p-0">
            <div class="single-featured-box">
              <div class="icon color-1ac0c6">
                <i class="flaticon-piggy-bank"></i>
              </div>

              <h3>Доступні ціни</h3>
              <p>
                Ми гарантуємо гідні умови проживання, догляду, лікування та
                реабілітації за найнижчими цінами в регіоні.
              </p>

              <router-link to="/features-1" class="read-more-btn"
                >Дізнатись більше</router-link
              >
            </div>
          </div>

          <div class="col-lg-3 col-sm-6 col-md-6 p-0">
            <div class="single-featured-box">
              <div class="icon">
                <i class="flaticon-data-encryption"></i>
              </div>

              <h3>Трансфер</h3>
              <p>
                Забезпечимо комфортну доставку до пансіонату на автомобілі
                швидкої допомоги.
              </p>

              <router-link to="/features-1" class="read-more-btn"
                >Дізнатись більше</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Featured",
};
</script>
