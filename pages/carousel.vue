<template>
  <div>
    <h3>Carrousel de cartes hero</h3>
    <div class="carousel-wrapper">
      <BrkCarousel v-bind="carouselArgs">
        <template #item>
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
        </template>

        <template #item1>
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
        </template>

        <template #item2>
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
              <BrkCardSecondaryInfoJackpot
                v-bind="brkSecondaryInfoJackpot2Args"
              />
            </template>
          </BrkCardHero>
        </template>

        <template #item3>
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
        </template>

        <template #item4>
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
              <BrkCardSecondaryInfoJackpot
                v-bind="brkSecondaryInfoJackpotArgs"
              />
            </template>
          </BrkCardHero>
        </template>
      </BrkCarousel>
    </div>
    <br />
    <h3>Carrousel de cartes promo</h3>
    <div class="carousel-wrapper">
      <BrkCarousel v-bind="carouselArgs">
        <template #item>
          <BrkPromo
            backgroundColor="pink"
            contentAlign="left"
            description=""
            :fullImage="false"
            :inverted="false"
            preTitle="Machine à sous"
            title="MegaJackpots®"
            titleElement="h2"
            variant="secondary"
            :withGradient="false"
            :brkButtonArgs="brkButtonArgs"
            :brkImageArgs="brkImageArgs"
          />
        </template>

        <template #item1>
          <BrkPromo
            backgroundColor=""
            contentAlign="left"
            description="Courez la chance de gagner le gros lot progressif à chaque partie et avec n'importe quelle mise!"
            :fullImage="true"
            :inverted="true"
            preTitle="Machine à sous"
            title="MegaJackpots®"
            titleElement="h2"
            variant="primary"
            :withGradient="false"
            :brkButtonArgs="brkButtonArgs"
            :brkImageArgs="brkImageArgs"
          />
        </template>

        <template #item2>
          <BrkPromo
            backgroundColor="lightblue"
            contentAlign="left"
            description=""
            :fullImage="false"
            :inverted="true"
            preTitle="Machine à sous"
            title="MegaJackpots®"
            titleElement="h2"
            variant="tertiary"
            :withGradient="false"
            :brkButtonArgs="brkButtonArgs"
            :brkImageArgs="brkImageArgs"
          />
        </template>

        <template #item3>
          <BrkPromo
            backgroundColor="lightgreen"
            contentAlign="left"
            description=""
            :fullImage="true"
            :inverted="true"
            preTitle="Machine à sous"
            title="MegaJackpots®"
            titleElement="h2"
            variant="primary"
            :withGradient="true"
            :brkButtonArgs="brkButtonArgs"
            :brkImageArgs="brkImageArgs"
          />
        </template>

        <template #item4>
          <BrkPromo
            backgroundColor="pink"
            contentAlign="left"
            description=""
            :fullImage="true"
            :inverted="true"
            preTitle="Machine à sous"
            title="MegaJackpots®"
            titleElement="h2"
            variant="primary"
            :withGradient="true"
            :brkButtonArgs="brkButtonArgs"
            :brkImageArgs="brkImageArgs"
          />
        </template>
      </BrkCarousel>
    </div>
    <br />
    <h3>Carrousel Mixed</h3>
    <div class="carousel-wrapper">
      <BrkCarousel v-bind="carouselArgs">
        <template #cardHighDensityList>
          <BrkCardHighDensityList
            :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs"
            nbItems="4"
            title="Ma liste"
            link="https://google.com"
            showLink="true"
          >
          </BrkCardHighDensityList>
        </template>

        <template #cardMediumDensityList>
          <BrkCardMediumDensityList
            nbItems="4"
            :brkCardMediumDensityArgsList="brkCardMediumDensityArgsList"
          >
          </BrkCardMediumDensityList>
        </template>

        <template #promo>
          <BrkPromo
            backgroundColor="lightblue"
            contentAlign="left"
            description=""
            :fullImage="false"
            :inverted="true"
            preTitle="Machine à sous"
            title="MegaJackpots®"
            titleElement="h2"
            variant="tertiary"
            :withGradient="false"
            :brkButtonArgs="brkButtonArgs"
            :brkImageArgs="brkImageArgs"
          />
        </template>

        <template #cardHero>
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
        </template>

        <template #cardHero2>
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
        </template>
      </BrkCarousel>
    </div>
  </div>
</template>

<script setup>
const carouselArgs = {
  nbrPerView: {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  },
  accessibilityTextLeft: "Précédent",
  accessibilityTextRight: "Suivant",
};

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

const brkCardHighDensityArgsListArgs = [
  {
    title: "Carte 1",
    subtitle: "3 034 000$",
    body: "5$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgs,
    size: "sm",
  },
  {
    title: "Carte 2",
    subtitle: "80 000$",
    body: "5$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgs,
    size: "sm",
  },
  {
    title: "Carte 3",
    subtitle: "90$",
    body: "5$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgs,
    size: "sm",
  },
  {
    title: "Carte 4",
    subtitle: "50 000 000$",
    body: "5$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgs,
    size: "sm",
  },
];

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
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor augue quis nulla ultrices scelerisque. Ut eleifend lectus vitae felis eleifend, ut porttitor lorem efficitur.",
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

const brkSecondaryInfoJackpot2Args = {
  backgroundColor: "",
  format: "fr",
  text: "Lot progressif",
  totalAmount: "5573029",
};

const brkSecondaryInfoLogoArgs = {
  backgroundColor: "",
  brkImageArgs: {
    alt: "Logo mega jackpot",
    src: [{ path: "https://placekitten.com/200/200", width: "200w" }],
  },
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  margin-left: 10px;
  width: 80%;
}
h3 {
  margin-left: 20px;
}
</style>
