/**
 * Created by iOL on 2016-10-08.
 */
$(document).ready(function(){
    $("#btnDisplay").click(function(){
        var request = $.ajax({
            url : 'http://localhost:5000/tasks', // Url de la requête
            type : 'get', // Type de requête HTTP
            //contentType: 'application/json' // Type de données envoyées
        });
        request.done(function(data) {
            // data est probablement un objet JSON…
            $("#result").text(request.responseText);
        });
        request.fail(function(jqXHR, textStatus) {
            // Handling de l’erreur
            $("#result").text("Something wrong happened.");

        });

    });

    $("#btnPost").click(function(){
        var value = $('#post').val();
        if(value)
        {
            var request = $.ajax({
                url : 'http://localhost:5000/tasks', // Url de la requête
                type : 'post', // Type de requête HTTP
                contentType: 'application/json', // Type de données envoyées
                data : JSON.stringify({'task': value})
            });
            request.done(function(data) {
                $("#result").text("task : " + value + " added");
                $('#post').val('');
            });
            request.fail(function(jqXHR, textStatus) {
                $("#result").text("Something wrong happened.");
                $('#post').val('');

            });
        }else{
            $("#result").text("please enter a value for the task");
        }
    });

    $("#btnDelete").click(function(){
        var value = $('#delete').val();
        if(value)
        {
            var request = $.ajax({
                url : 'http://localhost:5000/tasks/' + value, // Url de la requête
                type : 'delete', // Type de requête HTTP
                contentType: 'application/json', // Type de données envoyées
            });
            request.done(function(data) {
                $("#result").text("task : " + value + " deleted");
                $('#delete').val('');
            });
            request.fail(function(jqXHR, textStatus) {
                $("#result").text("Something wrong happened.");
                $('#delete').val('');

            });
        }else{
            $("#result").text("please enter an id for the delete operation");
        }
    });

   /* $("#btnGet").click(function(){
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:5000/tasks', true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var resp = request.responseText;
            } else {
                var resp = "reached target server, but it returned an error"
            }
            $('#result').html(resp);
        };

        request.onerror = function() {
            $('#result').html("there was a connection error of some sort");
        };

        request.send();
    });*/

});