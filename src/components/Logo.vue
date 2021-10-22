<template>
  <div class="logo">
    <div class="subtract"></div>
    <div class="pack"></div>
    <div class="rectangle"></div>
    <div class="ellipse__1"></div>
    <div class="ellipse__2"></div>
    <div class="ellipse__3"></div>
  </div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style>
.subtract {
  position: absolute;
  width: 48px;
  height: 48px;
  left: 212px;
  top: 48px;
  border-radius: 50%;

  background: #FF7F22;
}
.pack {
  position: absolute;
  width: 48px;
  height: 48px;
  left: 212px;
  top: 48px;
  z-index: -1;

  background: #A3B8CC;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.rectangle {
  position: absolute;
  width: 29.32px;
  height: 29.63px;
  left: 237px;
  top: 57px;
  /*#212529 100%#192532*/
  background: rgb(34, 51, 69);
  transform: rotate(45deg);
}
.ellipse__1 {
  position: absolute;
  width: 9px;
  height: 9px;
  left: 250px;
  top: 67px;
  border-radius: 50%;

  background: #FF7F22;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.ellipse__2 {
  position: absolute;
  width: 9px;
  height: 9px;
  left: 265px;
  top: 67px;
  border-radius: 50%;

  background: #FF7F22;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.ellipse__3 {
  position: absolute;
  width: 9px;
  height: 9px;
  left: 280px;
  top: 67px;
  border-radius: 50%;

  background: #FF7F22;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>