<template>
  <div>
    <BrkTemplateColumns :nbColumnsMax="1">
      <template #title>
        <BrkTitle
          title="Template 1 colonne"
          headerSize="h2"
          headerStyle="heading1"
          alignment="left"
          :nbrLimitedLines="0"
          :isHidden="false"
          :inverted="false"
        ></BrkTitle>
      </template>
      <template #content>
        <BrkCarousel v-bind="carouselArgs">
          <template #hd1>
            <BrkCardHighDensityList v-bind="brkCardHighDensityListArgs">
            </BrkCardHighDensityList>
          </template>
          <template #promo28>
            <BrkPromo
              backgroundColor="#ccc"
              contentAlign="left"
              description=""
              :fullImage="false"
              :inverted="false"
              preTitle="Machine à sous"
              title="MegaJackpots®"
              titleElement="h2"
              variant="secondary"
              :withGradient="true"
              :brkButtonArgs="brkButtonArgs"
              :brkImageArgs="brkImageArgs"
            />
          </template>
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
      </template>
    </BrkTemplateColumns>

    <BrkTemplateColumns :nbColumnsMax="2">
      <template #title>
        <BrkTitle
          title="Template 2 colonnes"
          headerSize="h2"
          headerStyle="heading1"
          alignment="left"
          :nbrLimitedLines="0"
          :isHidden="false"
          :inverted="false"
        ></BrkTitle>
      </template>
      <template #content>
        <BrkPromo
          backgroundColor=""
          contentAlign="left"
          description="Courez la chance de gagner le gros lot progressif à chaque partie et avec n'importe quelle mise!"
          :fullImage="true"
          :inverted="true"
          preTitle="Machine à sous"
          title="MegaJackpots®"
          titleElement="h2"
          variant="secondary"
          :withGradient="false"
          :brkButtonArgs="brkButtonArgs"
          :brkImageArgs="brkImageArgs"
        />
        <BrkPromo
          backgroundColor=""
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
    </BrkTemplateColumns>

    <BrkTemplateColumns :nbColumnsMax="4">
      <template #title>
        <BrkTitle
          title="Template 4 colonnes"
          headerSize="h2"
          headerStyle="heading1"
          alignment="left"
          :nbrLimitedLines="0"
          :isHidden="false"
          :inverted="false"
        ></BrkTitle>
      </template>
      <template #content>
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
            <BrkCardSecondaryInfoJackpot
              v-bind="brkSecondaryInfoJackpot2Args"
            />
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
      </template>
    </BrkTemplateColumns>
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

const brkCardHighDensityArgs = {
  title: "Titre du jeu",
  subtitle: "5 000 000$",
  subtitle2: "Progressifs Multiples",
  body: "5$",
  inverted: false,
  link: "https://google.ca",
  brkButtonArgs: brkButtonArgs,
  brkImageArgs: brkImageArgs,
  size: "sm",
};

const brkCardHighDensityListArgs = {
  brkCardHighDensityArgsList: [
    { ...brkCardHighDensityArgs, title: "Premier jeu" },
    { ...brkCardHighDensityArgs, title: "Deuxième jeu" },
    { ...brkCardHighDensityArgs, title: "Le jeu en troisième position" },
    { ...brkCardHighDensityArgs, title: "Dernier jeu" },
  ],
  showLink: false,
  inverted: false,
  nbItems: 4,
  brkButtonArgs: {
    link: "https://google.ca",
  },
};
</script>

<style lang="scss" scoped></style>
