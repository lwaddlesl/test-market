<template>
  <div>
    <div class="path">Главная / Кроссовки</div>
    <div class="bold-text">
      КРОССОВКИ: НОВИНКИ <span class="product-count">594 товара </span>
    </div>
    <v-row>
      <LeftMenu class="mt-12" />
      <v-col>
        <Filters />
        <ActiveFilters />
        <Sneakers />
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.path {
  font-size: 16px;
  line-height: 19px;
  color: rgba(29, 29, 32, 0.3);
}
.bold-text {
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;
  color: #1d1d20;
  margin-top: 35px;
}
.product-count {
  font-size: 16px;
  line-height: 150%;
  color: rgba(29, 29, 32, 0.3);
}
</style>

