<template>
  <div>
    <h3>Média sociaux: défaut</h3>
    <div class="default">
      <BrkSocialMedia
        color="main"
        :inverted="notInverted"
        justifyContent="center"
        :socialMedia="socialMedia"
      >
      </BrkSocialMedia>
    </div>

    <h3>Média sociaux: défaut inversé</h3>
    <div class="inverted">
      <BrkSocialMedia
        color="main"
        :inverted="inverted"
        justifyContent="center"
        :socialMedia="socialMedia"
      >
      </BrkSocialMedia>
    </div>

    <h3>Média sociaux: alternative</h3>
    <div class="default">
      <BrkSocialMedia
        color="alt"
        :inverted="notInverted"
        justifyContent="left"
        :socialMedia="socialMedia"
      >
      </BrkSocialMedia>
    </div>

    <h3>Média sociaux: alternative inversé</h3>
    <div class="inverted">
      <BrkSocialMedia
        color="alt"
        :inverted="inverted"
        justifyContent="right"
        :socialMedia="socialMedia"
      >
      </BrkSocialMedia>
    </div>
  </div>
</template>

<script setup>
const inverted = true;
const notInverted = false;
const socialMedia = [
  {
    brkButtonArgs: {
      link: "https://www.facebook.com/JeuxenligneLQ",
      icon: "facebook",
    },
  },
  {
    brkButtonArgs: {
      link: "https://www.twitter.com/LotoQuebec",
      icon: "flutter_dash",
    },
  },
  {
    brkButtonArgs: {
      link: "https://www.youtube.com/user/espacejeux",
      icon: "smart_display",
    },
  },
  {
    brkButtonArgs: {
      link: "https://www.linkedin.com/company/espacejeux-loto-qu-bec/",
      icon: "document_scanner",
    },
  },
  {
    brkButtonArgs: {
      link: "https://www.instagram.com/loteries_lotoquebec/",
      icon: "photo_camera",
    },
  },
];
</script>

<style lang="scss" scoped>
h3 {
  margin-left: 20px;
}
.default {
  background-color: #0b5db7;
  box-sizing: border-box;
  padding: 20px;
}
.inverted {
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
}
</style>
