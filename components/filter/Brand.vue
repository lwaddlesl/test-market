<template>
  <v-menu v-model="menu" :close-on-content-click="false" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex filter" v-bind="attrs" v-on="on">
        <div>Бренд({{ $store.state.checkedBrend.length }})</div>
        <v-icon>mdi-menu-down</v-icon>
      </div>
    </template>
    <v-card width="320">
      <div class="pa-5">
        <div class="d-flex">
          <div class="brand-text">Выбрано({{ checkedBrend.length }})</div>
          <v-spacer />
          <div @click="$refs.form.reset()" class="clear">Очитить</div>
        </div>
        <v-form ref="form" @submit.prevent="brandHandler">
          <div class="form-conteiner">
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
          </div>
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
      menu: false,
      checkedBrend: [],
    };
  },
  methods: {
    brandHandler() {
      this.$store.commit("getBrand", this.checkedBrend);
      this.menu = false;
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
.form-conteiner {
  padding-right: 6px;
  max-height: 300px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(29, 29, 32, 0.1);
    border-radius: 6px;
  }
}
</style>