<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg12.jpeg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Dezinfectie generală</h1>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Ce este “dezinfecția”?</h2>
            <h5 class="description">
              DEZINFECŢIA–procedura care are ca şi rezultat eliminarea de pe o
              suprafaţă sau un obiect a majorităţii microbilor sau
              microorganismelor. Dăunători vizaţi prin efectuarea dezinfecţiei:
              bacterii-Salmonella enteridis, Staphylococcus aureus, Escherichia
              coli, Streptococcus faecalis, etc., fungii(ciuperci)-Candida
              albicans, Aspergillus fumigatus, etc., viruşii-Hepatita B, HIV,
              Herpes simplex, Poliovirus tip 1.
            </h5>
          </div>
        </div>
        <carousel-disinfection></carousel-disinfection>

        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-12">
              <!-- First image on the right side, above the article -->

              <h3>Modul de acționare</h3>
              <p class="description text-left">
                Se va dezinfecta orice obiect care vine în contact cu omul
                bolnav: mobilier de lemn, plastic sau fier, sistemul de
                încălzire și iluminare ( radiatoare, becuri, globuri) ,
                noptiere, cărucioare, brancarde, telefon, uși, ferestre,
                echipament de protecție și de lucru, lenjerie, a obiectelor cu
                ajutorul cărora s-au captat produsele biologice sau dejecțiile.
                Procedura care are ca și rezultat eliminarea de pe o suprafață
                sau un obiect a majorității microbilor sau microorganismelor.
                Dezinfecția se realizează prin pulverizare sau nebulizare, in
                sistem ULV, prin ceață rece. Detinem utilaje pentru efectuarea
                dezinfecţiei prin pulverizare sau nebulizare, în sistem ULV,
                prin ceaţă rece sau ceață caldă.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CarouselDisinfection from "./components/CarouselDisinfection.vue";

export default {
  name: "profile",
  bodyClass: "profile-page",
  components: {
    CarouselDisinfection,
  },
};
</script>
<style></style>
