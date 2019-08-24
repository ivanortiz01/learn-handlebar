$("#boton").click(function() {

   showLoading();



   search()

     .then(function() {

         drawResults();

     }).then(function() {

        hideLoading();

     }).catch(function(error) {

        showError();

     });

});