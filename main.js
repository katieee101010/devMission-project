// this url is from airtable the Authentification section
// var airtable_list_url='https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY';
// this is where we get the JSON data from Airtable
var getParameterByName = function(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var api_key = 'keyppYGfrsTMTEfnY';

var listView = function(id, TypeOfFood, coverPic){
  return `<div class="col-sm-3">
  <div class="card mb-4 box-shadow">
    <a href="index.html?id=${id}"><img class="card-img-top" src="${coverPic}"></a>
    <div class="card-body">
      <h4><a href="index.html?id=${id}">${TypeOfFood}</a></h4>
      <div class="d-flex justify-content-between align-items-center">
      </div>
    </div>
  </div>
</div>`;
}

var getDataForList = function(){
$.getJSON( `https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY`, function( data ) {
    var html = [];
    html.push(`<div class="row">`);
    $.each( data.records, function(index, val){
      var id = val.id;
      var fields = val.fields;
      var TypeOfFood = fields["foods"];
      var pictureUrl = fields["picture"] ? fields["picture"][0].url : '';
      var itemHTML = listView(id, TypeOfFood, pictureUrl);
      html.push(itemHTML);
    });
    html.push(`</div>`);
    $(".list-view").append(html.join(''));
  });
}

  var detailView = function(id, TypeOfFood, name, pictureUrl, district, address, link){
    return `<div class="col-sm-12">
   <div class="card mb-4 box-shadow">
   <h2>${TypeOfFood}</h2>
   <img class="card-img-top" src="${pictureUrl}">
   <div class="card-body">
      <h2>${name}</h2>
       <p class="card-text">${district}</p>
       <h5>${address}</h5>
       <div class="d-flex justify-content-between align-items-center">
       </div>
       <p class="card-text">Link to yelp for more information about ${name}: </p>
        ${link ? `<a href="${link}">${link}</a>`: ``}
       <hr />
      </div>
    </div>
   </div>`;
  }

  var getDataForId = function(id) {
    $.getJSON( `https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201/${id}?api_key=keyppYGfrsTMTEfnY`, function( record ) {
      var html = [];
      html.push(`<div class="row">`);
        var id = record.id;
        var fields = record.fields;
        var TypeOfFood = fields["foods"];
        var name = fields["name"];
        var pictureUrl = fields["picture"] ? fields["picture"][0].url : '';
        var district = fields["district"];
        var address = fields["address"];
        var link = fields["yelp"];
  
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