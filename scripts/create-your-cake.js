
// add datepicker to the #schedule form
$(function () {
    $("#schedule").datepicker();
});

// add "upload your sample image" function
var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('sample-img');
        output.src = reader.result
    };
    reader.readAsDataURL(event.target.files[0]);
};

// form validation
$(document).ready(function () {
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
                required: function () {
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
    });
    // auto unselect radio button when one is select
    $('input[type=radio]').change(function () {
        if (this.checked) {
            $(this).closest('#create-your-cake-form')
                .find('input[type=radio]').not(this)
                .prop('checked', false);
        }
    });

    document.getElementById('result').style.visibility = 'hidden';
});

//set default decor object
var objDecor = { "name": "extra decor", "value": "" };

//main function for submitting the form
function onSubmit(form) {
    data = new Array;
    data = JSON.stringify($(form).serializeArray());
    addObject();
    localStorage.clear();
    localStorage.setItem('cake', data);
    hideForm();
    showResult();
    data = {};
    document.getElementById('result').style.visibility = 'visible';
    return false;
}

//hide the main form when passing validation
function hideForm() {
    if ($('#create-your-cake-form').valid()) {
        document.getElementById('create-your-cake-form').style.visibility = 'hidden';
    } else {
        localStorage.clear();
    }
}

//add decor elements to the decor object
function addObject() {
    let decors = document.getElementById('decor').getElementsByTagName('input');
    for (let index = 0; index < decors.length; index++) {
        if (decors[index].checked) {
            objDecor.value += ' ' + decors[index].value;
        }
    }
}

//write the form content into a new table
function showResult() {
    var cake = JSON.parse(localStorage.getItem('cake'));
    var table = document.getElementById('cake-detail');
    for (let index = 0; index < 2; index++) {
        var row = table.insertRow(index);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = cake[index].name;
        cell2.innerHTML = cake[index].value;
    }
    var row2 = table.insertRow(2);
    var cell12 = row2.insertCell(0);
    var cell22 = row2.insertCell(1);
    cell12.innerHTML = objDecor.name;
    cell22.innerHTML = objDecor.value;
    localStorage.clear();
    for (let index = 3; index < cake.length + 1; index++) {
        var row = table.insertRow(index);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = cake[index - 1].name;
        cell2.innerHTML = cake[index - 1].value;
    }
}


