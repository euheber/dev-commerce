import { defineStore } from "pinia"

export const userShopCart = defineStore("counter", {
  state: () => {
    return { cartShop: [], total: 0 }
  },
  actions: {
    pushObject(product) {
      const itemIndex = this.cartShop.findIndex((i) => i.id === product.id)
      if (itemIndex === -1) {
        this.cartShop.push({ ...product, quantity: 1 })
        this.total += product.price
       
      } else {
        this.cartShop[itemIndex].quantity++
        this.total += product.price
      }
    },
    removeProduct(product) {
      const positionOfProduct = this.cartShop.indexOf(product)
      this.cartShop.splice(positionOfProduct, 1)
      this.total -= product.price * product.quantity
    },
    removeQuantityFromProduct(product){
      const positionOfProduct = this.cartShop.indexOf(product)
      if(product.quantity <= 1) this.cartShop.splice(positionOfProduct, 1)
      product.quantity--
      this.total -= product.price
    },
    clean(){ 
      this.total = 0
      this.cartShop = []
    }
  },
})
