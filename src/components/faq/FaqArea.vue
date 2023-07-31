<template>
  <div class="faq-area ptb-70">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-12">
          <div class="faq-content">
            <h2>Відповіді на постійні запитання</h2>
            <div class="bar"></div>
            <p>Тут ви можете знайти теми, які вас зацікавлять</p>

            <div class="faq-image">
              <img src="../../assets/images/faq.png" alt="image" />
            </div>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="faq-accordion">
            <accordion>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    Що робити, якщо літня людина відмовляється переїхати до
                    пансіонату?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    Нерідко у людей похилого віку всілякі переїзди та зміна
                    обстановки викликають почуття самотності та депресії, і вони
                    починають звинувачувати близьких у спробах позбутися їх та
                    небажанні доглядати за родичем. Наші психологи допоможуть
                    вам і допоможуть делікатно і етично пояснити вашим близьким
                    переваги проживання в будинку для літніх людей. Ще ми
                    пропонуємо покращити самопочуття ваших близьких при
                    проживанні у санаторії з лікувально-оздоровчою програмою.
                    Там літня людина пройде всебічне медичне обстеження та
                    отримає професійну допомогу лікарів та реабілітологів, а
                    також зможе насолодитися відпочинком та захоплюючим
                    дозвіллям у комфортних умовах приватного
                    пансіонату-санаторію для літніх людей, який знаходиться в
                    екологічно чистому районі.
                  </p>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    Які документи потрібні для того, щоби жити в пансіонаті?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    Після консультації зі співробітниками пансіонату ми складемо
                    для вас список необхідних документів для укладання договору
                    та термінів проживання в будинку для літніх людей. Вам
                    потрібно надати копію паспорта опікуна та літнього родича,
                    які укладають договір про добровільне бажання проживати у
                    хоспісі. Крім того, знадобиться довідка від лікаря з
                    переліком захворювань та інформацією про стан здоров'я
                    літньої людини, про необхідну медичну допомогу,
                    реабілітацію, прийом ліків, а також список аналізів – це
                    допоможе скласти індивідуальний план проживання в пансіонаті
                    та перелік лікувально-оздоровчих заходів для контролю за
                    станом здоров'я та лікування захворювань.
                  </p>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    Як часто можна відвідувати родича?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    Ви маєте повне право відвідувати близьку людину у будь-який
                    час доби. Ми працюємо без свят та вихідних, наші двері
                    завжди відчинені для гостей. Ми працюємо відкрито і прозоро,
                    ви можете приїхати будь-якої миті і переконатися в тому, що
                    вашому родичу надають належну медичну допомогу, турботу та
                    кохання. Ми вітаємо відвідування та спільний час проведення
                    членів сім'ї з людиною похилого віку, тому що це сприяє
                    позитивному настрою у постояльців.
                  </p>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    Як можна підтримувати зв'язок із родичем?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    Сучасні технології дозволяють не просто розмовляти телефоном
                    або спілкуватися за допомогою повідомлень, а й розмовляти по
                    відео зв'язку. Ви можете використовувати Viber, Telegram,
                    Skype та інші технології, щоб залишатися на зв'язку з
                    близькою людиною. Ми не обмежуємо постояльців та членів
                    їхньої родини у спілкуванні. Навпаки, сприяємо регулярному
                    спілкуванню та взаємодії із родичами.
                  </p>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    Що буде, якщо стан родича зміниться?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    Ми регулярно інформуємо близьких про будь-які зміни у стані
                    здоров'я літньої людини, як на кращий, так і на гірший бік.
                    Ми ведемо ретельний моніторинг та контроль змін. У більшості
                    випадків – це зміни на краще, завдяки професіоналізму
                    лікарів та реабілітологів. Але якщо стан погіршитися або
                    людина похилого віку буде в пригніченому настрої - ми в
                    першу чергу повідомимо про це вам. Крім того, ми
                    запропонуємо вам план дій, якщо ваш стан близького змінився.
                  </p>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    Мені потрібно буде самостійно купувати та привозити ліки для
                    родича?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    Наш персонал проводить щоденне обстеження стану людини
                    похилого віку, вимірювання рівня глюкози в крові,
                    артеріального тиску та інших показників, що впливають на
                    здоров'я. Якщо ваш родич приймає ліки, але ви не маєте часу,
                    щоб приїхати і привезти все необхідне для медикаментозного
                    лікування – наші фахівці завжди готові піти вам на зустріч.
                    Ми складемо список всього необхідного для підтримки здоров'я
                    вашої близької людини і самостійно купимо препарати,
                    зберігши чеки і надавши їх вам для оплати у зручний для вас
                    час.
                  </p>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    У вашого персоналу є медичні сертифікати та дипломи?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    Медична освіта є невід'ємною частиною формування команди
                    співробітників, які проводять роботу з людьми похилого віку.
                    Наші спеціалісти мають диплом про вищу освіту, регулярно
                    відбуваються курси підвищення кваліфікації. Щодо
                    сестринського догляду – доглядальниці проходять ретельний
                    відбір при прийомі на роботу особисто у керівника
                    пансіонату, це дозволяє переконатися у професіоналізмі,
                    особистих якостях та компетентності медичного персоналу,
                    який цілодобово перебуває з вашими близькими. Наш персонал –
                    висококваліфіковані фахівці з великим досвідом роботи та
                    бездоганною репутацією.
                  </p>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    Чому стан родича погіршився з появою доглядальниці вдома?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    Багато доглядальниць, які надають допомогу літнім людям
                    вдома не мають медичної освіти, досвіду роботи та
                    переслідують корисливі цілі. Для них ваш родич - це робота,
                    вони не виявляють емпатії або поваги і не мають чуйності,
                    розуміння. Вони просто виконують свої обов'язки, за які
                    отримують гроші, не дбаючи при цьому про настрій або
                    переживання вашого близької людини. Ви ніколи не зможете
                    бути впевнені у сторонній людині, яку пустили до своєї
                    оселі. Гарантія безпеки та професіоналізму – це
                    доглядальниця у приватному пансіонаті, яка має необхідні
                    навички, а також людські якості, що дозволяє не лише
                    надавати послуги з догляду на високому рівні, а й стати
                    літній людині справжнім другом.
                  </p>
                </template>
              </accordion-item>
              <accordion-item>
                <template v-slot:accordion-trigger>
                  <button class="accordion-button">
                    Які послуги не входять у вартість проживання?
                  </button>
                </template>
                <template v-slot:accordion-content>
                  <p>
                    При проживанні в пансіонаті ви самостійно оплачуєте ліки,
                    які призначив лікар. Також ви можете попросити наших
                    співробітників оновлювати список препаратів та надавати вам
                    чеки про оплату. У вартість перебування не входить покупка
                    одноразових пелюшок та підгузків у разі потреби. Якщо у вас
                    немає часу, щоб купувати та привозити все необхідне – ми
                    можемо робити це самостійно, надавши вам чеки в кінці місяця
                    для оплати.
                  </p>
                </template>
              </accordion-item>
            </accordion>
          </div>
        </div>
      </div>

      <div class="faq-contact">
        <div class="section-title">
          <h2>Залишились запитання?</h2>
          <div class="bar"></div>
          <p>Ми з радістю вам відповімо на кожне з них</p>
        </div>

        <div class="faq-contact-form">
          <form id="contactForm" @submit.prevent="tBotMessage">
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
                    data-error="Please enter your name"
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
                    data-error="Напишіть щось"
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
</template>

<script>
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem";
import axios from "axios";

export default {
  name: "FaqArea",
  components: {
    Accordion,
    AccordionItem,
  },
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
      const fullMessage = `Откуда: FAQ\nИмя: ${this.name}\nПочта: ${this.email}\nТелефон: ${this.phone}\nТема: ${this.subject}\nСообщение: ${this.message}`;

      axios.post(url_api, {
        chat_id: id_chat,
        text: fullMessage,
      });
    },
  },
};
</script>
