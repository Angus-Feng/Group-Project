const addMessage = () => {
    let messages = [];
    // ev.preventDefault(); // to stop the form submitting
    let topic = document.getElementById('topic');
    let tIndex = topic.selectedIndex;
    if(validateForm()){
        document.getElementById("contact-us-form").style.display = "none";
        document.getElementById("show-contact-us-form").style.display = "grid";
        document.getElementById("contact-success-text").style.display = "block";
        console.log("1111")
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

        document.getElementById("contactName").innerHTML = message["name"]
        document.getElementById("contactEmail").innerHTML = message["email"]
        document.getElementById("contactTopic").innerHTML = message["topic"]
        document.getElementById("contactMessage").innerHTML = message["msg"]
    }
    
}
// var browserify = require('browserify');

function showData(){

}

function validateForm() {
    // decalre variables
    let fullNameText = document.getElementById('input-full-name');
    let emailField = document.getElementById('input-email');
    let emailText = document.getElementById('input-email').value;
    let msgTopic = document.getElementById('topic');
    let msgContent = document.getElementById('feedback');
    let emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

    // validate Name
    if (fullNameText.value.length === 0) {
        alert('Please enter your full name');
        fullNameText.focus();
        fullNameText.style.background = 'yellow';
        return false;
    } // end if
    else if (emailText.length === 0) { // validate email 
        alert('Please enter your email address');
        emailField.focus();
        emailField.style.background = 'yellow';
        fullNameText.style.background = 'white';
        return false;
    }// end if    
    else if (!(emailText.match(emailCorrectPattern))) { // validate email pattern
        alert('Please correct your email address');
        // emailField.value = '';
        emailField.focus();
        emailField.style.background = 'yellow';
        fullNameText.style.background = 'white';
        return false;
    }// end if
    else if (msgTopic.selectedIndex === 0) {  // validate topic
        alert('Please choose an option');
        msgTopic.focus();
        msgTopic.style.background = 'yellow';
        fullNameText.style.background = 'white';
        emailField.style.background = 'white';
        return false;
    }// end if     
    else if (msgContent.value.length === 0) {  // validate message
        alert('Please enter your message');
        msgContent.focus();
        msgContent.style.background = 'yellow';
        fullNameText.style.background = 'white';
        emailField.style.background = 'white';
        msgTopic.style.background = 'white';
        return false;
    }// end if 
    else {
        // alert('Thank you for your message. We will reply you in two business days.');
        return true;
    }
    msgContent.style.background = 'white';
}// end function validateForm()

// function submitForm() {
    
//     if(validateForm()){
//         console.log(data)
//     }
// }