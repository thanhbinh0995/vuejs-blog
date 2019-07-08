<template>
  <div id="app">
    <v-app>
      <RwvHeader/>
      <router-view></router-view>
      <RwvFooter/>
    </v-app>
  </div>
</template>

<script>
import RwvHeader from "@/components/TheHeader";
import RwvFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    RwvHeader,
    RwvFooter
  }
};
</script>

<style></style>
