$(document).ready(function() {
    $('#signup-form').on('submit', function(event) {
        alert($('input[name="password"]').val())
        if ($('input[name="password"]').val().length < 10) {
            event.preventDefault();
            alert("Your password is not long enough");
            return;
        }
        if ($('input[name="password"]').val() != $('input[name="password2"]').val()) {
            event.preventDefault();
            alert("Your passwords didn't match");
        }
        if ($('input[name="user"]').val().length < 5) {
            event.preventDefault();
            alert("Your username is too short");
        }
    });

});