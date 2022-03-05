<template>
  <div>
    <v-app-bar app color="gray" flat>
      <v-container class="py-0 fill-height">
        <div class="mr-4">Обувь</div>
        <div class="mr-4">Одежда</div>
        <div class="mr-4">Аксессуары</div>
        <div class="mr-4">Распродажа</div>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>

        <div class="">Войти</div>
        <v-btn icon>
          <v-icon>mdi-shopping-outline</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 625px) {
  button {
    display: none;
  }
}
@media screen and (max-width: 476px) {
  div {
    display: none;
  }
}
</style>
