<template>
  <v-menu disabled :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex filter" v-bind="attrs" v-on="on">
        По популярности
        <v-icon>mdi-menu-down</v-icon>
      </div>
    </template>
    <v-card width="320">
      <div class="pa-5">
        <v-checkbox></v-checkbox>
        <v-checkbox></v-checkbox>
        <v-btn width="280" height="50" dark>Пременить</v-btn>
      </div>
    </v-card>
  </v-menu>
</template>