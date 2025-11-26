```javascript
function scrollToSection(id) {
document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


function postMessage() {
const input = document.getElementById("forumInput");
if (!input.value.trim()) return;


const messages = document.getElementById("messages");


const div = document.createElement("div");
div.className = "message";
div.innerHTML = `
<p>${input.value}</p>
<button class="reply-btn" onclick="replyMessage(this)">Balas</button>
`;


messages.appendChild(div);


saveMessages();
input.value = "";
}


function replyMessage(button) {
const replyText = prompt("Tulis balasan:");
if (!replyText) return;


const reply = document.createElement("div");
reply.className = "message reply";
reply.style.marginLeft = "20px";
reply.innerHTML = `<p>${replyText}</p>`;


button.parentElement.appendChild(reply);
saveMessages();
}


function saveMessages() {
localStorage.setItem("forumMessages", document.getElementById("messages").innerHTML);
}


function loadMessages() {
const saved = localStorage.getItem("forumMessages");
if (saved) document.getElementById("messages").innerHTML = saved;
}


window.onload = loadMessages;
```
