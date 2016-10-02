/**
 * Created by iOL on 2016-09-28.
 */
$(document).ready(function($) {

    var calculator = new Calculator()

    $("#7").click(
        function () {
            calculator.value(7);
            display(calculator.getEquation());
        }
    );

    $("#8").click(
        function () {
            calculator.value(8);
            display(calculator.getEquation());
        }
    );

    $("#9").click(
        function () {
            calculator.value(9);
            display(calculator.getEquation());
        }
    );

    $("#plus").click(
        function () {
            calculator.add()
        }
    );

    $("#4").click(
        function () {
            calculator.value(4);
            display(calculator.getEquation());
        }
    );

    $("#5").click(
        function () {
            calculator.value(5);
            display(calculator.getEquation());
        }
    );

    $("#6").click(
        function () {
            calculator.value(6);
            display(calculator.getEquation());
        }
    );

    $("#less").click(
        function () {
            calculator.subtract();
        }
    );

    $("#1").click(
        function () {
            calculator.value(1);
            display(calculator.getEquation());
        }
    );

    $("#2").click(
        function () {
            calculator.value(2);
            display(calculator.getEquation());
        }
    );

    $("#3").click(
        function () {
            calculator.value(3);
            display(calculator.getEquation());
        }
    );

    $("#divide").click(
        function () {
            calculator.divide();
        }
    );

    $("#0").click(
        function () {
            calculator.value(0);
            display(calculator.getEquation());
        }
    );

    $("#dot").click(
        function () {
            calculator.concatEquation(".");
        }
    );

    $("#multiply").click(
        function () {
            calculator.multiply();
        }
    );

    $("#equal").click(
        function () {
            display(calculator.equals());
        }
    );

    $("#c").click(
        function () {
            calculator.clear()
            display(calculator.getEquation());
        }
    );

    $("#pos").click(
        function () {
            $('#coordo').show();
        }
    );

    $("#factoriel").click(
        function () {
            calculator.factorial();
        }
    );

    $("#setMem").click(
        function () {
            calculator.setMemory();
        }
    );

    $("#sin").click(
        function () {
          calculator.sin(calculator.getEquation());
        }
    );

    $("#cos").click(
        function () {
            var temp = calculator.getEquation()
            calculator.clear();
            calculator.cos(temp);
            display(calculator.getEquation());
        }
    );

    $("#tan").click(
        function () {
            calculator.tan(calculator.getEquation());
        }
    );

    $("#getMem").click(
        function () {
            calculator.getMemory()
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
