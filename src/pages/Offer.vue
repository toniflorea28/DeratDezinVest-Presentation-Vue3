<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Cere o ofertă</h1>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="button-container">
          <a
            href="https://www.facebook.com/DeratDezinVest"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Facebook"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </div>
        <h3 class="title">Ofertă</h3>
        <h5 class="description">
          Ne poți cere o ofertă completând formularul de mai jos, iar noi te vom apela în cel mai scurt timp! De asemenea ne poți contacta direct apelând
          unul din numerele de telefon menționate sau la adresa de email deratdezin.vest@yahoo.com:
        </h5>

        <div class="container">
          <div class="row">
            <card
              class="card-signup"
              header-classes="text-center"
            >
            <div v-if="messageStatus" style="background-color: #4BB543" class="mb-3 p-3 text-center text-white">
                Mesajul a fost trimis cu succes!
            </div>
              <template slot="header">
                <h3 class="card-title title-up">Cere o ofertă</h3>
                <div class="social-line">
                  
                </div>
              </template>
              <template>
                <fg-input
                  class="no-border"
                  placeholder="Nume reprezentant"
                  addon-left-icon="now-ui-icons users_circle-08"
                  v-model="personName"
                >
                </fg-input>

                <fg-input
                  class="no-border"
                  placeholder="Nume companie"
                  addon-left-icon="now-ui-icons text_caps-small"
                  v-model="companyName"
                >
                </fg-input>

                <fg-input
                  class="no-border"
                  placeholder="Numar de telefon"
                  addon-left-icon="now-ui-icons ui-1_email-85"
                  v-model="phoneNumber"
                >
                </fg-input>
              </template>
              <div class="card-footer text-center">
                <n-button type="primary" round size="lg" v-on:click="sendEmail()">Trimite</n-button>
              </div>
            </card>
          </div>
        </div>

        <div class="row mt-5" style="font-size: 1rem">
          <div class="col-lg-8 text-center ml-auto mr-auto col-md-8 text-lg">
            <div class="row">
              <div class="col-lg-4">
                <i class="fas fa-phone mr-1"></i> Telefon:
              </div>
              <div class="col-lg-8 text-left">
                <b>0757-527-639</b>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <i class="fas fa-email mr-1"></i> Email:
              </div>
              <div class="col-lg-8 text-left">
                <b>deratdezin.vest@yahoo.com</b>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <i class="fas fa-map mr-1"></i> Adresa:
              </div>
              <div class="col-lg-8 text-left">
                <b>Str. Constructorilor nr.4, Săcălaz, Jud.Timis</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import CarouselSection from './components/CarouselSection.vue';
import { Card, FormGroupInput, Button } from "@/components";

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  methods: {
      sendEmail() {
        const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: this.personName, phone: this.phoneNumber, company: this.companyName })
      };
      fetch("https://app.deratdezin-vest.ro/api/sendMail", requestOptions);

      setTimeout(() => {
          this.messageStatus = true;
          this.phoneNumber = null;
          this.companyName = null;
          this.personName = null;
        }, 700);
      }
  },
  data() {
    return { 
        messageStatus: false,
        personName: null,
        companyName: null,
        phoneNumber: null
     }
  },
};
</script>
<style></style>
