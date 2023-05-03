<template>
  <div class="brk-buttons">
    <div class="primary">
      <h3>Bouton primaire</h3>
      <BrkButton
        accessibilityText=""
        :inverted="false"
        label="Jouer"
        link="https://google.com"
        size="md"
        variant="primary"
      ></BrkButton>
      <div class="button-inverted">
        <BrkButton
          accessibilityText=""
          :inverted="true"
          label="Jouer"
          link="https://google.com"
          size="md"
          variant="primary"
        ></BrkButton>
      </div>
    </div>
    <div class="secondary">
      <h3>Bouton secondaire</h3>
      <BrkButton
        accessibilityText=""
        :inverted="false"
        label="Jouer"
        link="https://google.com"
        size="md"
        variant="secondary"
      ></BrkButton>
      <div class="button-inverted">
      <BrkButton
        accessibilityText=""
        :inverted="true"
        label="Jouer"
        link="https://google.com"
        size="md"
        variant="secondary"
      ></BrkButton>
      </div>
    </div>
    <div class="tertiary">
      <h3>Bouton tertiaire</h3>
      <BrkButton
        accessibilityText=""
        :inverted="false"
        label="Jouer"
        link="https://google.com"
        size="md"
        variant="tertiary"
      ></BrkButton>
      <div class="button-inverted">
      <BrkButton
        accessibilityText=""
        :inverted="true"
        label="Jouer"
        link="https://google.com"
        size="md"
        variant="tertiary"
      ></BrkButton>
      </div>
    </div>
    <div class="link">
      <h3>Bouton texte</h3>
      <BrkButton
        accessibilityText=""
        :inverted="false"
        label="Jouer"
        link="https://google.com"
        size="md"
        variant="text"
      ></BrkButton>
      <div class="button-inverted">
      <BrkButton
        accessibilityText=""
        :inverted="true"
        label="Jouer"
        link="https://google.com"
        size="md"
        variant="text"
      ></BrkButton>
      </div>
    </div>
    <div class="icon">
      <h3>Bouton icone</h3>
      <BrkButton
        accessibilityText=""
        :inverted="false"
        label="Jouer"
        link="https://google.com"
        size="lg"
        variant="text"
        icon="home"
      ></BrkButton>
      <div class="button-inverted">
      <BrkButton
        accessibilityText=""
        :inverted="true"
        label="Jouer"
        link="https://google.com"
        size="lg"
        variant="text"
        icon="home"
      ></BrkButton>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.brk-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  h3 {
    text-align: center;
  }

  .button-inverted {
    display: inline-block;
    padding: 4px;
    background-color: gray;
  }
}
</style>