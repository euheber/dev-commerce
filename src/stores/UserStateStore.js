import { defineStore } from "pinia";

export const useUserStateStore = defineStore("userState", {
  state() {
    return {
      userConected: false,
      error: null
    };
  },
  actions: {
    LOGIN(length) {
      this.userConected = length >= 8 ? true : false;
      this.error = length < 8 ? "Password must be at least 8 characters long" : null;
    },
    LOGOUT(){
      this.userConected = false;
      this.error = null;
    }
  },
  getters: {
    SHOW_STATE_USER() {
      return this.userConected ? "user conected" : "user not conected";
    },
    ERROR() {
      return this.error;
    },
  },
});