let monu=document.querySelector("#home h1")

let sonu=document.querySelector("#home button")

let servicesDescription =document.querySelector("#services")


setInterval(() => {
    monu.style.color = "red";
    monu.innerText="Welcome to Our Website ✨🙏";
    
    sonu.style.backgroundColor = "red";

    servicesDescription.style.color="red";
}, 1000);

setInterval(() => {
    monu.style.color = "blue";
    monu.innerText="Happy Durga Puja 🥰";

    sonu.style.backgroundColor = "blue";

    servicesDescription.style.color="blue";

}, 3000);

setInterval(() => {
    monu.style.color = "green";
    monu.innerText="Great Offers Coming Soon 🎁🎉✨";

    sonu.style.backgroundColor = "green";

    servicesDescription.style.color="green";

}, 5000);



