$(document).ready(function() {
    alert('js loaded!');
});

$( function() {
    $( "#schedule" ).datepicker();
  } );

var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('sample-img');
        output.src = reader.result
    };
    reader.readAsDataURL(event.target.files[0]);
};