//this url is from airtable the Authentification section
var airtable_list_url='https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY';
//this is where we get the JSON data from Airtable
$.getJSON( airtable_list_url, function( data ) {
    var items = [];
    $.each( data.records, function( key, val ) {
      console.log(val.fields)
      items.push(`<h2>${val.fields['type of food']}</h2>`);
    });
    $(".list-view").append(items.join(''));
  });

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${type of food}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>