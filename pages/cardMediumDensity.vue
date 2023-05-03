<template>
  <div class="card-medium-density">
    <div class="single-card">
      <BrkCardMediumDensity
        body="0.10$ à 10$"
        element="h3"
        heading="Monopoly sur 2 lignes"
        link="https://atlas.loto-quebec.com/"
        subtitle="*Progressifs multiples"
        :brkImageArgs="brkImageArgs"
        :hasSecondaryInfo="false"
        :inverted="false"
        :size="sm"
      >
      </BrkCardMediumDensity>
    </div>
    <div class="column-list">
      <div class="list-cards">
        <BrkCardMediumDensityList
          nbItems="4"
          :brkCardMediumDensityArgsList="brkCardMediumDensityArgsList"
        >
        </BrkCardMediumDensityList>
      </div>
      <div class="list-cards">
        <BrkCardMediumDensityList
          nbItems="4"
          :brkCardMediumDensityArgsList="brkCardMediumDensityArgsList2"
        >
        </BrkCardMediumDensityList>
      </div>
    </div>
  </div>
</template>

<script setup>
const brkImageArgs = {
  src: [{ path: "https://placekitten.com/300/300", width: "300w" }],
  sizing: "cover",
};
const brkCardMediumDensityArgsList = [
  {
    body: "0.10$ à 10$",
    brkCardSecondaryInfoArgs: {
      backgroundColor: "#304ed0",
      text: "5 000 000$*",
    },
    brkImageArgs: brkImageArgs,
    hasSecondaryInfo: true,
    heading: "Monopoly sur 2 lignes",
    inverted: false,
    link: "https://atlas.loto-quebec.com/",
    secondaryInfo: "BrkCardSecondaryInfoLine",
    subtitle: "*Progressifs multiples",
  },
  {
    body: "0.10$ à 10$",
    brkCardSecondaryInfoArgs: {
      backgroundColor: "#ab0202",
      text: "49 000 000$*",
    },
    brkImageArgs: brkImageArgs,
    hasSecondaryInfo: true,
    heading: "Titre du jeu",
    link: "https://atlas.loto-quebec.com/",
    secondaryInfo: "BrkCardSecondaryInfoLogo",
    subtitle: "",
  },
  {
    body: "100 000 000 000 000 000 000 000$ à 500 000 000 000 000 000 000$",
    brkImageArgs: brkImageArgs,
    hasSecondaryInfo: false,
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "https://atlas.loto-quebec.com/",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor augue quis nulla ultrices scelerisque. Ut eleifend lectus vitae felis eleifend, ut porttitor lorem efficitur.",
  },
  {
    body: "0.10$ à 10$",
    brkImageArgs: brkImageArgs,
    hasSecondaryInfo: false,
    heading: "Un dernier jeu",
    link: "https://atlas.loto-quebec.com/",
    subtitle: "",
  },
];
const brkCardMediumDensityArgsList2 = [
  {
    body: "0.10$ à 10$",
    brkCardSecondaryInfoArgs: {
      backgroundColor: "#ab0202",
      text: "6 000$*",
    },
    brkImageArgs: brkImageArgs,
    hasSecondaryInfo: true,
    heading: "Lorem",
    link: "https://atlas.loto-quebec.com/",
    secondaryInfo: "BrkCardSecondaryInfoLogo",
    subtitle: "*Progressifs multiples",
  },
  {
    body: "0.10$ à 10$",
    brkImageArgs: brkImageArgs,
    hasSecondaryInfo: false,
    heading: "Un dernier jeu",
    link: "https://atlas.loto-quebec.com/",
    subtitle: "",
  },
];
</script>
<style lang="scss" scoped>
.card-medium-density {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.single-card {
  margin-bottom: 50px;
}

.column-list {
  flex-grow: 1;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
}
</style>
