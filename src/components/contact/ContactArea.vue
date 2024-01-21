<template>
  <div class="contact-area ptb-70">
    <div class="container">
      <div class="section-title">
        <h2>
          Відправте нам повідомлення, з будь-яким запитанням, що вас цікавить
        </h2>
        <div class="bar"></div>
        <p>
          Пісял цього - ми зв'яжемося з вами, і підберемо найкращий варіант саме
          для вас
        </p>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-5 col-md-12">
          <div class="contact-info">
            <ul>
              <li>
                <div class="icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <span>Адреси будинків</span>
                <ul class="contact-info-houses">
                  <li>
                    <a
                      href="https://maps.app.goo.gl/SteCyeM5UYy64CTG6?g_st=it"
                      target="_blank"
                      >Бровары, вулиця Пантелеймона Куліша</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/7tW93yVqAdm1qqkLA"
                      target="_blank"
                      >Бровары, вул. Чубинского 38</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/ULsrXzQem2tdbcm78"
                      target="_blank"
                      >Ворзель, вул. Тюльпанова 12</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/c4gf45ZPtE1VGo8VA"
                      target="_blank"
                      >Зазимье, вул. Широка 94</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/hjxGMdvEsRdHmTru6"
                      target="_blank"
                      >Літки, провулок Мельника, 8</a
                    >
                  </li>
                </ul>
              </li>

              <li>
                <div class="icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <span>Email</span>
                <a href="mailto:lovedp.kiev.ua@gmail.com"
                  >lovedp.kiev.ua@gmail.com</a
                >
              </li>

              <li>
                <div class="icon">
                  <i class="fas fa-phone-volume"></i>
                </div>
                <span>Телефон</span>
                <a href="tel:+380443443264">+38 (044) 344-32-64</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="contact-form">
            <form
              id="contactForm"
              ref="clearForm"
              @submit.prevent="tBotMessage"
            >
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="name"
                      name="name"
                      id="name"
                      class="form-control"
                      required
                      data-error="Будьласка введіть Ім'я"
                      placeholder="Ім'я"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="email"
                      name="email"
                      id="email"
                      class="form-control"
                      data-error="Please enter your email"
                      placeholder="Email"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="phone"
                      name="phone_number"
                      id="phone_number"
                      required
                      data-error="Please enter your number"
                      class="form-control"
                      placeholder="Телефон"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="subject"
                      name="msg_subject"
                      id="msg_subject"
                      class="form-control"
                      data-error="Please enter your subject"
                      placeholder="Тема"
                    />
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      v-model="message"
                      class="form-control"
                      id="message"
                      cols="30"
                      rows="6"
                      data-error="Write your message"
                      placeholder="Ваше повідомлення"
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12">
                  <button type="submit" class="btn btn-primary">
                    Відправити
                  </button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-map">
      <img src="../../assets/images/bg-map.png" alt="image" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContactArea",
  data: function () {
    return {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    tBotMessage: function () {
      const tokenTelegram = "5718289727:AAEO6-79DLBuwWD5zuElglQwGe43j8B3v5g";
      const id_chat = "-575919706";
      const url_api = `https://api.telegram.org/bot${tokenTelegram}/sendMessage`;
      const fullMessage = `Откуда: Контакты\nИмя: ${this.name}\nПочта: ${this.email}\nТелефон: ${this.phone}\nТема: ${this.subject}\nСообщение: ${this.message}`;

      axios.post(url_api, {
        chat_id: id_chat,
        text: fullMessage,
      });

      alert("Дякуємо за заявку, ми зателефонуємо вам найближчим часом!");
      this.$refs.clearForm.reset();
    },
  },
};
</script>
