<template>
  <BrkLinkList v-bind="linkedListArgs"></BrkLinkList>
</template>

<script setup>
let linkedListArgs = {
  brkTitleArgs: {
    headerSize: "h2",
    headerStyle: "heading1",
    alignment: "left",
    isHidden: false,
    inverted: false,
  },
  brkAccordionArgs: {
    a11yLabel: "Règles du jeu",
    inverted: false,
  },
  linkList: [
    {
      label: "À propos de nous",
      link: "http://perdu.com",
      icon: "home",
    },
    {
      label: "Responsabilité sociétale",
      link: "http://google.com",
      icon: "phone",
    },
    {
      label: "Accessibilté",
      link: "http://google.com",
    },
    {
      label: "Carrières",
      link: "http://google.com",
    },
    {
      label: "Salle de presse",
      link: "http://google.com",
    },
  ],
};
</script>
<style lang="scss" scoped>
.brk-link-list {
  width: 400px;
  list-style-type: none;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
