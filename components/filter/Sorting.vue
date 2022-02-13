<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex filter" v-bind="attrs" v-on="on">
        {{
          $store.state.sortValue == "popular"
            ? "По пулярности"
            : $store.state.sortValue == "rating"
            ? "По рейтингу"
            : "По цене"
        }}
        <v-icon>mdi-menu-down</v-icon>
      </div>
    </template>
    <v-card width="320">
      <div class="pa-5">
        <div class="text-center">Сортировка</div>
        <v-form @submit.prevent="sortHandler">
          <v-radio-group v-model="sortValue">
            <v-radio value="popular" label="По популярности"></v-radio>
            <hr />
            <v-radio value="rating" label="По рейтингу"></v-radio>
            <hr />
            <v-radio value="price" label="По цене"></v-radio>
            <v-btn type="submit" class="mt-3" width="280" height="50" dark>
              Пременить
            </v-btn>
          </v-radio-group>
        </v-form>
      </div>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      sortValue: "popular",
      menu: false,
    };
  },
  methods: {
    sortHandler() {
      this.$store.commit("getSortValue", this.sortValue);
      this.menu = false;
    },
  },
};
</script>