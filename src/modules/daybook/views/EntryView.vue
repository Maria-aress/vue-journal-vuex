<template>
  <div>
      <div class="entry-title d-flex justify-content.between p-2">
          <div >
              <span class="text-success fs-3 fw-bold">15</span>
              <span class="mx-1 fs-3">Juio</span>
              <span class="fs-4 fw-light">2021 Jueves</span>
          </div>

          <div>
              <button class="btn btn-danger mx-2">
                  Borrar
                  <i class="fa fa-trash-alt"></i>
              </button>
              <button class="btn btn-primary mx-2">
                  Subir Foto
                  <i class="fa fa-upload"></i>
              </button>
          </div>
      </div>
      <hr>
      <div class="d-flex flex-colum px-3 h-75">
          <textarea placeholder="Que Sientes hoy" class=""></textarea>
      </div>
      <Fab 
        icon="fa-save"
      />
      <img src="https://www.estudiodelier.es/administrator/Bibliotecas/kcfinder/upload/images/cuadros/laser/cuadros-del-arbol-de-la-vida(1).jpg" alt="entry-picture" class="img-thumbnail">
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {

    components: {
        Fab: defineAsyncComponent(() =>  import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }

}
img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);

}
</style>