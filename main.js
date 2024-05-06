const ProductInfo = Vue.createApp({
    data() {
        return {
            cart:0,
            product_Name:'Socks',
            onSale :false, // Conditional Rendering
            inventary : 8, // Conditional Rendering
            About :'About Product :',
            disc : ['50% Cotton','30% wool','20% Polyester'], //list Rendering
            url :'https://www.myntra.com/sock', // Attribute Binding
            image :'./assets/images/socks_green.jpg', // Attribute Binding
            variants: [
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
    ],
        }
    },
    methods:{
        addToCart(){
            this.cart += 1  // Event Handling using function 
        },
        updateImage(variantImage) {
    this.image = variantImage
  }
    }
})

// const amanapp = Vue.createApp({
//     data() {
//         return {
//          aman:'Hi, Aman'
//         }
//     },
// })
