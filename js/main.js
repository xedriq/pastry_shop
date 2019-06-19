$(document).ready(function() {


  // console.log($this.hash);

  var scrollLink = $('.scroll');

  scrollLink.click(function(event) {
    event.preventDefault();
    $('body,html').stop().animate({
      scrollTop: $(this.hash).offset().top
    }, 1000)
  });

  $(window).scroll(function(){
    var currScrollPos = $(window).scrollTop();
    if (currScrollPos > 1){
      $('.nav-bg').removeClass('show');
    }else{
      $('.nav-bg').addClass('show');
    }

    //shows active scrollLink
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 80;
      // console.log($(this).parent()[0])
      if (currScrollPos < 7){
        $(this).parents('li').siblings().removeClass('active-menu')
      } else if(sectionOffset <= currScrollPos){
        $(this).parents('li').addClass('active-menu');
        $(this).parents('li').siblings().removeClass('active-menu');
      }

    });


  });

  $('.menu-frame img').hover(function(){
    $(this).toggleClass('zoom');
  });

  function showMenu(id){
    //shows menu depending on the menu item selected
  $('.' + id)
      // .modal('setting', 'transition', "horizontal flip")
      // .modal({centered: false})
      .modal('show')
    ;
  }

  $('.menu-frame img').click(function(){
    var thisId = $(this).attr('id');
    showMenu(thisId);
  });

  $('#menu').click(function(event) {
    event.preventDefault();
    $('#mobile-menu').toggleClass('hide-mobile');
  });

  $('#exit').click(function(event) {
    event.preventDefault();
    $('#mobile-menu').addClass('hide-mobile', 400);
  });

  // $('.send-button').click(function() {
  //   $('#ty-contact')
  //     .modal('show')
  //   ;
  // });
  $('#ty-contact')
    .modal('attach events', '#ty-contact-btn', 'show')
  ;

  $('.button').hover(function() {
    $(this).toggleClass('hoverButton');
  });

  $('.reference').click(function(event){
    event.preventDefault();
    $('.reference')
    .modal('show')
    ;
  });

  $('#bwdi').click(function(event){
    event.preventDefault();
    window.open("https://whatpixel.com/bakery-web-design-inspiration/");
  });

  $('#bb').click(function(event){
    event.preventDefault();
    window.open("http://www.beaucoupbakery.com/");
  });

  $('#hoe').click(function(event){
    event.preventDefault();
    window.open("http://www.havenonearthbakery.com/");
  });

});
