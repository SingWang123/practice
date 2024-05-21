console.log('Defer Script 2 Executed');
document.addEventListener("DOMContentLoaded", function() {
    let p4 = document.createElement('p');
    p4.textContent = 'Defer Script 2 Loaded';
    document.body.appendChild(p4);

    let bigImg4 = document.createElement("img");
    bigImg4.src = "https://www.travel.taipei/content/images/articles/377867/1024x768_admin-image-9uxix2an7kcltddfr2nt0g.png";
    p4.appendChild(bigImg4);
});

