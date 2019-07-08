<template>
  <v-btn color="success">{{ title }}</v-btn>
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
