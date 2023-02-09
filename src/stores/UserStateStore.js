import { defineStore } from "pinia";

export const useUserStateStore = defineStore("user", {
  //state
  state() {
    return {
      userConected: false,
    };
  },
  //actions
  actions: {
    isConected() {
      this.userConected = true;
    },
  },
  // getters
  getters: {
    showStateUser() {
      return this.userConected ? "User conected" : "User Not Conected";
    },
  },
});
