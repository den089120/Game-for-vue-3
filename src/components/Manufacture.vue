<template>
  <div class="manufacture">
    <div class="manufacture__title">Производство</div>
    <div class="manufacture__context">
      <div class="manufacture__details">
        <div class="manufacture__project">
          <div class="robot__type">
            <div>
              <div class="robot__type__title">Тип биоробота:</div>
              <div  class="robot__type__box">
                <div class="robot__type__box__1">
                  <div class="robot__type__checkbox" @click="checkFront">
                    <div class="robot__type__checked" v-show="frontOrDesign"></div>
                  </div>
                  <div class="robot__type__name">FrontEnd</div>
                </div>
                <div  class="robot__type__box__1">
                  <div class="robot__type__checkbox" @click="checkFront">
                    <div class="robot__type__checked" v-show="!frontOrDesign"></div>
                  </div>
                  <div class="robot__type__name">Design</div>
                </div>
              </div>
            </div>
            <div>
              <div class="robot__type__title">Cтабилизатор:</div>
              <div class="robot__type__box">
                <div class="robot__type__box__1">
                  <div class="robot__type__checkbox" @click="checkMale">
                    <div class="robot__type__checked" v-show="maleOrFamale"></div>
                  </div>
                  <div class="robot__type__name">Male</div>
                </div>
                <div class="robot__type__box__1">
                  <div class="robot__type__checkbox" @click="checkMale">
                    <div class="robot__type__checked" v-show="!maleOrFamale"></div>
                  </div>
                  <div class="robot__type__name">Famale</div>
                </div>
              </div>
            </div>
          </div>
          <div class="robot__value">
            <div style="display: flex;" v-for="detail in detailList" :key="detail.id">
              <div v-for="num in detail.value"
                   :key="num"
                   :class="getClassBody(num, detail.nameList)"
                    @click="checkActive($event, detail.nameList)">
                <svg :class="getClass(num, detail.nameList)">
                  <use :[attrIcon]="detail.imagePath"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CreateButton @click="createRobot" :is-disable="buttonBool" text-button="Произвести за 10 монет"></CreateButton>
          <div class="manufacture__description">{{ getTextDesc() }}</div>
        </div>
      </div>
      <div>
        <img style="width: 236px;height: 320px;" :src="getImageRobot()" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import CreateButton from "@/components/buttons/CreateButton";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "Manufacture",
  components: {CreateButton},
  data() {
    return {
      frontOrDesign: true,
      maleOrFamale: true,
      attrIcon: 'xlink:href',
    }
  },
  computed: {
    ...mapState({
      userPurse: state => state.user.userPurse,
      robotBoolList: state => state.user.robotBoolList,
      isMakeRobot: state => state.user.isMakeRobot,
      buttonBool: state => state.user.buttonBool,
    }),
    ...mapGetters({
      detailList: 'robot/getDetailList',
      valueDetails: 'robot/getValueDetails',

      microchipList: 'user/microchipListLength',
      biohandList: 'user/biohandListLength',
      soulList: 'user/soulListLength',

      microchipChecked: 'user/microchipChecked',
      biohandChecked: 'user/biohandChecked',
      soulChecked: 'user/soulChecked',

      microchipUnchecked: 'user/microchipUnchecked',
      biohandUnchecked: 'user/biohandUnchecked',
      soulUnchecked: 'user/soulUnchecked',
    }),

  },
  methods: {
    ...mapMutations({
      checkedDetail: 'user/checkedDetail',
      uncheckedDetail: 'user/uncheckedDetail',

      checkMakeRobot: 'user/checkMakeRobot',
      uncheckMakeRobot: 'user/uncheckMakeRobot',

      checkButtonBool: 'user/checkButtonBool',

      changeRobotName: 'user/changeRobotName',
      changeRobotImgPath: 'user/changeRobotImgPath',
      createRobot: 'user/createRobot',
    }),
    checkFront() {
      this.frontOrDesign = !this.frontOrDesign
    },
    checkMale() {
      this.maleOrFamale = !this.maleOrFamale
    },
    checkActive(event, nameList) {
      if (event.target.nodeName === "use") {
        if (event.target.parentNode.attributes[0].nodeValue === 'manufacture__icon__none') {
          return ''
        } if (event.target.parentNode.attributes[0].nodeValue === 'manufacture__icon__active') {
          this.uncheckedDetail(nameList)
          this.robotBool()
          return ''
        } if (event.target.parentNode.attributes[0].nodeValue === 'manufacture__icon__yes') {
          this.checkedDetail(nameList)
          this.robotBool()
        }
      } if (event.target.nodeName === 'svg') {
        if (event.target.attributes[0].nodeValue === 'manufacture__icon__none') {
          return ''
        } if (event.target.attributes[0].nodeValue === 'manufacture__icon__active') {
          this.uncheckedDetail(nameList)
          this.robotBool()
          return ''
        } if (event.target.attributes[0].nodeValue === 'manufacture__icon__yes') {
          this.checkedDetail(nameList)
          this.robotBool()
        }
      }
    },
    getClass(num, nameList) {

      if (nameList.startsWith('biohand')) {
        if (num > this[nameList]) {
          return 'manufacture__icon__none'
        } else {
          if (num <= this.biohandChecked) {
            return 'manufacture__icon__active'

          } else if ((num - this.biohandChecked) <= this.biohandUnchecked) {
            return 'manufacture__icon__yes'
          }
        }
      }
      if (nameList.startsWith('microchip')) {
        if (num > this[nameList]) {
          return 'manufacture__icon__none'
        } else {
          if (num <= this.microchipChecked) {
            return 'manufacture__icon__active'

          } else if ((num - this.microchipChecked) <= this.microchipUnchecked) {
            return 'manufacture__icon__yes'
          }
        }
      }
      if (nameList.startsWith('soul')) {
        if (num > this[nameList]) {
          return 'manufacture__icon__none'

        } else {
          if (num <= this.soulChecked) {
            return 'manufacture__icon__active'

          } else if ((num - this.soulChecked) <= this.soulUnchecked) {
            return 'manufacture__icon__yes'
          }
        }

      }
    },
    getClassBody(num, nameList) {
      if (nameList.startsWith('biohand')) {
        if (num <= this.biohandChecked) {
          return 'robot__icon__box__active'

        } else {
          return 'robot__icon__box'
        }
      }
      if (nameList.startsWith('microchip')) {
        if (num <= this.microchipChecked) {
          return 'robot__icon__box__active'

        } else {
          return 'robot__icon__box'
        }
      }
      if (nameList.startsWith('soul')) {
        if (num <= this.soulChecked) {
          return 'robot__icon__box__active'

        } else {
          return 'robot__icon__box'
        }
      }
    },

    getImageRobot() {
      if (this.isMakeRobot && (this.userPurse >= 10)) {
        if (this.frontOrDesign) {
          if (this.maleOrFamale) {
            this.changeRobotName('front-male')
            this.changeRobotImgPath('/images/robotImages/img-front-male-maked.png')
            return '/images/robotImages/img-front-male-yes.png'
          } else {
            this.changeRobotName('front-famale')
            this.changeRobotImgPath('/images/robotImages/img-front-famale-maked.png')
            return '/images/robotImages/img-front-famale-yes.png'
          }
        } else {
          if (this.maleOrFamale) {
            this.changeRobotName('designer-male')
            this.changeRobotImgPath('/images/robotImages/img-designer-male-maked.png')
            return '/images/robotImages/img-designer-male-yes.png'
          } else {
            this.changeRobotName('designer-famale')
            this.changeRobotImgPath('/images/robotImages/img-designer-famale-maked.png')
            return '/images/robotImages/img-designer-famale-yes.png'
          }
        }
      } else {
        if (this.frontOrDesign) {
          if (this.maleOrFamale) {
            return '/images/robotImages/img-front-male-none.png'
          } else {
            return '/images/robotImages/img-front-famale-none.png'
          }
        } else {
          if (this.maleOrFamale) {
            return '/images/robotImages/img-designer-male-none.png'
          } else {
            return '/images/robotImages/img-designer-famale-none.png'
          }
        }
      }

    },
    robotBool() {
      let a = 0
      let keys = Object.keys(this.robotBoolList)
      for (let i = 0; i < keys.length; i++) {
        if (this.robotBoolList[keys[i]] === true) {
          a++
        }
      }
      if (a === 3) {
        this.checkMakeRobot()
        this.checkButtonBool()
      } else {
        this.uncheckMakeRobot()
        this.checkButtonBool()
      }
    },

    getTextDesc() {
      let str = 'Для производства биоробота'
      let a = 0
      if (this.biohandChecked === 3) {
        str += ' не хватает 1 биоруки,'
        a = 1
      }
      if (this.biohandChecked >= 0 && this.biohandChecked < 3) {
        str += ` не хватает ${4 - this.biohandChecked} биорук,`
        a = 1
      }

      if (this.microchipChecked === 3) {
        str += ' не хватает 1 микрочипа,'
        a = 1
      }
      if (this.microchipChecked >= 0 && this.microchipChecked < 3) {
        str += ` не хватает ${ 4 - this.microchipChecked} микрочипов,`
        a = 1
      }

      if (this.soulChecked === 0) {
        str += ' не хватает 1 души'
        a = 1
      }

      if (this.userPurse < 10) {
        if (this.userPurse === 9) {
          str += ' не хватает 1 монеты'
          a = 1
        } else {
          str += ` не хватает ${10 - this.userPurse} монет`
          a = 1
        }

      }

      if (a === 0) {
        str += ' всего хватает, можно производить.'
      }

      return str
    },
  },
  watch: {
    userPurse() {
      this.checkButtonBool()
    },
    buttonBool() {
      this.getImageRobot()
    }
  },
}
</script>

