<template>
  <img :src="svg" alt="Firestore logo" />
</template>

<script>
export default {
  data() {
    return {
      svg: require('~/assets/firestore-logomark.svg'),
    };
  },
};
</script>
