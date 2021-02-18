jQuery(document).ready(function ($) {

  // Header fixed and Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio filter
  $("#portfolio-flters li").click(function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#portfolio-wrapper").fadeTo(100, 0);

    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
      $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
      $("#portfolio-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // custom code









  // the modal1 starts here 11111111111111111111111111111111111111111111111111111111111111111111111111111
    // Get the modal
    var modal1 = document.getElementById("myModal1");
    // Get the button that opens the modal
    var btn1 = document.getElementById("myBtn1");
    // Get the <span> element that closes the modal
    var span1 = document.getElementById("close1");
    // When the user clicks on the button, open the modal
    btn1.onclick = function() {
      modal1.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
      modal1.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal1) {
        modal1.style.display = "none";
      }
    }
  // the modal1 ends here 11111111111111111111111111111111111111111111111111111111111111111111111111111
  // the modal2 starts here 222222222222222222222222222222222222222222222222222222222222222222222222222
    // Get the modal
    var modal21 = document.getElementById("myModal21");
    // Get the button that opens the modal
    var btn21 = document.getElementById("myBtn21");
    // Get the <span> element that closes the modal
    var span21 = document.getElementById("close21");
    // When the user clicks on the button, open the modal
    btn21.onclick = function() {
      modal21.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span21.onclick = function() {
      modal21.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal21) {
        modal21.style.display = "none";
      }
    }
    var modal22 = document.getElementById("myModal22");
    // Get the button that opens the modal
    var btn22 = document.getElementById("myBtn22");
    // Get the <span> element that closes the modal
    var span22 = document.getElementById("close22");
    // When the user clicks on the button, open the modal
    btn22.onclick = function() {
      modal22.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span22.onclick = function() {
      modal22.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal22) {
        modal22.style.display = "none";
      }
    }
  // the modal2 ends here 22222222222222222222222222222222222222222222222222222222222222222222222222222
  // the modal3 starts here 3333333333333333333333333333333333333333333333333333333333333333333333333
    // Get the modal
    var modal31 = document.getElementById("myModal31");
    // Get the button that opens the modal
    var btn31 = document.getElementById("myBtn31");
    // Get the <span> element that closes the modal
    var span31 = document.getElementById("close31");
    // When the user clicks on the button, open the modal
    btn31.onclick = function() {
      modal31.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span31.onclick = function() {
      modal31.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal31) {
        modal31.style.display = "none";
      }
    }

    var modal32 = document.getElementById("myModal32");
    // Get the button that opens the modal
    var btn32 = document.getElementById("myBtn32");
    // Get the <span> element that closes the modal
    var span32 = document.getElementById("close32");
    // When the user clicks on the button, open the modal
    btn32.onclick = function() {
      modal32.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span32.onclick = function() {
      modal32.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal32) {
        modal32.style.display = "none";
      }
    }

    var modal33 = document.getElementById("myModal33");
    // Get the button that opens the modal
    var btn33 = document.getElementById("myBtn33");
    // Get the <span> element that closes the modal
    var span33 = document.getElementById("close33");
    // When the user clicks on the button, open the modal
    btn33.onclick = function() {
      modal33.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span33.onclick = function() {
      modal33.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal33) {
        modal33.style.display = "none";
      }
    }
  // the modal3 ends here 333333333333333333333333333333333333333333333333333333333333333333333333
  // the modal4 starts here 4444444444444444444444444444444444444444444444444444444444444444444
    // Get the modal
    var modal41 = document.getElementById("myModal41");
    // Get the button that opens the modal
    var btn41 = document.getElementById("myBtn41");
    // Get the <span> element that closes the modal
    var span41 = document.getElementById("close41");
    // When the user clicks on the button, open the modal
    btn41.onclick = function() {
      modal41.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span41.onclick = function() {
      modal41.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal41) {
        modal41.style.display = "none";
      }
    }



    var modal42 = document.getElementById("myModal42");
    // Get the button that opens the modal
    var btn42 = document.getElementById("myBtn42");
    // Get the <span> element that closes the modal
    var span42 = document.getElementById("close42");
    // When the user clicks on the button, open the modal
    btn42.onclick = function() {
      modal42.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span42.onclick = function() {
      modal42.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal42) {
        modal42.style.display = "none";
      }
    }



    var modal43 = document.getElementById("myModal43");
    // Get the button that opens the modal
    var btn43 = document.getElementById("myBtn43");
    // Get the <span> element that closes the modal
    var span43 = document.getElementById("close43");
    // When the user clicks on the button, open the modal
    btn43.onclick = function() {
      modal43.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span43.onclick = function() {
      modal43.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal43) {
        modal43.style.display = "none";
      }
    }



    var modal44 = document.getElementById("myModal44");
    // Get the button that opens the modal
    var btn44 = document.getElementById("myBtn44");
    // Get the <span> element that closes the modal
    var span44 = document.getElementById("close44");
    // When the user clicks on the button, open the modal
    btn44.onclick = function() {
      modal44.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span44.onclick = function() {
      modal44.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal44) {
        modal44.style.display = "none";
      }
    }



    var modal45 = document.getElementById("myModal45");
    // Get the button that opens the modal
    var btn45 = document.getElementById("myBtn45");
    // Get the <span> element that closes the modal
    var span45 = document.getElementById("close45");
    // When the user clicks on the button, open the modal
    btn45.onclick = function() {
      modal45.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span45.onclick = function() {
      modal45.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal45) {
        modal45.style.display = "none";
      }
    }




  // the modal4 ends here 444444444444444444444444444444444444444444444444444444444444444444444444444
  // the modal5 starts here 55555555555555555555555555555555555555555555555555555555555555555555555555
    // Get the modal
    var modal5 = document.getElementById("myModal5");
    // Get the button that opens the modal
    var btn5 = document.getElementById("myBtn5");
    // Get the <span> element that closes the modal
    var span5 = document.getElementById("close5");
    // When the user clicks on the button, open the modal
    btn5.onclick = function() {
      modal5.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span5.onclick = function() {
      modal5.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal5) {
        modal5.style.display = "none";
      }
    }
  // the modal5 ends here 555555555555555555555555555555555555555555555555555555555555555555555555555
  // the modal6 starts here 66666666666666666666666666666666666666666666666666666666666666666666666666
    // Get the modal
    var modal6 = document.getElementById("myModal6");
    // Get the button that opens the modal
    var btn6 = document.getElementById("myBtn6");
    // Get the <span> element that closes the modal
    var span6 = document.getElementById("close6");
    // When the user clicks on the button, open the modal
    btn6.onclick = function() {
      modal6.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span6.onclick = function() {
      modal6.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal6) {
        modal6.style.display = "none";
      }
    }
  // the modal6 ends here 666666666666666666666666666666666666666666666666666666666666666666666666666












});
