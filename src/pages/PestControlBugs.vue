<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg14.jpeg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Dezinsecție</h1>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Ce este “dezinsecția”?</h2>
            <h5 class="description">
              <h4>Dezinsecţia poate fi:</h4>
              <ul>
                <li class="text-left">
                  profilactică – de prevenire şi are ca scop împiedicarea
                  apariţiei şi răspândirii insectelor dăunătoare. În mod uzual
                  dezinsecţia profilactică se face la un interval de cel puţin 3
                  luni, dar nu mai mult de 6 luni.
                </li>
                <li class="text-left mt-2">
                  curativă – de eliminare, are drept scop distrugerea definitivă
                  a insectelor dintr-un spaţiu infestat.
                </li>
              </ul>
              <hr />
              Metodele de dezinsecție aplicate de societatea noastră, sunt
              adaptate fiecărui tip de spațiu în parte. La alegerea produselor
              insecticide și a echipamentelor de aplicare ținem cont de o serie
              de elemente, precum: profilul de activitate al clientului, gradul
              de infestare, dăunătorul cu care se confruntă, accesibilitatea
              spatiilor s.a
            </h5>
          </div>
        </div>
        <carousel-pest-control-bugs></carousel-pest-control-bugs>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-12">
              <!-- First image on the right side, above the article -->

              <h3>Modul de acționare</h3>
              <p class="description text-left">
                DERATDEZIN VEST oferă soluții complexe de dezinsecție,
                indiferent de profilul dumneavoastră de activitate. În prezent
                avem în derulare numeroase contracte de prestări servicii prin
                care asigurăm nu numai tratamente periodice de dezinsecție, ci
                și monitorizarea activitații dăunătorilor și întocmirea de
                raportări cu privire la evoluția gradului de infestare. Nu
                ezitați sa ne contactați. Dacă sunteți de acord, ne vom deplasa
                GRATUIT la locația indicată de dumneavoastră, pentru a efectua o
                evaluare profesionistă a gradului de infestare și a vă oferi
                soluția cea mai potrivită.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarouselPestControlBugs from "./components/CarouselPestControlBugs.vue";

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    CarouselPestControlBugs,
  },
};
</script>
<style></style>
