<template>
  <div class="mb-8 mt-12 d-flex">
    <FilterSorting />
    <FilterBrand />
    <FilterModel />
    <FilterPrice />
    <FilterSize />
    <FilterGender />
  </div>
</template>

<style lang="scss">
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
  margin-bottom: 8px;
}
</style>