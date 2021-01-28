(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); 
})(jQuery); 

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible.expandable');
  var instances = M.Collapsible.init(elems, options);
});

