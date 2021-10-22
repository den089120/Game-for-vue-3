export const robotStore = {
   state() {
      return {
         robotsList: {
            monitorArmchair: {
               ruName: 'монитор-кресло',
               detailList: [
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
               manufactureDetails: {
                  valueBiohand: 4,
                  valueMicrochip: 4,
                  valueSoul: 1
               },
            },
         }
      }
   },
   getters: {
      getDetailListLength(state) {
         return state.robotsList.monitorArmchair.detailList.length
      },
      getRuName(state) {
         return state.robotsList.monitorArmchair.ruName
      },
      getValueDetails(state) {
         return state.robotsList.monitorArmchair.manufactureDetails
      },
      getDetailList(state) {
         return state.robotsList.monitorArmchair.detailList
      },

   },
   mutations: {},
   action: {},
   namespaced: true,
}