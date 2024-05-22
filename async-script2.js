console.log(`Async Script 2 Start： ${performance.now()}ms`);
let p2 = document.createElement('p');
p2.textContent = 'Async Script 2 Loaded';
document.body.appendChild(p2);

let bigImg2 = document.createElement("img");
bigImg2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuV7jzqEhULC-3mg3oZXoT8RHLCfZW4_AeHR1xZf990w&s";
p2.appendChild(bigImg2);

console.log(`Async Script 2 End： ${performance.now()}ms`);
