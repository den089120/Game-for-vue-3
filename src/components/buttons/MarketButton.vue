<template>
  <div :class="{ market__button: !isDisable, market__button__disable: isDisable }"
       :disable="isDisable">
    {{ textButton }}
  </div>
</template>
<script>
export default {
  name: "MarketButton",
  props: {
    textButton: String,
    isDisable: Boolean,
  },
}
</script>

<style>
.market__button {
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;


  background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
  border-radius: 60px;
}

.market__button:hover {
  background: #FF5722;
  cursor: grab;
}

.market__button:active {
  background: #FF7F22;
  cursor: grabbing;
}


.market__button__disable {
  background: #4C5865;
  color: #7D90A6;
  width: 200px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto;
}
</style>