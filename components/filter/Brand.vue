<template>
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
</template>
<script>
export default {
  data() {
    return {
      brandMenu: false,
      checkedBrend: [],
    };
  },
  methods: {
    brandHandler() {
      this.$store.commit("getBrand", this.checkedBrend);
      this.brandMenu = false;
    },
  },
};
</script>
<style lang="scss" scoped>
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