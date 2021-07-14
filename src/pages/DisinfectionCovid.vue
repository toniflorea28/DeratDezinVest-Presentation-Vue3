<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg15.jpeg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Dezinfectie Covid-19</h1>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Ce este “dezinfecția”?</h2>
            <h5 class="description">
              Dezinfectarea sau dezinfecția este procesul care are ca rezultat
              eliminarea de pe o suprafață ,obiect sau aer a majorității
              microbilor și microorganismelor, fie animale, fie vegetale,
              dăunătoare. Obiectivul este de a preveni infecţiile şi bolile
              transmisibile.

              <h4>Servicii dezinfecție coronavirus – COVID 19</h4>
              Prin tot ceea ce am inteles, invatat si experimentat, respectand
              intocmai toate procedurile, standardele si actionand cu
              responsabilitate, folosind doar subsante biocide, virucide,
              dezinfectanti care s-au dovedit prin teste oficiale ca actioneaza
              si inlatura coronavirusurile, pe care ii aplicam prin nebulizare
              si pulverizare
            </h5>
          </div>
        </div>
        <carousel-disinfection-covid></carousel-disinfection-covid>

        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-12">
              <!-- First image on the right side, above the article -->

              <h3>Modul de acționare</h3>
              <p class="description text-left">
                Pulverizarea cu ajutorul pompelor de joasa presiune (vermorele)
                sau pompelor de mare presiune (atomizoare), iar la aplicare se
                obtine o singura picatura cu dimensiunea de 300 μ diametru;
              </p>
              <p class="description text-left">
                Nebulizarea (dupa caz, termonebulizarea) nebulizare cu ajutorul
                nebulizatoarelor ULV (Ultra Low Volume) - generatoare de ceata
                rece, la aplicare se obtin 1000 picaturi de 30 μ diametru;
                Nebulizarea este un proces de decontaminare a aerului şi a
                suprafeţelor dintr-un spaţiu închis cu ajutorul unor substanţe
                biocide care acţionează sub forma unor particule fine la nivelul
                aerului din încăpere. Procesul de decontaminare se realizează
                prin intermediul unor echipamente speciale – aparate de
                nebulizare Dezinfectanţii folosiţi de societatea noastră sunt
                produse pentru uz profesional cu destintaţie specifică pentru
                dezinfectarea microaeroflorei din încăperi, dar şi a
                suprafeţelor, având urmatoarele proprietăţi:
                <ul>
                    <li>nu necesită clătire, nu decolorează și nu pătează suprafețele.</li>
                    <li>nu conţine aldehide, clor, alcool, fenoli</li>
                    <li>biodegradabil (99,9%)</li>
                    <li>nu este toxic, nu este alergen</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarouselDisinfectionCovid from './components/CarouselDisinfectionCovid.vue';

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    CarouselDisinfectionCovid,
  },
};
</script>
<style></style>
