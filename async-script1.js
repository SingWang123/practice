console.log('Async Script 1 Executed');
let p1 = document.createElement('p');
p1.textContent = 'Async Script 1 Loaded';
document.body.appendChild(p1);

let bigImg1 = document.createElement("img");
bigImg1.src = "https://www.jdonline.com.hk/uploadfile/2022/0706/20220706011135523.png";
p1.appendChild(bigImg1);