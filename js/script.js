const { createApp } = Vue;

createApp({
  data(){
    return{
      images: [
              './assets/img/01.jpg',
              './assets/img/02.jpg',
              './assets/img/03.jpg',
              './assets/img/04.jpg',
              './assets/img/05.jpg'
             ],
      activeImage: 0             
    }
  },

  methods: {
      changeImage(){
        this.activeImage = index;
      },
      nextPrev(isNext){
        isNext ? this.activeImage++ : this.activeImage--;
      }
  }
})