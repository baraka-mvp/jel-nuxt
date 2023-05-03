<template>
  <div class="page-layout" :class="navClasses">
    <nav class="navigation-menu">
      <BrkMenuVertical
        icon="menu"
        accessibilityTextMenuOpen="Reduire le menu"
        accessibilityTextMenuClosed="Afficher le menu complet"
        :brkMenuItems="itemArgs"
        :minimizeMenu="false"
      >
      </BrkMenuVertical>
    </nav>

    <main>
      <BrkPromo
        backgroundColor=""
        contentAlign="left"
        description="Connaissez-vous nos lots progressifs?"
        :fullImage="true"
        :inverted="true"
        preTitle="Machines à sous et Instants"
        title="Gros lot de 15 000 $"
        titleElement="h2"
        variant="primary"
        :withGradient="false"
        :brkButtonArgs="brkButtonArgs"
        :brkImageArgs="brkImageArgsTop"
      />
      <br />
      <BrkTemplateColumns :nbColumnsMax="2">
        <template #content>
          <BrkCardHighDensityList
            :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
            nbItems="4"
            title="Recommandés pour vous "
            link="https://google.com"
            showLink="true"
          >
          </BrkCardHighDensityList>

          <div class="promo-tertiary">
            <BrkPromo
              backgroundColor="navy"
              contentAlign="left"
              description=""
              :fullImage="false"
              :inverted="true"
              preTitle="Encadrer mon jeu"
              title="Pour une expérience de jeu positive"
              titleElement="h2"
              variant="tertiary"
              :withGradient="false"
              :brkButtonArgs="brkButtonArgs"
              :brkImageArgs="brkImageArgsTopRight"
            />
          </div>
        </template>
      </BrkTemplateColumns>

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Cagnottes en délire</BrkTitle></template>
        <template #content>
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
                  <BrkImage v-bind="brkImageArgs3" />
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
                  <BrkImage v-bind="brkImageArgs2" />
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
                  <BrkImage v-bind="brkImageArgs3" />
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
                  <BrkImage v-bind="brkImageArgs2" />
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

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Nouveautés</BrkTitle></template>
        <template #content>
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
                  <BrkImage v-bind="brkImageArgs3" />
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
                  <BrkImage v-bind="brkImageArgs2" />
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
                  <BrkImage v-bind="brkImageArgs3" />
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

      <BrkTemplateColumns :nbColumnsMax="4">
        <template #content>
          <BrkCardHero
            title="Offre aux nouveaux clients"
            preTitle="Du fun et des jeux"
            link="https://google.ca"
            :brkButtonArgs="brkButtonArgs"
          >
            <template #image>
              <BrkImage v-bind="brkImageArgsOffre" />
            </template>
          </BrkCardHero>

          <BrkCardHero
            title="Jouer local"
            preTitle="C’est faire des heureux partout au Québec"
            link="https://google.ca"
            :brkButtonArgs="brkButtonArgs"
          >
            <template #image>
              <BrkImage v-bind="brkImageArgsJouer" />
            </template>
          </BrkCardHero>

          <BrkCardHero
            title="Jeux en ligne"
            preTitle="Complètement légal, fièrement local."
            link="https://google.ca"
            :brkButtonArgs="brkButtonArgs"
          >
            <template #image>
              <BrkImage v-bind="brkImageArgsLegal" />
            </template>
          </BrkCardHero>
        </template>
      </BrkTemplateColumns>

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Nos jeux populaires</BrkTitle></template>
        <template #content>
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
        </template>
      </BrkTemplateColumns>

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Keno</BrkTitle></template>
        <template #content>
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
                  <BrkCardSecondaryInfoJackpot
                    v-bind="brkSecondaryInfoJackpot2Args"
                  />
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
                  <BrkCardSecondaryInfoJackpot
                    v-bind="brkSecondaryInfoJackpot2Args"
                  />
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

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Offert en casino</BrkTitle></template>
        <template #content>
          <BrkCarousel v-bind="carouselArgs">
            <template #cardHighDensityList>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList2>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList3>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList4>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
          </BrkCarousel>
        </template>
      </BrkTemplateColumns>

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Machines à sous</BrkTitle></template>
        <template #content>
          <BrkCarousel v-bind="carouselArgs">
            <template #cardHighDensityList>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList2>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList3>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList4>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs1"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
          </BrkCarousel>
        </template>
      </BrkTemplateColumns>

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Jeux de table</BrkTitle></template>
        <template #content>
          <BrkCarousel v-bind="carouselArgs">
            <template #cardHighDensityList>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList2>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList3>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
            <template #cardHighDensityList4>
              <BrkCardHighDensityList
                :brkCardHighDensityArgsList="brkCardHighDensityArgsListArgs"
                nbItems="4"
                link="https://google.com"
                showLink="true"
              >
              </BrkCardHighDensityList>
            </template>
          </BrkCarousel>
        </template>
      </BrkTemplateColumns>

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Points Casino Extra</BrkTitle></template>
        <template #content>
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
                  <BrkImage v-bind="brkImageArgs2" />
                </template>
                <template #secondary>
                  <BrkCardSecondaryInfoJackpot
                    v-bind="brkSecondaryInfoJackpot2Args"
                  />
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
                  <BrkImage v-bind="brkImageArgs2" />
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

      <BrkTemplateColumns :nbColumnsMax="1">
        <template #title><BrkTitle>Slingo</BrkTitle></template>
        <template #content>
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
                  <BrkImage v-bind="brkImageArgsSlingo1" />
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
                  <BrkImage v-bind="brkImageArgsSlingo2" />
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
                  <BrkImage v-bind="brkImageArgsSlingo3" />
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
                  <BrkImage v-bind="brkImageArgsSlingo4" />
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
                  <BrkImage v-bind="brkImageArgsSlingo5" />
                </template>
              </BrkCardHero>
            </template>
          </BrkCarousel>
        </template>
      </BrkTemplateColumns>
    </main>
  </div>
  <div class="footer">
    <div class="container">
      <div class="container1">
        <div><BrkLinkList v-bind="linkedListArgs"></BrkLinkList></div>
        <div><BrkLinkList v-bind="linkedListArgs1"></BrkLinkList></div>
      </div>

      <div class="container2">
        <BrkInfoZone :brkImageArgs="brkImageArgsInfoZone1" :inverted="inverted">
          <template #title>
            <BrkTitle v-bind="titleArgs">Infolettre Jeux en ligne</BrkTitle>
          </template>
          <template #text>
            <BrkText v-bind="textArgs">
              <BrkTextParagraph>
                Abonnez-vous dès maintenant pour recevoir des surprises
                exclusives par courriel.
              </BrkTextParagraph>
              <BrkTextParagraph>
                <BrkTextLink link="https://www.lotoquebec.com"
                  >En savoir plus</BrkTextLink
                >
              </BrkTextParagraph>
            </BrkText>
          </template>
        </BrkInfoZone>

        <BrkInfoZone :brkImageArgs="brkImageArgsInfoZone2" :inverted="inverted">
          <template #title>
            <BrkTitle v-bind="titleArgs"> Encadrer mon jeu </BrkTitle>
          </template>
          <template #text>
            <BrkText v-bind="textArgs">
              <BrkTextParagraph>
                Découvrez nos outils pour permettre de vivre une expérience
                positive.
              </BrkTextParagraph>
              <BrkTextParagraph>
                <BrkTextLink link="https://www.lotoquebec.com"
                  >Limites</BrkTextLink
                >
                |
                <BrkTextLink link="https://www.lotoquebec.com"
                  >Pauses</BrkTextLink
                >
                |
                <BrkTextLink link="https://www.lotoquebec.com"
                  >Autoexclusion</BrkTextLink
                >
              </BrkTextParagraph>
            </BrkText>
          </template>
        </BrkInfoZone>
      </div>
    </div>

    <BrkSocialMedia
      color="main"
      :inverted="false"
      justifyContent="center"
      :socialMedia="socialMedia"
    >
    </BrkSocialMedia>
  </div>
