console.log('Defer Script 1 Executed');
let p3 = document.createElement('p');
p3.textContent = 'Defer Script 1 Loaded';
document.body.appendChild(p3);

let bigImg3 = document.createElement("img");
bigImg3.src = "https://hips.hearstapps.com/hmg-prod/images/%E5%9C%966-%E5%9C%A8%E5%A4%AA%E5%B9%B3%E5%B1%B1%E5%9C%8B%E5%AE%B6%E6%A3%AE%E6%9E%97%E9%81%8A%E6%A8%82%E5%8D%80%E6%A3%AE%E6%9E%97%E6%AD%A5%E9%81%93-%E4%BA%AB%E5%8F%97%E6%A3%AE%E6%9E%97%E6%B5%B4%E6%B4%97%E7%A6%AE-1591677294.png?crop=1xw:1xh;center,top&resize=980:*";
p3.appendChild(bigImg3);

img3_Time = new Date();
console.log("Defer Script 1 " + img3_Time);

// document.addEventListener("DOMContentLoaded", function() {
//     p3 = document.createElement('p');
//     p3.textContent = 'Defer Script 1 Loaded';
//     document.body.appendChild(p3);
    
//     let bigImg3 = document.createElement("img");
//     bigImg3.src = "https://hips.hearstapps.com/hmg-prod/images/%E5%9C%966-%E5%9C%A8%E5%A4%AA%E5%B9%B3%E5%B1%B1%E5%9C%8B%E5%AE%B6%E6%A3%AE%E6%9E%97%E9%81%8A%E6%A8%82%E5%8D%80%E6%A3%AE%E6%9E%97%E6%AD%A5%E9%81%93-%E4%BA%AB%E5%8F%97%E6%A3%AE%E6%9E%97%E6%B5%B4%E6%B4%97%E7%A6%AE-1591677294.png?crop=1xw:1xh;center,top&resize=980:*";
//     p3.appendChild(bigImg3);

//     img3_Time = new Date();
//     console.log("Defer Script 1 " + img3_Time);
// });

