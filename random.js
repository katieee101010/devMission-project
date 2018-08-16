


  var randomView = function(id, TypeOfFood, name, pictureUrl, district, address, link){
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