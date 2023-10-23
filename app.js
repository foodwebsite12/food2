let monu=document.querySelector("#home h1")

setInterval(() => {
    monu.style.color = "red";
    monu.innerText="Welcome to Our Website";
}, 1000);

setInterval(() => {
    monu.style.color = "blue";
    monu.innerText="Happy Durga Puja 🥰";
}, 3000);

setInterval(() => {
    monu.style.color = "green";
    monu.innerText="Great Offers Coming Soon";
}, 5000);