async function partials() {
    document.getElementById("header").innerHTML = await (await fetch("/partials/header.html")).text();
    document.getElementById("footer").innerHTML = await (await fetch("/partials/footer.html")).text();

    initMenu();
}

function initMenu() {    
    const menu = document.querySelector(".burguer");
    const btn = document.querySelector(".burguer-btn");

    if (!menu || !btn) return;
    
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("open");
        btn.classList.toggle("rotate");
        e.stopPropagation();
    });
    
    document.addEventListener("click", (e) => {
        if (menu.classList.contains("open") && !menu.contains(e.target)) {
            menu.classList.remove("open");
            btn.classList.remove("rotate");
        }
    });    
}

partials ();