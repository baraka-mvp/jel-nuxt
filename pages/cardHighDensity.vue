<template>
  <div class="card-high-density">
    <div class="single-card">
      <BrkCardHighDensity
        title="Titer du jeu"
        subtitle="5 000 000$"
        body="5$"
        link="https://google.ca"
        :brkButtonArgs="brkButtonArgs"
        :brkImageArgs="brkImageArgs"
        size="sm"
      >
      </BrkCardHighDensity>
    </div>
    <div class="column-list">
      <div class="list-cards">
        <BrkCardHighDensityList
          :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs"
          nbItems="5"
          title="Ma liste"
          link="https://google.com"
          showLink="true"
        >
        </BrkCardHighDensityList>
      </div>
      <div class="list-cards">
        <BrkCardHighDensityList
          :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs2"
          nbItems="5"
          title=""
          link="https://google.com"
          showLink="true"
        >
        </BrkCardHighDensityList>
      </div>
    </div>
  </div>
</template>
<script setup>
const brkButtonArgs = {
  accessibilityText: "",
  inverted: false,
  label: "Jouer",
  link: "https://google.com",
  size: "md",
  variant: "tertiary",
};
const brkImageArgs = {
  alt: "Logo mega jackpot",
  src: [{ path: "https://placekitten.com/300/300", width: "300w" }],
  sizing: "cover",
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
  {
    title: "Carte 5",
    subtitle: "76 900$",
    body: "5$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgs,
    size: "sm",
  },
];
const brkCardHighDensityArgsListArgs2 = [
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
];
</script>
<style scoped>
.card-high-density {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.single-card {
  margin-bottom: 50px;
}
.column-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
</style>
