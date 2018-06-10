var vm = new Vue({
  el:'#app',
  data: {
    list: [
      {
        id: 1,
        name: 'iPhone 7',
        price: 6188,
        count: 1
      },
      {
        id: 2,
        name: 'iPad Pro',
        price: 5888,
        count: 1
      },
      {
        id: 3,
        name: 'Macbook Pro',
        price: 21488,
        count: 1
      }
    ]
  },
  computed: {
    totalPrice() {
      var total = 0
      for (var i=0; i<this.list.length; i++) {
        var item = this.list[i]
        total += item.price * item.count
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  methods: {
    handleReduce(index) {
      if (this.list[index].count === 1)
        return
      this.list[index].count--
    },
    handleAdd(index) {
      this.list[index].count++
    },
    handleRemove(index) {
      this.list.splice(index, 1)
    }
  }
})