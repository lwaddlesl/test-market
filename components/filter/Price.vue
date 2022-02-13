<template>
  <v-menu v-model="priceMenu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex filter" v-bind="attrs" v-on="on">
        <div>Стоимость</div>
        <v-icon>mdi-menu-down</v-icon>
      </div>
    </template>

    <v-card width="320">
      <div class="pa-5">
        <div class="price-text">Выберите ценовой диапазон</div>

        <v-form @submit.prevent="priceHandler">
          <v-range-slider
            color="#84A2FC"
            hide-details
            max="100000"
            min="0"
          ></v-range-slider>
          <div class="d-flex">
            <v-text-field
              class="mr-2"
              solo
              v-model="minPrice"
              label="От"
              outlined
            ></v-text-field>
            <v-text-field
              solo
              v-model="maxPrice"
              label="До"
              outlined
            ></v-text-field>
          </div>
          <v-radio-group v-model="price">
            <v-radio value="sale" label="Товары со скидкой"></v-radio>
            <hr class="mb-4" />
            <v-radio value="-3000" label="До 3000 руб."></v-radio>
            <hr class="mb-4" />
            <v-radio value="-5000" label="До 5000 руб."></v-radio>
            <hr class="mb-4" />
            <v-radio value="-9000" label="До 9000 руб."></v-radio>
            <hr class="mb-4" />
            <v-radio value="-15000" label="До 15000 руб."></v-radio>
          </v-radio-group>
          <v-btn type="submit" width="280" height="50" dark>Пременить</v-btn>
        </v-form>
      </div>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data() {
    return {
      price: "",
      minPrice: 0,
      maxPrice: 100000,
      priceMenu: false,
    };
  },
  methods: {
    priceHandler() {
      this.$store.commit("getPrice", this.price);
      this.$store.commit("getMinPrice", this.minPrice);
      this.$store.commit("getMaxPrice", this.maxPrice);
      this.priceMenu = false;
    },
  },
};
</script>