<template>
  <div class="invoicing-area ptb-70">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="invoicing-content">
            <h2>
              Досить перейматись за близьку людину коли ви працюєте чи
              відпочиваєте, тепер ми візьмемо на себе цю відповідальність
            </h2>
            <div class="bar"></div>
            <p>
              У сучасному ритмі, дуже важко бути завжди поруч з рідними. А
              особливо тоді, коли це насправді необхідно. Проте тепер, вони
              будуть у безпеці 24/7 в Пансіонаті "Любов"
            </p>
            <router-link to="/contact" class="btn btn-primary">
              Дізнатись ціну
            </router-link>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="invoicing-image">
            <div class="main-image">
              <img
                src="../../assets/images/invoicing/invoicing-1.jpg"
                alt="image"
              />
              <!-- <img
                src="../../assets/images/invoicing/invoicing-2.png"
                alt="image"
              />
              <img
                src="../../assets/images/invoicing/invoicing-3.png"
                alt="image"
              />
              <img
                src="../../assets/images/invoicing/invoicing-4.png"
                alt="image"
              /> -->
            </div>

            <div class="main-mobile-image">
              <img
                src="../../assets/images/invoicing/invoicing-1.jpg"
                alt="image"
              />
            </div>

            <!-- <div class="circle-image">
              <img
                src="../../assets/images/invoicing/invoicing-circle-1.png"
                alt="image"
              />
              <img
                src="../../assets/images/invoicing/invoicing-circle-2.png"
                alt="image"
              />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invoicing",
};
</script>
