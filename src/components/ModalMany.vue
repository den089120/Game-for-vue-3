<template>
  <div class="modal__money">
    <div class="modal__body" @click="closeWindow" >
      <div class="close" >
        <img class="modal__money__icon" src="/images/img-close.png" alt="">
      </div>
      <div class="modal__money__content">
        <div class="modal__money__text">
          Количество монет ограничено
        </div>
      </div>
      <div class="modal__money__text__1">
        Вы не можете нацыганить более 100 монет biorobo
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations} from "vuex";
export default {
  name: "ModalMany",
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations({
      closeWindow: 'user/closeWindow'
    }),
  },
}
</script>

<style>
.modal__money {
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
.modal__body {
  width: 496px;
  height: 240px;
  position: relative;

  background: #FFFFFF;
  border-radius: 10px;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
}
.modal__money__icon {
  width: 20px;
  height: 20px;
}

.modal__money__img {
  margin-left: 30px;
  margin-top: 30px;
  width: 43px;
  height: 52px;
}
.modal__money__text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #212529;
  width: 300px;
  margin-left: 20px;
  margin-top: 20px;
}
.modal__money__content {
  display: flex;

  margin: 20px 0;
}
.modal__money__text__1 {
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