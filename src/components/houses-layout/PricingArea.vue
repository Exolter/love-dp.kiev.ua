<template>
  <div class="pricing-area ptb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-pricing-box">
            <div class="pricing-header">
              <h3>Basic</h3>
              <p>Get your business up and running</p>
            </div>

            <div class="price">$0 <span>/m</span></div>

            <div class="buy-btn">
              <router-link to="/register" class="btn btn-primary">
                Choose this plan
              </router-link>
            </div>

            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> 100 outgoing transfers/mo</li>
              <li><i class="fas fa-check"></i> 5 dplove Users</li>
              <li><i class="fas fa-check"></i> 2 Business Mastercards</li>
              <li><i class="fas fa-check"></i> Premium Support</li>
              <li><i class="fas fa-check"></i> International payments</li>
              <li><i class="fas fa-check"></i> Accounting integrations</li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="single-pricing-box">
            <div class="pricing-header">
              <h3>Advanced</h3>
              <p>Get your business up and running</p>
            </div>

            <div class="price">$12 <span>/m</span></div>

            <div class="buy-btn">
              <router-link to="/register" class="btn btn-primary">
                Choose this plan
              </router-link>
            </div>

            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> 100 outgoing transfers/mo</li>
              <li><i class="fas fa-check"></i> 5 dplove Users</li>
              <li><i class="fas fa-check"></i> 2 Business Mastercards</li>
              <li><i class="fas fa-check"></i> Premium Support</li>
              <li><i class="fas fa-check"></i> International payments</li>
              <li><i class="fas fa-check"></i> Accounting integrations</li>
            </ul>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3"
        >
          <div class="single-pricing-box">
            <div class="pricing-header">
              <h3>Premium</h3>
              <p>Get your business up and running</p>
            </div>

            <div class="price">$24 <span>/m</span></div>

            <div class="buy-btn">
              <router-link to="/register" class="btn btn-primary">
                Choose this plan
              </router-link>
            </div>

            <ul class="pricing-features">
              <li><i class="fas fa-check"></i> 100 outgoing transfers/mo</li>
              <li><i class="fas fa-check"></i> 5 dplove Users</li>
              <li><i class="fas fa-check"></i> 2 Business Mastercards</li>
              <li><i class="fas fa-check"></i> Premium Support</li>
              <li><i class="fas fa-check"></i> International payments</li>
              <li><i class="fas fa-check"></i> Accounting integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingArea",
};
</script>
