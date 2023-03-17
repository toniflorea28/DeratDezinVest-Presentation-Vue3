<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg13.jpeg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Deratizare Șobolani Timișoara</h1>
        <p>Oferim servicii eficiente de deratizare atât pentru spații comerciale, cât și pentru spații rezidențiale sau industrial în Timișoara, Lugoj, Făget, Sânnicolau Mare, Jimbolia, Recaș, Făget, Buziaș, Deta, Gătaia și Ciacova.
         Folosim cele mai noi tehnologii pentru exterminarea rozătoarelor și produse testate și eficiente, adaptate pentru fiecare intervenție în parte.
        </p>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title"> Ce înseamna “deratizarea”?</h2>
            <h5 class="description">
              Deratizarea reprezintă un complex de măsuri aplicate de toți factorii interesați pentru reducerea substanțială a populației de șoareci și șobolani și menținerii acestora la un nivel numeric redus.
             <br><br> Serviciile de deratizare sunt necesare rapid deoarece rozătoarele au o capacitate mare de reproducere. Pentru a evita o infestare de proporții și greu de gestionat este cel mai bine să se acționeze de la primele semne ale prezenței rozătoarelor. Alege serviciile DeratDezin Vest de deratizare în Timișoara, Lugoj, Făget, Sânnicolau Mare, Jimbolia, Recaș, Făget, Buziaș, Deta, Gătaia și Ciacova.
            </h5>
          </div>
        </div>

        <carousel-pest-control-rats></carousel-pest-control-rats>

        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-12">
              <!-- First image on the right side, above the article -->

              <h3>Modul de acționare</h3>
              <p class="description text-left">
                Ca și în cazul dezinsecției se efectuează profilactic ( de
                prevenire) și curativă ( de eliminare). În țara noastră se poate
                întâlni un număr mare de rozătoare, grupate în șase familii, cu
                peste 35 de specii și subspecii, caracterizate prin însușiri de
                viață puțin întâlnite la alte animale, care explică rolul
                dăunător sub aspect economic, odată pătrunse într-o clădire,
                rozătoarele pot roade cablurile, distruge rezerve de hrană sau
                alunga clienții, precum și al menținerii și răspândirii unor
                boli deosebit de grave.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarouselPestControlRats from "./components/CarouselPestControlRats.vue";

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    CarouselPestControlRats,
  },
  metaInfo: {
    title: 'Deratizare Timișoara – Deratizare Șobolani Timișoarat',
    htmlAttrs: {
      lang: 'ro-RO'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Servicii profesionale de dezinsectie si deratizare Timisoara, DeratDezin Vest.' },
      { name: 'description', content: 'Oferim servicii de deratizare în Timișoara, Lugoj, Făget, Sânnicolau Mare, Jimbolia, Recaș, Făget, Buziaș, Deta, Gătaia și Ciacova. Te scapăm rapid de dăunători.' }
    ]
  }
};
</script>
<style></style>
