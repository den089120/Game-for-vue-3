import {createStore} from "vuex";
import {userStore} from "@/store/userStore";
import {robotStore} from "@/store/robotStore";

export default createStore({
   modules: {
      user: userStore,
      robot: robotStore,
   }
})