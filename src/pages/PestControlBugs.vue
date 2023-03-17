<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg14.jpeg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Dezinsecție Timișoara și județul Timiș</h1>
        <p>Operam pe raza județului Timiș și a județelor limitrofe atât pe suprafețe exterioare, precum și pe suprafețe interioare de orice dimensiune. Dispunem de un personal calificat și experimentat pe diferite tipuri de dăunători. Pentru a realiza operațiile de dezinsecție în Timișoara, Lugoj, Făget, Sânnicolau Mare, Jimbolia, Recaș, Făget, Buziaș, Deta, Gătaia și Ciacova  la cele mai înalte standarde, toate produsele utilizate sunt avizate de Autoritatea Națională Sanitar-Veterinara și Pentru Siguranța Alimentelor.</p>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Ce este “dezinsecția”?</h2>
            <h5 class="description text-left">
              <h5>Dezinsecţia poate fi:</h5>
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
              Metodele de dezinsecție în Timișoara, Lugoj, Făget, Sânnicolau Mare, Jimbolia, Recaș, Făget, Buziaș, Deta, Gătaia și Ciacova sau alte zone din țară aplicate de societatea noastră, sunt adaptate fiecărui tip de spațiu în parte. La alegerea produselor insecticide și a echipamentelor de aplicare ținem cont de o serie de elemente, precum: profilul de activitate al clientului, gradul de infestare, dăunătorul cu care se confruntă, accesibilitatea spatiilor s.a.
              <br><br>Evaluarea dăunătorilor executată la timp garantează succesul lucrărilor de dezinsecție și ajută la evitarea efectelor secundare nedorite. Dăunătorii pot fi:
              <ul><br>
                <li> căpușe sau acarieni (Ordinul ACARINA), păianjeni, gândaci (Familia BLATTIDAE, Familia PHILLODROMIIDAE, etc), purici, păduchi, albine, muște și țânțari (Ordinul Diptera) și alte insecte. Insectele sunt purtătoare de boli multiple și, în general, de diferiți agenți patogeni care se pot multiplica cu ușurință </li>
              </ul>
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
                <b>DERATDEZIN VEST</b> oferă soluții complexe de dezinsecție în Timișoara și județul Timiș, indiferent de profilul dumneavoastră de activitate. În prezent avem în derulare numeroase contracte de prestări servicii prin care asigurăm nu numai tratamente periodice de dezinsecție, ci și monitorizarea activitații dăunătorilor și întocmirea de raportări cu privire la evoluția gradului de infestare.
                Contactați-ne pentru un <b>contract DDD</b> ne vom deplasa GRATUIT la locația indicată de dumneavoastră, pentru a efectua o evaluare profesionistă a gradului de infestare și a vă oferi soluția cea mai potrivită.

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
  metaInfo: {
    title: 'Dezinsecție Timișoara – Dezinsectie Ploțnite – Dezinsecție Gândaci',
    htmlAttrs: {
      lang: 'ro-RO'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Servicii profesionale de dezinsectie si deratizare Timisoara, DeratDezin Vest.' },
      { name: 'description', content: 'Servicii de dezinsecție Timișoara, Lugoj, Făget, Sânnicolau Mare, Jimbolia, Recaș, Făget, Buziaș, Deta, Gătaia și Ciacova.' }
    ]
  }
};
</script>
<style></style>
