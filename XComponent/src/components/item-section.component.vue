<template>
    <tr>
      <th scope="row">{{item.id}}</th>
      <td>{{ item.nombre }}</td>
      <td>{{ item.cantidad }}</td>
      <td>
          <button class="btn btn-info btn-sm" @click="aumentarCantidad(item.id)">
              +
          </button>
          <button class="btn btn-danger btn-sm" @click="disminuirCantidad(item.id)">
              -
          </button>
      </td>
      <td>{{ item.precio * item.cantidad }}</td>
    </tr>
  </template>
<script>

import {useStore} from 'vuex'

export default {
    props:['item'],
   setup(){
         const store = useStore()
         const aumentarCantidad = (id) => {
              store.commit('aumentar',id)
         }
         const disminuirCantidad = (id) => {
              store.commit('disminuir',id)
         }
         return {aumentarCantidad,disminuirCantidad}


   }

}
</script>

<style>

</style>