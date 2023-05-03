<template>
  <div class="page-layout" :class="navClasses">
    <button class="btn-toggle-menu" @click="toggleMenu"></button>
    <nav class="navigation-menu">
      <ul class="nav-content">
        <li class="section-name"><h4>Atomes</h4></li>
        <ul class="nav-content">
          <li class="component"><NuxtLink to="/button">Button</NuxtLink></li>
          <li class="component"><NuxtLink to="/image">Image</NuxtLink></li>
          <!-- <li class="component">
            <NuxtLink to="/tripleImages">Triple images</NuxtLink>
          </li> -->
          <li class="component">
            <NuxtLink to="/title">Title</NuxtLink>
          </li>
          <li class="component"><NuxtLink to="/text">Text</NuxtLink></li>
          <li class="component">
            <NuxtLink to="/inputText">Formulaire - Input Text</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/inputRadio">Formulaire - Input radio</NuxtLink>
          </li>
        </ul>

        <li class="section-name"><h4>Molécules</h4></li>
        <ul class="nav-content">
          <li class="component">
            <NuxtLink to="/secondaryInfoJackpot">Secondary Jackpot</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/secondaryInfoLogo">Secondary Logo</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/secondaryInfoText">Secondary Text</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/productDetails">Product Details</NuxtLink>
          </li>
        </ul>

        <li class="section-name"><h4>Composants</h4></li>
        <ul class="nav-content">
          <li class="component">
            <NuxtLink to="/accordion">Accordion</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/cardHero">Card Hero</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/cardHighDensity">Card High Density</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/cardMediumDensity">Card Medium Density</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/carousel">Carousel</NuxtLink>
          </li>
          <li class="component"><NuxtLink to="/header">Header</NuxtLink></li>
          <li class="component"><NuxtLink to="/promo">Promo</NuxtLink></li>
          <li class="component">
            <NuxtLink to="/thumbnail">Thumbnail</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/linkList">Liste de liens</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/menuVertical">Menu Vertical</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/menuVerticalItem">Menu Vertical Item</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/socialMedia">Social Media</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/infoZone">Info Zone</NuxtLink>
          </li>
        </ul>

        <li class="section-name"><h4>Gabarits</h4></li>
        <ul class="nav-content">
          <li class="component">
            <NuxtLink to="/templateColumns">Template columns</NuxtLink>
          </li>
          <li class="component">
            <NuxtLink to="/espaceJeu">Espace Jeu</NuxtLink>
          </li>
        </ul>
      </ul>
    </nav>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  //mounted() { console.log('Layout called') }
};
</script>

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

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value;
}
</script>

<style lang="scss" scoped>
body,
html {
  margin: 0;
  padding: 0;
} // fonctionne pas? il faut p-e styler le body dans un autre fichier

.page-layout {
  width: 100%;
  &.menu-hidden {
    .navigation-menu {
      left: -200px;
    }
    .btn-toggle-menu {
      left: 0;
    }
    .btn-toggle-menu::before {
      content: "»";
    }
    .content {
      padding: 0 24px;
    }
  }
}

.navigation-menu {
  height: 100%;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transition: left 0.2s ease-in-out;
  width: 200px;
  z-index: 1;

  .nav-content {
    list-style-type: none;
    margin: 0;
    padding: 0;

    .section-name {
      background-color: rgb(49, 49, 49);
      border: 1px solid black;
      color: white;

      h4 {
        margin: 0;
        padding: 8px;
      }
    }

    .component {
      line-height: 16px;

      a {
        border: 1px solid transparent;
        color: black;
        display: block;
        padding: 8px;
        text-decoration: none;

        &.router-link-active {
          background-color: lightgray;
          border: 1px solid gray;
        }

        &:hover {
          background-color: pink;
          border: 1px solid gray;
        }
      }
    }
  }
}
.btn-toggle-menu {
  background: white;
  border: 1px solid black;
  cursor: pointer;
  height: 20px;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 160px;
  top: 8px;
  width: 20px;
  z-index: 2;
  transition: left 0.2s ease-in-out;

  &::before {
    content: "«";
    display: block;
    height: 100%;
    text-align: center;
  }
}

.content {
  box-sizing: border-box;
  padding: 10px 24px 10px 224px;
  transition: padding 0.2s ease-in-out;
  width: 100%;
}
</style>
