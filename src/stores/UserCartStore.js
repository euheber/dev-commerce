import { defineStore } from "pinia"

export const userShopCart = defineStore("counter", {
  state: () => {
    return { cartShop: [] }
  },

  actions: {
    pushObject(produto) {
      this.cartShop.push(produto)
      console.log(this.cartShop)
    },
  },
})
