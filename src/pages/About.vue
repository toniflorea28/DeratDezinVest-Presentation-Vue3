<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg5.jpg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Despre noi</h1>
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
        <h3 class="title">Despre noi</h3>
        <h5 class="description">
          SC DERATDEZIN VEST S.R.L. este o firmă specializată în operaţiuni de
          combatere a factorilor de disconfort: rozătoare, insecte, microbi,
          viruşi, etc. prin servicii de deratizare, dezinsecţie şi dezinfecţie.
        </h5>
        <carousel-section></carousel-section>
        <h5 class="description">
          Firma a fost inființată în anul 2015, conducerea fiind asigurată de un
          singur asociat având o experiență în domeniul DDD de peste 10 ani, la
          fel și agenții DDD care prestează efectiv serviciile la clienți sunt
          calificați deținând diploma în acest sens și experiență practică
          acumulată în anii de activitate.
        </h5>
        <h5 class="description">
          La început firma a avut doar 2 angajați, ajungând după nici 2 ani sa
          aibă 7 angajați, dorind ca pe viitor sa extindem echipa la un număr
          cât mai mare, astfel încât să putem asigura același standard de
          calitate și promtitudine în serviciile noastre.
        </h5>
        <h5 class="description">
          Suntem o echipă formată din persoane cu experienţă în domeniu, fiind
          calificaţi în meseria de Agent dezinfecţie, deratizare şi dezinsecţie
          în conformitate cu prevederile O.G.129/2000 şi instruiţi privind
          însuşirea noţiunilor fundamentale de igienă conform O.M.S
          1225/5031/2003, pentru prestarea unor astfel de servicii.
        </h5>
        <h5 class="description">
          Totodată firma noastră are implementat şi menţine un Sistem de
          Management al Calităţii în conformitate cu cerinţele standardului SR
          EN ISO 9001:2008, deoarece calitatea serviciului nu stă doar în ceea
          ce utilizează furnizorul ci în ceea ce primeşte clientul şi pentru
          care acesta este dispus să plătească.
        </h5>
        <h5 class="description">
          Scopul nostru este de a continua să oferim cele mai bune servicii de:
          Deratizare, Dezinsecție, și Dezinfecție.
        </h5>

      </div>
    </div>
  </div>
</template>
<script>
import CarouselSection from './components/CarouselSection.vue';

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    CarouselSection

  },
};
</script>
<style></style>
