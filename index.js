document.getElementById('btnSwitch').addEventListener('click',()=> {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        document.getElementById('btnSwitch').innerHTML = "Light"
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        document.getElementById('btnSwitch').innerHTML = "Dark"
    }
})


document.getElementById("linkedin").onclick = function() {
    location.href = "https://www.linkedin.com/in/tom-tait/"
}
document.getElementById("github").onclick = function() {
    location.href = "https://github.com/t0mtait"
}


document.getElementById("simonView").onclick = function() {
    location.href = "https://simon.tomtait.dev"
}
document.getElementById("simonGit").onclick = function() {
    location.href = "https://github.com/t0mtait/simon"
}

document.getElementById("translatorView").onclick = function() {
    location.href = "https://translator.tomtait.dev"
}

document.getElementById("translatorGit").onclick = function() {
    location.href = "https://github.com/t0mtait/translator"
}
