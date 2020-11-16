<template>
  <div>
    <el-container>
      <el-header style="background-color: #f9f9f9">Header</el-header>
      <el-main>
        <el-button type="success" @click="countPlus">Test</el-button>
        <p>{{getCount}}</p>
      </el-main>
    </el-container>
  </div>
</template>
п
<script>

// eslint-disable-next-line no-unused-vars
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
    };
  },

  computed: {
    ...mapGetters({
      getCount: 'getCount',
    }),
  },

  methods: {
    ...mapActions({
      increment: 'increment',
    }),

    countPlus() {
      this.increment();
      // eslint-disable-next-line no-console
      console.log(this.getCount);
    },
  },

  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
