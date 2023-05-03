<template>
  <div>
    <BrkTitle
      headerSize="h2"
      headerStyle="heading1"
      alignment="center"
      :nbrLimitedLines="0"
      :isHidden="false"
      :inverted="false"
      >Titre primaire</BrkTitle>
    <BrkTitle
      headerSize="h2"
      headerStyle="heading1"
      alignment="center"
      :nbrLimitedLines="0"
      :isHidden="false"
      :inverted="true"
      >Titre primaire (inversé)</BrkTitle>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.brk-title {
  &.inverted {
    background-color: #192872;
  }
}
</style>
