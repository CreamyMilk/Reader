// Zoom icon

$('.zoom-icon').bind('mouseover', function() { 
 	
    if ($(this).hasClass('zoom-icon-in'))
        $(this).addClass('zoom-icon-in-hover');

    if ($(this).hasClass('zoom-icon-out'))
        $(this).addClass('zoom-icon-out-hover');

}).bind('mouseout', function() { 
    
     if ($(this).hasClass('zoom-icon-in'))
        $(this).removeClass('zoom-icon-in-hover');
    
    if ($(this).hasClass('zoom-icon-out'))
        $(this).removeClass('zoom-icon-out-hover');

}).bind('click', function() {

    if ($(this).hasClass('zoom-icon-in'))
        $('.magazine-viewport').zoom('zoomIn');
    else if ($(this).hasClass('zoom-icon-out'))	
       $('.magazine-viewport').zoom('zoomOut');

});

$('#canvas').hide();


// Load the HTML4 version if there's not CSS transform

yepnope({
   test : Modernizr.csstransforms,
   yep: ['./lib/turn.js'],
   nope: ['./lib/turn.html4.min.js'],
   both: ['./lib/zoom.min.js', 'js/magazine.js', 'css/magazine.css'],
   complete: loadApp
});
