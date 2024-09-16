document.getElementById('btnSwitch').addEventListener('click',()=> {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        document.getElementById('btnSwitch').innerHTML = "Light Mode"
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        document.getElementById('btnSwitch').innerHTML = "Dark Mode"
    }
})

document.getElementById("linkedin").onclick = function() {
    location.href = "https://www.linkedin.com/in/tom-tait/"
}
document.getElementById("github").onclick = function() {
    location.href = "https://github.com/t0mtait"
}
document.getElementById("cryptoView").onclick = function() {
    location.href = "https://cryptoport.tomtait.dev"
}
document.getElementById("cryptoGit").onclick = function() {
    location.href = "https://github.com/t0mtait/cryptoport"
}

document.getElementById("playwrightGit").onclick = function() {
    location.href = "https://github.com/t0mtait/testing"
}

document.getElementById("cityView").onclick = function() {
    location.href = "https://imgur.com/a/lX40Mj1"
}
document.getElementById("cityGit").onclick = function() {
    location.href = "https://github.com/t0mtait/mapgame"
}