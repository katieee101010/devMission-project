$("#submit-location").on('submit', function(e){
    e.preventDefault();
    var data = {};
    data.fields = {
      'name': $(this).find('#name').val(),
      'foods': $(this).find('#foods').val(),
      'address': $(this).find('#address').val(),
      'district': $(this).find('#district').val(),
      'yelp': $(this).find('#yelp').val(),
      'picture': [
        {
          'url': $(this).find('#picture').val()
        }
      ],
      'cover': [
        {
          'url': $(this).find('#cover').val()
        }
      ],
    };
    $.post(`https://api.airtable.com/v0/appYyE1ErirB57dsj/Table%201?api_key=keyppYGfrsTMTEfnY`,
      data, function () {
        $("#submit-location").html(`<h2>Thanks for submitting!</h2>`);
      }
    );
  });