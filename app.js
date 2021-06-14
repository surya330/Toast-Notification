const toasts = document.getElementById("toasts")
const button = document.getElementById("btn")

const messages = ["Message One","Message Two","Message Three","Message Four"]
const types = ["info","success","error"]

button.addEventListener("click",() => createNotification())

function createNotification(message = null, type = null){
    const notifi = document.createElement("div")
    notifi.classList.add('toast')
    notifi.innerText = message ? message : getMessagetype();
    notifi.classList.add(type ? type : getRandomtype())
    toasts.appendChild(notifi)
    setTimeout(() => {
        notifi.remove()
    }, 3000)
}

function getMessagetype(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomtype(){
    return types[Math.floor(Math.random() * types.length)]
}