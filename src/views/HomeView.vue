<script setup>
import TheHeader from '../components/TheHeader.vue';
import TheHero from '../components/TheHero.vue';
import FirstSection from '../components/FirstSection.vue';
import SecondSection from '../components/SecondSection.vue';
import ThirdSection from '../components/ThirdSection.vue';
import CashBack from '../components/CashBack.vue';
import HowTo from '../components/HowTo.vue';
import BottomCTA from '../components/BottomCTA.vue';
import TheFooter from '../components/TheFooter.vue';
import Reviews from '../components/Reviews.vue';
</script>

<template>
  <main>
    <TheHeader />
    <TheHero />
    <FirstSection />
    <SecondSection></SecondSection>
    <ThirdSection></ThirdSection>
    <CashBack />
    <HowTo />
    <Reviews />
    <BottomCTA />
    <TheFooter />
  </main>
</template>
