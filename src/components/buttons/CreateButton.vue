<template>
  <div :class="{ create__button: !isDisable, create__button__disable: isDisable }"
       :style="{right:posRight+'px',top:posTop+'px'}"
    >
    {{ textButton }}
  </div>
</template>

<script>
export default {
  name: "CreateButton",
  props: {
    posRight: Number,
    posTop: Number,
    textButton: String,
    isDisable: Boolean,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.create__button {
  position: absolute;
  width: 236px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  border: 2px solid #FF7F22;
  box-sizing: border-box;
  border-radius: 60px;

  color: #FFFFFF;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.create__button:hover {
  background: #FF5722;
  border: 2px solid #FF5722;
}
.create__button:active {
  border: 2px solid #FF7F22;
  background: #FF7F22;
}

.create__button__disable {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 236px;
  height: 48px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  border: 2px solid #4C5865;
  color: #4C5865;
  border-radius: 60px;
}
</style>