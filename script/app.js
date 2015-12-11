$(document).ready(function() {
jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal').then(
    function(res) {
        $("article h2").after(res)
    })

});