</template>

<script></script>

<script setup>
import { ref, computed } from "vue";

const navClasses = computed(() => {
  let classes = [];
  if (!isMenuVisible.value) {
    classes.push("menu-hidden");
  }
  return classes;
});

const isMenuVisible = ref(true);
const brkImageArgs = {
  alt: "Logo mega jackpot",
  src: [{ path: "https://picsum.photos/200/300", width: "300w" }],
  sizing: "cover",
};


const brkImageArgs2 = {
  ...brkImageArgs,
  src: [
    {
      path: "https://picsum.photos/id/53/200/300",
      width: "300w",
    },
  ],
};

const brkImageArgs3 = {
  ...brkImageArgs,
  src: [
    {
      path: "https://picsum.photos/id/55/200/300",
      width: "300w",
    },
  ],
};

const brkImageArgsSims = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/16x9/375x/dam/jcr:0378498c-12e6-4cb0-adc8-0b1eafb37b23/JEU-MAS-Simsalaspinn2-carte-logo.webp",
      width: "375w",
    },
  ],
};

const brkImageArgsRoulette = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/16x9/375x/dam/jcr:8fb55014-19a2-4532-8808-c3451b6ff717/JEU-JDT-bonus-roulette-Carte-logo.webp",
      width: "375w",
    },
  ],
};

