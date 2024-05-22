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

document.getElementById("encryptorView").onclick = function() {
    location.href = "https://encryptor.tomtait.dev"
}
document.getElementById("encryptorGit").onclick = function() {
    alert("private repository. public coming soon!")
}

document.getElementById("simonView").onclick = function() {
    location.href = "https://simon.tomtait.dev"
}
document.getElementById("simonGit").onclick = function() {
    location.href = "https://github.com/t0mtait/simon"
}

document.getElementById("androidGit").onclick = function() {
    location.href = "https://github.com/t0mtait/mapgame"
}

document.getElementById("translatorGit").onclick = function() {
    location.href = "https://github.com/t0mtait/translator"
}


