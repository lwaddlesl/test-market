<template>
  <v-col class="nav" cols="3">
    <div class="collection">Подборки Meet-market</div>
    <div><NuxtLink to="/all-goods">Все товары</NuxtLink></div>
    <div><NuxtLink to="/popular">Популярные</NuxtLink></div>
    <div>
      <NuxtLink to="/express-delivery" class="express-delivery">
        Экспресс-доставка
      </NuxtLink>
    </div>
    <div><NuxtLink to="/new">Новинки</NuxtLink></div>
    <div><NuxtLink to="/black-and-white">Black&White</NuxtLink></div>
    <div><NuxtLink to="/winter">Зима</NuxtLink></div>
    <div><NuxtLink to="/light">Подборка Light</NuxtLink></div>
    <div><NuxtLink to="/multicolor"> Подборка Multicolor</NuxtLink></div>
    <div><NuxtLink to="/dark">Подборка Dark</NuxtLink></div>
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