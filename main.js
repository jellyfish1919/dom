// console.log("bonjourno salim")main.js
const plus = Array.from(document.querySelectorAll(".bi-cart-plus-fill"));
// console.log(plus);
const minus = Array.from(
  document.getElementsByClassName("bi-calendar-minus-fill")
);
console.log(minus);
const bin = Array.from(document.getElementsByClassName("bi-trash"));
// console.log(bin);
const like = Array.from(document.getElementsByClassName("bi-chat-heart"));
const card = Array.from(document.getElementsByClassName("card"));

// console.log(like);
for (const incr of plus) {
  incr.addEventListener("click", function () {
    incr.nextElementSibling.innerHTML++;
    calcule_total();
  });
}

for (const decr of minus) {
  decr.addEventListener("click", function () {
    if (decr.previousElementSibling.innerHTML > 1)
      decr.previousElementSibling.innerHTML--;
   calcule_total();
  });
}
for (const i in bin) {
  bin[i].addEventListener("click", function () {
    card[i].remove();
    calcule_total();
  });
}
for (const heart of like) {
  heart.addEventListener("click", function () {
    if (heart.style.color === "red") {
      heart.style.color = "black";
     
    } else {
      heart.style.color = "red";
    }
    calcule_total();
  });
}
function calcule_total(){
   const  price = Array.from(document.querySelectorAll(".prix"));
   console.log(price);
   const  quantite = Array.from(document.querySelectorAll(".quantite"))
   var total=0
   for(var i=0;i<price.length;i++){
      total=total+
      (price[i].innerHTML * quantite[i].innerHTML)
   }
     return document.querySelector(".total-price").innerHTML=total
 
}

