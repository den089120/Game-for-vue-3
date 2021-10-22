<template>
  <div :class="{ warehouse__button : !isDisable, warehouse__button__disable: isDisable }" :disable="isDisable">
    {{ textButton }}
  </div>
</template>

<script>
export default {
  name: "WarehouseButton",
  props: {
    textButton: String,
    isDisable: Boolean,
  },
}
</script>

<style>
.warehouse__button {
  width: 200px;
  height: 48px;
  border: 2px solid #7CDAF9;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #7CDAF9;
}
.warehouse__button:hover {
  background: #7CDAF9;
  color: #212529;
  cursor: grab;
}
.warehouse__button:active {
  border: 2px solid #22B3E3;
  background: none;
  color: #7CDAF9;
  cursor: grabbing;
}

.warehouse__button__disable {
  width: 200px;
  height: 48px;
  border: 2px solid #4C5865;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4C5865;
  margin: 0 auto;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
</style>