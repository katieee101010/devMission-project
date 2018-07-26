//this url is from airtable the Authentification section
var airtable_list_url='https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY';
//this is where we get the JSON data from Airtable
//$.getJSON( airtable_list_url, function( data ) {
  //  var items = [];
    //$.each( data.records, function( key, val ) {
      //console.log(val.fields)
      //items.push(`<h2>${val.fields['type of food']}</h2>`);
    //});
    //$(".list-view").append(items.join(''));
  //});
  var cardTemplate = function(TypeOfFood, picture) {
    return `
      <div class="card col-sm-4">
        <img src="${picture}" class="card-img-top"alt="Card image cap">
          <h5 class="card-title">${TypeOfFood}</h5>
          <a href="#" class="btn btn-primary">See Details</a>
        </div>
      </div>`;
    }
    
    // This is where we get the JSON data from Airtable!
    $.getJSON( airtable_list_url, function( data ) {
      var items = [];
      $.each( data.records, function( key, val ) {
        var TypeOfFood = val.fields['type of food'];
        var picture = val.fields['picture'][0] ? val.fields['Pictures'][0].url : null;
        var html = cardTemplate(TypeOfFood, picture);
        items.push(html);
      });
      $(".list-view").append(items.join(''));
    });

  