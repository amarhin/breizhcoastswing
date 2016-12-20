// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/breizhcoastswing@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		success: function(data) {
      $('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #success').show();
		},
		error: function(err) {
      ('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #error').show();
		}
	});
});

// Contact form validation
$.validate({
  modules : 'html5, toggleDisabled'
});
