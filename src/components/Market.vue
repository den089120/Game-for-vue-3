<template>
  <div class="market__container">
    <div class="market__title">Рынок комплектующих</div>
    <div class="market__product__list">
      <div v-for="detail in detailList" :key="detail.id" class="market__product">
<!--        <img class="market__product__img" :src="detail.imagePath" alt="">-->
        <div class="market__product__img">
          <svg class="market__product__icon">
            <use :[attrIcon]="detail.imagePath" ></use>
          </svg>
        </div>
        <div class="market__product__name">{{ detail.name }}</div>
        <div class="market__product__desc">
          <div class="market__product__text">Стоимость:</div>
          <div class="market__product__cost">{{ detail.cost }}</div>
          <div class="market__product__cost__name">{{ detail.costName }}</div>
        </div>
        <MarketButton @click="purchaseDetail(detail.id)"
                      :is-disable="userPurse < detail.cost"
                      :text-button="'Установить'">
        </MarketButton>
      </div>
    </div>
  </div>
</template>

<script>
import MarketButton from "@/components/buttons/MarketButton";
import {mapState, mapMutations} from "vuex";
export default {
  name: "Market",
  components: {MarketButton},
  data() {
    return {
      buttonDisable: false,
      attrIcon: 'xlink:href',
      // productList: [
      //   {
      //     id: 1,
      //     imagePath: '/images/img-hand.png',
      //     name: 'Биорука',
      //     cost: 7,
      //     costName: 'монет',
      //     nameList: 'biohandList',
      //   },
      //   {
      //     id: 2,
      //     imagePath: '/images/img-chip.png',
      //     name: 'Микрочип',
      //     cost: 5,
      //     costName: 'монет',
      //     nameList: 'microchipList',
      //   },
      //   {
      //     id: 3,
      //     imagePath: '/images/img-dusha.png',
      //     name: 'Душа',
      //     cost: 25,
      //     costName: 'монет',
      //     nameList: 'soulList',
      //   },
      // ]
    }
  },
  computed: {
    ...mapState({
      userPurse: state => state.user.userPurse,
      detailList: state => state.robot.robotsList.monitorArmchair.detailList
    }),
  },
  methods: {
    ...mapMutations({
      minusCoins: 'user/minusCoins',
      setDetail: 'user/setDetail',
    }),
    purchaseDetail(id) {
      let el = this.detailList.find(el => el.id === id)
      if (this.userPurse < el.cost ) {
        return
      } else {
        this.minusCoins(el.cost)
        this.setDetail(el)
      }
    },
  },
}
</script>

<style>
.market__container {
  display: flex;
  flex-direction: column;
  width: 754px;
  margin: 104px auto 0 200px;
}
.market__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #FFFFFF;
}
.market__product__list {
  display: flex;
  justify-content: space-around;
}
.market__product {

}
.market__product__img {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.market__product__icon {
  width: 35%;
  fill: #FF7F22;
  text-shadow: 5px 6px 10px #FF7F22;
}


.market__product__name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #FFFFFF;
}
.market__product__desc {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 24px;
}
.market__product__text {
  color: #A3B8CC;
}
.market__product__cost {
  margin: 0 5px;
  color: #A3B8CC;
}
.market__product__cost__name {
  color: #A3B8CC;
}
</style>