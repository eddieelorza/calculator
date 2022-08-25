const toggleFirst= document.getElementById('first');
const toggleSecond= document.getElementById('second');
const toggleThird= document.getElementById('third');
const theme = window.localStorage.getItem("theme");


if (theme == "normal" || theme == "light" || theme == "neon") {
    document.body.classList.add(theme);
    if (theme == "normal") {
        toggleFirst.checked = true;
    } else if (theme == "light") {
        toggleSecond.checked = true;
    } else if (theme == "neon") {
        toggleThird.checked = true;
    }
}


function toggleTheme() {
    if (toggleFirst.checked) {
        document.body.classList.remove("light");
        document.body.classList.remove("neon");
        document.body.classList.add("normal");
        window.localStorage.setItem("theme", "normal");
    } else if (toggleSecond.checked) {
        document.body.classList.remove("normal");
        document.body.classList.remove("neon");
        document.body.classList.add("light");
        window.localStorage.setItem("theme", "light");
    } else if (toggleThird.checked) {
        document.body.classList.remove("normal");
        document.body.classList.remove("light");
        document.body.classList.add("neon");
        window.localStorage.setItem("theme", "neon");
    } else{
        window.localStorage.setItem("theme", "normal");

    }

}

toggleFirst.addEventListener('change', toggleTheme);
toggleSecond.addEventListener('change', toggleTheme);
toggleThird.addEventListener('change', toggleTheme);


// Language: javascript








