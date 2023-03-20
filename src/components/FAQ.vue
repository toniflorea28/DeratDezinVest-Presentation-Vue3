<template>
  <div class="faq-section">
    <h5>Întrebări frecvente</h5>
    <div v-for="(faq, index) in faqs" :key="index" class="faq">
      <div class="faq-question" @click="toggleAnswer(index)">
        {{ faq.question }}
        <span class="caret" :class="{ 'caret-up': faq.showAnswer }">&#9660;</span>
      </div>
      <transition name="slide-fade">
        <div class="faq-answer" v-show="faq.showAnswer">
          {{ faq.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'Care este programul de lucru?',
          answer:
              'Programul firmei noastre DDD din Timișoara este 8:00 – 18:00, însă ne puteți contacta și non-stop pentru solicitări de contract deratizare.',
          showAnswer: false,
        },
        {
          question: 'Unde este localizată firma DeratDezin Vest?',
          answer:
              'Punctul nostru de lucru este pe Str. Constructorilor Nr.4, Săcălaz, Jud.Timiș, însă oferim servicii de deratizare, dezinfecție și dezinsecție în tot județul Timișoara, Lugoj, Făget, Sânnicolau Mare, Jimbolia, Recaș, Făget, Buziaș, Deta, Gătaia și Ciacova și tot județul Timiș, cat și la nivel naționa, pe baza unui contract DDD.',
          showAnswer: false,
        },
        {
          question: 'Cât costă serviciile de deratizare, dezinsecție sau dezinfecție?',
          answer:
              'Costul serviciilor noastre DDD vă va fi comunicat în urma unei vizionari a locației. Ceea ce va promitem este că raportul calitate-preț va fi avantajos pentru dumneavoastră, indiferent de dimensiunea locației unde solicitați serviciile noastre.',
          showAnswer: false,
        },
        {
          question: 'Ce sunt serviciile de deratizare, dezinsecție și dezinfecție?',
          answer:
              'Deratizarea este necesară atunci când aveți de a face cu rozătoarele, deoarece pot transmite boli, poluează, distrug alimentele și provoacă pierderi economice semnificative. Deratizarea se face regulat – de obicei o data la trei luni, în scopul prevenirii refacerii rapide a coloniei dăunătorilor. \n' +
              'Dezinsecția poate fi executată cu scopul prevenirii apariției și răspândirii insectelor dăunătoare, cât și cu scopul eliminării acesteia, având drept rol distrugerea definitivă a insectelor dintr-un spatiu infestat. \n' +
              'Dezinfecția implică decontaminarea și sterilizarea microflorei ( atmosferă, mediul ambient și se pretează la orice tip de suprafețe pereți, pardoseli, mobilier, etc. \n',
          showAnswer: false,
        },
        // Add other questions and answers here
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
    },
  },
};
</script>

<style scoped>
.faq-section {
  /* Add any required styles for the FAQ section */
  padding-top: 1rem;
}

.faq-question {
  /* Add any required styles for the FAQ question */
  cursor: pointer;
  position: relative;
  font-weight: bold;
  border-bottom: 1px solid red;
}

.faq-answer {
  /* Add any required styles for the FAQ answer */
  padding: 0.7rem;
}

.caret {
  position: absolute;
  right: 0;
  transition: transform 0.3s ease;
}

.caret-up {
  transform: rotate(180deg);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
