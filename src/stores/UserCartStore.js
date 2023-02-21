import { defineStore } from "pinia"

export const userShopCart = defineStore("counter", {
  state: () => {
    return { cartShop: [], total: 0 }
  },
  actions: {
    updateTotal(product, quantity) {
      this.total += product.price * quantity
    },
    pushObject(product) {
      const item = this.cartShop.find((i) => i.id === product.id)
      if (!item) {
        this.cartShop.push({ ...product, quantity: 1 })
        this.updateTotal(product, 1)
      } else {
        item.quantity++
        this.updateTotal(product, 1)
      }
    },
    removeProduct(product) {
      const item = this.cartShop.find((i) => i === product)
      if (item) {
        this.cartShop.splice(this.cartShop.indexOf(item), 1)
        this.updateTotal(product, -item.quantity)
      }
    },
    removeQuantityFromProduct(product) {
      const item = this.cartShop.find((i) => i === product)
      if (item) {
        if (item.quantity <= 1) {
          this.cartShop.splice(this.cartShop.indexOf(item), 1)
        } else {
          item.quantity--
        }
        this.updateTotal(product, -1)
      }
    },
    clean() {
      this.total = 0
      this.cartShop = []
    },
  },
})
