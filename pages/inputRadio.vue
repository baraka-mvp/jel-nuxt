<template>
  <div>
    <h3>Bouton radio - BrkInputRadio</h3>
    <BrkInputRadio v-bind="BrkInputRadio1Args" />
  </div>
  <div>
    <h3>
      Liste de bouton radio affichage vertical (default) - BrkInputRadioList
    </h3>
    <BrkInputRadioList
      title="Etiquette de radio button"
      :brkInputRadioListArgs="BrkInputRadioListArgs"
    />
  </div>
</template>

<script setup>
const BrkInputRadio1Args = {
  id: "input_text1",
  label: "Lorem ipsum dolor sit amet",
  name: "input_name",
  value: "input_value1",
};
const BrkInputRadio2Args = {
  id: "input_text2",
  label: "Quisque in egestas sapien",
  name: "input_name",
  value: "input_value2",
};
const BrkInputRadio3Args = {
  disabled: true,
  id: "input_text3",
  label: "Nullam sodales turpis et ipsum volutpat",
  name: "input_name",
  value: "input_value3",
};

const BrkInputRadioListArgs = {
  BrkInputRadio1Args,
  BrkInputRadio2Args,
  BrkInputRadio3Args,
};
</script>

<style lang="scss" scoped></style>
