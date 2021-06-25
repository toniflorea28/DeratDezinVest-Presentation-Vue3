<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/hero-image-4.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">Traieste o viața mai curată</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <img src="../../public/img/logo.jpg" alt="" style="max-width: 20%">
            <h2 class="title">Cine suntem noi?</h2>
            <h5 class="description">
              Suntem o echipă de profesioniști care e acolo unde ai nevoie de
              ea. Respectăm clienții, activitatea și executăm tratamentele cu
              maximum de profesionalism. Oferim servicii profesionale si
              complete la cele mai bune preturi.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/team-2.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Medicul viitorului nu va da niciun medicament, dar își va
                  instrui pacienții în îngrijirea corpului, dietă și cel mai
                  important, prevenirea bolilor."
                  <br />
                  <br />
                  <small>-Thomas Edison</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/team-3.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/team-1.jpg')"
              ></div>
              <h3>De ce noi?</h3>
              <p>
                De ce noi? Personalul calificat și experimentat precum și
                produsele și echipamentele de ultimă generație folosite pentru
                deratizare, dezinsecție și dezinfecție ne ajută să prestăm câtre
                clienții noștri siguranța serviciilor de calitate. De asemenea
                ne putem oferii serviciile pentru o gamă largă de clienți din
                domeniul public sau privat, începând de la consumatorul casnic,
                până la spații comerciale și birouri, hale, restaurante, școli,
                cabinete medicale, unități alimentare, clinici și spitale, etc.
              </p>
              <h3>La ce ajuta serviciile noastre?</h3>
              <p>
                Dezinsectia este procedura care are ca şi rezultat eliminarea de
                pe o suprafaţă sau un obiect a majorităţii microbilor sau
                microorganismelor. Serviciile noastre elimină dăunători
                urmatorii dăunatori: bacterii-Salmonella enteridis,
                Staphylococcus aureus, Escherichia coli, Streptococcus faecalis,
                etc., fungii(ciuperci)-Candida albicans, Aspergillus fumigatus,
                etc., viruşii-Hepatita B, HIV, Herpes simplex, Poliovirus tip 1.
                Pe langa serviciul de dezinsecție, oferim servicii de
                dezinfecție si deratizare.

                <br />
                <a href="#"
                  ><n-button type="primary">Mai multe detalii</n-button></a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Dorești sa colaboram?</h2>
        <p class="description">
          Sanătatea ta și a angajaților tăi este foarte importantă pentru noi.
        </p>
        <div class="row" style="font-size: 1rem">
          <div class="col-lg-8 text-center ml-auto mr-auto col-md-8 text-lg">
            <div class="row">
              <div class="col-lg-4">
                <i class="fas fa-phone mr-1"></i> Telefon:
              </div>
              <div class="col-lg-8 text-left">
                <b>0256-363-710, 0757-527-639</b>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <i class="fas fa-map mr-1"></i> Adresa:
              </div>
              <div class="col-lg-8 text-left">
                <b>Com. Sanmihaiu Roman, Nr. 106e, Jud.Timis</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
<style></style>
