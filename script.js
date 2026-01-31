// انتخاب المان‌ها
const chatBox = document.querySelector('.chat-box');
const userInput = document.querySelector('.input-container input');
const sendBtn = document.querySelector('.input-container button');

// تابع اضافه کردن پیام به چت
function addMessage(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    if (sender === 'user') msgDiv.classList.add('user-msg');
    else msgDiv.classList.add('bot-msg');
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// پاسخ ساده ربات (می‌توان بعداً گسترش داد)
function botResponse(userMsg) {
    userMsg = userMsg.toLowerCase();
    let reply = "متوجه نشدم 😅";

    // پاسخ‌های ساده و پیش‌فرض
    if (userMsg.includes('سلام')) reply = "سلام! چطوری؟";
    else if (userMsg.includes('حالت چطوره')) reply = "من خوبم، تو چطوری؟";
    else if (userMsg.includes('اسم تو چیه')) reply = "من یک ربات چت ساده هستم!";
    else if (userMsg.includes('خداحافظ')) reply = "خداحافظ! مراقب خودت باش 😉";

    return reply;
}

// ارسال پیام کاربر
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    addMessage(message, 'user');
    userInput.value = '';

    // پاسخ ربات بعد از 500ms
    setTimeout(() => {
        const botMsg = botResponse(message);
        addMessage(botMsg, 'bot');
    }, 500);
}

// Event Listener برای دکمه و Enter
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});