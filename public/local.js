$( document ).ready(function(){

    // materialize
    $('select').material_select();
    $('.carousel').carousel();
    $('.parallax').parallax();

    // captures form data
    $( "#submit-survey" ).click(function() {
      event.preventDefault();
      var newCat = {
        name: $('#name').val().trim(),
        profilePic: $('#image-link').val().trim(),
        scores: [
          $('#q1').val(),
          $('#q2').val(),
          $('#q3').val(),
          $('#q4').val(),
          $('#q5').val(),
          $('#q6').val(),
          $('#q7').val(),
          $('#q8').val(),
          $('#q9').val(),
          $('#q10').val(),
        ]
    };

      var currentURL = window.location.origin;

        //AJAX posts the cats to friends API.
        $.post(currentURL + "/api/friends", newCat, function(data) {
          //Grab the result from the AJAX post so that the best match's name and photo are displayed.
          $("#cat-match").text(data.name);
          $("#cat-img").attr("src", data.profilePic);

        });
        // materialize modal
        $('.modal').modal();


      console.log(newCat)

  })
      
});

  