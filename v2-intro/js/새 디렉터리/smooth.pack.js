$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
 
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
$('html,body').animate({
  scrollTop: target.offset().top
}, 500);
return false;
  }
}
  });
});

$("body a").on("click", function() {
   fromTop = 100;  //fixed된 header 높이값
   href = $(this).attr("href");
 
   // If href is set, points to an Anchor, and the Anchor is not simply #
   if(href && href.indexOf("#") != -1 && href.indexOf("#") != href.length - 1) {
  href = href.substring(href.indexOf("#"));
  if($(href).length > 0) { // If element exists
    $('html, body').animate({scrollTop: $(href).offset().top - fromTop}, 0);
    return false;
  }
   }
 });