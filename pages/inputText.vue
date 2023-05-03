<template>
  <div>
    <h3>Champs Texte - brkInputText</h3>
    <div>
      <form action="post">
        <BrkInputText v-bind="BrkInputTextArgs"></BrkInputText>
        <BrkInputText v-bind="BrkInputText2Args"></BrkInputText>
        <BrkInputText v-bind="BrkInputText3Args"></BrkInputText>
      </form>
      <form action="post">
        <div style="float: left; width: 50%">
          <BrkInputText v-bind="BrkInputTextArgs"></BrkInputText>
          <BrkInputText v-bind="BrkInputText2Args"></BrkInputText>
          <BrkInputText v-bind="BrkInputText3Args"></BrkInputText>
        </div>
        <div style="float: left; width: 50%">
          <BrkInputText v-bind="BrkInputTextArgs"></BrkInputText>
          <BrkInputText v-bind="BrkInputText2Args"></BrkInputText>
          <BrkInputText v-bind="BrkInputText3Args"></BrkInputText>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const BrkInputTextArgs = {
  id: "id_field_1",
  inverted: false,
  label: "Étiquette de champ",
  name: "name_field_1",
};
const BrkInputText2Args = {
  id: "id_field_2",
  inverted: false,
  label: "Nom",
  name: "name_field_2",
};
const BrkInputText3Args = {
  id: "id_field_3",
  inverted: false,
  label: "Prénom",
  name: "name_field_3",
};
</script>

<style lang="scss" scoped>
/* tailles ici en attendant composant form 

form 672 large 
 */

form {
  width: 672px;
}
.brk-input-text {
  margin-bottom: 1em;
  // margin-left: 12px;
  margin-right: 24px;
}
</style>
