

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'revista.json', true);
    xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
    callback(xobj.responseText);
    }
    };
    xobj.send(null);
}

loadJSON(function(json) {
    console.log(loadJSON()); // this will log out the json object
  });


/*let contenido = new Array();
    
function loadQuestions() {
    $.getJSON('revista.json', function (data) {
        contenido = data.quiz;
    }).error(function(){
            console.log('error: json not loaded');
        });
    };*/
