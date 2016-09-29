/**
 * Created by iOL on 2016-09-28.
 */
$.getScript("calculator.js", function(){});
$(document).ready(function($) {
    $("#sept").click(
        function () {
            alert("sept");
        }
    );

    $('#coordo').text(geoplugin_latitude() + " " + geoplugin_longitude());
    $('#version').show('fast').text(jQuery.fn.jquery);
});
