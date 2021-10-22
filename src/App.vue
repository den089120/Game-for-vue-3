<template>
  <div id="app">
    <Logo></Logo>
    <CreateButton :is-disable="buttonBool"
                  :pos-right="212"
                  :pos-top="48"
                  :text-button="'Произвести биоробота'"
                  @click="createRobot"
                  >
    </CreateButton>
    <div class="header__robots">
      <div class="robot__text">
        <div class="robot__title">Фабрика по производству биороботов</div>
        <div class="robot__name">класса «монитор-кресло»</div>
      </div>
      <div class="robot__image">
        <div class="robot__background"></div>
        <div class="robot__monitor"><img src="@/images/img-roboMonitor.png" alt=""></div>
        <div class="robot__robot__2"><img src="@/images/img-robo-2.png" alt=""></div>
      </div>
    </div>
    <Purse></Purse>
    <Market></Market>
    <Warehouse></Warehouse>
    <Manufacture></Manufacture>
    <div class="modal__window">
      <ModalMany v-show="isShowModalMany"></ModalMany>
      <ModalNewRobot v-show="isShowModalRobot"></ModalNewRobot>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import CreateButton from "@/components/buttons/CreateButton";
import Purse from "@/components/Purse";
import Market from "@/components/Market";
import Warehouse from "@/components/Warehouse";
import Manufacture from "@/components/Manufacture";
import ModalMany from "@/components/ModalMany";
import ModalNewRobot from "@/components/ModalNewRobot";
import {mapState, mapMutations} from "vuex";
export default {
  name: 'App',
  components: {
    ModalNewRobot,
    ModalMany,
    Manufacture,
    Warehouse,
    Market,
    Purse,
    CreateButton,
    Logo
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      isShowModalMany: state => state.user.isShowModalMany,
      isShowModalRobot: state => state.user.isShowModalRobot,
      buttonBool: state => state.user.buttonBool,
    }),
  },
  methods: {
    ...mapMutations({
      createRobot: 'user/createRobot',
    }),
  },

}
</script>

<style>
#app {
  position: relative;
  max-width: 1920px;
  height: 2300px;
  margin: 0 auto;

  background: radial-gradient(82.33% 70.44% at 50% 0%, #26394D 0%, #212529 100%), #FFFFFF;
}
.header__robots {
  display: flex;
  padding-top: 196px;

}

.robot__text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 470px;
  margin-left: auto;
}
.robot__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 72px;
  color: #FFFFFF;
}
.robot__name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #A3B8CC;
}

.robot__image {
  display: flex;
  margin-right: auto;
  position: relative;
  width: 366px;
  height: 320px;
}
.robot__background {
  position: absolute;
  width: 275px;
  height: 275px;
  background: #1E2936;
  border-radius: 50%;
}
.robot__monitor {
  position: absolute;
  display: inline;
  width: 176px;
  height: 309px;
}
.robot__robot__2 {
  display: inline;
  width: 138px;
  height: 195px;
}

.modal__window {
}

</style>
