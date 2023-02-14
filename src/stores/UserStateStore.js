import { defineStore } from "pinia";

export const useUserStateStore = defineStore("userState", {
  state() {
    return {
      userConected: false,
    };
  },
  actions: {
    LOGIN() {
      this.userConected = true;
    },
    LOGOUT(){
      this.userConected = false;
    }
  },
  
});