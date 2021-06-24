<template>
  <div>Vue Count: {{ count }} {{ demo }}</div>
  <button @click="subtract">-</button>
  <button @click="add">+</button>
</template>

<script>
export default {
  name: "CounterVue",
  props: {
    demo: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    subtract() {
      this.count--;
    },
  },
};
</script>

<style scoped></style>
