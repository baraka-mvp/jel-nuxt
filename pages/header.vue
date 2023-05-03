<template>
  <BrkHeader
    title="Titre primaire"
    :inverted="true"
    :brkButtonArgs="brkButtonArgs"
    :brkTitleArgs="brkTitleArgs"
    :brkTextArgs="brkTextArgs"
  />
</template>

<script setup>
const brkButtonArgs = {
  accessibilityText: "Précédent",
  inverted: false,
  label: "",
  link: "https://google.com",
  size: "md",
  variant: "text",
  icon: "chevron_left",
};

const brkTitleArgs = {
  headerSize: "h2",
  headerStyle: "heading1",
  alignment: "left",
  nbrLimitedLines: 0,
  isHidden: false,
  inverted: false,
};

const brkTextArgs = {
  textContent: "Insérez une description ici.",
};
</script>

<style lang="scss" scoped></style>
