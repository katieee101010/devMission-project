
var list = [];
var createList = function(){
    $.getJSON( `https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY`, function( data ) { 
         $.each( data.records, function(index, val){
          var id = val.id;
          list.append(id);
          $(".random-view").append(html.join(''));
        });
    });
}

createList();
var num = Math.floor(Math.random() * list.length);

var randomID = list[num];
if (randomID) {
    getDataForId(randomID);
}