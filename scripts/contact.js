let messages = [];
const addMessage = (ev) => {
    ev.preventDefault(); // to stop the form submitting
    let topic = document.getElementById('topic');
    let tIndex = topic.selectedIndex;
    let message = {
        id: Date.now(),          
        name: document.getElementById('input-full-name').value,
        email: document.getElementById('input-email').value,
        topic: topic.options[tIndex].value,
        msg: document.getElementById('feedback').value
    }

    messages.push(message);
    document.forms[0].reset(); // clear the form for the next entries
    //document.querySelector('form').reset();
    
    // saving to locatstorage
    localStorage.setItem('MessageList', JSON.stringify(messages));
}