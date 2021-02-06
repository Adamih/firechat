<template>
  <img :src="svg" alt="Google logo" />
</template>

<script>
export default {
  data() {
    return {
      svg: require('~/assets/google-g-2015.svg'),
    };
  },
};
</script>
