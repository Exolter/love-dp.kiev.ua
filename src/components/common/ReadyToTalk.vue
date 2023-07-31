<template>
  <div class="ready-to-talk">
    <div class="container">
      <div class="ready-to-talk-content">
        <h3>Дізнайтесь тут, що потрібно саме вам</h3>
        <p>Безкоштовна консультація по телефону</p>
        <router-link to="/contact" class="btn btn-primary">
          Контакти
        </router-link>
        <span>
          <router-link to="/contact">
            Відправте заявку, ми вам передзвонимо
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadyToTalk",
};
</script>
