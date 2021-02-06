<template>
  <div class="h-screen flex flex-col max-w-md mx-auto justify-center gap-8">
    <div class="flex justify-center">
      <h1
        class="landing-page-title flex justify-center font-light text-gray-600 text-6xl"
        style="font-family: 'Raleway', sans-serif"
      >
        Firechat
      </h1>
    </div>
    <div class="flex justify-center">
      <firestore-logo class="z-10" />
      <nuxt-logo />
    </div>
    <div class="flex justify-center">
      <button
        class="p-2 flex bg-white border justify-center rounded-sm w-56"
        @click="signInWithGoogle"
      >
        Log in with Google
        <google-logo class="w-6 ml-2" />
      </button>
    </div>
  </div>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue';
import firestoreLogo from '~/components/FirestoreLogo.vue';
import GoogleLogo from '~/components/GoogleLogo.vue';

export default {
  components: { NuxtLogo, firestoreLogo, GoogleLogo },
  methods: {
    signInWithGoogle() {
      this.$store.dispatch('signInWithGoogle').then(() => {
        this.$router.push('chat');
      });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;700;800;900&display=swap');
</style>
