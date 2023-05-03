<template>
  <BrkInfoZone :brkImageArgs="brkImageArgs" :inverted="inverted">
    <template #title>
      <BrkTitle v-bind="titleArgs"> Encadrer mon jeu </BrkTitle>
    </template>
    <template #text>
      <BrkText v-bind="textArgs">
        <BrkTextParagraph>
          Découvrez nos outils pour permettre de vivre une expérience positive.
        </BrkTextParagraph>
        <BrkTextParagraph>
          <BrkTextLink link="https://www.lotoquebec.com">Limites</BrkTextLink>
          |
          <BrkTextLink link="https://www.lotoquebec.com">Pauses</BrkTextLink>
          |
          <BrkTextLink link="https://www.lotoquebec.com">Autoexclusion</BrkTextLink>
        </BrkTextParagraph>
      </BrkText>
    </template>
  </BrkInfoZone>
</template>

<script setup>
const brkImageArgs = {
  src: [{ path: "https://placekitten.com/300/300", width: "300w" }],
  alt: "placeholder-image",
  sizing: "contain",
};

const titleArgs = {
  headerSize: "h2",
  headerStyle: "heading1",
  alignment: "left",
  nbrLimitedLines: null,
  isHidden: false,
  inverted: false,
  alignment: "left",
};

const textArgs = {
  inverted: false,
  caption: false,
};

const inverted = false;
</script>

<style lang="scss" scoped></style>
