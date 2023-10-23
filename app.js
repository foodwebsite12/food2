let monu=document.querySelector("#home h1")

let sonu=document.querySelector("#home button")



setInterval(() => {
    monu.style.color = "red";
    monu.innerText="Welcome to Our Website";

    sonu.style.backgroundColor = "red";

}, 1000);

setInterval(() => {
    monu.style.color = "blue";
    monu.innerText="Happy Durga Puja 🥰";

    sonu.style.backgroundColor = "blue";

}, 3000);

setInterval(() => {
    monu.style.color = "green";
    monu.innerText="Great Offers Coming Soon";

    sonu.style.backgroundColor = "green";

}, 5000);
