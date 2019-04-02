
function validateUser(){
    //Get Username
    /*var userFName = document.getElementsByName("firstname")[0].value;
    var userLName = document.getElementsByName("lastname")[0].value;
    JavaScript*/
    //JQuery
    var userFName = $('#firstname').val();
    var userLName = $('#lastname').val();

    //Get Password
    /*var password = document.getElementsByName("password")[0].value;
    JavaScript*/
    //JQuery
    var password = $('#password').val();

    //Validation
    $.get("/validateUser?firstname="+userFName+"&lastname="+userLName+"&password="+password, function( data ){
        alert(data);
    });

}