/**
 * Created by iOL on 2016-09-28.
 */
$(document).ready(function($) {

    var calculator = new Calculator()

    $("#7").click(
        function () {
            /*c'est pas ça!*/
            display(calculator.value(7).toString());
        }
    );

    $("#8").click(
        function () {
            alert("8");
        }
    );

    $("#9").click(
        function () {
            alert("9");
        }
    );

    $("#plus").click(
        function () {
            alert("+");
        }
    );

    $("#4").click(
        function () {
            alert("4");
        }
    );

    $("#5").click(
        function () {
            alert(5);
        }
    );

    $("#6").click(
        function () {
            alert("6");
        }
    );

    $("#less").click(
        function () {
            alert("-");
        }
    );

    $("#1").click(
        function () {
            alert("1");
        }
    );

    $("#2").click(
        function () {
            alert("2");
        }
    );

    $("#3").click(
        function () {
            alert("3");
        }
    );

    $("#divide").click(
        function () {
            alert("÷");
        }
    );

    $("#0").click(
        function () {
            alert("0");
        }
    );

    $("#dot").click(
        function () {
            alert(".");
        }
    );

    $("#multiply").click(
        function () {
            alert("x");
        }
    );

    $("#equal").click(
        function () {
            alert("=");
        }
    );

    $("#c").click(
        function () {
            alert("clear");
        }
    );

    $("#pos").click(
        function () {
            $('#coordo').show();
        }
    );

    $("#factoriel").click(
        function () {
            alert("n!");
        }
    );

    $("#setMem").click(
        function () {
            alert("setMem");
        }
    );

    $("#sin").click(
        function () {
            alert("sin");
        }
    );

    $("#cos").click(
        function () {
            alert("cos");
        }
    );

    $("#tan").click(
        function () {
            alert("tan");
        }
    );

    $("#getMem").click(
        function () {
            alert("getMem");
        }
    );

    $('#coordo').text("Longitude : " + geoplugin_latitude() + " Latitude : " + geoplugin_longitude());
    $('#coordo').hide();
    $('#version').show('fast').text(jQuery.fn.jquery);
    display("0")
});

function display(value) {
    $('.screen').text(value);
}
