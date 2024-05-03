const ProductInfo = Vue.createApp({
    data() {
        return {
            product_Name:'Socks',
            onSale :false,
            inventary : 8,
            About :'About Product :',
            disc : ['50% Cotton','30% wool','20% Polyester'],
            url :'https://www.myntra.com/sock',
            image :'./assets/images/socks_green.jpg'

        }
    },
})

// const amanapp = Vue.createApp({
//     data() {
//         return {
//          aman:'Hi, Aman'
//         }
//     },
// })