const brkImageArgsPots = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/16x9/375x/dam/jcr:8d82f445-8a88-4c3b-8df1-de510f1919d6/JEU-MAS-pots-o-luck-Carte-logo.webp",
      width: "375w",
    },
  ],
};

const brkImageArgsKeno = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/16x9/375x/dam/jcr:95852787-0d41-48a4-baee-2a509a4043e1/JEU-KENO-pyramid-jackpot-Carte-logo.webp",
      width: "375w",
    },
  ],
};

const brkImageArgsOffre = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/1x1/768x/dam/jcr:4d88e6b4-052e-49a1-952a-c660d393a0a0/OFFRE-MAS-vm1-jel-cc-fr.webp",
      width: "768w",
    },
  ],
};

const brkImageArgsJouer = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/1x1/768x/dam/jcr:49817fde-149a-4571-84cc-43303d5706b7/GAGNANT-permanent-cci.webp",
      width: "768w",
    },
  ],
};

const brkImageArgsLegal = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/1x1/768x/dam/jcr:6a2c6f87-e021-4552-bb22-8d83f3eb90ee/CAMPAGNE-SOCIETALE-legalite-phase-4-cc-fr.webp",
      width: "768w",
    },
  ],
};
const brkImageArgsTop = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/16x9/1600x/dam/jcr:776d361f-ec78-44cf-9efc-65270d71b77d/promo-cagnottes-en-delire-ep-rappel-fr.webp",
      width: "300w",
    },
  ],
};

const brkImageArgsTopRight = {
  ...brkImageArgs,
  src: [
    {
      path: "https://portail.lotoquebec.com/.imaging/focalpoint/1x1/375x/dam/jcr:831db639-a792-4b57-99e6-78de0e574be6/CAMPAGNE-JR-permanent-cci-f.webp",
      width: "375w",
    },
  ],
};

const brkImageArgsInfoZone1 = {
  src: [{ path: "https://portail.lotoquebec.com/dam/jel/casino/pied-de-page/infolettre-cadeau.svg", width: "300w" }],
  alt: "placeholder-image",
  sizing: "contain",
};

const brkImageArgsInfoZone2 = {
  src: [{ path: "https://portail.lotoquebec.com/dam/jel/casino/pied-de-page/Bien-joue-fr.svg", width: "300w" }],
  alt: "placeholder-image",
  sizing: "contain",
};

const titleArgs = {
  headerSize: "h2",
  headerStyle: "heading1",
  alignment: "left",
  nbrLimitedLines: null,
  isHidden: false,
  inverted: false,
  alignment: "left",
};

