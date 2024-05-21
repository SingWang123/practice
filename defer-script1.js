console.log('Defer Script 1 Executed');
document.addEventListener("DOMContentLoaded", function() {
     p3 = document.createElement('p');
    p3.textContent = 'Defer Script 1 Loaded';
    document.body.appendChild(p3);
    
    let bigImg3 = document.createElement("img");
    bigImg3.src = "https://png.pngtree.com/thumb_back/fw800/background/20231221/pngtree-natural-scenery-countryside-pastoral-countryside-photo-image_15541882.png";
    p3.appendChild(bigImg3);
});

