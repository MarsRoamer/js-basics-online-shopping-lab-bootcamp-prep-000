var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var name = item;
 var name = {};
 name[item] = Math.floor(Math.random() * 100);
 cart.push(name);
 console.log(`${item} has been added to your cart.`)
 return cart;
}


function viewCart() {
var arr = [];
var newArr = [];

for(var i = 0; i < cart.length; i++) {
  arr.push(Object.keys(cart[i]));
  newArr.push(Object.values(cart[i]));
}
    if(cart.length === 0) {
      console.log('Your shopping cart is empty.')
    } else if (cart.length === 1){
        console.log(`In your cart, you have ${arr[0]} at $${newArr[0]}.`)
    } else if(cart.length === 2) {
        console.log(`In your cart, you have ${arr[0]} at $${newArr[0]} and ${arr[1]} at $${newArr[1]}.`)
    } else {
      var str = `In your cart, you have ${arr[0]} at $${newArr[0]}, `;
      var strOne;
      var strTwo = `and ${arr.pop()} at $${newArr.pop()}.`;
      for(var j = 1; j < cart.length - 1; j++) {
        strOne = `${arr[j]} at $${newArr[j]}, ${''}`
        str = str.concat(strOne);
      } str = str.concat(strTwo);
      console.log(str);
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
