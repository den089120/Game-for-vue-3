<template>
  <div class="warehouse__container">
    <div class="warehouse__title">Склад</div>
    <div class="warehouse__product__list">
      <div v-for="detail in detailList" :key="detail.id" class="warehouse__product">
        <div class="warehouse__product__name">{{ detail.name }}</div>
        <div class="warehouse__product__desc">
          <div class="warehouse__product__text">Стоимость:</div>
          <div class="warehouse__product__cost">{{ Math.round(detail.cost * 0.7) }}</div>
          <div class="warehouse__product__cost__name">{{ detail.costName }}</div>
        </div>
        <div class="warehouse__product__value">{{ this[detail.nameList] }} шт</div>
        <WarehouseButton :is-disable="(this[detail.nameList] === 0)"
                         :text-button="'Продать' + ` ${ Math.round(detail.cost * 0.7) } ` + 'монет'"
                         @click="removingDetail(detail)">
        </WarehouseButton>
      </div>
    </div>
  </div>
</template>

<script>
import WarehouseButton from "@/components/buttons/WarehouseButton";
import {mapGetters, mapMutations, mapState} from "vuex";
export default {
  name: "Warehouse",
  components: {WarehouseButton,},
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      detailList: state => state.robot.robotsList.monitorArmchair.detailList
    }),
    ...mapGetters({
      // геттеры возвращают кол-во не выбранных для произ. деталей
      microchipList: 'user/microchipUnchecked',
      biohandList: 'user/biohandUnchecked',
      soulList: 'user/soulUnchecked',
    })
  },
  methods: {
    ...mapMutations({
      removeDetail: 'user/removeDetail',
      plusCoins: 'user/plusCoins',
    }),
    removingDetail(detail) {
      if (this[detail.nameList] === 0) return
      else {
        this.removeDetail(detail.nameList)
        this.plusCoins(Math.round(detail.cost * 0.7))
      }
    },
  },
}
</script>

<style>
.warehouse__container {
  display: flex;
  flex-direction: column;
  width: 754px;
  margin: 100px auto 0 200px;
}
.warehouse__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #FFFFFF;
}
.warehouse__product__list {
  display: flex;
  justify-content: space-around;
}
.warehouse__product {}
.warehouse__product__name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #FFFFFF;
  margin: 60px 0 5px 0;
}
.warehouse__product__desc {
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 24px;
}
.warehouse__product__text {
  color: #A3B8CC;
}
.warehouse__product__cost {
  margin: 0 5px;
  color: #A3B8CC;
}
.warehouse__product__cost__name {
  color: #A3B8CC;
}
.warehouse__product__value {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #FFFFFF;
  margin: 15px 0 24px 0;
}
</style>