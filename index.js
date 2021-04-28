Vue.component('gallery', {

    // Template is passed index for each image to identify which one clicked the remove button.
    template: `
    <div class="gallery">
    
        <slot></slot> 
           
        <div class="img-container">        
            <div v-for="(image, index) in images" class="image">
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
                src: './images/cmeBuilding.jpg'
            },
            {
                src: './images/fieldMuseum.jpg'
            },
            {
                src: './images/lakePointTower.jpg'
            },
            {
                src: './images/northAvenueBeach.jpg'
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
                src: './images/adlerPlanetarium.jpg'
            },
            {
                src: './images/johnHancockTower.jpg'
            },
        ],
        width: 0
    },

    mounted() {
        window.addEventListener('resize', this.slotStyle);
        this.slotStyle();
    },

    // Remove image by its index that is provided from child and is named 'del' here.
    methods: {
        remove: function (del) {
            this.images.splice(del, 1);
        },
        slotStyle: function () {
            window.innerWidth = this.width

            if (this.width < 600) {
                return {color: 'red'}
            }
        }
    }
});
