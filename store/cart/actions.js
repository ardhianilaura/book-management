export default {
 async add({
 state,
 commit
 }, payload) {
 // mendeteksi apakah data yang diinput ada pada carts?
 let cartItem = state.carts.find(item => item.id === payload.id)
 // jika tidak ada maka mutation insert dijalankan
 if (!cartItem) {
 commit('insert', payload)
 }
 // jika ada maka mutation update dijalankan
 else {
 let cartItemUpdate = {
 id: cartItem.id,
 title: cartItem.title,
 cover: cartItem.cover,
 price: cartItem.price,
 weight: cartItem.weight,
 quantity: cartItem.quantity + 1
 }
 // cartItem.quantity++
 commit('update', cartItemUpdate)
 }
 }
}