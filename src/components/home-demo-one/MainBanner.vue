<template>
  <div class="main-banner">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="main-banner-content">
            <h1>Пансіонат для пристарілих "Любов"</h1>
            <p>
              Головний представник щасливої старості. Зв'яжіться з нами, щоб
              отримати безкоштовну консультацію
            </p>
            <router-link to="/contact" class="btn btn-primary">
              Контакти
            </router-link>
            <a
              href="tel:+380443443264"
              style="margin-left: 10px"
              class="btn btn-primary"
              >+38 (044) 344-32-64</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
};
</script>
