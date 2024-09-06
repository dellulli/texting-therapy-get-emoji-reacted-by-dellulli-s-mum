document.getElementById('text1').addEventListener('click', () => sendMessage('text1.png'));
document.getElementById('text2').addEventListener('click', () => sendMessage('text2.png'));

function sendMessage(image) {
    // Hide options while waiting for reaction
    document.getElementById('options').classList.add('hidden');
    
    // Create message bubble
    let messageHistory = document.getElementById('message-history');
    let messageDiv = document.createElement('div');
    messageDiv.className = 'message reacted';
    
    let messageImg = document.createElement('img');
    messageImg.src = image;
    messageImg.alt = 'Sent Message';
    messageDiv.appendChild(messageImg);

    // Add message to the history
    messageHistory.appendChild(messageDiv);
    messageHistory.scrollTop = messageHistory.scrollHeight; // Auto-scroll to the bottom

    // Wait 3 seconds and then add emoji reaction (thumbs-up)
    setTimeout(() => {
        let thumbEmoji = document.createElement('span');
        thumbEmoji.textContent = '👍';  // Thumbs-up emoji
        thumbEmoji.className = 'thumb';
        messageDiv.appendChild(thumbEmoji);
        
        // Show options again after reaction
        document.getElementById('options').classList.remove('hidden');
        messageHistory.scrollTop = messageHistory.scrollHeight;
    }, 3000);  // 3-second delay before the emoji reaction
}
