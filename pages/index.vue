<template>
  <BrkTemplateColumns nbColumnsMax=1> 
<template #title>  
  <h1>Baraka Nuxt 3 </h1>

</template>  
<template #content>  
  <brk-carousel :nbrPerView="nbrPerView">        

    <template #item0><brk-card-hero v-bind="collection1.cards[0]" /></template>        
    <template #item1><brk-card-hero v-bind="collection1.cards[1]" /></template>        
    <template #item2><brk-card-hero v-bind="collection1.cards[2]" /></template>        
    <template #item3><brk-card-hero v-bind="collection1.cards[3]" /></template>        
    <template #item4><brk-card-hero v-bind="collection1.cards[4]" /></template>      
</brk-carousel> 
<brk-card-hero v-bind="collection1.cards[4]" />
<brk-button
  style="margin:0 1rem"
  label= "Button"
  variant="tertiary"
  :callback=" () => doAlert('click') "
>
</brk-button>

</template>  



</BrkTemplateColumns>



</template>




<script setup>
const doAlert = (m)=> alert(m)
const gameList = [
  {
    title: "Noble Peacock",
    img: {
      bg: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:d0636fd3-b2f5-4a4d-98df-6e34fb1a5216/JEU-MAS-pp-nobelpeacock-Carte-bg.webp",
      character:
        "https://portail.lotoquebec.ta/.imaging/focalpoint/4x3/[[IMGSIZE]]x/dam/jcr:316b7f79-1ab9-4f75-a436-e4f0f7c30e3a/JEU-MAS-pp-nobelpeacock-Carte-element.webp",
      logo: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:2e3bdc65-5d6b-40c6-93e8-941a6d40b389/JEU-MAS-pp-nobelpeacock-Carte-logo.webp",
      charAlign: "center",
    },
  },
  {
    title: "Wheel of Fortune: Hawaiian Getaway",
    img: {
      bg: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:b60d64ba-ab72-4e26-8daf-37fcf1896cd9/JEU-MAS-WheelOfFortuneHawaiianGetaway-Carte-bg.webp",
      character: "",
      logo: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:866d6b53-6627-4249-bd9d-cad6afaf454b/JEU-MAS-WheelOfFortuneHawaiianGetaway-Carte-logo.webp",
    },
  },
  {
    title: "Diamond Cash: Oasis Riches",
    img: {
      bg: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:aa3e8ceb-6f96-493f-941a-30bf96b47dbc/JEU-MAS-diamondcashoasisriches-Carte-bg.webp",
      character:
        "https://portail.lotoquebec.ta/.imaging/focalpoint/4x3/[[IMGSIZE]]x/dam/jcr:c52c51d5-a794-4d03-a79f-494afa6e732f/JEU-MAS-diamondcashoasisriches-Carte-element.webp",
      logo: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:c66fbda0-e2a1-4234-94bb-afc1835dc167/JEU-MAS-diamondcashoasisriches-Carte-logo.webp",
      charAlign: "left",
    },
  },
  {
    title: "Deal or no Deal: Keno",
    img: {
      bg: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:930aad1b-e6b4-4d7f-acb6-84d789b95d0c/JEU-KENO-deal-or-no-deal-Carte-bg.webp",
      character: "",
      logo: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:931651bf-c801-404b-8d05-3474a01a925e/JEU-KENO-deal-or-no-deal-Carte-logo.webp",
    },
  },
  {
    title: "Bonus Island Bonus Buy",
    img: {
      bg: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:858c089c-c2d5-4e2a-bac1-b52df3b326ce/JEU-MAS-BonusIsland-Carte-bg.webp",
      character:
        "https://portail.lotoquebec.ta/.imaging/focalpoint/4x3/[[IMGSIZE]]x/dam/jcr:b30ae893-49c5-4653-b7af-f4bba44dcb28/JEU-MAS-BonusIsland-Carte-element.webp",
      logo: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:14104e89-3bc8-48d1-b397-462603cf7428/JEU-MAS-BonusIsland-Carte-logo.webp",
      charAlign: "right",
    },
  },
  {
    title: "Slingo Big Wheel",
    img: {
      bg: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:0b45e9b0-2b4a-4867-a065-b66bf9e3dead/JEU-MAS-Slingo-Big-Wheel-Carte-bg.webp",
      character: "",
      logo: "https://portail.lotoquebec.ta/.imaging/focalpoint/16x9/[[IMGSIZE]]x/dam/jcr:29dbe893-274d-4f13-abd1-28dc035c0571/JEU-MAS-Slingo-Big-Wheel-Carte-logo.webp",
    },
  },
];

const nbrPerView = {
  
    desktop: 3,
    tablet: 2,
    mobile: 1,
  
}

const preTitleList = [
  "",
  "Nouveau",
  "Dernière chance",
  "Machine à sous",
  "Lot progressif",
  "Jeu de table",
];
const postTitleList = [
  "1$ à 5$",
  "3$ à 15$",
  "0,25$ à 1$",
  "10$ à 50$",
  "0,25$ à 500$",
];

const baseCard = {
  link: "https://google.ca",
  showNav: false,
  brkButtonArgs: {
    label: "Jouer!",
    link: "/user/"+15,
    accessibilityText:"Play!",
  },
};
const baseCollectionOptions = {
  brkTitleArgs: {
    headerSize: "h2",
    alignment: "left",
  },
  brkCarouselArgs: {
    nbrPerView: { desktop: 3, tablet: 2, mobile: 1 },
    accessibilityTextLeft: "Précédent",
    accessibilityTextRight: "Suivant",
  },
};

const gameIdList = (() => {
  let list = [];
  for (let i = 0; i < gameList.length; i++) {
    list.push(i);
  }
  return list;
})();

function getImgArray(imgPath) {
  return [
    {
      path: imgPath.replace("[[IMGSIZE]]", "375"),
      width: "375w",
    },
    {
      path: imgPath.replace("[[IMGSIZE]]", "600"),
      width: "600w",
    },
  ];
}

function getFormattedGame(gameInfo) {
  let game = {
    title: gameInfo.title,
    preTitle: preTitleList[Math.floor(Math.random() * preTitleList.length)],
    postTitle: postTitleList[Math.floor(Math.random() * postTitleList.length)],
    brkTripleImagesArgs: {
      bg: getImgArray(gameInfo.img.bg),
      logo: getImgArray(gameInfo.img.logo),
      alt: gameInfo.title,
    },
  };
  if (gameInfo.img.character !== "") {
    game.brkTripleImagesArgs.character = getImgArray(gameInfo.img.character);
    game.brkTripleImagesArgs.positionChr = gameInfo.img.charAlign;
  }
  return game;
}

function createCollection(title) {
  const shuffledGames = gameIdList.sort((a, b) => 0.5 - Math.random());
  let collection = {
    options: JSON.parse(JSON.stringify(baseCollectionOptions)),
    cards: [],
  };

  for (let i = 0; i < gameList.length; i++) {
    collection.cards.push({
      ...baseCard,
      ...getFormattedGame(gameList[shuffledGames[i]]),
    });
  }
  collection.options.brkTitleArgs.title = title;
  return collection;
}
//Créer une collection
const collection1 = createCollection("Une collection de jeux");
</script>

<style scoped>

.collection {
  margin: 50px 0;
}
.collection .collection-wrapper {
  margin: 0 auto;
  max-width: 1600px;
  width: calc(100% - 40px);
}
</style>