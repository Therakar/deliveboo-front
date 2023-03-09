import { reactive } from "vue";

export const store = reactive({
 
Kitchens:[{
  name:'italiano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjuCLjIw7roxv0VKvGEtptGPMIdN5kMCxyADEUB9AzTQ&s'
  },
  {
  name:'internazionale',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSrxTs5TXNBm4Mf6AUOu0ivwU3Wg9gBvr0Q&usqp=CAU'
  },
  {
  name:'cinese',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAC5k0i8cYpakS3Jjj7wpJULKiWgUAUBU6wg&usqp=CAU'
  },
  {
  name:'giapponese',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvi6NwYX21qOSxxLPWd-iVEgESLS6oNZTQgQ&usqp=CAU'
  },
  {
  name:'messicano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6RRRT1C5_VKfrL4X9f5C4WZwJHT91FbIdg&usqp=CAU'
  },
  {
  name:'indiano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxnknt5zorMtwrsQ-u2bQan-uE_dZDKAmTg&usqp=CAU'
  },
  {
  name:'coreano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0E3OSY-gBiQKRL6J34NzkVd2xS32Uo8wEw&usqp=CAU'
  },
  {
  name:'francese',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtbUnZAkzojti9CTZ-BuGxpolt9Q8W0qkrA&usqp=CAU'
  },
  {
  name:'thailandese',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqvYZRX0-wvMF4aXWpsb2OyFD0TbF7rVyWg&usqp=CAU'
  },
  {
  name:'australiano',
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6RRRT1C5_VKfrL4X9f5C4WZwJHT91FbIdg&usqp=CAU'
  },
        
],
// gli viene assegnato un valore quando viene aperto il sito (tramite API)
restaurants: [],

// Memorizza cucine dalle checkbox selezionate
 checkbox: [],

// Variabile input v-model NavBar
 input: "",

// Oggetto con i dati dell'ordine
objCustomer:null,

// Carrello con i prodotti
cart: [],

// Modal show carrello per aprirla e chiuderla
showModal: false,

// Modal informazioni prodotto per aprirla e chiuderla
modalProduct: false,

// Prezzo totale del carrello
totalPriceCart: 0,

// 
productQuantity: [],

// Variabile con all'interno le info del prodotto 
infoProduct: null,

//Variabile che controlla se l'ordine ha avuto successo 
checkOutControll: false,

//Variabile per aprire o chiudere modale ordine 
modalCheckOut: false,

//Prodotti comprati dal cliente 
checkOutProduct: [],
checkOutTotalPriceProduct: 0,

// Controllo se utente e' ristoratore

checkUser: false,

// controllo immagine da back-end

controllImg(img){
  return img.image.includes('http')? img.image : img.image_url
},

// funzioni per aumentare quantita' prodotti carrello
quantityUp(product){
  
  product.quantity++
  localStorage.setItem('cartItems', JSON.stringify(this.cart));
  console.log(localStorage);
  
},
quantityDown(product){
  let productIndexCart= this.cart.findIndex(elm => elm.id === product.id)
  product.quantity--
  if( product.quantity <= 0){
    this.cart.splice(productIndexCart,1)   
    console.log(this.productQuantity);
  }
  localStorage.setItem('cartItems', JSON.stringify(this.cart));
},
});

