import { defineStore } from "pinia"

export const userShopCart = defineStore("counter", {
  state: () => {
    return { cartShop: [], total: 0 }
  },
  actions: {
    pushObject(produto) {
      this.cartShop.push(produto)
      this.total += produto.price
    },
    removeProduct(product) {
      const positionOfProduct = this.cartShop.indexOf(product)
      this.cartShop.splice(positionOfProduct, 1)
      console.log(this.total)
      this.total -= product.price
      console.log(this.total)
    },
  },
})
