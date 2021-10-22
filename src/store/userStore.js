export const userStore = {
   state() {
      return {
         userPurse: 10,
         isShowModalMany: false,
         isShowModalRobot: false,
         isMakeRobot: false,
         buttonBool: true,
         robotBoolList: {
            soulList: false,
            biohandList: false,
            microchipList: false,
         },
         detailList: {
            soulList: [
               {
                  id: 3,
                  imagePath: 'icons.svg#soul',
                  name: 'Душа',
                  cost: 25,
                  costName: 'монет',
                  nameList: 'soulList',
                  value: 1,
                  isCheck: false,
                  valueGeneral: 1,
                  valueWarehouse: 1,
                  valueManufacture: 0,
               },
            ],
            biohandList: [
               {
                  id: 1,
                  imagePath: 'icons.svg#hand',
                  name: 'Биорука',
                  cost: 7,
                  costName: 'монет',
                  nameList: 'biohandList',
                  value: 4,
                  isCheck: false,
                  valueGeneral: 1,
                  valueWarehouse: 1,
                  valueManufacture: 0,
               },
            ],
            microchipList: [
               {
                  id: 2,
                  imagePath: 'icons.svg#chip',
                  name: 'Микрочип',
                  cost: 5,
                  costName: 'монет',
                  nameList: 'microchipList',
                  value: 4,
                  isCheck: false,
                  valueGeneral: 1,
                  valueWarehouse: 1,
                  valueManufacture: 0,
               },
            ],
         },

         robotDesc: {
            name: '',
            imagePath: '',
            value: 0,

         },
         robots:{},

      }
   },
   getters: {
      microchipListLength(state) {
         return state.detailList.microchipList[0].valueGeneral
      },
      microchipChecked(state) {
         return state.detailList.microchipList[0].valueManufacture
      },
      microchipUnchecked(state) {
         return state.detailList.microchipList[0].valueWarehouse
      },

      biohandListLength(state) {
         return state.detailList.biohandList[0].valueGeneral
      },
      biohandChecked(state) {
         return state.detailList.biohandList[0].valueManufacture
      },
      biohandUnchecked(state) {
         return state.detailList.biohandList[0].valueWarehouse
      },

      soulListLength(state) {
         return state.detailList.soulList[0].valueGeneral
      },
      soulChecked(state) {
         return state.detailList.soulList[0].valueManufacture
      },
      soulUnchecked(state) {
         return state.detailList.soulList[0].valueWarehouse
      },
   },
   mutations: {
      createCoins(state, bool) {
         if (bool === true) {
            if ((state.userPurse + 5) > 100) {
               state.isShowModalMany = true
               return ''
            } else {
               state.userPurse = state.userPurse + 5
            }
         }
         else {
            if ((state.userPurse++) > 100) {
               state.isShowModalMany = true
               return ''
            } else {
               state.userPurse++
            }

         }
      },
      minusCoins(state, num) {
         state.userPurse = state.userPurse - num
      },
      plusCoins(state, num) {
         if ((state.userPurse + num) > 100) {
            state.isShowModalMany = true
            return ''
         } else {
            state.userPurse = state.userPurse + num
         }

      },
      setDetail(state, detail) {
         if (state.detailList[detail.nameList]) {
            state.detailList[detail.nameList][0].valueWarehouse++
            state.detailList[detail.nameList][0].valueGeneral++
         } else {
            state.detailList[detail.nameList] = []
            detail.id = Date.now().toString()
            state.detailList[detail.nameList].push(detail)
            state.detailList[detail.nameList][0].valueWarehouse++
            state.detailList[detail.nameList][0].valueGeneral++
         }
      },
      removeDetail(state, nameList) {
         state.detailList[nameList][0].valueWarehouse--
         state.detailList[nameList][0].valueGeneral--
      },
      checkedDetail(state, nameList) {
         if (state.detailList[nameList]) {
            state.detailList[nameList][0].valueWarehouse--
            state.detailList[nameList][0].valueManufacture++
            if (state.detailList[nameList][0].valueManufacture === state.detailList[nameList][0].value) {
               state.robotBoolList[nameList] = true
            }
         }
      },
      uncheckedDetail(state, nameList) {
         if (state.detailList[nameList]) {
            state.detailList[nameList][0].valueWarehouse++
            state.detailList[nameList][0].valueManufacture--
            if (state.detailList[nameList][0].valueManufacture < state.detailList[nameList][0].value) {
               state.robotBoolList[nameList] = false
            }
         }
      },

      closeWindow(state) {
         state.isShowModalMany = false
      },

      closeWindowRobot(state) {
         state.isShowModalRobot = false
      },

      checkMakeRobot(state) {
         state.isMakeRobot = true
      },
      uncheckMakeRobot(state) {
         state.isMakeRobot = false
      },

      checkButtonBool(state) {
         if (state.isMakeRobot && (state.userPurse >= 10)) {
            state.buttonBool = false
         } else {
            state.buttonBool = true
         }
      },

      createRobot(state) {
         if (state.buttonBool === false) {
            let keys = Object.keys(state.detailList)
            for (let i = 0; i < keys.length; i++) {
               state.detailList[keys[i]][0].valueManufacture = 0
               state.detailList[keys[i]][0].valueGeneral = state.detailList[keys[i]][0].valueGeneral - state.detailList[keys[i]][0].value
            }
            state.userPurse = state.userPurse - 10
            state.isShowModalRobot = true

            if (state.robots[state.robotDesc.name]) {
               state.robotDesc.value++
            } else {
               state.robotDesc.value++
               state.robots[state.robotDesc.name] = state.robotDesc
            }
            state.isShowModalRobot = true
         } else {
            return ''
         }
      },

      changeRobotName(state, name) {
         state.robotDesc.name = name
      },
      changeRobotImgPath(state, path) {
         state.robotDesc.imagePath = path
      }
   },
   action: {},
   namespaced: true,
}