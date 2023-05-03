<template>
  <div class="card-hero">
    <div class="row">
      <BrkCardHero
        title="Titre du jeu"
        preTitle="Pré titre"
        postTitle="Post titre"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
      >
        <template #image>
          <BrkImage v-bind="brkImageArgs" />
        </template>
      </BrkCardHero>

      <BrkCardHero
        title="Titre du jeu"
        preTitle="Pré titre"
        postTitle="Post titre"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
      >
        <template #image>
          <BrkImage v-bind="brkImageArgs" />
        </template>
        <template #secondary>
          <BrkCardSecondaryInfoText v-bind="brkSecondaryInfoTextArgs" />
        </template>
      </BrkCardHero>

      <BrkCardHero
        title="Titre du jeu"
        preTitle="Pré titre"
        postTitle="Post titre"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
      >
        <template #image>
          <BrkImage v-bind="brkImageArgs" />
        </template>
        <template #secondary>
          <BrkCardSecondaryInfoJackpot v-bind="brkSecondaryInfoJackpotArgs" />
        </template>
      </BrkCardHero>

      <BrkCardHero
        title="Titre du jeu"
        preTitle="Pré titre"
        postTitle="Post titre"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
      >
        <template #image>
          <BrkImage v-bind="brkImageArgs" />
        </template>
        <template #secondary>
          <BrkCardSecondaryInfoLogo v-bind="brkSecondaryInfoLogoArgs" />
        </template>
      </BrkCardHero>
    </div>
    <div class="row">
      <BrkCardHero
        title="Titre du jeu"
        preTitle="Pré titre"
        postTitle="Post titre"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
      >
        <template #image>
          <BrkImage v-bind="brkImageArgs" />
        </template>
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayLeftArgs" />
        </template>
      </BrkCardHero>

      <BrkCardHero
        title="Titre du jeu"
        preTitle="Pré titre"
        postTitle="Post titre"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
      >
        <template #image>
          <BrkImage v-bind="brkImageArgs" />
        </template>
        <template #secondary>
          <BrkCardSecondaryInfoText v-bind="brkSecondaryInfoTextArgs" />
        </template>
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayRightArgs" />
        </template>
      </BrkCardHero>

      <BrkCardHero
        title="Titre du jeu"
        preTitle="Pré titre"
        postTitle="Post titre"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
      >
        <template #image>
          <BrkImage v-bind="brkImageArgs" />
        </template>
        <template #secondary>
          <BrkCardSecondaryInfoJackpot v-bind="brkSecondaryInfoJackpotArgs" />
        </template>
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayLeftArgs" />
        </template>
      </BrkCardHero>

      <BrkCardHero
        title="Titre du jeu"
        preTitle="Pré titre"
        postTitle="Post titre"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
      >
        <template #image>
          <BrkImage v-bind="brkImageArgs" />
        </template>
        <template #secondary>
          <BrkCardSecondaryInfoLogo v-bind="brkSecondaryInfoLogoArgs" />
        </template>
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayRightArgs" />
        </template>
      </BrkCardHero>
    </div>
  </div>
</template>

<script setup>
const brkImageArgs = {
  alt: "Logo mega jackpot",
  src: [{ path: "https://placekitten.com/300/300", width: "300w" }],
  sizing: "cover",
};

const brkButtonArgs = {
  accessibilityText: "",
  inverted: false,
  label: "Jouer",
  link: "https://google.com",
  size: "md",
  variant: "tertiary",
};

const brkSecondaryInfoTextArgs = {
  backgroundColor: "#eeeeee",
  subText: "de retour à 10h demain",
  text: "Table fermée ",
};

const brkSecondaryInfoJackpotArgs = {
  backgroundColor: "",
  format: "fr",
  text: "Lot progressif",
  totalAmount: "5573029",
  brkImageArgs: {
    alt: "Logo mega jackpot",
    src: [{ path: "https://placekitten.com/200/200", width: "200w" }],
  },
};

const brkSecondaryInfoLogoArgs = {
  backgroundColor: "",
  brkImageArgs: {
    alt: "Logo mega jackpot",
    src: [{ path: "https://placekitten.com/200/200", width: "200w" }],
  },
};
const brkTagOverlayRightArgs = {
  label: "Non disponible",
  position: "right",
  size: "sm",
};

const brkTagOverlayLeftArgs = {
  label: "Non disponible Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  position: "left",
  size: "sm",
};
</script>

<style lang="scss" scoped>
.card-hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-bottom: 20px;
}
</style>
