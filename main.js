function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: " PUT EMAIL ADRESS HERE ",
        Password: " PUT EMAIL PASSWORD HERE ",
        To: 'chandonvjarrett.com',
        From: document.getElementById("email").value,
        Subject: "Contact Form Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone #: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then( message => alert("Message Sent Successfully !"));
}