<style>
.manufacture {
  width: 754px;
  margin: 100px auto 0 200px;
}
.manufacture__context {
  display: flex;
}
.manufacture__details {}
.manufacture__project {
  display: flex;
}
.manufacture__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 72px;
  color: #FFFFFF;
}
.robot__type__title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  margin: 32px 0 20px 0;
}
.robot__type__box {
  display: flex;
}
.robot__type__box__1 {
  display: flex;
  align-items: center;
  width: 100px;
  margin: 5px;
}
.robot__type__checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid #A3B8CC;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
}
.robot__type__checked {
  width: 18px;
  height: 18px;
  background: #FF7F22;
  border-radius: 50%;

}
.robot__type__unchecked {
  display: none;
}
.robot__type__name {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}

.robot__value {
  margin: 33px 27px 0 38px;
}


.manufacture__icon__active {
  width: 36px;
  height: 36px;
  fill: #FF7F22;
}
.manufacture__icon__yes {
  width: 36px;
  height: 36px;;
  fill: #FFFFFF;
}
.manufacture__icon__none {
  width: 36px;
  height: 36px;
  fill: #4C5865;
}

.robot__icon__box__active {
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #FF7F22;
  border-radius: 4px;
  margin: 8px 5px;
}
.robot__icon__box {
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #333940;
  background: #333940;
  border-radius: 4px;
  margin: 8px 5px;
}
.manufacture__description {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #A3B8CC;
  margin-left: 260px;
  width: 200px;
}
</style>