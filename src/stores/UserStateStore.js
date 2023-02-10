import { defineStore } from "pinia";

export const useUserStateStore = defineStore("userState", {
  //state
  state() {
    return {
      userConected: false,
    };
  },
  //actions
  actions: {
    isConected(length) {
      this.userConected = length >= 8 ? true : false;
    },
  },
  // getters
  getters: {
    showStateUser() {
      return this.userConected ? "user conected" : "user not conected";
    },
  },
});
