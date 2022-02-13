<template>
  <div class="mb-8 mt-12 d-flex">
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
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-btn width="280" height="50" dark>Пременить</v-btn>
        </div>
      </v-card>
    </v-menu>
    <v-menu v-model="brandMenu" :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex filter" v-bind="attrs" v-on="on">
          <div>Бренд</div>
          <v-icon>mdi-menu-down</v-icon>
        </div>
      </template>
      <v-card width="320">
        <div class="pa-5">
          <div class="d-flex">
            <div class="brand-text">Выбрано</div>
            <v-spacer />
            <div @click="$refs.form.reset()" class="clear">Очитить</div>
          </div>
          <v-form ref="form" @submit.prevent="brandHandler">
            <v-checkbox
              v-model="checkedBrend"
              value="airJordan"
              label="Air Jordan"
            ></v-checkbox>
            <hr />
            <v-checkbox
              v-model="checkedBrend"
              value="nike"
              label="Nike"
            ></v-checkbox>
            <hr />
            <v-checkbox
              v-model="checkedBrend"
              value="adidas"
              label="Adidas"
            ></v-checkbox>
            <hr />
            <v-checkbox
              v-model="checkedBrend"
              value="newBalance"
              label="New Balance"
            ></v-checkbox>
            <hr />
            <v-checkbox
              v-model="checkedBrend"
              value="converse"
              label="Сonverse"
            ></v-checkbox>
            <hr />
            <v-checkbox
              v-model="checkedBrend"
              value="louisVuitton"
              label="Louis Vuitton"
            ></v-checkbox>
            <v-btn type="submit" width="280" height="50" dark>Пременить</v-btn>
          </v-form>
        </div>
      </v-card>
    </v-menu>
    <v-menu disabled :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex filter" v-bind="attrs" v-on="on">
          <div>Модель</div>
          <v-icon>mdi-menu-down</v-icon>
        </div>
      </template>
      <v-card width="320">
        <div class="pa-5">
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-btn width="280" height="50" dark>Пременить</v-btn>
        </div>
      </v-card>
    </v-menu>
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
              <v-radio value="-3000" label="До 3000 руб."></v-radio>
              <v-radio value="-5000" label="До 5000 руб."></v-radio>
              <v-radio value="-9000" label="До 9000 руб."></v-radio>
              <v-radio value="-15000" label="До 15000 руб."></v-radio>
            </v-radio-group>
            <v-btn type="submit" width="280" height="50" dark>Пременить</v-btn>
          </v-form>
        </div>
      </v-card>
    </v-menu>
    <v-menu disabled :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex filter" v-bind="attrs" v-on="on">
          <div>Размер</div>
          <v-icon>mdi-menu-down</v-icon>
        </div>
      </template>

      <v-card width="320">
        <div class="pa-5">
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-checkbox></v-checkbox>
          <v-btn width="280" height="50" dark>Пременить</v-btn>
        </div>
      </v-card>
    </v-menu>
    <v-menu v-model="genderMenu" :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex filter" v-bind="attrs" v-on="on">
          <div>Пол</div>
          <v-icon>mdi-menu-down</v-icon>
        </div>
      </template>

      <v-card width="320">
        <div class="pa-5">
          <v-form @submit.prevent="genderHandler">
            <v-radio-group v-model="gender">
              <v-radio value="any" label="любой"></v-radio>
              <v-radio value="male" label="мужской"></v-radio>
              <v-radio value="female" label="женский"></v-radio>
              <v-radio value="unisex" label="унисекс"></v-radio>
              <v-btn type="submit" class="mt-3" width="280" height="50" dark
                >Пременить</v-btn
              >
            </v-radio-group>
          </v-form>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gender: "any",
      price: "",
      checkedBrend: [],
      minPrice: 0,
      maxPrice: 100000,
      brandMenu: false,
      priceMenu: false,
      genderMenu: false,
    };
  },
  methods: {
    brandHandler() {
      this.$store.commit("getBrand", this.checkedBrend);
      this.brandMenu = false;
    },
    priceHandler() {
      this.$store.commit("getPrice", this.price);
      this.$store.commit("getMinPrice", this.minPrice);
      this.$store.commit("getMaxPrice", this.maxPrice);
      this.priceMenu = false;
    },
    genderHandler() {
      this.$store.commit("getGender", this.gender);
      this.genderMenu = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.filter {
  width: 139px;
  height: 50px;
  font-size: 14px;
  line-height: 17px;
  background: #f3f3f3;
  border-radius: 6px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0px 2px 4px 2px rgba(34, 60, 80, 0.2);
  }
}
@media screen and (max-width: 1264px) {
  .filter {
    width: 105px;
    margin-left: 2px;
    font-size: 12px;
  }
}
@media screen and (min-width: 1904px) {
  .filter {
    width: 200px;
    font-size: 18px;
  }
}
hr {
  background: rgba(29, 29, 32, 0.1);
}
.clear {
  font-size: 14px;
  line-height: 17px;

  text-decoration-line: underline;

  color: rgba(29, 29, 32, 0.3);
  &:hover {
    color: rgb(29, 29, 32);
    cursor: pointer;
  }
}
</style>