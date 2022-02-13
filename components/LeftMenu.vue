<template>
  <v-col class="nav" cols="3">
    <div class="collection">Подборки Meet-market</div>
    <div><a href="">Все товары</a></div>
    <div><a href="">Популярные</a></div>
    <div><a class="express-delivery" href="">Экспресс-доставка</a></div>
    <div><a href="">Новинки</a></div>
    <div><a href="">Black&White</a></div>
    <div><a href="">Зима</a></div>
    <div><a href="">Подборка Light</a></div>
    <div><a href=""> Подборка Multicolor</a></div>
    <div><a href="">Подборка Dark</a></div>
  </v-col>
</template>
<style lang="scss" scoped>
.nav {
  font-size: 21px;
  line-height: 25px;

  div {
    margin-top: 28px;
  }
  .collection {
    line-height: 150%;
    color: rgba(29, 29, 32, 0.3);
  }
  a {
    text-decoration: none;
    color: black;
    &:hover {
      color: rgb(0, 153, 255);
    }
  }
  .express-delivery {
    color: orange;
    &:after {
      content: url("~/static/Emoji.png");
      position: relative;
      top: 4px;
      left: 12px;
    }
  }
}
</style>