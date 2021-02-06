<template>
  <img :src="svg" alt="Send by Brian Dys Sahagun from the Noun Project" />
</template>

<script>
export default {
  data() {
    return {
      svg: require('~/assets/noun_send.svg'),
    };
  },
};
</script>
