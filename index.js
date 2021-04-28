Vue.component('gallery', {

    // Template is passed index for each image to identify which one clicked the remove button.
    template: `
    <div class="gallery">
    
        <slot></slot> 
           
        <div class="img-container">        
            <div v-for="(image, index) in images" class="image" :class="image.class">
            <button type="button" @click="select(index)"> Remove </button>
            <img :src="image.src">           
            </div>     
        </div>  
         
    </div>`,
    props: {
        images: {
            type: Array,
            required: true
        }
    },

    // Emit an event to parent on click and pass the index of the image where the button was clicked.
    methods: {
        select(index) {
            this.$emit('select', index)
        }
    }
})

new Vue({
    el: '#vue-app',
    data: {
        images: [
            {
                src: './images/chicagoSkyline.jpg'
            },
            {
                src: './images/chicagoSkylineNight.jpg'
            },
            {
                src: './images/chicagoTheater.jpg'
            },
            {
                src: './images/cmeBuilding.jpg',
                class: 'tall'
            },
            {
                src: './images/fieldMuseum.jpg',
                class: 'tall'

            },
            {
                src: './images/lakePointTower.jpg',
                class: 'tall'
            },
            {
                src: './images/northAvenueBeach.jpg',
                class: 'tall'
            },
            {
                src: './images/johnHancockGallery.jpg'
            },
            {
                src: './images/grantPark.jpg'
            },
            {
                src: './images/theBean.jpg'
            },
            {
                src: './images/adlerPlanetarium.jpg',
            },
            {
                src: './images/johnHancockTower.jpg'
            },
        ],
        width: 0
    },

    // Remove image by its index that is provided from child and is named 'del' here.
    methods: {
        remove(del) {
            this.images.splice(del, 1);
        }
    }
});
