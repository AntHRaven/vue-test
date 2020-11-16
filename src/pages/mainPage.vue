<template>
  <div>
    <hello-world/>
    <test-inc/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import TestInc from '../components/testInc';

export default {
  name: 'mainPage',
  components: { TestInc, HelloWorld },
};
</script>

<style scoped>

</style>
