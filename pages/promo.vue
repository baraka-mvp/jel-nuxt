<template>
  <div class="promo-card">
    <div class="promo-primary">
      <h3>Promo primaire</h3>
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
      >
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayLeftArgs" />
        </template>
      </BrkPromo>
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
      >
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayRightArgs" />
        </template>
      </BrkPromo>
    </div>

    <div class="promo-secondary">
      <h3>Promo secondaire</h3>
      <BrkPromo
        backgroundColor=""
        contentAlign="left"
        description=""
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
        :fullImage="true"
        :inverted="true"
        preTitle="Machine à sous"
        title="MegaJackpots®"
        titleElement="h2"
        variant="secondary"
        :withGradient="false"
        :brkButtonArgs="brkButtonArgs"
        :brkImageArgs="brkImageArgs"
        >
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayLeftArgs" />
        </template>
      </BrkPromo>
      <BrkPromo
        backgroundColor=""
        contentAlign="left"
        description=""
        :fullImage="true"
        :inverted="true"
        preTitle="Machine à sous"
        title="MegaJackpots®"
        titleElement="h2"
        variant="secondary"
        :withGradient="false"
        :brkButtonArgs="brkButtonArgs"
        :brkImageArgs="brkImageArgs"
        >
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayRightArgs" />
        </template>
      </BrkPromo>
    </div>

    <!-- contentAlign="right" ne fonctionne pas -->
    <div class="promo-tertiary">
      <h3>Promo tertiaire</h3>
      <BrkPromo
        backgroundColor="brown"
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
      <BrkPromo
        backgroundColor="brown"
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
        >
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayLeftArgs" />
        </template>
      </BrkPromo>
      <BrkPromo
        backgroundColor="brown"
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
        >
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayRightArgs" />
        </template>
      </BrkPromo>
    </div>

    <div class="promo-gradient">
      <h3>Promo gradient</h3>
      <BrkPromo
        backgroundColor="#000"
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
      <BrkPromo
        backgroundColor="#000"
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
        >
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayLeftArgs" />
        </template>
      </BrkPromo>
      <BrkPromo
        backgroundColor="#000"
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
        >
        <template #overlay>
          <BrkTagOverlay v-bind="brkTagOverlayRightArgs" />
        </template>
      </BrkPromo>
    </div>
  </div>
</template>

<script setup>
const brkImageArgs = {
  alt: "Logo mega jackpot",
  sizing: "cover",
  src: [
    { path: "https://placekitten.com/1920/1920", width: "1920w" },
    { path: "https://placekitten.com/1400/1400", width: "1400w" },
    { path: "https://placekitten.com/1080/1080", width: "1080w" },
    { path: "https://placekitten.com/1080/1080", width: "1080w" },
  ],
};

const brkButtonArgs = {
  accessibilityText: "",
  inverted: false,
  label: "Jouer",
  link: "https://google.com",
  size: "lg",
  variant: "secondary",
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
h3 {
  text-align: center;
}
.promo-secondary {
  margin: 0 auto;
  max-width: 800px;
  width: 80%;
}

.brk-promo {
  padding-bottom: 20px;
}
</style>
