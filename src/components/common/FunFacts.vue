<template>
  <div class="funfacts-area ptb-70 pt-0">
    <div class="container">
      <div class="section-title">
        <h2>Понад 5 років ми піклуємось про наших дідусів та бабусь</h2>
        <div class="bar"></div>
        <p>
          Піклування про старість для нашої команди найвищий приорітет, тому що
          ми всі люди у яких теж є батьки. І до наших гостей ми ставимось як до
          своїх рідних.
        </p>
      </div>

      <div class="row">
        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
          <div class="funfact">
            <h3>600+</h3>
            <p>Мешканців</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
          <div class="funfact">
            <h3>5</h3>
            <p>Відділень</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
          <div class="funfact">
            <h3>8+</h3>
            <p>Лікарів</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-3 col-md-3 col-6">
          <div class="funfact">
            <h3>45+</h3>
            <p>Співробітників</p>
          </div>
        </div>
      </div>

      <div class="contact-cta-box">
        <h3>Залишились запитання?</h3>
        <p>Зв'яжіться з нами просто зараз, це безкоштовно</p>
        <router-link to="/contact" class="btn btn-primary"
          >Контакти</router-link
        >
      </div>

      <div class="map-bg">
        <img src="../../assets/images/map.png" alt="map" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunFacts",
};
</script>
