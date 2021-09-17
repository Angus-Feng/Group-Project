$(document).ready(function() {
    alert('js loaded!');
});
// add datepicker to the #schedule form
$( function() {
    $( "#schedule" ).datepicker();
  } );

// add "upload your sample image" function
var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('sample-img');
        output.src = reader.result
    };
    reader.readAsDataURL(event.target.files[0]);
};

// form validation
$(document).ready(function() {
    $('#create-your-cake-form').validate({
        wrapper: 'div',
        errorLabelContainer: "#messageBox",
        rules: {
            weight: {
                required: true,
                range: [1, 100]
            },
            fullName: "required",
            phone: {
                required: true,
                minlength: 10,
                integer: true
            },
            email: {
                required: true,
                email: true
            },
            address: {
                required: function() {
                    return $('#delivery').is(':checked');
                }
            },
            schedule: "required"
        },

        messages: {
            weight: "Please enter a number between 1 and 100",
            fullName: "Please enter your name",
            phone: {
                required: "Please enter your phone number",
                integer: "Please enter a valid phone number",
                minlength: "Please enter a valid phone number"
            },
            email: "Please enter a valid email address",
            address: "Please enter your address for delivery",
            schedule: "Please choose a date for delivery/pickup"
        },

        submitHandler: function(form) {
            form.submit();
        }
    });
});
