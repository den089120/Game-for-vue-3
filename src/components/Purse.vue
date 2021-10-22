<template>
  <div class="purse__container">
    <div class="purse__title">Кошелёк криптовалют</div>
    <div class="list__coins">
      <img v-for="num in stylePos"
           :key="num"
           class="purse__coin"
           :style="{left: num + 'px'}"
           src="@/images/img-money.png" alt="">
    </div>
    <div class="purse__value">{{ userPurse }} biorobo {{ nameCoin }}</div>
    <div class="create__coins">
      <div class="create__coins__title" @click.prevent="coinCreate">Нацыганить</div>
      <div class="create__coins__checkbox" @click="changeCoin">
        <img src="/images/img-checked.png" style="width:12px;height:9px;" alt="" :class="{checked__hidden: !isFiveCoin}">
      </div>
      <div class="create__coins__text" >Цыганить по 5 монет</div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: "Purse",
  data() {
    return {
      isFiveCoin: false,
      stylePos: [],
      nameCoin: '',
    }
  },
  mounted() {
    this.stylePos = this.createPosition()
    this.nameCoin = this.getCoinName()
  },
  computed: {
    ...mapState({
      userPurse: state => state.user.userPurse,
    }),
  },
  methods: {
    ...mapMutations({
      createCoins: 'user/createCoins'
    }),
    createPosition() {
      let arr = []
      let num = this.userPurse * 7
      for (let i = 0; i < this.userPurse; i++) {
        num = num - 7
        arr.push(num)
      }
      return arr
    },
    coinCreate() {
      this.createCoins(this.isFiveCoin)
      this.stylePos = this.createPosition()
      this.nameCoin = this.getCoinName()
    },
    changeCoin() {
      this.isFiveCoin = !this.isFiveCoin
    },
    getCoinName() {
      if (this.userPurse === 1) return 'монета'
      else if (this.userPurse < 5) return 'монеты'
      else return 'монет'
    }
  },
  watch: {
    userPurse() {
      this.stylePos = this.createPosition()
    }
  },
}
</script>

<style>
.purse__container {
  display: flex;
  flex-direction: column;
  width: 756px;
  margin-left: 200px;
  margin-top: 80px;
}
.purse__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #FFFFFF;
  margin-bottom: 50px;
}
.list__coins {
  position: relative;
  display: flex;
  width: 20px;
  margin: 0 0 44px 0;
}
.purse__coin {
  position: absolute;
  width: 16px;
  height: 20px;
}
.purse__value {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  color: #A3B8CC;
  margin-bottom: 44px;
}
.create__coins {
  display: flex;
}
.create__coins__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FF7F22;
  margin-right: 23px;
  border-bottom: 1px solid #ad622b;
}
.create__coins__checkbox {
  margin-right: 12px;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #A3B8CC;
}
.create__coins__checkbox:hover {
  border: 2px solid #4C5865;
}
.create__coins__checkbox:active {
  border: 2px solid #A3B8CC;
}
.create__coins__text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}
.checked__hidden {
  opacity: 0;
}
</style>