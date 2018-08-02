//this url is from airtable the Authentification section
//var airtable_list_url='https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY';
//this is where we get the JSON data from Airtable
$.getJSON( `https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY`, function( data ) {
    var html = [];
    html.push(`<div class="row">`);
    $.each( data.records, function(index, val){
      var id = val.id;
      var fields = val.fields;
      var TypeOfFood = fields["type of food"];
      var pictureUrl = fields["picture"] ? fields["Pictures"][0].url : '';
      var itemHTML = listView(id, TypeOfFood, pictureUrl);
      html.push(itemHTML);
    });
    html.push(`</div>`);
    $(".list-view").append(items.join(''));
  });

  var detailView = function(id, TypeOfFood, pictureUrl){
    return `<div class="col-sm-12">
    <div class="card mb-4 box-shadow">
    <img class="card-img-top" src="${pictureUrl}">
    <div class="card-body">
    <h2>${TypeOfFood}</h2>
    <p class="card-text">${name}</p>
        <p class="card-text">${district}</p>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted">${address}</small>
        </div>
        ${website ? `<a href="${website}">${website}</a>`: ``}
        <hr />
      </div>
    </div>
  </div>`;
  }

  var getDataForId = function(id) {
    $.getJSON( `https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY`, function( record ) {
      var html = [];
      html.push(`<div class="row">`);
        var id = record.id;
        var fields = record.fields;
        var TypeOfFood = fields["type of food"];
        var name = fields["name"];
        var pictureUrl = fields["picture"] ? fields["Pictures"][0].url : '';
        var district = fields["district"];
        var address = fields["address"];
        var link = fields["link to yelp"];
  
        var itemHTML = detailView(id, TypeOfFood, name, pictureUrl, district, address, link);
        html.push(itemHTML);
      html.push(`</div>`);
      $(".detail-view").append(html.join(""));
    });
  }

  var id = getParameterByName("id");

  if (id) {
    getDataForId(id);
  } else {
    getDataForList();
  }