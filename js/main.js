(function() {
  var path = '//easy.myfonts.net/v2/js?sid=230539(font-family=Brandon+Text+Bold)&sid=230543(font-family=Brandon+Text+Light)&sid=230545(font-family=Brandon+Text+Medium)&sid=230546(font-family=Brandon+Text+Regular)&key=nZaFk7k0ei',
      protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
      trial = document.createElement('script');
  trial.type = 'text/javascript';
  trial.async = true;
  trial.src = protocol + path;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(trial);
})();

(function() {
        var path = '//easy.myfonts.net/v2/js?sid=273917(font-family=Snow+Cone+Pro+Line)&sid=273919(font-family=Snow+Cone+Pro+Regular)&sid=273922(font-family=Snow+Cone+Pro+Bold)&key=9m3HlHUuEe',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();
    
    WebFontConfig = {
    google: { families: [ 'Oswald:400,300,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
$(document).ready(function(){

	// ACCORDION
	$('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
        if($(e.target).is('.active')) {
          close_accordion_section();
        }else {
          close_accordion_section();

          // Add active class to section title
          $(this).addClass('active');
          // Open up the hidden content panel
          $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        e.preventDefault();
    });

});