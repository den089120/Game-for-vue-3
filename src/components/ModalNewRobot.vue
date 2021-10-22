<template>
  <div class="modal__robot">
    <div class="modal__robot__body" @click="closeWindowRobot()" >
      <div class="close__robot">
        <img class="modal__robot__icon" src="/images/img-close.png" alt="">
      </div>
      <div class="modal__robot__content">
        <div class="modal__robot__text">
          Биоробот произведён
        </div>
      </div>
      <div class="modal__robot__text__1">
        Поздравляем! Вы произвели биоробота
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations} from "vuex";
export default {
  name: "ModalNewRobot",
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      closeWindowRobot: 'user/closeWindowRobot'
    }),
  },
}
</script>

<style>
.modal__robot {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(26,26,26, 0.67);
  /*opacity: 0.67;*/
}
.modal__robot__body {
  width: 496px;
  height: 240px;
  position: relative;

  background: #FFFFFF;
  border-radius: 10px;
}
.close__robot {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
}
.modal__robot__icon {
  width: 20px;
  height: 20px;
}
.modal__robot__text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #212529;
  width: 300px;
  margin-left: 100px;
  margin-top: 20px;
}
.modal__robot__content {
  display: flex;
  margin: 20px 0;
}
.modal__robot__text__1 {
  font-family: Montserrat;
  width: 270px;
  margin-left: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #4C5865;
}
</style>