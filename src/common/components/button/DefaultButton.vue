<template>
  <v-btn v-bind:color="color">{{ title }}</v-btn>
</template>

<script>
export default {
  name: "DefaultButton",
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#ccc"
    }
  },
  methods: {}
};
</script>
