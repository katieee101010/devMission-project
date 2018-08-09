// this url is from airtable the Authentification section
// var airtable_list_url='https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY';
// this is where we get the JSON data from Airtable

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

if (TypeOfFood == "Greek"){
  coverPic = <a href="http://www.toloukoumi.com/images/easyblog_articles/19/to-loukoumi-traditional-greek-restaurant-astoria-greek-food-cuisine.jpg"></a>
}

else if( TypeOfFood == "Japanese" ){
  coverPic = <a href="https://cdn.foodadvisor.com.sg/uploads/images/image_default_95a69dae181af6.jpg"></a>
}

else if( TypeOfFood == "Mexican" ){
  coverPic = <a href="https://primosmex.com/wp-content/uploads/2016/09/PMX-Food-Collage-1024x768.jpg"></a>
}

else if( TypeOfFood == "Chinese" ){
  coverPic = <a href="https://alacartedelivery.com/wp-content/uploads/2017/06/taekaway-chinese-food-header-dark.jpg"></a>
}

else if( TypeOfFood == "Korean" ){
  coverPic = <a href="http://woorinara.sg/wp-content/uploads/2016/11/Woorinara-Korean-Restaurant-Bibimbap.jpg"></a>
}

else if( TypeOfFood == "Indian" ){
  coverPic = <a href="http://bigapplecurry.files.wordpress.com/2012/11/istock_000019639558_medium.jpg"></a>
}

else if( TypeOfFood == "American" ){
  coverPic = <a href="https://www.eatatfrontstreet.net/ressources/images/182106c0fef0.jpg"></a>
}

else if( TypeOfFood == "Italian" ){
  coverPic = <a href="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/8/7/1/FN_Italian-Favorites-Opener_s4x3.jpg.rend.hgtvcom.966.725.suffix/1438990067345.jpeg"></a>
}

else if( TypeOfFood == "Thai" ){
  coverPic = <a href="https://assets.bonappetit.com/photos/57afb7eaf1c801a1038bd380/16:9/w_1000,c_limit/pad-thai-940.jpg"></a>
}

else if( TypeOfFood == "Pizza"){
  coverPic = <a href="https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/tbagzeanc4qhrnlanzgi.jpg"></a>
}

else if( TypeOfFood == "Vietnamese" ){
  coverPic = <a href="https://globetrottr.org/wp-content/uploads/2016/06/vietnamfood_1377074024-500x330.jpg"></a>
}

else if( TypeOfFood == "Breakfast/ Brunch" ){
  coverPic = <a href="http://hedonistshedonist.com/wp-content/uploads/2017/11/southern-brunch-product.jpg"></a>
}

else if( TypeOfFood == "Ice Cream" ){
  coverPic = <a href="https://lifehacker.rs/wp-content/uploads/2017/02/sladoled-1080x601.jpgS"></a>
}

var getDataForList = function(){
$.getJSON( `https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY`, function( data ) {
    var html = [];
    html.push(`<div class="row">`);
    $.each( data.records, function(index, val){
      var id = val.id;
      var fields = val.fields;
      var TypeOfFood = fields["type of food"];
      var pictureUrl = fields["picture"] ? fields["picture"][0].url : '';
      var itemHTML = listView(id, TypeOfFood, pictureUrl);
      html.push(itemHTML);
    });
    html.push(`</div>`);
    $(".list-view").append(html.join(''));
  });
}

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
        ${link ? `<a href="${link}">${link}</a>`: ``}
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
        var pictureUrl = fields["picture"] ? fields["picture"][0].url : '';
        var district = fields["district"];
        var address = fields["address"];
        var link = fields["link to yelp"];
  
        var itemHTML = detailView(id, TypeOfFood, name, pictureUrl, district, address, link);
        html.push(itemHTML);
      html.push(`</div>`);
      $(".detail-view").append(html.join(""));
    });
  }
  var getParameterByName = function(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  var id = getParameterByName("id");

 if (id) {
   getDataForId(id);
  } else {
   getDataForList();
  }