<template>
  <div>
      <el-main>
        <p>{{getCount}}</p>
      </el-main>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { mapGetters } from 'vuex';

export default {
  name: 'testInc',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },

  computed: {
    ...mapGetters({
      getCount: 'getCount',
    }),
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
