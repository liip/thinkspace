$(function() {

  /**
   * Toggle nav
   */
  function toggleNav() {
    var $hamburgerBtn = $('#toggleNav');

    // Do not alter the navigation on desktop
    if ($hamburgerBtn.is(':hidden')) return;

    $hamburgerBtn.find('.icon').toggleClass('icon-burger icon-close');
    $('.fixed-nav__collapse').slideToggle();
  }

  $(document).on('click', '#toggleNav', toggleNav);


  /**
   * smooth scroll to anchor & active nav
   */
  var animation;

  $(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();

    var $target = $(e.currentTarget),
        hash = $target.attr('href'),
        $container = $(hash);

    if ($target.closest('.main-nav').length) {
      toggleNav();
    }

    if (animation) {
      animation.stop();
    }

    animation = $('html, body').animate({
      scrollTop: $container.offset().top - 74
    }, 1000);
  });


  /**
   * sending contact form throught Formspree
   */
  $('form[name="contact"]').on('submit', function(e) {
    e.preventDefault();

    // hide notice message
    $('.contact__message').hide();

    var name = $('#name').val(),
        corporate_name = $('#corporate_name').val(),
        email = $('#email').val(),
        phone = $('#phone').val(),
        message = $('#message').val();

    $.ajax({
      url: '//forsdfgmspree.io/' + APP.contact_email,
      method: 'POST',
      data: {
        name: name,
        corporate_name: corporate_name,
        phone: phone,
        email: email,
        message: message
      },
      dataType: 'json',
      success: function() {
        $('.contact__message.success').show();
        $('form[name="contact"]').fadeOut(500);
      },
      error: function() {
        $('.contact__message.error').show();
        $(document).scrollTop( $('.contact__message').offset().top - 100);
      }
    });
  });


  /**
   * Google Map
   */
  var marker;

  function initMaps() {
    var maps = document.querySelectorAll('.map');

    for (var i=0; i<maps.length; i++) {
      var el = maps[i],
          pos = {
            lat: parseFloat(el.dataset.lat),
            lng: parseFloat(el.dataset.lng)
          };

      el.map = new google.maps.Map(el, {
        zoom: 16,
        scrollwheel: false,
        disableDefaultUI: true,
        center: pos,
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
      });

      el.marker = new google.maps.Marker({
        map: el.map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: pos
      });
    }
  }

  google.maps.event.addDomListener(window, 'load', initMaps);

});
