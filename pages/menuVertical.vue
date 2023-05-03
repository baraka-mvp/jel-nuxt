<template>
  <BrkMenuVertical
    icon="menu"
    accessibilityTextMenuOpen="Reduire le menu"
    accessibilityTextMenuClosed="Afficher le menu complet"
    :brkMenuItems="itemArgs"
    :minimizeMenu="false"
  >
  </BrkMenuVertical>
</template>

<script setup>
const itemArgs = [
  {
    text: "Accueil",
    icon: "house",
    accessibilityText: "Naviguer vers l'accueil",
    link: "https://www.google.ca/",
    minimized: false,
    variant: "primary",
  },
  {
    text: "Bien joué",
    icon: "timer",
    accessibilityText: "",
    link: "https://www.google.ca/",
    minimized: false,
    variant: "primary",
  },
  {
    text: "À découvrir",
    icon: "visibility",
    accessibilityText: "Naviguer vers à Découvrir",
    link: "https://www.google.ca/",
    minimized: false,
    variant: "primary",
  },
  {
    text: "En direct",
    icon: "smart_display",
    accessibilityText: "Naviguer vers l'accueil",
    link: "https://www.google.ca/",
    minimized: false,
    variant: "primary",
    secondaryItems: [
      {
        text: "Black jack",
        icon: "",
        accessibilityText: "Naviguer vers l'accueil",
        link: "https://www.google.ca/",
        minimized: false,
        variant: "primary",
      },
      {
        text: "Roulette",
        icon: "",
        accessibilityText: "Naviguer vers l'accueil",
        link: "https://www.google.ca/",
        minimized: false,
        variant: "primary",
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