const textArgs = {
  inverted: false,
  caption: false,
};

const brkButtonArgs = {
  accessibilityText: "",
  inverted: false,
  label: "Jouer",
  link: "https://google.com",
  size: "md",
  variant: "tertiary",
};

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

const brkCardHighDensityArgsListArgs = [
  {
    title: "Carte 1",
    subtitle: "3 034 000$",
    body: "5$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: {
      ...brkImageArgs,
      src: [
        {
          path: "https://portail.lotoquebec.com/.imaging/focalpoint/16x9/1600x/dam/jcr:776d361f-ec78-44cf-9efc-65270d71b77d/promo-cagnottes-en-delire-ep-rappel-fr.webp",
          width: "1600w",
        },
      ],
    },
    size: "sm",
  },
  {
    title: "Carte 2",
    subtitle: "80 000$",
    body: "5$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgs3,
    size: "sm",
  },
  {
    title: "Carte 3",
    subtitle: "90$",
    body: "5$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgs2,
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
const brkCardHighDensityArgsListArgs1 = [
  {
    title: "",
    subtitle: "Simsalaspinn 2",
    body: "0,20$ à 140$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgsSims,
    size: "sm",
  },
  {
    title: "",
    subtitle: "Bonus Roulette",
    body: "0,20$ à 999$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgsRoulette,
    size: "sm",
  },
  {
    title: "Pots O'Luck",
    subtitle: "61863 progressifs multiples",
    body: "0,20$ à 40$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgsPots,
    size: "sm",
  },
  {
    title: "Pyramid Jackpot keno",
    subtitle: "1438$",
    body: "0,20$ à 200$",
    link: "https://google.ca",
    brkButtonArgs: brkButtonArgs,
    brkImageArgs: brkImageArgsKeno,
    size: "sm",
  },
];

const carouselArgs = {
  nbrPerView: {
    desktop: 4,
    tablet: 2,
    mobile: 1,
  },
  accessibilityTextLeft: "Précédent",
  accessibilityTextRight: "Suivant",
};

let linkedListArgs = {
  brkTitleArgs: {
    headerSize: "h3",
    headerStyle: "heading3",
    alignment: "left",
    isHidden: false,
    inverted: false,
  },
  brkAccordionArgs: {
    a11yLabel: "À propos de Loto-Québec",
    inverted: false,
  },
  linkList: [
    {
      label: "FAQ",
      link: "http://perdu.com",
      icon: "help",
    },
    {
      label: "Nous joindre",
      link: "http://google.com",
      icon: "phone",
    },
    {
      label: "Informations",
    },
    {
      label: "Argent Web",
      link: "http://google.com",
    },
    {
      label: "Sécurité et intégrité",
      link: "http://google.com",
    },
    {
      label: "Aide technique",
      link: "http://google.com",
    },
    {
      label: "Carte du site",
      link: "http://google.com",
    },
  ],
};
let linkedListArgs1 = {
  brkTitleArgs: {
    headerSize: "h3",
    headerStyle: "heading3",
    alignment: "left",
    isHidden: false,
    inverted: false,
  },
  brkAccordionArgs: {
    a11yLabel: "À propos de Loto-Québec",
    inverted: false,
  },
  linkList: [
    {
      label: "À propos de nous",
      link: "http://perdu.com",
    },
    {
      label: "Responsabilité sociétale",
      link: "http://google.com",
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
.page-layout {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  main {
    flex-grow: 1;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    padding: 0 100px;
  }

  .container1 {
    display: flex;
    flex-direction: row;
    padding: 40px 0;
    justify-content: space-around;
    border-top: 1px solid lightgray;
  }

  .container2 {
    display: flex;
    flex-direction: column;

    .brk-info-zone {
      border-left: 1px solid lightgray;
      border-top: 1px solid lightgray;
    }
  }

  .brk-social-media {
    background-color: #0b5db7;
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>
