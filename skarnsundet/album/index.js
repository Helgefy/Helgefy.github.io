// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

    // The global jQuery object is passed as a parameter
    yourcode(window.jQuery, window, document);

  }(function($, window, document) {

    // The $ is now locally scoped 

   // Listen for the jQuery ready event on the document
   $(function() {

    // Open the modal
     var $modal = $('.modal1');
     var $navbar = $('.navbar');

     var $img = $('#alBilde');
     var $modalImg = $('#img01');
     var $caption = $('#caption');

     $img.click(function(){
      console.log('das');
      $modal.css('display', 'block');
      $navbar.css('display', 'none');
      $modalImg.attr('src', this.src);
      $caption.text(this.alt);
     });

     var $span = $('.close')
     $span.click(function(){
      $modal.css('display', 'none')
      $navbar.css('display', 'block');
     });

    //DOM code


   });

   // annen kode
  
}));
