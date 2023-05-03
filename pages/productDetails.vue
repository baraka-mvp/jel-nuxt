<template>
  <BrkProductDetails v-bind="BrkProductDetailsArgs" />
</template>

<script setup>
const BrkProductDetailsArgs = {
  titleDetail: [
    {
      title: "Mise min.",
      detail: "0,01$",
    },
    {
      title: "Mise max.",
      detail: "1 122,19$",
    },
    {
      title: "Lignes",
      detail: "10",
    },
    {
      title: "Langues",
      detail: "Fra",
    },
  ],
};
</script>

<style lang="scss" scoped></style>
