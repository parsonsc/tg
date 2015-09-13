// Custom trial fonts. Please ignore.

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

  $("#accordian h3").click(function(){    
    $("#accordian ul ul").slideUp();    
    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown();
    }
  });

  $(".basket").click(function(){
    $(".overlay").show();    
  });
  $(".close").click(function(){
    $(".overlay").hide();    
  });
});








