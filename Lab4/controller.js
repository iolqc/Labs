/**
 * Created by iOL on 2016-09-28.
 * Created by hSA on 2016-10-02
 */
$(document).ready(function($) {

    var calculator = new Calculator();

    var screen = $('.screen');

    var memoryNumber = 'no data was set';

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
            calculator.add();
            display(calculator.getEquation());
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
            display(calculator.getEquation());
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
            display(calculator.getEquation());
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
            display(calculator.getEquation());
        }
    );

    $("#multiply").click(
        function () {
            calculator.multiply();
            display(calculator.getEquation());
        }
    );

    $("#equal").click(
        function () {
            display(calculator.equals());
        }
    );

    $("#c").click(
        function () {
            calculator.clear();
            display(calculator.getEquation());
        }
    );

    $("#pos").click(
        function (event) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    display('Lat:' + position.coords.latitude.toFixed(4) +
                        ' Lon: ' + position.coords.longitude.toFixed(4));
                });
            } else {
                display('Geolocation non disponible');
            }
        }
    );

    $("#factoriel").click(
        function () {
            calculator.factorial();
            display(calculator.getEquation());
        }
    );

    $("#setMem").click(
        function (event) {
            calculator.setMemory(screen.text());
            memoryNumber = screen.text();
        }
    );

    $("#sin").click(
        function () {
            var temp = calculator.getEquation();
            calculator.clear();
            calculator.sin(temp);
            display(calculator.getEquation());
        }
    );

    $("#cos").click(
        function () {
            var temp = calculator.getEquation();
            calculator.clear();
            calculator.cos(temp);
            display(calculator.getEquation());
        }
    );

    $("#tan").click(
        function () {
            var temp = calculator.getEquation();
            calculator.clear();
            calculator.tan(temp);
            display(calculator.getEquation());
        }
    );

    $("#getMem").click(
        function (event) {
            calculator.value(calculator.getMemory());
            screen.text(memoryNumber);
        }
    );
    function display(value) {
        $('.screen').text(value);
    }

});

